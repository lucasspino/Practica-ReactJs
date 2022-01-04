import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHxelH703osZkxsFWpvFI6ShB8kUxF_3w",
  authDomain: "ejemplo-e-comerce.firebaseapp.com",
  projectId: "ejemplo-e-comerce",
  storageBucket: "ejemplo-e-comerce.appspot.com",
  messagingSenderId: "577782762917",
  appId: "1:577782762917:web:74dad38ca22bacec912c4c"
};


const app = initializeApp(firebaseConfig);

export const GetFirestoreApp = ()=> {

    return app

}