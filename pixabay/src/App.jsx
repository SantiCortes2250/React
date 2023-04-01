import axios from "axios"
import React, {useState, useEffect} from "react"
import Form from "./Components/Form"
import ListImages from "./Components/ListImages"
import styles from "./CSS/container.module.css"

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
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.overlay}>
          <h2>Find the best images to view and download</h2>
          <p>Many images for you see and download</p>
          <Form
          word={setword}/>
        </div>
      </div>
   
      <div className={styles.images}>
      <p className={styles.title}>{word}</p>
        <ListImages 
          key={images.id}
          images={images}
        />

        {(paginator === 1) ? null : 
        (<button
        type="button"
        className=""
        onClick={PaginateFormer}
        >
          &laquo; back 
        </button>)}


        {(paginator === totalPaginator) ? null : 
        (
          <button
          type="button"
          className=""
          onClick={PaginateFollowing}
          >
            next &raquo;
          </button>
        )}
      </div>
    </div>
  )
}

export default App
