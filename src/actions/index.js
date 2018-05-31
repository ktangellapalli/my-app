import axios from 'axios';

export function fetchUserData(){
    return(dispatch) => {
        return axios.get('/users.json').then(response => {
            dispatch(loadUsers(response.data));
          })
    }
}
export function loadUsers(data) {
    return {
        type: "FETCH_USER_DATA",
        payload: data
    }
}
export const selectUser = (user) => {
    console.log("You clicked on user: ", user);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};