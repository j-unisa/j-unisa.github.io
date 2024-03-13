// Aligns right side to section selected on left side
document.addEventListener('DOMContentLoaded', function () 
{
  document.querySelectorAll('a[href^="#"]').forEach(section => 
  {
    section.addEventListener('click', function (event) 
    {
      event.preventDefault();

      const target_section = document.querySelector(this.getAttribute('href'));

      target_section.scrollIntoView(
      {
        behavior: 'smooth',
        block: 'start' // Align to top of viewport
      });
    });
  });
});
