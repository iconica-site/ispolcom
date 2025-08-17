const { body, documentElement } = document;

const bodyResizeObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    scrollProgress();
  });
});

bodyResizeObserver.observe(body);

window.addEventListener("scroll", scrollProgress);

function scrollProgress() {
  const { scrollHeight, } = documentElement;

  console.log(scrollY, scrollHeight, innerHeight);


  const scrollPercent = ((scrollY / (scrollHeight - innerHeight)) * 100) || 0;

  documentElement.style.setProperty("--scroll-progress", `${scrollPercent.toFixed(2)}%`);
}
