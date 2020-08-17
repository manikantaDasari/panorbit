import {createSelector} from 'reselect';


const selectUsers= state=>state.user;

export const selectUserArray= createSelector(
   [selectUsers],
   user=>user.users
)

export const selectUserByID = id=>createSelector(
   [selectUserArray],
   users=>users[id]
)

export const selectCurrentUser= createSelector(
   [selectUsers],
   user=>user.currentUser
)