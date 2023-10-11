import { getDatabase, ref, set, push, update, child, get, remove } from "firebase/database"
import { initializeApp } from "firebase/app"

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

initializeApp(firebaseConfig)
const db = getDatabase()


//Products functions
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

export async function createProduct(name, shortDescription, descriptions, mainImg, additionalImg, props) {
    let a = await getProducts()
    let id = a ? a[a.length - 1].id + 1 : 0

    const reference = ref(db, 'products/' + id)

    set(reference, {
        id,
        name,
        shortDescription,
        descriptions,
        mainImg,
        additionalImg,
        props
    })
}

export async function changeProduct(id, name, shortDescription, descriptions, mainImg, additionalImg, props) {
    const reference = ref(db, 'products/' + id)

    update(reference, {
        id,
        name,
        shortDescription,
        descriptions,
        mainImg,
        additionalImg,
        props
    }).then(() => console.log('succ')).catch(err => console.log(err))
}

export async function deleteProduct(id) {
    try {
        await remove(ref(db, 'products/' + id)).
            then(() => 'success')

    }
    catch (err) {
        console.log(err)
    }
}


//News functions

export async function getNews() {
    const dbRef = ref(db)
    let res

    await get(child(dbRef, `news`)).then((snapshot) => {
        if (snapshot.exists()) {
            res = snapshot.val()

        } else {
            console.log("No data available")
        }
    })
    return res
}

export async function getNewsPiece(id) {
    const dbRef = ref(db)
    let res

    await get(child(dbRef, `news/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
            res = snapshot.val()

        } else {
            console.log("No data available")
        }
    })
    return res
}

export async function createNewsPiece(name, mainImg, additionalImg) {
    let a = await getNews()
    let id = a ? a[a.length - 1].id + 1 : 0

    const reference = ref(db, 'news/' + id)

    set(reference, {
        id,
        name,
        mainImg,
        additionalImg
    })
}

export async function changeNewsPiece(id, name, mainImg, additionalImg) {
    const reference = ref(db, 'news/' + id)

    update(reference, {
        id,
        name,
        shortDescription,
        description,
        mainImg,
        additionalImg
    }).then(() => console.log('succ')).catch(err => console.log(err))
}

export async function deleteNewsPiece(id) {
    try {
        await remove(ref(db, 'news/' + id)).
            then(() => 'success')

    }
    catch (err) {
        console.log(err)
    }
}


