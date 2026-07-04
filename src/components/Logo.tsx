export default function Logo({
  size = "md",
  dark = false,
}: {
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}) {
  const sizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl md:text-5xl",
  };

  return (
    <span
      className={`font-display font-semibold tracking-tight ${sizes[size]} ${
        dark ? "text-ink" : "text-sand"
      }`}
    >
      ALE<span className="sunset-text">PROFIT</span>
    </span>
  );
}
