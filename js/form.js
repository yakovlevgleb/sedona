var link = document.querySelector(".searchtitle a");
var flag = 0;
var form = document.querySelector(".search__form");

link.addEventListener("click", function(event) {
  if (flag == 0) {
    event.preventDefault();
    form.classList.add("search__form--show");
    flag = flag + 1;
  }
  else {
    event.preventDefault();
    form.classList.remove("search__form--show");
    flag = 0;
  }
});

link.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (form.classList.contains("search__form--show")) {
      form.classList.remove("search__form--show");
      flag = 0;
    }
  }
});
