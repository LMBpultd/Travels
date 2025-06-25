let activeCname = null;
let activeImg = null;

document.querySelectorAll('.cars').forEach(car => {
  const img = car.querySelector('img');
  const cname = car.querySelector('.cname');

  img.addEventListener('click', (event) => {
    event.stopPropagation();

    // If clicking the same image again, hide
    if (activeCname === cname) {
      cname.classList.remove('visible');
      img.style.opacity = '1';
      activeCname = null;
      activeImg = null;
      return;
    }

    // If another was active, hide it
    if (activeCname && activeCname !== cname) {
      activeCname.classList.remove('visible');
      if (activeImg) activeImg.style.opacity = '1';
    }

    // Show current one
    cname.classList.add('visible');
    img.style.opacity = '0.4';
    activeCname = cname;
    activeImg = img;
  });

  cname.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});

document.addEventListener('click', () => {
  if (activeCname) {
    activeCname.classList.remove('visible');
    if (activeImg) activeImg.style.opacity = '1';
    activeCname = null;
    activeImg = null;
  }
});
