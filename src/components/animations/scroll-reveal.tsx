"use client";

import { motion, TargetAndTransition } from "framer-motion";

type AnimationDirection =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-x"
  | "flip-y"
  | "bounce";

interface IScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: AnimationDirection;
  once?: boolean;
  className?: string;
}

const variants: Record<AnimationDirection, { initial: TargetAndTransition; animate: TargetAndTransition }> = {
  "fade-up": {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  "fade-down": {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  },
  "fade-left": {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  "fade-right": {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  "zoom-in": {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  "zoom-out": {
    initial: { opacity: 0, scale: 1.2 },
    animate: { opacity: 1, scale: 1 },
  },
  "flip-x": {
    initial: { opacity: 0, rotateX: 90 },
    animate: { opacity: 1, rotateX: 0 },
  },
  "flip-y": {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
  },
  "bounce": {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
  },
};

const easings: Record<AnimationDirection, any> = {
  "fade-up": [0.25, 0.1, 0.25, 1],
  "fade-down": [0.25, 0.1, 0.25, 1],
  "fade-left": [0.25, 0.1, 0.25, 1],
  "fade-right": [0.25, 0.1, 0.25, 1],
  "zoom-in": [0.25, 0.1, 0.25, 1],
  "zoom-out": [0.25, 0.1, 0.25, 1],
  "flip-x": [0.25, 0.1, 0.25, 1],
  "flip-y": [0.25, 0.1, 0.25, 1],
  "bounce": { type: "spring", stiffness: 200, damping: 12 },
};

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  direction = "fade-up",
  once = true,
  className,
}: IScrollRevealProps) {
  const { initial, animate } = variants[direction];
  const easing = easings[direction];

  const transition =
    easing?.type === "spring"
      ? { ...easing, delay }
      : { duration, ease: easing, delay };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: "-100px" }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}