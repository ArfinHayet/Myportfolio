import {Link} from 'react-router-dom'
function Resnav({ color, onAdd2 }){
	return(
	 <div className={color? "show" : "show hiden"}>
	   <Link className="link" onClick={onAdd2} to="/arfin"><i className="fa fa-user menu"></i>About</Link>
	   <Link className="link" onClick={onAdd2} to="/arfin/projects"><i className="fa fa-cogs menu"></i>Projects</Link>
	   <Link className="link" onClick={onAdd2} to="/arfin/contact"><i className="fa fa-envelope menu"></i>Contact</Link>
	 </div>
	)
}    
export default Resnav;