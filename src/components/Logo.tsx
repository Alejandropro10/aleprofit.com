import Image from "next/image";

const ICON_PX = {
  sm: 30,
  md: 38,
  lg: 56,
};

export default function Logo({
  size = "md",
  dark = false,
}: {
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}) {
  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl md:text-5xl",
  };

  return (
    <span className="flex shrink-0 items-center gap-2.5">
      <Image
        src="/logo-lion.png"
        alt="ALEPROFIT"
        width={ICON_PX[size]}
        height={ICON_PX[size]}
        className="shrink-0"
        priority
      />
      <span
        className={`font-display font-semibold tracking-tight ${textSizes[size]} ${
          dark ? "text-ink" : "text-sand"
        }`}
      >
        ALE<span className="sunset-text">PROFIT</span>
      </span>
    </span>
  );
}
