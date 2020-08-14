import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://firestore.googleapis.com/v1/projects/ksreactedu/databases/(default)/documents/'
});


instance.defaults.headers.common['Content-Type'] = "application/json";

export default instance;