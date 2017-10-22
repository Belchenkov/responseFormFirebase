 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCf4s7RgCDAV32FtHchBTe-l8MhhRS1alU",
    authDomain: "contactform-faf8f.firebaseapp.com",
    databaseURL: "https://contactform-faf8f.firebaseio.com",
    projectId: "contactform-faf8f",
    storageBucket: "contactform-faf8f.appspot.com",
    messagingSenderId: "403118630599"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');


// Listen For Form Submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e) {
    e.preventDefault();
    
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save Message
    saveMessage(name, company, email, phone, message);

    // Show Alert
    document.querySelector('.alert').style.display = 'block';

    // Hide Alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    document.getElementById('contactForm').reset();
} 

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
}