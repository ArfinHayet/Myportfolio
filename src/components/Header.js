import {Link} from 'react-router-dom';
import logo from '../images/mylogo.jpg';
function Header({ onAdd, open }){
  return(
		<nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
		  <div className="container-fluid">
		    <Link className="nav-link active" aria-current="page" to="/arfin"><img className="logo" src={logo}/></Link>
		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
		      <button className="btn btn-dark" onClick={onAdd}><i className={open? "fa fa-close" : "fa fa-ellipsis-v hamburger"}></i></button>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarText">
		      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
		        <li className="nav-item">
		          <Link className="nav-link active" aria-current="page" to="/arfin/projects/">Projects</Link>
		        </li>
		        <li className="nav-item">
		          <Link className="nav-link active" aria-current="page" to="/arfin/contact/">Contact</Link>
		        </li>
		      </ul>
		    </div>
		  </div>  
		</nav>   
  )
}
export default Header;