import React, { useState } from 'react';
import axios from 'axios';

const Generateur = () => {
    const [message, setMessage] = useState('');

    const generateData = async () => {
        try {
            const response = await axios.post('/api/generate-data');
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Une erreur est survenue lors de la génération des données.');
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={generateData}>Générer des données</button>
            <p>{message}</p>
        </div>
    );
};

export default Generateur;
