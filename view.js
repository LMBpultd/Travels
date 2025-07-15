window.onload = function () {
  const quote = localStorage.getItem('quote');
  const description = localStorage.getItem('description');
  const image = localStorage.getItem('imageData');

  document.getElementById('quoteDisplay').innerText = quote || "No quote set.";
  document.getElementById('descriptionDisplay').innerText = description || "No description set.";

  if (image) {
    document.getElementById('imageDisplay').src = image;
  } else {
    document.getElementById('imageDisplay').style.display = "none";
  }
};
