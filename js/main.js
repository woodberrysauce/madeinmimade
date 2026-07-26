const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navItems = [...document.querySelectorAll(".nav-item")];

function closeDropdowns(exceptItem = null) {
  navItems.forEach((item) => {
    if (item === exceptItem) return;
    item.classList.remove("is-open");
    item.querySelector(".nav-trigger").setAttribute("aria-expanded", "false");
  });
}

menuToggle.addEventListener("click", () => {
  const willOpen = !mainNav.classList.contains("is-open");
  mainNav.classList.toggle("is-open", willOpen);
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  menuToggle.setAttribute(
    "aria-label",
    willOpen ? "Close navigation" : "Open navigation",
  );
});

navItems.forEach((item) => {
  const trigger = item.querySelector(".nav-trigger");

  trigger.addEventListener("click", () => {
    const willOpen = !item.classList.contains("is-open");
    closeDropdowns(item);
    item.classList.toggle("is-open", willOpen);
    trigger.setAttribute("aria-expanded", String(willOpen));
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-item")) {
    closeDropdowns();
  }

  if (
    window.innerWidth <= 820 &&
    event.target.closest(".main-nav a") &&
    !event.target.closest(".dropdown-panel")
  ) {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDropdowns();
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
