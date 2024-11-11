document.getElementById('tagInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        let tagInput = this.value.trim();
        if (tagInput) {
            addTag(tagInput);
            this.value = ''; // Clear the input field after adding tag
        }
    }
});

function addTag(tagText) {
    const tagsContainer = document.getElementById('tags');
    
    // Create a new tag element
    const tag = document.createElement('div');
    tag.classList.add('tag');
    tag.textContent = tagText;

    // Create a close button for the tag
    const closeButton = document.createElement('span');
    closeButton.textContent = '×';
    closeButton.classList.add('close');
    
    // Add event listener for the close button
    closeButton.addEventListener('click', function () {
        tagsContainer.removeChild(tag);
    });

    tag.appendChild(closeButton);
    tagsContainer.appendChild(tag);
}

