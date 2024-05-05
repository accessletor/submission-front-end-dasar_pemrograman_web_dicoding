const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')
const bgSidebar = document.querySelector('.bg-sidebar')

burger.addEventListener('click', function(event) {
	this.classList.toggle('change')
	sidebar.classList.toggle('change')
	bgSidebar.classList.toggle('change')
})

bgSidebar.addEventListener('click', function(event) {
	this.classList.remove('change')
	sidebar.classList.remove('change')
	burger.classList.remove('change')
})
let slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        if (n > slides.length)
        {
          slideIndex = 1;
        }
        if (n < 1)
        {
          slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++)
        {
          slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
      }