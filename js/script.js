function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // No cambia
    console.log('Nombre: ' + profile.getName());
    console.log('Imagen URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // Este es solo valido si el "email" scope esta presente
    // Aquí podrías enviar el perfil del usuario a tu servidor para crear una sesión

    // Redirigir al usuario a otra página después de iniciar sesión
    window.location.href = "../home.html";
}