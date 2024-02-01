import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ imageurl, name , id}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/viewdetails/${id}`);
    };

    return (
        <div className="card">
            <img src={imageurl} className="image" alt={name} />
            <div>
                <h1>{name}</h1>
            </div>

            <button
                className="button"
                onClick={handleClick}
            >
                See Details
            </button>
        </div>
    );
};

export default Card;
