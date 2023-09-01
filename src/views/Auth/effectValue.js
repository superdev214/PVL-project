export const variants = {
  onscreen: { opacity: 1, x: "0" },
  offscreen: { opacity: 0, x: "-100%" },
};
export const variants_items = {
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  offscreen: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
