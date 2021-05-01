const contact = document.querySelector("#contact");
contact.addEventListener("click", () => {
  let infoContact = contact.querySelector(".info-contact");
  if (infoContact.classList.contains("d-n")) {
    infoContact.classList.remove("d-n");
  } else {
    infoContact.classList.add("d-n");
  }
});

const navSearch = document.querySelector(".nav__search");
const navSearchContent = document.querySelector(".nav__search-content");
navSearch.addEventListener("click", () => {
  navSearch.querySelector("input").addEventListener("click", (e) => {
    e.stopPropagation();
  });
  if (navSearchContent.classList.contains("nav__search--show")) {
    navSearchContent.classList.remove("nav__search--show");
  } else {
    navSearchContent.classList.add("nav__search--show");
  }
});

const clickScrollTop = document.querySelector(".arrow-to-top");
clickScrollTop.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});

setTimeout(() => {
  window.scrollTo(0, 0);
  document.querySelector(".i-frame").style.height = "360px";
}, 50);
