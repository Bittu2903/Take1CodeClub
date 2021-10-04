const firebaseConfig = {
  apiKey: "AIzaSyBNtbgA6WtW4uoW6kVQaEp-h1RphOsFKV4",
  authDomain: "take-1-code-club.firebaseapp.com",
  projectId: "take-1-code-club",
  storageBucket: "take-1-code-club.appspot.com",
  databaseURL: "https://take-1-code-club-default-rtdb.firebaseio.com/",
  messagingSenderId: "1007323946696",
  appId: "1:1007323946696:web:aa19ef34f9c71cb01d8ffd",
  measurementId: "G-M4CBLZKKXR",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference Contact Info Collection
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   get input values
  let fname = document.querySelector("#fname").value;
  let lname = document.querySelector("#lname").value;
  let m_number = document.querySelector("#m_number").value;
  let email = document.querySelector("#e_mail").value;
  let subject = document.querySelector("#subject").value;

  console.log(fname, lname, m_number, email, subject);

  saveContactInfo(fname, lname, m_number, email, subject);
}

//  save infos to firebase
function saveContactInfo(fname, lname, m_number, email, subject) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    fname: fname,
    lname: lname,
    m_number: m_number,
    email: email,
    subject: subject,
  });
  document.getElementById("myModal").style.display = "block";
}
