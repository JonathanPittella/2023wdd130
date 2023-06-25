const feedbackElement = document.getElementById('feedback');
const formElement = document.forms[0];
formElement.addEventListener('submit', function(e) {
  e.preventDefault();
  feedbackElement.innerHTML = `Hello ${formElement.user_name.value}! Thank you for your message. We will get back to you as soon as possible!`;
  feedbackElement.style.display = "block";
  document.body.classList.toggle('moveDown');
});