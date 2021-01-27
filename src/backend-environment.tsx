const BACKEND_PATH = process.env.NODE_ENV !== 'production' 
    ? 'http://localhost:30001/'
    : '/backend/';
// 'http://192.168.99.100:30001/'
// 'http://localhost:30001/'
export default BACKEND_PATH;