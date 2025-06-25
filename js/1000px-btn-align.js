
  window.onload = function () {
    const mediaQuery = window.matchMedia("(min-width: 1000px)");
    if (mediaQuery.matches) {
      const data1 = document.querySelector('.data1');
      const btn = document.querySelector('.btn');
      if (data1 && btn) {
        btn.style.height = data1.offsetHeight + 'px';
      }
    }
  };

