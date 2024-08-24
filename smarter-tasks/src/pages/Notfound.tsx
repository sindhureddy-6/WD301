
const NotFound = () => {
    return (
        <div className="notfound-container" style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <a href="/">Go back to the homepage</a>
        </div>
    );
};

export default NotFound;