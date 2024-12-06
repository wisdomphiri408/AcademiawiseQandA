$(document).ready(function () {
    //the profile must not be visible initially
    $('#profileLetter').hide();


    // Make an Ajax request to fetch the username
    $.ajax({
        url: 'php/profile.php', // Replace with your endpoint
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            if (response.username) {
                const username = response.username;
                const firstLetter = username.charAt(0);
                document.getElementById("profileLetter").textContent = firstLetter;
                $("#profileLetter").show();
                const profileImage = document.getElementById("profileImage");
                //displaying none to the profile image
                profileImage.style.display = "none";

                //the drop box in the profilr letter
                $('#profileLetter').on('click', function() {
                    $('#profileDropdown').toggle();
                  });
                
                  // Hide the dropdown when clicking outside
                  $(document).on('click', function(e) {
                    if (!$(e.target).closest('#profileContainer').length) {
                      $('#profileDropdown').hide();
                    }
                  });

             
            } else if (response.error) {
                console.error('Error:', response.error);
            }
        },
        error: function (xhr, status, error) {
            console.error('AJAX Error:', error);
        }
    });
});
