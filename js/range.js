var search=document.querySelector(".search-hotels-btn"),
formbody=document.querySelector(".search");
search.addEventListener("click",function(a){
  a.preventDefault(),
  formbody.classList.toggle("search-show")
});