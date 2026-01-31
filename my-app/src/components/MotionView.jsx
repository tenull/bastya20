import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function MotionInView({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.25,
  x = 0,
  y = 16,
  scale = 1,
  ...props
}) {
  return (
    <MotionBox
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </MotionBox>
  );
}
