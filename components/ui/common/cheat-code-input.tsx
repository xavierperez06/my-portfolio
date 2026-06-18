"use client";

import { useTheme } from "next-themes";
import { Input } from "@/components/ui/8bit/input";
import { useState } from "react";

interface CheatCodeInputProps {
  placeholder: string;
  message?: string;
}

const CheatCodeInput = ({ placeholder, message }: CheatCodeInputProps) => {
  const { setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCheatCode = (code: string) => {
    if (code.toLowerCase() === "iddqd") {
      setTheme("doom");
      triggerAnimation();
    }
  };

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <div className="relative w-full max-w-full">
      {isAnimating && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-yellow-500/20 mix-blend-overlay animate-retro-flash">
          <h1
            className="text-3xl sm:text-5xl md:text-7xl font-mono font-bold text-yellow-400 uppercase tracking-widest animate-retro-bounce text-center px-4"
            style={{
              textShadow:
                "4px 4px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000, 2px 2px 0px #000",
            }}
          >
            {message || "God Mode"}
          </h1>
        </div>
      )}

      <div className="relative flex items-center w-full max-w-full">
        <span className="absolute left-3 text-muted-foreground font-mono">
          &gt;
        </span>

        <Input
          placeholder={placeholder}
          className={`w-full min-w-0 pl-8 transition-colors ${
            isAnimating
              ? "animate-retro-shake border-yellow-400 bg-yellow-900/20 text-yellow-400"
              : ""
          }`}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCheatCode(e.currentTarget.value);
              e.currentTarget.value = "";
            }
          }}
        />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes retro-shake {
          0%, 100% { transform: translate(0, 0); }
          10%, 30%, 50%, 70%, 90% { transform: translate(-4px, 2px); }
          20%, 40%, 60%, 80% { transform: translate(4px, -2px); }
        }
        @keyframes retro-flash {
          0% { opacity: 0; background-color: rgba(255, 255, 255, 0.8); }
          10% { opacity: 1; background-color: rgba(234, 179, 8, 0.3); }
          100% { opacity: 0; }
        }
        @keyframes retro-bounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        .animate-retro-shake {
          animation: retro-shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
        }
        .animate-retro-flash {
          animation: retro-flash 2s ease-out forwards;
        }
        .animate-retro-bounce {
          animation: retro-bounce 0.5s ease-in-out infinite;
        }
      `,
        }}
      />
    </div>
  );
};

export default CheatCodeInput;
