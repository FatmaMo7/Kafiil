let decrease = document.querySelector(".decrease");
let increase = document.querySelector(".increase");
let count = document.querySelector(".count");
let total = document.querySelector(".total");
let heart = document.querySelectorAll(" .fa-heart");
let countNumber = 3;
let totalCount = 300;
count.innerHTML = countNumber;
total.innerHTML = totalCount;

increase.addEventListener("click", () => {
  countNumber++;
  totalCount += 100;
  count.innerHTML = countNumber;
  total.innerHTML = totalCount;
});
decrease.addEventListener("click", () => {
  countNumber--;
  totalCount -= 100;
  count.innerHTML = countNumber;
  total.innerHTML = totalCount;
});
console.log(heart)
heart.forEach((heart) => {
  if (heart.classList.contains("active")) {
    heart.classList.add("fa-solid");
  }
  heart.addEventListener("click", () => {
    if (heart.classList.contains("active")) {
      heart.classList.remove("active");
      heart.classList.remove("fa-solid");
    } else {
      heart.classList.add("active");
      heart.classList.add("fa-solid");
    }
  });
});
