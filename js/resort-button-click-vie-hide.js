 let currentVisible = null;

    function toggleDiv(divId) {
      const targetDiv = document.getElementById(divId);

      if (currentVisible === divId) {
        // Same button clicked, so hide the div
        targetDiv.style.display = 'none';
        currentVisible = null;
      } else {
        // Hide all divs
        const allDivs = document.querySelectorAll('.myDiv');
        allDivs.forEach(div => div.style.display = 'none');

        // Show the selected div
        targetDiv.style.display = 'block';
        currentVisible = divId;
      }
    }