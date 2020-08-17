import React from 'react';
import {Switch,Route} from "react-router-dom";
import {connect} from 'react-redux'
import {selectCurrentUser} from './Redux/users/user-selector';
import{createStructuredSelector}from 'reselect';

// layouts
import TheLayout  from './Layouts/Thelayout/TheLayout';
import LandingPage from './pages/Landingpage/Landingpage'
// css
import './App.css';

class App extends React.Component{
  
  render(){
    const{currentUser} = this.props
    return(
      <div className='App'>
          <Switch>
            {
              currentUser?
              (
                <Route path="/" render={() => <TheLayout currentUser={currentUser} />} />
              ) : (
                <Route exact path="/" render={() => <LandingPage/>} />
              )
            }

            {
              currentUser?
              (
                <Route path='*'>
                <h1>404 Error</h1>
                </Route>
              ) : (
                <Route exact path="*" render={() => <LandingPage handleUser={this.handleUser}/>} />
              )
            } 
                         
          </Switch>





      </div>
    )
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser:  selectCurrentUser
})

export default connect(mapStateToProps)(App);
