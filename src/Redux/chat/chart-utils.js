export const addMessageToRoom=(rooms, messageToAdd)=>{
   const existingRoom = rooms.find(room=> room.userID===messageToAdd.userID)

   if(existingRoom){
      return rooms.map(room=>
         room.userID===messageToAdd.userID
         ?{...room, messages:[...room.messages,messageToAdd.message]}
         :room)
   }
   return [...rooms,{...messageToAdd, messages:[messageToAdd.message]}]
}