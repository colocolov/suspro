const initStickyHeader = () => {
  const header = document.querySelector(".header");
  console.log(header);
  if (!header) return;

  const update = () => {
    // Если проскроллили больше 20px, добавляем класс для стайлинга
    if (window.scrollY > 20) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  window.addEventListener("scroll", update, { passive: true });
  update(); // Вызываем один раз при загрузке
};