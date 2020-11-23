export default (state = [], action) => {
    const payload = action.payload;

    switch (action.type) {
        case 'FETCH_POSTS':
            return payload;
        default:
            return state;
    }
};
