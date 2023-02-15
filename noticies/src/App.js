import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Form from './Components/Form'
import Header from './Components/Header'
import Noticies from './Components/Noticies'


const App = () => {
  const [category, setCategory] = useState('')
  const [data, setdata] = useState([])

  useEffect(() => {
    

    const callApi = async() => {
      const API_KEY = '43b16aa23af34def8ac0b82b0a7eeaa2'
      const URL = `https://newsapi.org/v2/top-headlines?country=US&category=${category}&apiKey=${API_KEY}`
      const {data} = await axios.get(URL)
      setdata(data.articles)
    
    }

    callApi()
  }, [category])
  




  return (
    <>
    <Header
      title='Search Noticies'
    />

    <div className="container white">
      <Form
        setCategory={setCategory}
      />

      <Noticies
        
        Noticies={data}
      />

    </div>
    </>
  )
}

export default App
