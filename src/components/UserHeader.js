import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const UserHeader = (props) => {
    const { fetchUser, userId, user } = props;

    useEffect(() => {
        fetchUser(userId);
    }, []);

    if (!user) {
        return null;
    }

    return <div>{user.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
