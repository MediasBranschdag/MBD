const BACKEND_PATH = process.env.NODE_ENV !== 'production' 
    ? 'http://localhost:30001/'
    : '/backend/';

export default BACKEND_PATH;