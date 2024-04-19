import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const DataList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/data');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des données :', error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/data/${id}`);
      fetchData();
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la suppression des données :', error);
    }
  };

  const updateData = async (id, newData) => {
    try {
      const formData = new FormData();
      formData.append('Name', newData.name);
      formData.append('email', newData.email);

      await axios.put(`http://localhost:8000/api/data/${id}`, formData);
      fetchData();
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la modification des données :', error);
    }
  };

  return (
    <div>
      <h1>Liste des données</h1>
      {loading ? (
        <p>Chargement en cours...</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Button variant="danger" onClick={() => deleteData(item.id)}>Supprimer</Button>{' '}
                  <Link to={`/edit/${item.id}`}><Button>Modifier</Button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default DataList;
