export const setCurrentUser = user=>({
   type: 'SET_CURRENT_USER',
   payload: user
})


export const setUsers = users=>({
   type: 'SET_ALL_USERS',
   payload:users
})