import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDX30guI5BY5hU_bAFzGRYCJrGFyE_T82Y",
    authDomain: "photowall-be804.firebaseapp.com",
    databaseURL: "https://photowall-be804.firebaseio.com",
    projectId: "photowall-be804",
    storageBucket: "photowall-be804.appspot.com",
    messagingSenderId: "633085849230",
    appId: "1:633085849230:web:c748cf18f09a251c6ea3df",
    measurementId: "G-S7RKBY6JWZ"
  };


firebase.initializeApp(config)
const database = firebase.database()
export {database}
