const initStickyHeader = () => {
  const header = document.querySelector(".header");
  if (!header) return;

  const STICKY_START = 120; // через сколько px проскролла "прилипает"
  const HIDE_ANIM_MS = 280;

  let isSticky = false;
  let hideTimer = null;

  const setOffset = (enabled) => {
    document.documentElement.style.setProperty(
      "--header-offset",
      enabled ? `${header.offsetHeight}px` : "0px"
    );
  };

  const enableSticky = () => {
    if (isSticky) return;
    clearTimeout(hideTimer);
    isSticky = true;

    header.classList.add("is-fixed");
    setOffset(true);

    requestAnimationFrame(() => {
      header.classList.add("is-visible");
    });
  };

  const disableSticky = () => {
    if (!isSticky) return;
    isSticky = false;

    header.classList.remove("is-visible");

    hideTimer = setTimeout(() => {
      header.classList.remove("is-fixed");
      setOffset(false);
    }, HIDE_ANIM_MS);
  };

  const onScroll = () => {
    if (window.scrollY > STICKY_START) enableSticky();
    else disableSticky();
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => {
    if (isSticky) setOffset(true);
  });

  onScroll();
};

initStickyHeader();
