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
        window.location.href = "https://myprofile-olive-one.vercel.app/"; // Change this to your target URL
    }, 2000); // Delay of 2 seconds to allow displaying user data briefly before redirection
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully");
        $(".g-signin2").css("display", "block");
        $(".data").css("display", "none");
    });
}


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("You have been sign out successfully");
      $(".g-signin2").css("display","block");
      $(".data").css("display","none");
    });
}
