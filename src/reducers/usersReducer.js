export default (state = [], action) => {
    const payload = action.payload;

    switch (action.type) {
        case 'FETCH_USER':
            return [...state, payload];
        default:
            return state;
    }
};
