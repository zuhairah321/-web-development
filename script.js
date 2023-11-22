document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownList = document.getElementById('dropdown-list');
  
    // Show/hide the dropdown list when the button is clicked
    dropdownButton.addEventListener('click', function () {
      if (dropdownList.style.display === 'none') {
        dropdownList.style.display = 'block';
      } else {
        dropdownList.style.display = 'none';
      }
    });
  
    // Close the dropdown when an item is selected
    dropdownList.addEventListener('click', function (e) {
      dropdownButton.textContent = e.target.textContent;
      dropdownList.style.display = 'none';
    });
  
    // Close the dropdown when a click occurs outside of it
    document.addEventListener('click', function (e) {
      if (e.target !== dropdownButton) {
        dropdownList.style.display = 'none';
      }
    });
  });
  