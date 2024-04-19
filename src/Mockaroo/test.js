import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [message, setMessage] = useState('');

  const generateDatabase = async () => {
    try {
      setIsGenerating(true);
      const response = await axios.post('URL_DU_ENDPOINT_POUR_GENERER_LA_BASE_DE_DONNEES');
      setMessage('Base de données générée avec succès !');
    } catch (error) {
      console.error('Erreur lors de la génération de la base de données :', error);
      setMessage('Une erreur est survenue lors de la génération de la base de données.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div>
      <h1>Générateur de base de données MySQL</h1>
      <button onClick={generateDatabase} disabled={isGenerating}>
        {isGenerating ? 'Génération en cours...' : 'Générer la base de données'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
