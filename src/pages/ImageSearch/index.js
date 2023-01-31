import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getDataFromPokemon } from "../../services/index-poke";
import {
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,CircularProgress
  } from "@mui/material";


const ImageSearch = () => {
    const[search, setSearch] = useState({});
    const fetchImageSearch = async () => {
        const response = await getDataFromPokemon(
          "https://pixabay.com/api/?key=23400745-88c9fb4b47626b42faf23986e&q=7D&per_page=50"
        );
        setSearch(response.hits);
        console.log(response.hits);
      };

    const handleSearchImage = async (event)=>{
        const imageName = event.target.value

        if (imageName.lenght === 0){
            fetchImageSearch();
        }
    
        if(imageName.length > 3){
            handleSearchPixelBay(event.target.value);
        }
     };

     const handleSearchPixelBay = async(val) => {
        const response = await getDataFromPokemon(`https://pixabay.com/api/?key=23400745-88c9fb4b47626b42faf23986e&q=${val}&per_page=50`);
        setSearch(response.hits);
        console.log(response.hits.type);
     }

      useEffect(() => {
        fetchImageSearch();
      }, []);
    
      return(
        <Container>
            <Grid container spacing={3} mt={5}>
                <Grid item md={6} className="input-country">
                    <TextField 
                    onChange={handleSearchImage}
                    label="Search for a Image" fullWidth />
                </Grid>
            </Grid>
            <div>
            {search.length > 0 ? (
                    search.map((newsearch, i)=>(
                            i+1 <=10 ? (
                            <Grid item md ={3} xs={12}>
                                <Card>
                                    <CardMedia
                                    component ="img"
                                    height = {200}
                                    width = {200}
                                    image={newsearch.webformatURL} />                    
                               </Card>
                            </Grid>
                            ) : (
                                ""
                            )  
                        ))
                ):(
                    <div>
                        <CircularProgress/>
                        <h4>Cargando...</h4>
                    </div>
                )}
            </div>
            <div>
            {search.length > 0 ? (
                    search.map((newsearch, i)=>(
                            i+1 > 10 && i+1<=20 ? (
                            <Grid item md ={3} xs={12}>
                                <Card>
                                    <CardMedia
                                    component ="img"
                                    height = {427}
                                    width = {640}
                                    image={newsearch.webformatURL} />                    
                               </Card>
                            </Grid>
                            ) : (
                                ""
                            )  
                        ))
                ):(
                    <div>
                        <CircularProgress/>
                        <h4>Cargando...</h4>
                    </div>
                )}
            </div>
            <div>
            {search.length > 0 ? (
                    search.map((newsearch, i)=>(
                            i+1 > 20 && i+1<=30 ? (
                            <Grid item md ={3} xs={12}>
                                <Card>
                                    <CardMedia
                                    component ="img"
                                    height = {427}
                                    width = {640}
                                    image={newsearch.webformatURL} />                    
                               </Card>
                            </Grid>
                            ) : (
                                ""
                            )  
                        ))
                ):(
                    <div>
                        <CircularProgress/>
                        <h4>Cargando...</h4>
                    </div>
                )}
            </div>
            <div>
            {search.length > 0 ? (
                    search.map((newsearch, i)=>(
                            i+1 > 30 && i+1<=40 ? (
                            <Grid item md ={3} xs={12}>
                                <Card>
                                    <CardMedia
                                    component ="img"
                                    height = {427}
                                    width = {640}
                                    image={newsearch.webformatURL} />                    
                               </Card>
                            </Grid>
                            ) : (
                                ""
                            )  
                        ))
                ):(
                    <div>
                        <CircularProgress/>
                        <h4>Cargando...</h4>
                    </div>
                )}
            </div>
            <div>
            {search.length > 0 ? (
                    search.map((newsearch, i)=>(
                            i+1 > 40 && i+1<=50 ? (
                            <Grid item md ={3} xs={12}>
                                <Card>
                                    <CardMedia
                                    component ="img"
                                    height = {427}
                                    width = {640}
                                    image={newsearch.webformatURL} />                    
                               </Card>
                            </Grid>
                            ) : (
                                ""
                            )  
                        ))
                ):(
                    <div>
                        <CircularProgress/>
                        <h4>Cargando...</h4>
                    </div>
                )}
            </div>
        </Container>
      )
    
};

export default ImageSearch;