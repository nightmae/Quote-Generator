document.addEventListener("DOMContentLoaded", function() {
    const footer = document.getElementById("footer");
    const x = document.getElementById("close");
  
    function closeFooter() {
      footer.classList.add("hidden");
    }
  
    x.addEventListener("click", closeFooter);
  });
  