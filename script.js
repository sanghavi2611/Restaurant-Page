function openMenu(evt, menuName) {
  const tabContents = document.querySelectorAll('.tab-content');
  const tabLinks = document.querySelectorAll('.tablink');
 
  // Hide all tab contents
  tabContents.forEach(tab => tab.classList.remove('active'));
 
  // Remove active class from all buttons
  tabLinks.forEach(link => link.classList.remove('active'));
 
  // Show selected tab
  document.getElementById(menuName).classList.add('active');
  evt.currentTarget.classList.add('active');
}
 
// Default: Show Pizza tab on page load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.tablink').click();
});
 
 