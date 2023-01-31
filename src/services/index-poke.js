//este va a ser el archivo donde vamos almacenar nuestras peticiones de distintas apis
//una buena practica es tener la url del api en una variable

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=100";

//PODEMOS CREAR UNA FUNCION GENERICA
//como parametro vamos a recibir la url que puede ver la que lista  a la que nos da el detalle
//url sera el parametro que recibe la url hacia donde se hara la peticion
//url = BASE_URL siginifica que si la url esta vacia es decir cuando llamamos a la funcion no le pasamos el valor por defecto sera BASE_URL
//la URL tomara el valor de BASE_URL
//getDataFromPokemon()

//url toma el valor de link.com
//getDataFromPokemon(link.com)

export const getDataFromPokemon = async (url = BASE_URL) => {
    try{
        //ahora debemos ejecutar el fetch para poder llamar la informacion
        const response = await fetch(url);
        const data = await response.json();
        console.log("data", data);
        return data
    }
    catch(error){
        console.log(error.message);
    }
}