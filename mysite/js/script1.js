const feedbackForm = document.getElementById('feedback_form');

feedbackForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get the feedback message from the form
  const feedbackMessage = feedbackForm.elements.user_feedback.value;

  // Create the success message element
  const feedbackSuccess = document.createElement('div');
  feedbackSuccess.style.display = 'none';
  const feedbackMessageElement = document.createElement('p');
  feedbackMessageElement.textContent = 'Thank you for your feedback!';
  feedbackSuccess.appendChild(feedbackMessageElement);

  // Display the success message above the header
  document.body.insertBefore(feedbackSuccess, document.body.firstChild);
  feedbackSuccess.style.display = 'block';

  // Scroll to the top of the page to show the success message
  window.scrollTo({ top: 0, behavior: 'smooth' });
});