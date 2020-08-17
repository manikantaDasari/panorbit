import axios from 'axios'




 export const fetchUsers = async ()=>{
  try {

     const {data:users} = await axios.get('https://panorbit.in/api/users.json');
     const usersArray = users.users;
     return usersArray

  } catch (error) {
     console.log(error);
     
  }
}

export const Message = function(userID, message){
   this.userID=userID
   this.message=message
}


export const getMessagesArray=(item)=>{
   if(item){         
      return item.messages
   }
   
}