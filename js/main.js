const revealElements = document.querySelectorAll(
  ".hero, .services-preview, .why-us, .portfolio-preview, .final-cta"
);

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("active");
    } else {
      el.classList.add("active"); // Force visibility even if scroll not reached
    }
  });
};
const hamburger = document.getElementById("hamburger");
const navList = document.querySelector(".nav__list");
const overlay = document.querySelector(".overlay");

if (hamburger) {

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
    overlay.classList.toggle("active");
  });

}

if (overlay) {

  overlay.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
    overlay.classList.remove("active");
  });

}
console.log("Hamburger clicked");
console.log(navList);

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);



const form = document.getElementById("contactForm");
const statusMessage = document.getElementById("formStatus");
const submitButton = form.querySelector("button[type='submit']");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    const formData = {
      name: form.name.value,
      email: form.email.value,
      project: form.project.value,
      message: form.message.value
    };

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        statusMessage.textContent = "✅ Message sent successfully!";
        statusMessage.style.color = "#4CAF50";
        form.reset();
      } else {
        statusMessage.textContent = "❌ Failed to send message.";
        statusMessage.style.color = "#ff5252";
      }

    } catch (error) {
      statusMessage.textContent = "⚠ Server error. Try again later.";
      statusMessage.style.color = "#ff5252";
    }

    submitButton.disabled = false;
    submitButton.textContent = "Send Message";
  });
}    