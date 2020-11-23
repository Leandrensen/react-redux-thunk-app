import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import UserHeader from './UserHeader';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const PostList = (props) => {
    const { fetchPosts, posts } = props;

    const classes = useStyles();

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderPostsList = () => {
        return (
            <List className={classes.root}>
                {posts.map((post, index) => {
                    return (
                        <>
                            <ListItem key={post.id}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <AccountCircleIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={post.title}
                                    secondary={post.body}
                                    divider={index < posts.length ? true : false}
                                />
                                <UserHeader userId={post.userId} />
                            </ListItem>
                            {index < posts.length && <Divider variant='inset' component='li' />}
                        </>
                    );
                })}
            </List>
        );
    };

    return <>{renderPostsList()}</>;
};

const mapStateToProps = (state) => {
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
