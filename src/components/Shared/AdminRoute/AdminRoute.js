import React, { useContext } from 'react';
import { AccountTypeContext, UserContext } from '../../../App';
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ children, ...rest }) => {
    const [user] = useContext(UserContext);
    const [accountType] = useContext(AccountTypeContext);

    return (
        <Route
            { ...rest }
            render = {
                ({ location }) => user.email && accountType === 'admin'
                ? children
                : <Redirect to={ { pathname: '/login', state: { from: location } } } />
            }
        />
    );
};

export default AdminRoute;