function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    
    // Display user information
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl());
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");

    // Redirect to another site after sign-in
    setTimeout(function() {
        console.log("Redirecting to profile page..."); // Debug log
        window.location.href = "https://shashibhushan.vercel.app/profile.html"; // Your target URL
    }, 1000); // Delay of 1 second to allow displaying user data briefly before redirection
}
