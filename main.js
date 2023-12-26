function changeImage(element) {
    element.classList.add("fade");
    setTimeout(function() {
      element.src = "Лучший в Аду.jpg";
      element.classList.remove("fade");
    }, 500);
}
  
  function restoreImage(element) {
    element.classList.add("fade");
    setTimeout(function() {
      element.src = "Приг.jpg";
      element.classList.remove("fade");
    }, 500);
 }