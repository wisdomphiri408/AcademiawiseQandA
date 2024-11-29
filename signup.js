// JavaScript for modal functionality
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("courseModal");
    const closeButton = document.querySelector(".close-button");
    const searchInput = document.getElementById("courseSearch");

    // Open modal
    document.getElementById("selectCourses").addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Close modal
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Search functionality
    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const courses = document.querySelectorAll(".course-list li");

        courses.forEach(course => {
            const text = course.textContent.toLowerCase();
            course.style.display = text.includes(searchTerm) ? "" : "none";
        });
    });
});

//the top part is for the pop area that contains the courses


// Select all checkboxes
const controlledCheckboxes = document.querySelectorAll('.controlled');

// Function to update the master checkbox state
function updateMasterCheckbox() {
    const isAnyChecked = Array.from(controlledCheckboxes).some(checkbox => checkbox.checked);
    document.getElementById("selectCourses").checked = isAnyChecked;
}

// Add event listeners to controlled checkboxes
controlledCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateMasterCheckbox);
});




// Regular Expression for Email Validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
document.getElementById("signupForm").addEventListener("submit",function(e){
    e.preventDefault(); //preventing form from reloading
  

// Get DOM elements
let userName = document.getElementById("userName").value.trim();
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value.trim();
let confirmPassword = document.getElementById("confirmPassword").value.trim();
let captcha = document.getElementById("captcha").value.trim();
let yearOfStudy = document.getElementById("yearOfStudy").value.trim();
let terms = document.getElementById("terms").checked ? 1 : 0;

    // Initialize error message
    let errorMessage = "";

    // Validation checks
    if (userName === "") errorMessage += "Please type in your username!\n";
    if (!email.match(emailRegex)) errorMessage += "Please enter a valid email address!\n";
    if (password.length < 8) errorMessage += "Your password must be at least 8 characters long!\n";
    if (password !== confirmPassword) errorMessage += "Passwords do not match!\n";
    if (captcha !== "5") errorMessage += "Incorrect CAPTCHA answer.\n";
    if (yearOfStudy && (isNaN(yearOfStudy) || Number(yearOfStudy) < 1 || Number(yearOfStudy) > 9)) {
        errorMessage += "Year of study must be a number between 1 and 9.\n";
    }

    if (errorMessage) {
        document.getElementById("error-message").innerHTML = errorMessage.replace(/\n/g, "<br>");  // Display errors as HTML with line breaks
        return;
    } else {
        document.getElementById("error-message").innerHTML = ""; // Clear errors if valid
    }

    $.ajax({
        url: "php/signup.php",
        method: "POST",
        data: {
            username: userName,
            email:email,
            pwd:password,
            year_of_study:yearOfStudy,
            accepted_terms:terms,
            captcha:captcha
        },
        success: function(response){
            if(response.success){
                alert(response.message);

                //clearing the input fields
                document.getElementById("userName").value="";
                document.getElementById("email").value="";
                document.getElementById("password").value="";
                document.getElementById("confirmPassword").value="";
                document.getElementById("captcha").value="";
                document.getElementById("yearOfStudy").value="";
                document.getElementById("terms").checked = false;

                // to home page (index.html)
                window.location.href = 'index.html'; // Redirects to home page

            }
            else{
                document.getElementById("error-message").textContent = response.message;
            }
        },
        error: function(){
            document.getElementById("error-message").textContent = "Something went wrong, please try again later.";
        }
    });
});


