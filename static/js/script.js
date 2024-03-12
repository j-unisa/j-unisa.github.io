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
  const nav_links = document.querySelectorAll('nav a');

  // Get all elements with the class 'section' and all 'a' elements inside 'nav'.

  window.addEventListener('scroll', function() 
  {
    // This event listener listens for the 'scroll' event on the window.

    let current_section = '';

    sections.forEach(section => 
    {
      // Iterate through each section.

      const section_top = section.offsetTop;
      const section_height = section.clientHeight;

      if (pageYOffset >= section_top - section_height / 3) 
      {
        // Check if the top of the section is within 1/3 of its height from the top of the viewport.
        current_section = section.getAttribute('id');
        // Set the 'current_section' variable to the ID of the section.

        console.log('Current Section:', current_section);
      }
    });

    nav_links.forEach(link => 
    {
      link.classList.remove('active');
      // Remove the 'active' class from all navigation links.

      if (link.getAttribute('href').slice(1) === current_section) 
      {
        // Check if the 'href' attribute of the link (excluding the '#' symbol) matches the 'current_section'.
        link.classList.add('active');
        // Add the 'active' class to the link if it matches the current section.
      }
    });
  });
});

