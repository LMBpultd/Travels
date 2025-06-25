function openGmail() {
    const email = "lmbpultd0705@gmail.com";
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
  }

  window.addEventListener('DOMContentLoaded', () => {
    // Get all buttons with ID c-btn
    const buttons = document.querySelectorAll('#c-btn');

    // Get the WhatsApp button (assuming it's the last one)
    const whatsappButton = buttons[buttons.length - 1];

    // Get the computed width of the WhatsApp button
    const whatsappWidth = whatsappButton.offsetWidth;

    // Apply that width to all buttons
    buttons.forEach(button => {
      button.style.width = whatsappWidth + 'px';
    });
  });