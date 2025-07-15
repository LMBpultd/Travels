window.onload = function () {
  document.getElementById('quote').value = localStorage.getItem('quote') || '';
  document.getElementById('description').value = localStorage.getItem('description') || '';
  const image = localStorage.getItem('imageData');
  if (image) document.getElementById('previewImage').src = image;

  document.getElementById('imageUpload').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      document.getElementById('previewImage').src = event.target.result;
      localStorage.setItem('imageData', event.target.result);
    };
    reader.readAsDataURL(file);
  });
};

function saveContent() {
  const quote = document.getElementById('quote').value;
  const description = document.getElementById('description').value;

  localStorage.setItem('quote', quote);
  localStorage.setItem('description', description);

  document.getElementById('status').innerText = "Content saved successfully!";
}
