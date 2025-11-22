'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorLabel, setCursorLabel] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    const handleHoverStart = (e: Event) => {
      const target = e.target as HTMLElement;
      
      if (!target || typeof target.getAttribute !== 'function') return;
      
      const label = target.getAttribute('data-cursor-label');

      if (label) {
        setCursorLabel(label);
        setIsHovering(true);
      } else if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
      setCursorLabel('');
    };

    document.addEventListener('mouseenter', handleHoverStart, true);
    document.addEventListener('mouseleave', handleHoverEnd, true);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleHoverStart, true);
      document.removeEventListener('mouseleave', handleHoverEnd, true);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-twc-warm rounded-full pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      />

      <motion.div
        className="fixed top-0 left-0 border border-twc-warm/20 rounded-full pointer-events-none z-[9998] will-change-transform"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          borderColor: isHovering ? 'rgba(255, 43, 43, 0.5)' : 'rgba(245, 243, 238, 0.2)',
        }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {cursorLabel && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997] text-xs tracking-wider text-twc-warm bg-twc-red px-3 py-1.5 rounded-full will-change-transform"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: 'calc(-50% + 40px)',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.15 }}
        >
          {cursorLabel}
        </motion.div>
      )}
    </>
  );
}
