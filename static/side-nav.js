function sideNav() {
  const sideNavItems = document.querySelector(".side-nav__mobile-items");
  if (sideNavItems.style.display === "flex") {
    sideNavItems.style.display = "none";
  } else {
    sideNavItems.style.display = "flex";
  }
}
