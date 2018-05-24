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