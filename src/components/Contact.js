import {useState} from 'react'
function Contact({send, msg}){
	const [email,setMail] = useState('')
	const [message,setMessage] = useState('')

	function submited(e){
		e.preventDefault();
		console.log(email);
		send(email,message);
	}
	return(
	 <div className="container mtop">
	   <div className="scontainer sform">
	   <h3>{msg}</h3>
	    <form onSubmit={submited}>
		  <div className="mb-3">
		    <input type="email" className="myform" value={email} onChange={(e)=>setMail(e.target.value)} placeholder="Email"/>
		  </div>
		  <div className="mb-3">
		    <textarea className="myform" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message"/>
		  </div>
		  <button className="mybutton">Send<i class="fa fa-paper-plane menu"></i></button>
		</form>
	   </div>
	</div>
	)
}

export default Contact       