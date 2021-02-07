///////////////////////////// меню (горизонтальный аккордеон

const acco = document.querySelector(".menu");
const accoItem = document.querySelectorAll(".menu-item");
let accoItemLength = accoItem.length;

acco.addEventListener("click", function (e) {
  for (let i = 0; i < accoItemLength; i++) {
    accoItem[i].classList.remove("menu-item--active");
  }
});

for (let i = 0; i < accoItemLength; i++) {
  accoItem[i].addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();

    if (accoItem[i].classList.contains("menu-item--active")) {
      accoItem[i].classList.remove("menu-item--active");
    } else {
      for (let i = 0; i < accoItemLength; i++) {
        accoItem[i].classList.remove("menu-item--active");
      }
      accoItem[i].classList.add("menu-item--active");
    }
  });
}

// calculateWidth()
// узнать ширину окна
// accoItem.length
// ширину accoItem
// return  (ширина окна - (ширина accoItem * accoLength))

// let requestWidth = calculateWidth();
// menuAccoContent.style.width = requestWidth + 'px';

////////////////////////////////////////menu
