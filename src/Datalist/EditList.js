import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditList = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/data/${id}`);
      const { name, email } = response.data;
      setFormData({ name, email });
    } catch (error) {
      console.error('Erreur lors de la récupération des données de modification :', error);
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/data/${id}`, formData);
      console.log('Données mises à jour avec succès');
    } catch (error) {
      console.error('Erreur lors de la modification des données :', error);
    }
  };

  return (
    <div>
      <h1>Modifier les données</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default EditList;
