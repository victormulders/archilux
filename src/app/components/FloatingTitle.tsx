"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FloatingTitle = ({
  className,
  children,
  subtitle,
}: {
  className?: string;
  children?: React.ReactNode;
  subtitle?: string;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const lg = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className={`${className} relative z-10`} ref={container}>
      {subtitle && (
        <motion.div style={{ y: lg }} className="text-gray-500 font-kalam">
          {subtitle}
        </motion.div>
      )}
      <motion.div className={`${className}`} style={{ y: lg }}>
        {children}
      </motion.div>
    </div>
  );
};

export default FloatingTitle;
