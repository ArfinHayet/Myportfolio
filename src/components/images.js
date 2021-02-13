import {withRouter} from 'react-router-dom'
function Images(props){
  return(
  	<div className="scontainer mtop">
  	<img className="mphoto" src={window.location.origin + '/arfin/' + props.match.params.id} />
    </div>
  )	
}

export default withRouter(Images);