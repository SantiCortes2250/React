import axios from "axios"
import React, {useState, useEffect} from "react"
import Form from "./Components/Form"
import ListImages from "./Components/ListImages"

function App() {

  const [word, setword] = useState('')
  const [images, setimages] = useState([])
  const [paginator, setpaginator] = useState(1)
  const [totalPaginator, settotalPaginator] = useState(1)

  useEffect(() => {
    if(word === '') return;

    const consultApi = async () =>{
      const paginator2 = 30;

      const key = '33680349-812d8f2803ac43035b380b1a2'
      const url = `https://pixabay.com/api/?key=${key}&q=${word}&per_page=${paginator2}&page=${paginator}`

      const {data} = await axios.get(url)
      setimages(data.hits)

      const calculateTotalPagine = Math.ceil(data.totalHits / paginator2)
      settotalPaginator(calculateTotalPagine)

      const jumbotron = document.querySelector('.jumbotron')
      jumbotron.scrollIntoView({ behavior: 'smooth'})


    }

    consultApi()
    
  }, [word, paginator])

  const PaginateFormer = () =>{

    if(paginator === 0) return;
    const paginateActual = paginator - 1
    setpaginator(paginateActual)

  }


  const PaginateFollowing = () =>{

    const paginaActual = paginator + 1;

    if(paginaActual > totalPaginator) return;

    
    setpaginator(paginaActual)
  }
  
 

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Search Images</p>
        <Form
        word={setword}/>
      </div>
      <div className="row justify-content-center">
        <ListImages 
          key={images.id}
          images={images}
        />

        {(paginator === 1) ? null : 
        (<button
        type="button"
        className="btn btn-info m  w-25 m-1"
        onClick={PaginateFormer}
        >
          &laquo; Former 
        </button>)}


        {(paginator === totalPaginator) ? null : 
        (
          <button
          type="button"
          className="btn btn-info w-25 m-1"
          onClick={PaginateFollowing}
          >
            Following &raquo;
          </button>
        )}
      </div>
    </div>
  )
}

export default App
