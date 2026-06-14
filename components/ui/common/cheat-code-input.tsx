"use client";

import { useTheme } from "next-themes";
import { Input } from "@/components/ui/8bit/input";

interface CheatCodeInputProps {
  placeholder: string;
}

export function CheatCodeInput({ placeholder }: CheatCodeInputProps) {
  const { setTheme } = useTheme();

  const handleCheatCode = (code: string) => {
    if (code.toLowerCase() === "iddqd") {
      setTheme("doom");
    }
  };

  return (
    <Input
      placeholder={placeholder}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleCheatCode(e.currentTarget.value);
        }
      }}
    />
  );
}
