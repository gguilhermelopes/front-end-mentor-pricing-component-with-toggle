const toggleButton = document.querySelector("#toggle-button");
const pricesMonth = document.querySelectorAll(".month");
const pricesYear = document.querySelectorAll(".year");

function setPrices() {
  if (toggleButton.checked) {
    pricesYear.forEach((price) => {
      price.classList.remove("active");
    });
    pricesMonth.forEach((price) => {
      price.classList.add("active");
    });
  } else {
    pricesMonth.forEach((price) => {
      price.classList.remove("active");
    });
    pricesYear.forEach((price) => {
      price.classList.add("active");
    });
  }
}

setPrices();

toggleButton.addEventListener("change", setPrices);
