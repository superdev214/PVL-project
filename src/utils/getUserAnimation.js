export default function getUserAnimation() {
  return {
    onscreen: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    offscreen: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
}
