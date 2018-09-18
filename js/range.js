var link = document.querySelector(".search-hotels-btn");
  var popup = document.querySelector(".modal");
  var search = popup.querySelector("#check-in");
  var search2 = popup.querySelector("#check-out");
  var submitBtn = popup.querySelector('.btn-blue');

  popup.classList.remove("modal-show");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    search.focus();
    });

  submitBtn.addEventListener("click", function (evt) {
    if (!search.value || !search2.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
  });