function toggleMenu() {
  const menu = document.getElementById("menu");
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.getElementById("hamburger");
  const html = document.documentElement;

  hamburger.classList.toggle("active");

  if (window.innerWidth <= 768) {
    if (hamburger.classList.contains("active")) {
      setTimeout(() => {
        sidebar.classList.add("show");
        html.classList.add("no-scroll");
      }, 400);
    } else {
      sidebar.classList.remove("show");
      html.classList.remove("no-scroll");
    }
  } else {
    menu.classList.toggle("show");
  }
}
