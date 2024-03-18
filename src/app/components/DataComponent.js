'use client'
import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import './DataComponent.css'; // Importa el archivo CSS de estilos

function DataComponent() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/posts');
        setPosts(response.data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1>Lista de Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2> {/* Título del post */}
            <p>{post.body}</p>   {/* Cuerpo del post */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataComponent;
