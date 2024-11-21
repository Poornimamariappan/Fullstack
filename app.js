// document.getElementById("changeTextButton").addEventListener("click", function () {
//     const dynamicText = document.getElementById("dynamicContent");
//     dynamicText.innerText = "Frontend";
//     dynamicText.style.color = "#4CAF50"; // 
// });


  // Accordion functionality
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = content.classList.contains('open');

      // Close all open sections
      document.querySelectorAll('.accordion-content.open').forEach(openContent => {
        openContent.classList.remove('open');
        openContent.previousElementSibling.querySelector('.icon').classList.remove('open');
      });

      // Toggle current section
      if (!isOpen) {
        content.classList.add('open');
        header.querySelector('.icon').classList.add('open');
      }
    });
  });




  
     