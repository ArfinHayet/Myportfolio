import pro1 from '../images/project1.png';
import pro2 from '../images/project2.png';
import pro3 from '../images/project3.png';
import pro4 from '../images/project4.png';
import pro5 from '../images/project5.png';
import pro6 from '../images/project6.png';
import pro7 from '../images/project7.png';
function Projects(){
	return(
	   <div className="container mtop">
	     <div className="row">
	       <div className="col-sm-3">
	         <div className="scontainer">
	            <img src={pro1} className="project" />
	            <p>Blog.karukormo.com</p>
	         </div>
	       </div>
	       <div className="col-sm-3">
	         <div className="scontainer">
	            <img src={pro2} className="project" />
	            <p>Literoflightbd.org</p>
	         </div>
	       </div>
	       <div className="col-sm-3">
	         <div className="scontainer">
	            <img src={pro3} className="project" />
	            <p>Expobigmall.com</p>
	         </div>
	       </div>
	       <div className="col-sm-3">
	         <div className="scontainer">
	            <img src={pro4} className="project" />
	            <p>pyrmontconsultants.com.au</p>
	         </div>
	       </div>
	       <div className="col-sm-3">
	         <div className="scontainer">
	            <img src={pro5} className="project" />
	            <p>bonikapp.com</p>
	         </div>
	       </div>
	       <div className="col-sm-3">
	         <div className="scontainer">
	            <img src={pro6} className="project" />
	            <p>digital.bonikapp.com</p>
	         </div>
	       </div>
	       <div className="col-sm-3">
	         <div className="scontainer">
	            <img src={pro7} className="project" />
	            <p>App: Bonik</p>
	         </div>
	       </div>
	     </div>
	   </div>   
	)
}

export default Projects             