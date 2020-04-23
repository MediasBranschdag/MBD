const BACKEND_PATH = process.env.NODE_ENV !== 'production' 
    ? 'http://192.168.99.100:30001/'
    : '/backend/';

export default BACKEND_PATH;