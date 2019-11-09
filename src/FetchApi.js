import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


export default function FetchApi() {

    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const searchInputRef = useRef();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const responce = await axios
                .get(`https://parallelum.com.br/fipe/api/v1/carros/marcas?q=${query}`)
            setResults(responce.data);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    }

    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        fetchData();
    }

    const handleClearSearch = () => {
        setQuery('');
        searchInputRef.current.focus();
    }

    return (
        <>
            <form onSubmit={handleSearch}> {/* to make search by pressing Enter bnt */} 
                <input 
                    type='text' 
                    onChange={handleChange} 
                    value={query} 
                    ref={searchInputRef}
                />
                <button type='submit' onClick={fetchData}>Search</button> 
                <button type='button' onClick={handleClearSearch}>Clear</button> 
            </form>
            {
                loading ? (<div>Loading results ...</div>) :
                    <ul>
                    {results.map(result => (
                        <li key={result.codigo}>{result.nome} - {result.codigo}</li>
                    ))}
                    </ul>
            }
               
            { error ? <div>{error.message}</div> : null }
        </>
    )
}