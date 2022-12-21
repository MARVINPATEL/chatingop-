// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDlMW7Bk7KAj005rEEc1AiM_-AKjv3o7jU",
    authDomain: "kwitter-aca52.firebaseapp.com",
    databaseURL: "https://kwitter-aca52-default-rtdb.firebaseio.com",
    projectId: "kwitter-aca52",
    storageBucket: "kwitter-aca52.appspot.com",
    messagingSenderId: "496840553260",
    appId: "1:496840553260:web:41de05d78e057ec6f57289"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



