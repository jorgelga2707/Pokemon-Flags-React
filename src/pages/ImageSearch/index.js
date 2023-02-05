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
    const [ all, setAll ] = useState([]);

    const fetchImage = async() => {
        const response = await getDataFromPokemon(`https://pixabay.com/api/?key=23400745-88c9fb4b47626b42faf23986e&q=all&per_page=50`);
        setAll(response.hits);
    }

    const handleInput = (e) => {
        const image = e.target.value;

        if (image.length === 0) {
            fetchImage();
        }

        if(image.length > 3){
            handleSearchPixelbay(e.target.value);
        }
    }

    const handleSearchPixelbay = async(valor) => {
        const response = await getDataFromPokemon(`https://pixabay.com/api/?key=23400745-88c9fb4b47626b42faf23986e&q=${valor}&per_page=50`);
        setAll(response.hits);
        console.log(response.hits);
    }

    useEffect( () => {
        fetchImage()
    }, [] )

    return (
        <div className="imagenes mt-5">
            <input type="text" className="form-control input-search mb-5" onChange={handleInput} placeholder="Search for image on Pixelbay" />
            <div className="contenedor">
                <div className="presentacion">
                    {
                        all.length > 0 && all.map( (a, i) => (
                            i+1 <= 10 ? (
                                <div className="column-image mr-img mb-img">
                                    <img src={a.webformatURL} alt="" className="image" /> 
                                </div>
                            ) : (
                                ""
                            )
                        ))
                    }
                </div>
                <div className="presentacion">
                    {
                        all.length > 0 && all.map( (a, i) => (
                            i+1 > 10 && i+1 <= 20  ? (
                                <div className="column-image mr-img mb-img">
                                    <img src={a.webformatURL} alt="" className="image" />   
                                </div>
                            ) : (
                                ""
                            )
                        ))
                    }
                </div>
                <div className="presentacion">
                    {
                        all.length > 0 && all.map( (a, i) => (
                            i+1 > 20 && i+1 <= 30 ? (
                                <div className="column-image mr-img mb-img">
                                    <img src={a.webformatURL} alt="" className="image" />   
                                </div>
                            ) : (
                                ""
                            )
                        ))
                    }
                </div>
                <div className="presentacion">
                    {
                        all.length > 0 && all.map( (a, i) => (
                            i+1 > 30 && i+1 <= 40 ? (
                                <div className="column-image mr-img mb-img">
                                    <img src={a.webformatURL} alt="" className="image" />   
                                </div>
                            ) : (
                                ""
                            )
                        ))
                    }
                </div>
                <div className="presentacion">
                    {
                        all.length > 0 && all.map( (a, i) => (
                            i+1 > 40 && i+1 <= 50 ? (
                                <div className="column-image mb-img">
                                    <img src={a.webformatURL} alt="" className="image" />   
                                </div>
                            ) : (
                                ""
                            )
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default ImageSearch;