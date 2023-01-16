import React,{useState} from 'react'
import { Input } from '../../IU/Input/Input'


export const Main = () => {

    const [contenido, setContenido] = useState([])


    const funtionFetch = () =>{

        const input = document.getElementById('input')
        const url = 'https://rickandmortyapi.com/api/character/?name=' + input.value
        fetch(url)
        .then (response => response.json() )
        .then (data => setContenido(data.results))

    }

    const evento = (e) =>{
        if(e.keyCode === 13){
            funtionFetch()
        }
    }



  return (
    <div>
        <div id = 'container-input'>
            <Input event={evento} id= "input"/>
        </div>
        <hr />
        <div id='container'>

            {contenido.map((index) => {
                return (
                        <div id="cards">
                            <div id="image">
                                <img src={index.image} alt="" />
                            </div>
                            <div id="informacion">
                                <h2>{index.name}</h2>
                                <h3>Estado:</h3>
                                <p>{index.status}</p>
                                <h3>Genero:</h3>
                                <p>{index.gender}</p>
                                <h3>Ultima Locacion:</h3>
                                <p>{index.location.name}</p>
                            </div>
                        </div>
                )
            })
        }
    </div>

    </div>

  )
}
