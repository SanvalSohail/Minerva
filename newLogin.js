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

//simple login using firebase.auth()
function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
}

// function signOut() {
//     auth.signOut();
//     alert("Signed Out user " + email.value);
// }

//after changing status to logged in it does smth(in this case nav to profile)
firebase.auth().onAuthStateChanged(function(user){
    var user = firebase.auth().currentUser;
    if(user) {
        location.replace("home.html");
    } else {
        
    }
});