import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ViewDetails.css'

import toast from 'react-hot-toast';
//  from the route we are getting the id of the movie item

const API_URL = "https://api.tvmaze.com/search/shows?q=all";


const ViewDetails = () => {

    const movieID = useParams();
    console.log("printing the movie id" , movieID)

    const [ dataToRender , setDataToRender] = useState([]);

    const getdata = async () => {
        try{
    
            const resp = await fetch(API_URL);
            if (!resp.ok) {
                throw new Error('Network is no');
            }
            toast.success(" Feched the data successfully !")
            const data = await resp.json();
            console.log(" the responseeeeeee is --> " , data)
            // Find the movie by its ID in the array
                const foundMovie = data.find((value) => {
                    console.log(" printing the vlaue -> ",value.show.id)
                    console.log('printtf the idddd ',movieID.id.toString())
                    return value.show.id.toString() === movieID.id;
                });
            console.log("Printing the result of the required movie --->> " , foundMovie)
            setDataToRender(foundMovie);
    
        }
        catch{
            toast.error(" Error in fetching the data of movie ..")
        }
        
    }

    useEffect(() =>{
        getdata()
    },[])
  

    // console.log("movie id is " ,setDataToRender.show.id );
    // making call to fetch the data from the api
    const obj = dataToRender;
    // const [readmoreshow, setReadmoreshow] = useState(false);
    const description = `${obj?.show?.summary}`


 return (
    <div className='parentdiv' >

   
    <div className="content">
                             
                                <img src={obj?.show?.image?.medium} className="imagesize" />
                                
                                <div className="movie-info">
                                    <div className="movie-details">
                                    <h4 className="movie-name">{obj?.show?.name}</h4>
                                    <h4 className="movie-price">SCORE  {obj.score}</h4>
                                    </div>
                                    
                                    <div className='features' >
                                    <div className='generes' >
                                        <h2>{obj?.show?.genres?.[0]} </h2>
                                    </div>
                                    <div>
                                        <h3>Ratings : {obj?.show?.rating?.average}</h3>
                                    </div>
                                    </div>

                                   

                                    <div className="description">
                                    {description}
                                    
                                    </div>
                                </div>

                                <button className='button2'

                                >
                                    Watch Now !
                                </button>
        
    </div> 
    </div>
    )
};


export default ViewDetails