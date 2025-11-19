// VariableProximity.jsx (Updated for Static Fonts like Quantico)
import React, { forwardRef, useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import '../css/VariableProximity.css';

function useAnimationFrame(callback) {
  const cbRef = useRef(callback);
  useEffect(() => { cbRef.current = callback; }, [callback]);
  useEffect(() => {
    let frameId = null;
    const loop = () => {
      cbRef.current();
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);
}

function useMousePositionRef(containerRef) {
  const positionRef = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const updatePosition = (x, y) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        positionRef.current = { x: x - rect.left, y: y - rect.top };
      } else {
        positionRef.current = { x, y };
      }
    };
    const handleMouseMove = ev => updatePosition(ev.clientX, ev.clientY);
    const handleTouchMove = ev => {
      const touch = ev.touches[0];
      if (touch) updatePosition(touch.clientX, touch.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [containerRef]);
  return positionRef;
}

const VariableProximity = forwardRef((props, ref) => {
  const {
    label = '',
    fromWeight = 400,  // Changed: Use weight numbers instead of variation strings
    toWeight = 700,
    containerRef: outerContainerRef,
    radius = 120,
    falloff = 'linear',
    className = '',
    onClick,
    style,
    ...restProps
  } = props;

  // fallback containerRef if parent didn't pass one
  const internalContainerRef = useRef(null);
  const containerRef = outerContainerRef ?? internalContainerRef;
  const letterRefs = useRef([]);
  const mousePositionRef = useMousePositionRef(containerRef);
  const lastPositionRef = useRef({ x: null, y: null });

  const calculateDistance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);

  const calculateFalloff = distance => {
    const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
    switch (falloff) {
      case 'exponential':
        return Math.pow(norm, 2);
      case 'gaussian':
        return Math.exp(-Math.pow(distance / (radius / 2), 2) / 2);
      case 'linear':
      default:
        return norm;
    }
  };

  // For static fonts: Snap to threshold (e.g., bold if >50% proximity)
  const getInterpolatedWeight = falloffValue => {
    const threshold = 0.5;  // Adjust: 0.5 = bold only if closer than half radius
    return falloffValue > threshold ? toWeight : fromWeight;
  };

  useAnimationFrame(() => {
    if (!containerRef?.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const { x, y } = mousePositionRef.current;
    const mouseX = x;
    const mouseY = y;
    if (lastPositionRef.current.x === mouseX && lastPositionRef.current.y === mouseY) {
      return;
    }
    lastPositionRef.current = { x: mouseX, y: mouseY };
    letterRefs.current.forEach((letterRef) => {
      if (!letterRef) return;
      const rect = letterRef.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
      const letterCenterY = rect.top + rect.height / 2 - containerRect.top;
      const distance = calculateDistance(mouseX, mouseY, letterCenterX, letterCenterY);
      if (distance >= radius) {
        letterRef.style.fontWeight = fromWeight;
        return;
      }
      const falloffValue = calculateFalloff(distance);
      const newWeight = getInterpolatedWeight(falloffValue);
      letterRef.style.fontWeight = newWeight;
    });
  });

  // split letters while preserving spaces between words
  const words = label.split(' ');
  let letterIndex = 0;
  return (
    <span
      ref={ref}
      className={`${className} variable-proximity`}
      onClick={onClick}
      style={{ display: 'inline', ...style }}
      {...restProps}
      data-vp-container
    >
      <span ref={containerRef} style={{ display: 'inline-block' }}>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {word.split('').map(letter => {
              const currentLetterIndex = letterIndex++;
              return (
                <motion.span
                  key={currentLetterIndex}
                  ref={el => {
                    letterRefs.current[currentLetterIndex] = el;
                  }}
                  style={{
                    display: 'inline-block',
                    fontWeight: fromWeight,  // Initial state
                    willChange: 'font-weight',
                    transition: 'font-weight 0.4s ease'  // Smooth snap (optional, via inline for motion compat)
                  }}
                  aria-hidden="true"
                >
                  {letter}
                </motion.span>
              );
            })}
            {wordIndex < words.length - 1 && <span style={{ display: 'inline-block' }}>&nbsp;</span>}
          </span>
        ))}
      </span>
      <span className="sr-only">{label}</span>
    </span>
  );
});

VariableProximity.displayName = 'VariableProximity';
export default VariableProximity;