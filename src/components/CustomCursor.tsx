"use client";
import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────
   Custom cursor — zero React re-renders, everything in RAF.

   States
   ─────
   idle   → ring 36px | arrow ↓/↑ | dot visible
   link   → ring 58px | gold fill | dot hidden
   view   → ring 96px | spinning "EXPLORAR" ring | dot hidden
   text   → ring collapses to thin bar | dot hidden
   drag   → ring squishes | tracks with more lag
   ───────────────────────────────────────────────────────── */
export default function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const textRef  = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.documentElement.classList.add("has-custom-cursor");

    /* ── mutable state, NEVER triggers React ── */
    type S = "idle" | "link" | "view" | "text";

    let tx = -400, ty = -400;   // raw target
    let rx = -400, ry = -400;   // ring current (smooth)
    let pvx = 0,   pvy = 0;     // previous velocity

    // Lerp targets
    let tW = 36, tH = 36, tOp = 0, tDotOp = 1, tArrowOp = 1, tTextOp = 0;
    // Current (lerped)
    let cW = 36, cH = 36, cOp = 0, cDotOp = 0, cArrowOp = 0, cTextOp = 0;

    let rotDeg = 0;
    let state: S = "idle";
    let scrollDir = "down";
    let lastScrollY = window.scrollY;
    let visible = false;

    /* ── CSS color transitions are handled via classList to avoid
          fighting with RAF. We add a class to the ring and let
          CSS transitions do the color interpolation. ── */
    const RING_CLASSES: Record<S, string> = {
      idle: "cr-idle",
      link: "cr-link",
      view: "cr-view",
      text: "cr-text",
    };

    const enter = (next: S) => {
      if (state === next) return;
      const r = ringRef.current;
      if (r) {
        r.classList.remove(RING_CLASSES[state]);
        r.classList.add(RING_CLASSES[next]);
      }
      state = next;

      switch (next) {
        case "link":
          tW = 58;  tH = 58;
          tDotOp = 0; tArrowOp = 0; tTextOp = 0;
          break;
        case "view":
          tW = 96;  tH = 96;
          tDotOp = 0; tArrowOp = 0; tTextOp = 1;
          break;
        case "text":
          tW = 3;   tH = 28;
          tDotOp = 0; tArrowOp = 0; tTextOp = 0;
          break;
        default: // idle
          tW = 36;  tH = 36;
          tDotOp = 1; tArrowOp = 1; tTextOp = 0;
      }
    };

    /* lerp helper */
    const l = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!visible) { rx = tx; ry = ty; visible = true; tOp = 1; }

      const el = document.elementFromPoint(tx, ty) as HTMLElement | null;
      if (!el) return;

      if      (el.closest("[data-cursor='view']"))                               enter("view");
      else if (el.closest("a, button, [role='button'], input, label, textarea")) enter("link");
      else if (el.closest("p, li, blockquote, span:not(.cursor-label)"))         enter("text");
      else                                                                        enter("idle");
    };

    const onScroll = () => {
      const y = window.scrollY;
      if (y !== lastScrollY) {
        scrollDir = y > lastScrollY ? "down" : "up";
        lastScrollY = y;
        if (arrowRef.current && state === "idle") {
          arrowRef.current.style.transform = `rotate(${scrollDir === "up" ? "180deg" : "0deg"})`;
        }
      }
    };

    const onLeave = () => { tOp = 0; };
    const onEnter = () => { tOp = 1; };

    let raf: number;

    const tick = () => {
      /* ── smooth ring position ── */
      const lag = state === "text" ? 0.18 : 0.10;
      rx = l(rx, tx, lag);
      ry = l(ry, ty, lag);

      /* ── velocity ── */
      const vx = rx - pvx;
      const vy = ry - pvy;
      pvx = rx; pvy = ry;
      const speed = Math.sqrt(vx * vx + vy * vy);
      const angle = Math.atan2(vy, vx) * (180 / Math.PI);

      /* ── lerp scalars ── */
      cW      = l(cW,      tW,      0.12);
      cH      = l(cH,      tH,      0.12);
      cOp     = l(cOp,     tOp,     0.12);
      cDotOp  = l(cDotOp,  tDotOp,  0.14);
      cArrowOp= l(cArrowOp,tArrowOp,0.14);
      cTextOp = l(cTextOp, tTextOp, 0.14);

      /* ── VIEW: rotate ring text ── */
      if (state === "view") rotDeg += 0.5;
      else rotDeg = l(rotDeg, 0, 0.07);

      /* ── DOT ── */
      const d = dotRef.current;
      if (d) {
        // Stretch dot in direction of movement
        const stretch = state === "idle" ? 1 + Math.min(speed * 0.08, 1.4) : 1;
        const squish  = stretch > 1 ? 1 / Math.sqrt(stretch) : 1;
        const dotAngle = speed > 0.5 ? angle : 0;

        d.style.left    = tx + "px";
        d.style.top     = ty + "px";
        d.style.opacity = (cOp * cDotOp).toFixed(3);
        d.style.transform = `translate(-50%,-50%) rotate(${dotAngle.toFixed(1)}deg) scaleX(${stretch.toFixed(3)}) scaleY(${squish.toFixed(3)})`;
      }

      /* ── RING ── */
      const r = ringRef.current;
      if (r) {
        r.style.left    = rx + "px";
        r.style.top     = ry + "px";
        r.style.width   = cW.toFixed(2) + "px";
        r.style.height  = cH.toFixed(2) + "px";
        r.style.opacity = cOp.toFixed(3);
        r.style.borderRadius = state === "text" ? "2px" : "50%";

        /* velocity squish — only when not text/view */
        let tf = `translate(-50%,-50%)`;
        if (state !== "text" && speed > 0.5) {
          const s = 1 + Math.min(speed * 0.035, 0.55);
          const q = 1 / Math.sqrt(s);
          tf = `translate(-50%,-50%) rotate(${angle.toFixed(1)}deg) scaleX(${s.toFixed(3)}) scaleY(${q.toFixed(3)})`;
        } else if (state === "view") {
          tf = `translate(-50%,-50%) rotate(${rotDeg.toFixed(2)}deg)`;
        }
        r.style.transform = tf;
      }

      /* ── ARROW label (idle) ── */
      const ar = arrowRef.current;
      if (ar) {
        ar.style.opacity   = cArrowOp.toFixed(3);
        ar.style.transform = `rotate(${scrollDir === "up" ? "180deg" : "0deg"}) scale(${(0.6 + cArrowOp * 0.4).toFixed(3)})`;
      }

      /* ── TEXT label (view) ── */
      const tl = textRef.current;
      if (tl) {
        tl.style.opacity = cTextOp.toFixed(3);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      {/* DOT — always exact position, inverts colors via mix-blend-mode */}
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position:        "fixed",
          width:           6,
          height:          6,
          borderRadius:    "50%",
          backgroundColor: "#e8b04b",
          pointerEvents:   "none",
          zIndex:          999999,
          mixBlendMode:    "exclusion",
          willChange:      "left,top,transform,opacity",
        }}
      />

      {/* RING — lags behind, physics-based */}
      <div
        ref={ringRef}
        aria-hidden
        className="cr-idle"
        style={{
          position:      "fixed",
          width:         36,
          height:        36,
          borderRadius:  "50%",
          pointerEvents: "none",
          zIndex:        999998,
          display:       "flex",
          alignItems:    "center",
          justifyContent:"center",
          willChange:    "left,top,width,height,transform,opacity",
        }}
      >
        {/* Scroll direction arrow */}
        <span
          ref={arrowRef}
          className="cursor-label"
          aria-hidden
          style={{
            position:   "absolute",
            fontSize:   10,
            fontWeight: 700,
            color:      "rgba(255,255,255,0.75)",
            userSelect: "none",
            lineHeight: 1,
            transition: "transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
            pointerEvents: "none",
          }}
        >
          ↓
        </span>

        {/* "EXPLORAR" rotating label — visible only in view state */}
        <span
          ref={textRef}
          className="cursor-label"
          aria-hidden
          style={{
            position:      "absolute",
            fontSize:       8,
            fontWeight:     800,
            letterSpacing:  "0.22em",
            textTransform:  "uppercase",
            color:          "rgba(232,176,75,0.9)",
            userSelect:     "none",
            lineHeight:     1,
            pointerEvents:  "none",
            whiteSpace:     "nowrap",
          }}
        >
          EXPLORAR
        </span>
      </div>
    </>
  );
}
