import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBeRB9WdLVrwuXbVknh3t3orIeaq5IkNLs",
  authDomain: "fir-shoppingcart-2f935.firebaseapp.com",
  databaseURL: "https://fir-shoppingcart-2f935.firebaseio.com",
  projectId: "fir-shoppingcart-2f935",
  storageBucket: "fir-shoppingcart-2f935.appspot.com",
  messagingSenderId: "362134882252",
  appId: "1:362134882252:web:1624653d48ced093a77f69",
  measurementId: "G-RB3LSY2JDS"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire; 