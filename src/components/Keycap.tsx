import React from "react";
import { ArrowUpRight } from "lucide-react";

interface KeycapProps {
  label?: string | string[];
  icon?: "arrow" | "flower" | "plus" | "grid" | null;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function Keycap({
  label,
  icon,
  size = "md",
  className = "",
  onClick,
  isActive = false
}: KeycapProps) {
  const [isPressed, setIsPressed] = React.useState(false);

  // Size configurations
  const sizeClasses = {
    sm: "w-16 h-14 text-[10px]",
    md: "w-28 h-20 text-[11px]",
    lg: "w-36 h-22 text-xs md:text-sm",
    xl: "w-52 h-26 md:w-64 md:h-30 text-sm md:text-lg"
  };

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <button
      id={`keycap-${typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-') : 'icon'}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onClick={onClick}
      className={`
        relative select-none outline-none cursor-pointer group transition-transform duration-150 ease-out
        ${sizeClasses[size]}
        ${className}
      `}
      style={{
        perspective: "600px"
      }}
    >
      {/* Key Base and Shadow */}
      <div
        className={`
          absolute inset-0 rounded-lg bg-[#041211] transition-all duration-150
          ${isPressed ? "translate-y-[2px]" : "translate-y-[6px]"}
          ${isActive ? "shadow-[0_0_15px_rgba(185,216,206,0.25)]" : "shadow-[0_8px_16px_rgba(0,0,0,0.65)]"}
        `}
      />

      {/* Key Beveled Skirt / Body */}
      <div
        className={`
          absolute inset-x-0 bottom-0 rounded-lg bg-gradient-to-t from-[#0A2C28] via-[#0E3530] to-[#123B35]
          transition-all duration-150 border-b-2 border-black/40
          ${isPressed ? "h-[calc(100%-2px)] translate-y-[2px]" : "h-[calc(100%-6px)]"}
          ${isActive ? "ring-1 ring-[#7CA99B]/30" : ""}
        `}
      >
        {/* Top Surface Inner Face */}
        <div
          className={`
            absolute inset-[3px] rounded-md bg-gradient-to-br from-[#123B35] via-[#0D2A26] to-[#0A2522]
            flex flex-col items-center justify-center text-center p-2
            border-t border-l border-white/10 border-r border-b border-black/50
            transition-all duration-150
            ${isPressed ? "shadow-inner bg-[#0D2623]" : ""}
          `}
        >
          {/* Mint Edge Highlight Glow (Subtle rim lighting) */}
          <div className="absolute inset-[1px] rounded-[5px] border border-[#B9D8CE]/5 opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity duration-300" />

          {/* Key Content */}
          <div className="relative flex flex-col items-center justify-center h-full w-full font-mono text-[#B8C6C1] group-hover:text-[#F4F5F1] transition-colors duration-200">
            {/* Legend Text */}
            {label && (
              <div
                className={`
                  tracking-wider uppercase font-semibold
                  ${size === "xl" ? "font-serif text-[#F4F5F1] normal-case tracking-normal md:text-xl font-medium leading-tight" : "font-mono font-bold leading-relaxed"}
                  ${isActive ? "text-[#B9D8CE]" : ""}
                `}
              >
                {Array.isArray(label) ? (
                  label.map((line, idx) => (
                    <div key={idx} className={idx === 1 && size === "xl" ? "mt-0.5 text-[#B8C6C1]" : ""}>
                      {line}
                    </div>
                  ))
                ) : (
                  <div>{label}</div>
                )}
              </div>
            )}

            {/* Icon Content */}
            {icon === "arrow" && (
              <ArrowUpRight className="w-5 h-5 text-[#7CA99B] group-hover:text-[#B9D8CE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            )}

            {icon === "flower" && (
              <div className="relative w-5 h-5 flex items-center justify-center">
                {/* 4-point Flower custom drawn with elegant rounded leaves */}
                <div className="absolute w-2 h-2 bg-[#B9D8CE] rounded-full -translate-y-1.5" />
                <div className="absolute w-2 h-2 bg-[#B9D8CE] rounded-full translate-y-1.5" />
                <div className="absolute w-2 h-2 bg-[#B9D8CE] rounded-full -translate-x-1.5" />
                <div className="absolute w-2 h-2 bg-[#B9D8CE] rounded-full translate-x-1.5" />
                <div className="absolute w-1.5 h-1.5 bg-[#123B35] rounded-full" />
              </div>
            )}

            {icon === "plus" && (
              <span className="text-sm text-[#7CA99B] font-light font-sans">+</span>
            )}

            {icon === "grid" && (
              <div className="grid grid-cols-2 gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 rounded-sm bg-[#7CA99B]" />
                <div className="w-1.5 h-1.5 rounded-sm bg-[#7CA99B]" />
                <div className="w-1.5 h-1.5 rounded-sm bg-[#7CA99B]" />
                <div className="w-1.5 h-1.5 rounded-sm bg-[#7CA99B]" />
              </div>
            )}

            {/* Tiny decoration details for xl/lg keys */}
            {size === "xl" && (
              <div className="absolute bottom-1 right-2 text-[6px] text-white/20 tracking-widest font-mono">
                COLLECTIVE.SYS
              </div>
            )}
            {size === "lg" && label === "AI SEARCH" && (
              <div className="absolute top-1 left-2 text-[5px] text-[#7CA99B]/40 font-mono">
                MODEL.3.5
              </div>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
