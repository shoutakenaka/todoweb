const BASE_URL = 'https://4523461960124972800a7fc18c933004.vfs.cloud9.us-east-1.amazonaws.com';
// const BASE_URL = 'https://samurai-lesson-todoapi.herokuapp.com';

let app = {
    session: {}
};

$(() => {
    let session = localStorage.getItem('session');
    if (session) {
        app.session = JSON.parse(session);
        $('#logged-in-username').text(app.session.username);
    }
});