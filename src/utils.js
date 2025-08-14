export const labelClickEvent = (el) => {
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter") el.click();
  });
};
