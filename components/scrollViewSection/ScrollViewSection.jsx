import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function ScrollViewSection({ children, initialPosition = 'translateX(-200px)' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? 'none' : initialPosition,
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
        }}>
        {children}
      </div>
    </section>
  );
}
