// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE-M2JCe87wKC7yNdwyHLJuQUozYlR_98",
  authDomain: "login-cb318.firebaseapp.com",
  projectId: "login-cb318",
  storageBucket: "login-cb318.appspot.com",
  messagingSenderId: "557559793807",
  appId: "1:557559793807:web:1580ae1d7c5f9d548148fa"
};

// Initialize Firebase
if(!firebase.apps.length)
{
   firebase. initializeApp(firebaseConfig);

}
const auth=firebase.auth();
export {auth};