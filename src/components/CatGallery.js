// CatGallery.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CatGallery.css';

function CatGallery({ breedId, toggleFavorite }) {
    const [cats, setCats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!breedId) return; 
        setIsLoading(true);
        const fetchCats = async () => {
            try {
                const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=10`, {
                    headers: {
                        'x-api-key': 'live_csDCRXY18kdJjA9eVjsjMsXybufBe3lqhNI1uMTeIQRA9aCOblql9vI3q9NDQAvm' 
                    }
                });
                setCats(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching cats by breed:", error);
                setIsLoading(false);
            }
        };

        fetchCats();
    }, [breedId]);

    const handleToggleFavorite = (catId, catUrl) => {
        toggleFavorite(catId, catUrl); 
    };

    return (
        <div className="gallery">
            {isLoading ? <p>Loading...</p> : cats.map(cat => (
                <div key={cat.id} className="cat-image">
                    <img src={cat.url} alt="Cat" />
                    <button onClick={() => handleToggleFavorite(cat.id, cat.url)} className="favorite-button">❤️</button>
                </div>
            ))}
        </div>
    );
}

export default CatGallery;
