import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


const Details = ()=>{
    const {state} = useLocation()

    return(
        <>
        <h1>{state.name}</h1>
        <img src={state.image}></img>
        <h4>Created : </h4> {state.created}
        <h4>Gender : </h4>{state.gender}
        <h4>Species : </h4>{state.species}<br></br>
        <Link to="/"><h5>back</h5></Link>
        
    
        </>
       
    )
}

export default Details;