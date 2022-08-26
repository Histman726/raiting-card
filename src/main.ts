import "./style.css";

const rateStart = document.querySelector<HTMLDivElement>(".raiting-state");
const thanYou = document.querySelector<HTMLDivElement>(".thank-you");
const form = document.querySelector<HTMLFormElement>(".rating-form");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const valueRate = document.querySelector("input[name=ratings]:checked");

  if (valueRate !== null) {
    const selectedRating =
      document.querySelector<HTMLParagraphElement>(".value");
    selectedRating!.textContent =
      "You selected " + valueRate.getAttribute("value") + " out of 5";
    rateStart!.classList.add("hidden");
    thanYou!.classList.remove("hidden");
  }
});
