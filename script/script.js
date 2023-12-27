var accordions = document.querySelectorAll('.accordion');
var panels = document.querySelectorAll('.panel');

accordions.forEach(function (accordion, index) {
  accordion.addEventListener('click', function () {
    accordions.forEach(function (otherAccordion, otherIndex) {
      if (otherIndex !== index) {
        otherAccordion.classList.remove('active');
        panels[otherIndex].classList.remove('show');
      }
    });

    this.classList.toggle('active');
    panels[index].classList.toggle('show');
  });
});
