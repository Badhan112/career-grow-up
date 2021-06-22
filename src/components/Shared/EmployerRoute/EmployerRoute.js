import React, { useContext } from 'react';
import { AccountTypeContext, UserContext } from '../../../App';
import { Route, Redirect } from 'react-router-dom';

const EmployerRoute = ({ children, ...rest }) => {
    const [user] = useContext(UserContext);
    const [accountType] = useContext(AccountTypeContext);

    return (
        <Route
            {...rest}
            render = {
                ( { location } ) => user.email && accountType === 'employer'
                ? children
                : <Redirect to={ { pathname: '/login', state: { from: location } } } />
            }
        />
    );
};

export default EmployerRoute;