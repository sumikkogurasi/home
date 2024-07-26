// Get a reference to the content element
const contentElement = document.getElementById('content');

// Get a reference to the change content button
const changeContentButton = document.getElementById('change-content');

// Change the content when the button is clicked
changeContentButton.addEventListener('click', () => {
    contentElement.textContent = 'New content added dynamically using JavaScript!　javaScript使って切り替えたよ！';
});