export const setChatUser = user=>({
   type: 'SET_CHAT_USER',
   payload: user
})

export const sendMessage= message=>({
   type:'SEND_MESSAGE',
   payload:message
})

export const clearChatRoom= ()=>({
   type:'CLEAR_CHAT_ROOM'
})
   
   
