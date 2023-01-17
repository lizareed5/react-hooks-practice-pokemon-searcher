import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  
  const [pokemonList, setPokemonList] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((response) => response.json())
    .then(data => setPokemonList(data))
  }, [])
  
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value)
  }

  const filteredPokemonList = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput.toLowerCase()))

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPokemonObj = {
      // key: e.target.name.value,
      name: e.target.name.value,
      hp: e.target.hp.value,
      sprites: {
        front: e.target.frontUrl.value,
        back: e.target.backUrl.value
      }
    }
    handlePost(newPokemonObj)
  }
  
  const handlePost = (newPokemonObj) => {
    setPokemonList([...pokemonList, newPokemonObj])
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemonObj)
    })
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
        handleSubmit={handleSubmit}
      />
      <br />
      <Search 
        searchInput={searchInput}
        handleSearchInput={handleSearchInput}
      />
      <br />
      <PokemonCollection 
        pokemonList={filteredPokemonList}
      />
    </Container>
  );
}

export default PokemonPage;
