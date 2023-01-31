import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getDataFromPokemon } from '../../services/index-poke';
import { Container, Grid, Button, Chip} from '@mui/material'
import React from 'react'

const Detail = () => {

    //establecer el hook de parametro
    let {name} = useParams();
    const history = useNavigate();
    const[country,setCountry] = useState({});

    const fetchCountry = async () => {
        const response = await getDataFromPokemon(`https://restcountries.com/v3.1/name/${name}`)
        console.log(response)
        setCountry(response[0]);
    };

    useEffect(() => {
        fetchCountry();
    },[])

    return (
        <Container>
            <Button onClick={() => history(-1)} variant="outlined" >
                Back
            </Button>
            {Object.keys(country).length > 0 && (
                <Grid container alignItems="center" spacing={3} sx={{height : "100vh"}}>
                    <Grid item md={6}>
                        <img src={country?.flags?.svg} width={400} alt="banderas" />
                    </Grid>
                    <Grid item md={6}>
                        <h3>{country.name.common}</h3>
                        <Grid container spacing={3}>
                            <Grid item md={6}>
                                <p><b>Native name : </b>{country.name.official}</p>
                                <p><b>Population : </b>{country.population}</p>
                                <p><b>Region : </b>{country.region}</p>
                                <p><b>Subregion : </b>{country.subregion}</p>
                                <p><b>Capital:  </b> {country.capital}</p>
                            </Grid>
                            <Grid item md={6}>
                                <p><b>Top Level Domain : </b>{country.tld}</p>
                                <p>
                                    <b>Currencies : </b>
                                    {Object.keys(country.currencies).map((currency)=>(
                                        <span>{currency} </span>
                                    ))}
                                </p>
                                <p>
                                    <b>Languages : </b>
                                    {Object.keys(country.languages).map((language) => (
                                        <span>{language} , </span>
                                    ))}
                                </p>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>
             )}
            
        </Container>
    )
}

export default Detail
