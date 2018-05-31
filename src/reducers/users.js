const users = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_USER_DATA':
        return [
          ...state,
          action.payload
        ]
      
      case 'USER_SELECTED':
          return [
            ...state,
            action.payload
          ]
      default:
        return state
    }
}
export default users