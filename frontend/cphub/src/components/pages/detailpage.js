import React, { useEffect } from 'react';
import TableStruc from '../items/TableStruc';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Det() {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            // Redirect to the login page if the user is not signed in.
            navigate('/loginPage');
        }
    }, [user, navigate]);

    if (!user) {
        // If the user is not signed in, you can show a loading spinner or a message.
        return <div>Loading...</div>;
    }

    return (
        <div>
            <TableStruc />
        </div>
    );
}

export default Det;
