import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function FetchApi() {

    const [results, setResults] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async () => {
        const responce = await axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
        setResults(responce.data);
    }

    return (
        <ul>
        {results.map(result => (
            <li key={result.codigo}>{result.nome} - {result.codigo}</li>
        ))}
        </ul>
    )
}