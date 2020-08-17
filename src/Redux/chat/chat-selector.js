import {createSelector} from 'reselect';

const selectChat= state=>state.chat;

export const selectChatUser= createSelector(
   [selectChat],
   chat=>chat.chatUser
)

export const selectChatRooms=createSelector(
   [selectChat],
   chat=>chat.rooms
)

export const selectChatMessages=createSelector(
   [selectChatRooms,selectChatUser],
   (rooms,user)=>rooms&&user?(rooms.find(x=>x.userID===user.id)):''
)


// (rooms.find(room=> room.userId===user.id))