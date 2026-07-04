"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

type MotionConfigProviderProps = {
  children: ReactNode;
};

export function MotionConfigProvider({ children }: MotionConfigProviderProps) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.45 }}>
      {children}
    </MotionConfig>
  );
}
