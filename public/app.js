document.addEventListener("DOMContentLoaded", event => {
    // staring firebase engine
    const app = firebase.app();
    console.log(app);
    // accessing firebase database
    const db = firebase.firestore();
    const myPost = db.collection('potts').doc('firstpost');
    myPost.get()
        .then(doc => {
            const data = doc.data();
            document.write( data.title + '<br>')
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