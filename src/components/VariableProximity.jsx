// VariableProximity.jsx
import React, { forwardRef, useMemo, useRef, useEffect } from 'react';
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
    fromFontVariationSettings = "'wght' 400",
    toFontVariationSettings = "'wght' 900",
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
  const interpolatedSettingsRef = useRef([]);
  const mousePositionRef = useMousePositionRef(containerRef);
  const lastPositionRef = useRef({ x: null, y: null });

  const parsedSettings = useMemo(() => {
    const parseSettings = settingsStr => {
      // Accept formats like: "'wght' 400, 'wdth' 100" OR wght 400, wdth 100
      if (!settingsStr) return new Map();
      return new Map(
        settingsStr
          .split(',')
          .map(s => s.trim())
          .filter(Boolean)
          .map(s => {
            // match axis (quoted or unquoted) and number
            const m = s.match(/['"]?([a-zA-Z0-9_-]{3,4})['"]?\s+(-?\d+(\.\d+)?)/);
            if (!m) return null;
            const axis = m[1];
            const value = parseFloat(m[2]);
            return [axis, value];
          })
          .filter(Boolean)
      );
    };

    const fromSettings = parseSettings(fromFontVariationSettings);
    const toSettings = parseSettings(toFontVariationSettings);

    return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue
    }));
  }, [fromFontVariationSettings, toFontVariationSettings]);

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

  useAnimationFrame(() => {
    if (!containerRef?.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const { x, y } = mousePositionRef.current;

    // If mouse coords are page coords when no containerRef was provided,
    // convert them to container-relative
    const mouseX = x;
    const mouseY = y;

    if (lastPositionRef.current.x === mouseX && lastPositionRef.current.y === mouseY) {
      return;
    }
    lastPositionRef.current = { x: mouseX, y: mouseY };

    letterRefs.current.forEach((letterRef, index) => {
      if (!letterRef) return;

      const rect = letterRef.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
      const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

      const distance = calculateDistance(mouseX, mouseY, letterCenterX, letterCenterY);

      if (distance >= radius) {
        letterRef.style.fontVariationSettings = fromFontVariationSettings;
        return;
      }

      const falloffValue = calculateFalloff(distance);
      const newSettings = parsedSettings
        .map(({ axis, fromValue, toValue }) => {
          const interpolatedValue = fromValue + (toValue - fromValue) * falloffValue;
          return `'${axis}' ${+interpolatedValue.toFixed(2)}`; // 2 decimals
        })
        .join(', ');

      interpolatedSettingsRef.current[index] = newSettings;
      letterRef.style.fontVariationSettings = newSettings;
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
      // attach internal ref if no outer container passed (helps when user doesn't pass containerRef)
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
                    fontVariationSettings: interpolatedSettingsRef.current[currentLetterIndex] ?? fromFontVariationSettings,
                    willChange: 'font-variation-settings'
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
