export const labelClickEvent = (el) => {
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter") el.click();
  });
};

export const sectionsAnimation = (sectionsElements) => {
  const options = { threshold: 0.4 };
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  sectionsElements.forEach((element) => observer.observe(element));
};
