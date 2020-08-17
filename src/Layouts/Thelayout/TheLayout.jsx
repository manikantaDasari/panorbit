import React from 'react';
import { Route, Switch } from "react-router-dom";

// sublayouts
import SideBar from "../../Components/Sidebar/Sidebar";
import { CommingSoon } from '../../Components/CommingSoon/CommingSoon';

// css
import './TheLayout.scss'
import Header  from '../../Components/Header/Header';
import ProfilePage from '../../pages/ProfilePage/ProfilepPage';
import Footer from '../../Components/Footer/Footer';


const TheLayout = ({currentUser , match})=>{
   
   return(

   // primary layout
      <div className='col-md-12 default-layout'>

         <SideBar/>

            <main className='col-md-10 main-container'>
               <Header/>

               {/* Router Config */}

               <Switch>
                  {/*Route to profile page */}
                  <Route path='/' exact>
                     <ProfilePage/>
                  </Route>
                  
                  {/*Route to  posts page */}

                  <Route path={`/posts`} exact>
                     <CommingSoon/>
                  </Route>
                  
                  {/*Route to gallery page */}
                  
                  <Route path={`/gallery`} exact>
                     <CommingSoon/>
                  </Route>

                  {/*Route to ToDo page */}

                  <Route path={`/todo`} exact>
                     <CommingSoon/>
                  </Route>

                  {/*Route to 404  page */}

                  <Route path={`/:id`} >
                     <h1>404 Error</h1>
                     
                  </Route>          
                                 
               </Switch>
            </main>
            
            {/* renders footer */}
            <Footer/>
      
      </div>
      

   )
}

export default TheLayout