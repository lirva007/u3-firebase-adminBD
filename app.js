// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC6fHUG8uc_x7QLHVe1srFNfUu72ZiePaQ",
    authDomain: "u3-firebase-adminbd.firebaseapp.com",
    projectId: "u3-firebase-adminbd",
    storageBucket: "u3-firebase-adminbd.appspot.com",
    messagingSenderId: "571436575721",
    appId: "1:571436575721:web:5cac6746254249e36af978"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  // Declaro Variable para mi base de datos
  var basedatos = firebase.database();

  // Variable para comunuicarme con mi html
  var app = document.getElementById('app');

  // ejemplo de innerHTML app.innerHTML = '<p>Hola que hay</p>';

  // Consumir datos de Realtime
  
  /*var coleccion = firebase.database().ref().child('mensaje');
  coleccion.on('value', (snaphot) => {
      console.log(snaphot.val())
  });*/

  function readval(){
    var coleccion = basedatos.ref().child('users/username/');
      coleccion.on('value', (snapshot) => {
      console.log(snapshot.val());
      app.innerText = 'Resultado de coleccion users/username: ' + snapshot.val();
    });
  }
  
  function readget(){
      basedatos.ref('users').child('username').get().then(function(snapshot) {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        app.innerText = 'Resultado de coleccion users/username: ' + snapshot.val();
      }
      else {
        console.log("No data available");
        app.innerText = 'No data available';
      }
    }).catch(function(error) {
      console.error(error);
    });
  }


  //Agregar colección a base de datos
  function writecollection() {
    basedatos.ref('users').set({
      username: "adgam007",
      email: "lirva-2@gmail.com",
    });
    console.log("Agregar datos");
  }