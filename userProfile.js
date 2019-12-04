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

//initiate user and default user profile values
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("email").innerHTML = user.email;
        document.getElementById("username").innerHTML = user.displayName;
        document.getElementById("photoUrl").src = user.photoURL;
    } else {
        window.location.replace("newLogin.html");
    }
});

//sign out
function signOut() {
    var user = firebase.auth().currentUser;
    if (user) {
        auth.signOut();
        window.location.replace("newLogin.html");
    } else {
        alert("No user currently logged in");
        window.location.replace("newLogin.html");
    }
}

//delete account
function deleteUser() {
    var user = firebase.auth().currentUser;
    if (user) {
        firebase.auth().currentUser.delete()
    } else {
        alert("No user currently logged in");
        location.replace("newLogin.html");
    }
}

//save new displayName and photoURL
function saveProfile() {
    var user = firebase.auth().currentUser;
    if (user) {
        firebase.auth().currentUser.updateProfile({
            displayName: document.getElementById("nameChange").value,
            photoURL: document.getElementById("picChange").value
        })
        
        window.location.reload();
    } else {
        alert("No user currently logged in");
        window.location.replace("newLogin.html");
    }
}

//save new email
function saveEmail() {
    var user = firebase.auth().currentUser;
    if (user) {
        user.updateEmail(document.getElementById("emailChange").value);
        window.location.reload();
    } else {
        alert("No user currently logged in");
        window.location.replace("newLogin.html");
    }
}

//save new pass
function savePass() {
    var user = firebase.auth().currentUser;
    if (user) {
        user.updatePassword(document.getElementById("passChange").value);
        window.location.reload();
    } else {
        alert("No user currently logged in");
        window.location.replace("newLogin.html");
    }
}

