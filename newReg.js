// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB2RfNNkFvXgnVQ-FxPaK4Wpu9Hf8jKuFU",
    authDomain: "minerva-b0468.firebaseapp.com",
    databaseURL: "https://minerva-b0468.firebaseio.com",
    projectId: "minerva-b0468",
    storageBucket: "minerva-b0468.appspot.com",
    messagingSenderId: "139321788999",
    appId: "1:139321788999:web:f8ae5f57eb46255033ff62",
    measurementId: "G-N7EY4BFK0R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.analytics();

const auth = firebase.auth();

//takes the values from input fields and first creates the account with email+pass and then separately adds username and avatar(avatar requires url instead of adding it from your disc)
function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var photoUrl = document.getElementById("photoUrl").value;
    var username = document.getElementById("username").value;

    const promise = auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: username,
                photoURL: photoUrl
            });
        });

    user = firebase.auth().currentUser;
	console.log(user);
    promise.catch(e => alert(e.message));
    alert("Thank you " + user.displayName + " for signing up");
    location.replace("home.html");
}

