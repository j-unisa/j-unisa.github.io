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

// Checks which section is active
document.addEventListener('DOMContentLoaded', function() 
{
  // This event listener ensures that the JavaScript code will only run
  // after the entire HTML document has been loaded and parsed.

  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('nav a');

  // Get all elements with the class 'section' and all 'a' elements inside 'nav'.

  window.addEventListener('scroll', function() 
  {
    // This event listener listens for the 'scroll' event on the window.

    let currentSection = '';

    sections.forEach(section => 
    {
      // Iterate through each section.

      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) 
      {
        // Check if the top of the section is within 1/3 of its height from the top of the viewport.
        currentSection = section.getAttribute('id');
        // Set the 'currentSection' variable to the ID of the section.
      }
    });

    navLinks.forEach(link => 
    {
      link.classList.remove('active');
      // Remove the 'active' class from all navigation links.

      if (link.getAttribute('href').slice(1) === currentSection) 
      {
        // Check if the 'href' attribute of the link (excluding the '#' symbol) matches the 'currentSection'.
        link.classList.add('active');
        // Add the 'active' class to the link if it matches the current section.
      }
    });
  });
});

