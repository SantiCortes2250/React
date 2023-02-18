import axios from "axios"
import React, {useState, useEffect} from "react"
import Form from "./Components/Form"


function App() {

  const [searchLeter, setsearchLeter] = useState({})


  useEffect(() => {

    if(Object.keys(searchLeter).length === 0) return;

    const ApiLeters = async () =>{

      const {artist, song} = searchLeter
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`
      const {data} = await axios.get(url)
      console.log(data.lyrics)

    }

    ApiLeters()


  }, [searchLeter])
  


  return (
    <>
    <Form setsearchLeter={setsearchLeter}/>
     
    </>
  )
}

export default App
