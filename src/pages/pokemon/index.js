import { useState, useEffect } from "react";
import { getDataFromPokemon } from "../../services/index-poke";
import { Container, Card, CardContent, CardMedia, Grid} from "@mui/material"
import PokemonDetail from "../../components/PokemonDetail";

const Home = () => {

    const imgURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
    //vamos a crear una variable la cual se enacrgue de guardar la lista de pokemones
    //realizar hooks

    const[pokemons,setPokemons] = useState([]);

    //debemos crear una funcion la cual se encarga de ejecutar el getDataFromPokemon y
    //la data que retorne esa funcion guardada usando setPokemon

    const fetchPokemonList = async() => {
        const listaPokemons = await getDataFromPokemon();
        //ahora que ya recuperamos la lista hay que usar
        //la funcion setPokemon para poder guardarla esa lista de pokemons
        console.log("Lista de pokemones", listaPokemons.results);
        setPokemons(listaPokemons.results);
    }
    //en react hay una funcion usseEffect la cual se ejecuta cuando la pagina esta iniciando, vamos a usar useEffect 
    //si queremos ejecutar algo al inicio de la aplicacion
    //la estructura de useEffect es la siguiente

    useEffect(() => {
        //aca llamamos a la funcion a ejecutar
        fetchPokemonList();
        //importante por ahora los useEffect debemos colocar un array vacio
        //esto se hace para evitar un bucle en la funcion de peticion infinita
    },[]);



    return(
        <Container>
            <h1 className="title-pokemon">
                POKEDEX G19
            </h1>
            <Grid container spacing={3}>
                {
                    pokemons.length > 0 &&
                    pokemons.map((pokemon,index)=>(
                        //aca el codigo visual
                        <Grid item md={4} lg={4} sm={12} xs={12} >
                            <Card className="card-pokemon">
                                <CardMedia component="img" className="img-pokemon" image={`${imgURL}${index+1}.svg`}></CardMedia>
                                <CardContent className="center">
                                    <h3 className = "name-pokemon">{pokemon.name}</h3>
                                </CardContent>
                                <PokemonDetail nombre={pokemon.name} url={pokemon.url} />
                            </Card>
                        </Grid>
                    ))
                }
                
            </Grid>
        </Container>
    )
}

export default Home;