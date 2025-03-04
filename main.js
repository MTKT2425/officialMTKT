const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  duration: 1000,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .socials", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".popular__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".discover__card:nth-child(2) img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".discover__card__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".discover__card__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".discover__card__content h3", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".discover__card__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".banner__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".banner__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});

ScrollReveal().reveal(".subscribe__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".subscribe__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".subscribe__content form", {
  ...scrollRevealOption,
  delay: 1000,
});

document.getElementById("reportForm").addEventListener("submit", function(event){
	event.preventDefault();

	const form = event.target;
	const formData = new FormData(form);

	submitForm(formData);
});

function submitForm(formData) {
	fetch("https://script.google.com/macros/s/AKfycbxs1EaxXejz-HFyQMhG5RYcNLmbkJBzrZaIE1HshoeaD0lX3rKg2JFyi6K3NPJp0YpOwA/exec", { // Replace with your Google Apps Script URL
		method: "POST",
		body: new URLSearchParams(formData)
	})
	.then(response => response.text())
	.then(data => {
		if (data === "Success") {
			document.getElementById("responseMessage").style.display = "block";
			document.getElementById("reportForm").reset();
		} else {
			alert("Failed to submit. Please try again.");
		}
	})
	.catch(error => console.error("Error:", error));
}
