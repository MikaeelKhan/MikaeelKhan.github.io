// This could add interactivity like showing the current time
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');
  const date = new Date().toLocaleDateString();
  footer.innerHTML += ` Last visited: ${date}`;
});
