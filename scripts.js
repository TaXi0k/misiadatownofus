/* Place your JavaScript in this file */
document.getElementById('search-input').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const roles = document.querySelectorAll('.role');
  
  roles.forEach(role => {
    const text = role.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      role.classList.remove('hidden');
    } else {
      role.classList.add('hidden');
    }
  });
});
