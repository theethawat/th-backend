import firebase from 'firebase'
import config from './config'
require("firebase/auth");
require("firebase/database");
firebase.initializeApp(config)

export default firebase
