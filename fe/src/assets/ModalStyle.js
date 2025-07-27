export const modalstyle = {
  backdrop: {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  },
  modal: {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
      transition: { duration: 0.6 },
    },
  },
};

