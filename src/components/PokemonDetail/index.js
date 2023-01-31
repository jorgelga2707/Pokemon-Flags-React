import { useState } from "react";
import { Button, Dialog, DialogContent, Grid, Slider,Chip } from "@mui/material";
import { getDataFromPokemon } from "../../services/index-poke";

const PokemonDetail = (props) => {
  const [abrir, setAbrir] = useState(false);

  const [pokemonData, setPokemonData] = useState({});

  const fecthDetailFromPokemon = async () => {
    const pokemon = await getDataFromPokemon(props.url);
    setPokemonData(pokemon);
  };
  //vamos hacer un funcion la cual se encargue de cambiar el estado

  const handleOpenDialog = async () => {
    //cuando se abre el modal es true
    if (!abrir) {
      await fecthDetailFromPokemon();
    }
    setAbrir(!abrir);
  };

  return (
    <div>
      <Button onClick={handleOpenDialog} variant="contained" color="primary">
        Ver Detalle
      </Button>
      <Dialog
        open={abrir}
        fullWidth={"md"}
        maxWidth={"md"}
        onClose={handleOpenDialog}
      >
        <DialogContent>
          {Object.keys(pokemonData).length > 0&&(
            <div>
              <h2>{props.nombre}</h2>
              <Grid container>
              <Grid item md={6}>
                  <h4>Habilidades</h4>
                  {pokemonData.abilities.map((abilitie) => (
                    <Chip
                      label={abilitie.ability.name}
                      color="primary"
                      sx={{ marginRight: 2 }}
                    />
                  ))}
                  <h4>Datos</h4>
                  {pokemonData.types.map((type) => (
                    <Chip
                      label={type.type.name}
                      color="warning"
                      sx={{ marginRight: 2 }}
                    />
                  ))} 
                  <Chip
                    label={`${pokemonData.height / 10} m`}
                    color="success"
                    sx={{ marginRight: 2 }}
                  />
                  <Chip
                    label={`${pokemonData.weight / 10} kg`}
                    color="success"
                    sx={{ marginRight: 2 }}
                  />
                  <h4>Puntos de base</h4>
                  {pokemonData.stats.map((stat) => (
                    <div>
                      <h5>{stat.stat.name}</h5>
                      <Slider
                        defaultValue={+stat.base_stat}
                        aria-label="Always visible"
                        valueLabelDisplay="on"
                        disabled
                      />
                    </div>
                  ))}
                </Grid>
              </Grid>
            </div>
          )}
          <Button onClick={handleOpenDialog}>Cerrar</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PokemonDetail;