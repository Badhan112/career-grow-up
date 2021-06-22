import React, { useContext } from 'react';
import { AccountTypeContext, UserContext } from '../../../App';
import { Route, Redirect } from 'react-router-dom';

const ApplicantRoute = ({ children, ...rest }) => {
    const [user] = useContext(UserContext);
    const [accountType] = useContext(AccountTypeContext);

    return (
        <Route
            {...rest}
            render = {
                ( { location } ) => user.email && accountType === 'job seeker'
                ? children
                : <Redirect to={ { pathname: '/login', state: { from: location } } } />
            }
        />
    );
};

export default ApplicantRoute;