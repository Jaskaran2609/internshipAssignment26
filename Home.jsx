import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import "./Home.css";
import Card from './card/Card';
import Header from "./Header.jsx";

const API_URL = "https://api.tvmaze.com/search/shows?q=all";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchdata();
    }, []);

    console.log("Printing the data getting from the API", data);

    const fetchdata = async () => {
        try {
            const resp = await fetch(API_URL);
            if (!resp.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await resp.json();
            setData(data);
            console.log("Printing the data we got from the API call ", data);
        } catch (error) {
            console.log("Error in fetching the data from the API:", error);
        }
    };

    return (
        <>
            <Header/>
            <div className='parent'>
                <div className='cardsContainer'>
                {data && data.map((item, index) => {
                    console.log("Name:", item?.show?.name);
                    console.log("Image URL:", item?.show?.image?.medium);
                    return (
                        item?.show?.image?.medium && <Card key={index} id={item.show.id}  name={item?.show?.name} imageurl={item?.show?.image?.medium} />
                    );
                   })}
                </div>
            </div>
        </>
    );
};

export default Home;
