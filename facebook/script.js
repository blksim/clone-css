const backdrop = document.querySelector('.backdrop');
const signupModal = document.querySelector('.signup-modal');
const signupBtn = document.querySelector('.signup-btn');

backdrop.addEventListener('click', () => {
  backdrop.style.display = 'none';
  signupModal.style.display = 'none';
});

signupBtn.addEventListener('click', () => {
  signupModal.style.display = 'block';
  backdrop.style.display = 'block';
});