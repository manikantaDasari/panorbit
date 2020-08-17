import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectChatUser,selectChatMessages} from "../../Redux/chat/chat-selector";
import { setChatUser,sendMessage} from "../../Redux/chat/chat-actions";
import UserListType2 from '../UserListType2/UserListType2';
import { UserThumb } from '../UserThumb/UserThumb';
import {Message, getMessagesArray} from '../../utils';
import './Footer.scss';


class Footer extends React.Component{
   state={
      chatboxToggle:false,
      message:''
   }

   // handles the input msg

   handleMessage=(e)=>{
      e.preventDefault();
      const{message}=this.state;      
      const{user, sendMessage}=this.props;
      const newMessage= new Message(user.id, message);

      if(newMessage){
         sendMessage(newMessage);
      }
      
      this.setState({
         message:''
      }) 

   }

   // handles the changes in the input
   
   handleChange=(e)=>{
      const{name,value}=e.target;
      this.setState({
         [name]:value
      })
   }

   

   render(){
      const{chatboxToggle,message}= this.state
      const {user,setChatUser,messages}=this.props;
      const messageRoom = getMessagesArray(messages)

      return(
         <>
         <div className="chat-container">
            <div className="select-user">
               
               <div className="header d-flex justify-content-between" onClick={()=>this.setState({chatboxToggle:!chatboxToggle })}>
                  <p className='m-0'><i className="uil uil-comment-alt"></i> Chats</p>
                  <p className='m-0'><i className="uil uil-angle-up"></i></p>
               </div>

               {/* checks the toggle state */}
               {
                  chatboxToggle?
                  <div className="users-list customScrollBar">
                     <UserListType2/>
                  </div>
                  :''
               }  

            </div>              
         </div>

         {
            user?
            (<div className="chat-room">
               <div className="header d-flex align-items-centre justify-content-between">
                  <UserThumb {...user}/>
                  <p className="close m-0 btn" onClick={()=>setChatUser(null)}><i className="uil uil-multiply"></i></p>
               </div>
               <div className="body customScrollBar">
                  <div className="messages-container">                     
                     <ul className='p-0 messages-list'>

                        {/* checks if any mesaage is there */}

                        {
                           messageRoom?messageRoom.map((message,i)=>
                        <li className='message' key={i}>{message}</li>):null
                           
                        }
                     </ul>
                  </div>

               </div>
               <div className="footer">

                  <form className="form" onSubmit={this.handleMessage}>
                     <input className="form-control" type="text" placeholder='Type Message..' aria-label="Message" name='message' value={message}  onChange={this.handleChange}></input>
                     <button className="btn my-2 my-sm-0 s-message" type="submit"><i className="uil uil-message"></i></button>
                  </form>

               </div>
            </div>):''

         }

         
         </>
      )
   }

}

const mapStateToProps= createStructuredSelector({
   user: selectChatUser,
   messages: selectChatMessages
   
})

const mapDispatchToState= dispatch=>({
   setChatUser: user=>dispatch(setChatUser(user)),
   sendMessage : message=> dispatch(sendMessage(message))
})

export default connect(mapStateToProps,mapDispatchToState)(Footer)