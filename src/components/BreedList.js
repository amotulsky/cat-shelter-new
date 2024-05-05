import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BreedList.css';

function BreedList({ onBreedSelect }) {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        const fetchBreeds = async () => {
            try {
                const response = await axios.get('https://api.thecatapi.com/v1/breeds', {
                    headers: {
                        'x-api-key': 'live_csDCRXY18kdJjA9eVjsjMsXybufBe3lqhNI1uMTeIQRA9aCOblql9vI3q9NDQAvm'
                    }
                });
                setBreeds(response.data);
            } catch (error) {
                console.error("Error fetching breeds:", error);
            }
        };

        fetchBreeds();
    }, []);

    const handleBreedChange = (event) => {
        onBreedSelect(event.target.value);
    };

    return (
        <div className="breed-selector breed-list" style={{ textAlign: 'center' }}>
            <label htmlFor="breedSelect" style={{ marginRight: '10px', fontSize: '18px' }}>Find a Breed:</label>
            <select id="breedSelect" onChange={handleBreedChange} defaultValue="">
                <option value="" disabled>Select a breed to see available cats:</option>
                {breeds.map(breed => (
                    <option key={breed.id} value={breed.id}>
                        {breed.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default BreedList;
