import React, { createContext, useState, useEffect, useContext } from 'react';


export const DataContext = createContext({});

const DataProvider = (props) => {
    const { match } = props;
    const [pokemon, setPokemon] = useState([]);
    const [description, setDescription] = useState([]);
    const [searchPokemon, getSearchPokemon] = useState({
        name: '',
        number: '',
        type: []
    });
    const [id,setId] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [search, savedSearch] = useState(false);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [clickText, setClickText] = useState();
    const [selectedOption, setSelectedOption] = useState();

    const { name, number, type } = searchPokemon;

    const providerValuePoke = {
        pokemon,
        getSearchPokemon,
        savedSearch,
        loading,
        page,
        total,
        setPage,
        notFound,
        description,
        setDescription,
    }

    return (
        <DataContext.Provider
            value={providerValuePoke}
        >
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;