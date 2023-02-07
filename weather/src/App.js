import React, {useState, useEffect} from 'react'
import Error from './Components/Error'
import Form from './Components/Form'
import Header from './Components/Header'
import Weather from './Components/Weather'



const App = () => {

  const [search, setSearch] = useState({
    city: '',
    country: ''
  })
  const [consult, setConsult] = useState(false)
  const [result, setResult] = useState({})
  const [error, setError] = useState(false)



  const { city, country } = search;

  useEffect(() => {

    const consultApi = async () =>{
    if(consult){
      const appId = '0b9a76ea54f8f93dda9f087a49dbb26f';
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
  
      const res = await fetch(url);
      const result = await res.json();
      setResult(result)
      setConsult(false)

      if(result.cod === "404"){
        setError(true)
      }else{
        setError(false)
      }
      
  
    }
    
    }
    consultApi()
  }, [consult])

  let component;

  if(error){
    component = <Error message="not results"/>
  }else{
    component = <Weather result={result}/>
  }
  

  return (
    <>
    <Header
    title='Weather'
    />
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            <Form
            search={search}
            setSearch={setSearch}
            setConsult={setConsult}/>
          </div>
          <div className="">
            {component}
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default App
