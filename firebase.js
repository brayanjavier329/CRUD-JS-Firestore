  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getFirestore, collection, addDoc,
            getDocs,
            onSnapshot,
            deleteDoc,
            doc,
            getDoc,
            updateDoc,
    } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBGCBg59cgjxpi0jvyTlVn37aVImt4rcDo",
    authDomain: "crud-firebase-js-8a532.firebaseapp.com",
    projectId: "crud-firebase-js-8a532",
    storageBucket: "crud-firebase-js-8a532.appspot.com",
    messagingSenderId: "942613689575",
    appId: "1:942613689575:web:c59016d2b3f951d4135e42"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore()

  export const saveTask = (title, description) => 
      addDoc(collection(db, "tasks"),{title:title, description})

  export const getTasks = () => getDocs(collection(db,'tasks'))

  export const onGetTasks = (callback) => onSnapshot(collection(db,'tasks'),callback)

  export const deleteTask = id => deleteDoc(doc(db,'tasks',id))

  export const getTask = id=> getDoc(doc(db,'tasks',id))

  export const updateTask= (id, newFields) => 
    updateDoc(doc(db,'tasks',id),newFields)