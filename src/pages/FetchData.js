import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function FetchData () {

    const [count, setCount] = useState(1)

    const [data, setData] = useState([])
    useEffect(()=>{
        fetchData()
    },[count])

   
    
    const fetchData = async ()=>{
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${count}`)
        const obj = await response.json()
        const results = obj.results
        setData(results)
        console.log(results)
        
    
    }

    const increment = ()=>{
        setCount(count+1)

    }

    const decrement = ()=>{
        if(count === 1)return
        setCount(count-1)

    }
    console.log(count)
    
    const home = ()=>{
        if(count === 1) return

        setCount(1)
    }
    
    
    return(
        <>
        {data.map((character)=>{
            return(
                <div key={character.id}>
                <Link to={`/${character.name}`} state={character}> 
                <div>
                    <img src={character.image} alt=""></img>
                    <h4>{character.name}</h4>
                </div>
                </Link>
                </div>
            )

        })}
        
        <div>
            <button onClick={decrement}> back </button>
            <button onClick={increment}> forward </button>
            <button onClick={home}> home </button>
            <h3>You are on Page {count}</h3>

        </div>
        </>
    )
    
}




export default FetchData;