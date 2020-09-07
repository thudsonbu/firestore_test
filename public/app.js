document.addEventListener("DOMContentLoaded", event => {
    // staring firebase engine
    const app = firebase.app();
    console.log(app);
    // accessing firebase database
    const db = firebase.firestore();
    const myPost = db.collection('potts').doc('firstpost');

    // get sinle document
    myPost.get()
        .then(doc => {
            const data = doc.data();
            document.write( data.title + '<br>')
        })
    
    // real time updates
    myPost.onSnapshot(doc => {
        const data = doc.data();
        document.write( data.title + '<br>')
    })

    const query = productsRef.where('price', '==', 10)
    // can also use orderby to sort return documents

    // querry from collection
    query.get()
        .then(products => {
            products.forEach(doc => {
                data = doc.data()
                document.write(`${data.name} at ${data.price} <br>`)
            })
        })
})

// user authentication
function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider(); 
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            document.write(`Hello ${user.displayName}`);
            console.log(user)
        })
        .catch(conole.log);
}