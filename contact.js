// Import the required functions from the modular SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js"; // Import database functions

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyD5unnNfs6QKyn65TsrXLhYVDIwaWmEf8Q",
  authDomain: "personal-portfolio-d71b9.firebaseapp.com",
  databaseURL: "https://personal-portfolio-d71b9-default-rtdb.firebaseio.com",
  projectId: "personal-portfolio-d71b9",
  storageBucket: "personal-portfolio-d71b9.appspot.com",
  messagingSenderId: "1000703589809",
  appId: "1:1000703589809:web:c489e09838a28319f49190",
  measurementId: "G-P20C3GZESV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database
const db = getDatabase(app);
const contactFormDB = ref(db, "contact-form"); // Get a reference to the 'contact-form' node

// Form submission event listener
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("user-name");
  var email = getInputVal("user-email");
  var message = getInputVal("user-textarea");

  console.log(name, email, message);

  // Save the message to Firebase
  saveMessage(name, email, message);

  // Add alert
  document.querySelector(".alert").style.display = "block";

  // Remove alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 5000);

  // Reset form
  contactForm.reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Function to save the message to Firebase
function saveMessage(name, email, message) {
  // Use the set or push method to save the message
  const newContactRef = ref(db, "contact-form/" + Date.now());
  set(newContactRef, {
    name: name,
    email: email,
    message: message,
  });
}
