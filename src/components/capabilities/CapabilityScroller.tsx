"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CapabilityCard from "./CapabilityCard";
import type { Capability } from "./shared";

// Card layout is expressed entirely in vw so the horizontal travel distance
// can be computed without measuring the DOM (matches Miro's own pinned
// horizontal-scroll pattern: a tall wrapper + a `position: sticky` viewport
// clipping an oversized row, translated via transform as you scroll).
const CARD_VW = 40;
const GAP_VW = 3;
const PAD_VW = 6;
const VH_PER_CARD = 55;

export default function CapabilityScroller({ capabilities }: { capabilities: Capability[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const totalRowVw = PAD_VW * 2 + capabilities.length * CARD_VW + (capabilities.length - 1) * GAP_VW;
  const travelVw = Math.max(totalRowVw - 100, 0);
  const x = useTransform(scrollYProgress, [0, 1], [`0vw`, `-${travelVw}vw`]);

  return (
    <div
      ref={wrapperRef}
      className="relative hidden lg:block"
      style={{ height: `${VH_PER_CARD * capabilities.length + 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x, paddingLeft: `${PAD_VW}vw`, gap: `${GAP_VW}vw` }}
          className="flex items-stretch"
        >
          {capabilities.map((cap, i) => (
            <div key={cap.title} className="flex shrink-0" style={{ width: `${CARD_VW}vw` }}>
              <CapabilityCard cap={cap} index={i} total={capabilities.length} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
