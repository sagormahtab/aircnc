import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="text-center mt-5">
                <h4>Error 404</h4>
                <p>The page not Found</p>
                <Link to="/">Back to home</Link>
            </div>
        </div>
    );
};

export default NotFound;