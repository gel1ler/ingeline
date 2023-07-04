import { initializeApp, getApps } from "firebase/app"
import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore'
import { getDatabase, ref, set, push, update, child, get } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: "https://ingeline-4766c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)

// const db = getFirestore(app)

// export async function getProducts() {
//     const productsCol = collection(db, 'products');
//     const productsSnapshot = await getDocs(productsCol);
//     const productsList = productsSnapshot.docs.map(doc => doc.data());
//     return productsList;
// }

const db = getDatabase()

export async function getProducts() {
    const dbRef = ref(db)
    let res

    await get(child(dbRef, `products`)).then((snapshot) => {
        if (snapshot.exists()) {
            res = snapshot.val()

        } else {
            console.log("No data available")
        }
    })
    return res
}

export async function getProduct(id) {
    const dbRef = ref(db)
    let res

    await get(child(dbRef, `products/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
            res = snapshot.val()

        } else {
            console.log("No data available")
        }
    })
    return res
}

export function createProduct(id, name, shortDescription, description, img) {
    const reference = ref(db, 'products/' + id)

    set(reference, {
        name,
        shortDescription,
        description,
        img
    })
}