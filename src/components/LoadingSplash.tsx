import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function LoadingSplash({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const start = performance.now();

    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(onComplete, 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bone-100"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo mark */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="w-14 h-14 rounded-2xl bg-ink-900 flex items-center justify-center shadow-lg"
        >
          <Zap className="text-primary-500" size={26} />
        </motion.div>

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <p className="font-satoshi font-black text-2xl text-ink-900 tracking-tightest">
            mavost<span className="text-primary-600">.id</span>
          </p>
          <p className="label text-ink-500 mt-1.5">Create, Inspire, Repeat</p>
        </motion.div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="flex items-center gap-4 mt-2"
        >
          <div className="h-px w-32 bg-ink-200 overflow-hidden">
            <motion.div
              className="h-full bg-ink-900"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
            />
          </div>
          <span className="font-mono text-xs text-ink-700 tabular-nums w-8 text-right">
            {count}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
