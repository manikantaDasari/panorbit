import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// styles
import './Sidebar.scss';

const SideBar=({match})=>{
	
	if(match){
		var isexact = match.isExact
	}

	return(
      <div className="sidebar col-md-2">         
					<nav id="nav-menu-container">
						<ul className="nav-menu p-0">
							
							{/* navigtes to particular page */}

							<Link className={`link-item ${isexact?'active':''}`} to='/'>Profile <span className='activeArrow'><i className="uil uil-angle-right"></i></span></Link>							
							<NavLink className='link-item' to='/posts' >Posts <span className='activeArrow'><i className="uil uil-angle-right"></i></span></NavLink>
							<NavLink className='link-item' to='/gallery' >Gallery <span className='activeArrow'><i className="uil uil-angle-right"></i></span></NavLink>
							<NavLink className='link-item' to='/todo' >Todo <span className='activeArrow'><i className="uil uil-angle-right"></i></span></NavLink>							
						</ul>
						
					</nav>
      </div>
	)
}

export default withRouter(SideBar);