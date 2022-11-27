import firebase from '@react-native-firebase/app';
//import auth from '@react-native-firebase/auth'
import messaging from '@react-native-firebase/messaging';






const  firebaseConfig = {
    apiKey: 'AIzaSyBtUZYqfc0pX8qDgZqx-MVlsFqNz9uAbEA',
    authDomain: 'note-app-fa0cd.firebaseapp.com',
    databaseURL: 'https://note-app-fa0cd-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'note-app-fa0cd',
    storageBucket: 'note-app-fa0cd.appspot.com',
    messagingSenderId: 'sender-id',
    appId: '1:412217166315:android:2bb10aee22ba9f665ef1ae',
    measurementId: '412217166315',
    //certificateHash: '7cfa0bc831e797ac8400f316351303151092a2c1'
    
}


//firebase.initializeApp(firebaseConfig)

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} 

export default ()=> {
  return {firebase, messaging}
}