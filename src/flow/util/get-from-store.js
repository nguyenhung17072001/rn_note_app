export const getUserId  = (state) => {
    const role = state.adminAuth.user;
    // debugger
    console.log('----------------------getUserId123')
    console.log(role.user._id)

    // try { return JSON.parse(role).id;
    // }
    // catch (e) {

    // }
    return role.user._id
};