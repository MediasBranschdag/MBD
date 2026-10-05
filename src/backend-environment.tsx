const BACKEND_PATH = process.env.NODE_ENV !== 'production' 
    ? 'http://localhost:30001/'
    : '/backend/';
export default BACKEND_PATH;

/* 
    Exports the backend-path. 
    If not 'production' bath = http://localhost:30001
    else '/backend/'
*/