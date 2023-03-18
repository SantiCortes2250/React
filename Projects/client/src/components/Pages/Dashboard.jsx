import React, {useState} from 'react'
import Card from '../layout/Card'
import Nav from '../layout/Nav'
import styles from '../../CSS/dashboard.module.css'
import Sidebar from '../layout/Sidebar'
import CardLogout from '../layout/CardLogout'


const Dashboard = () => {

  const [bar, setBar] = useState(false)
  const [open, setOpen] = useState(1)


  return (
    <>
      <CardLogout 
      open={open}/>
      <Nav 
      open={open}
      setOpen={setOpen}
      setBar={setBar}/>
      <Sidebar
      setBar={setBar}
      bar={bar}

      />
     
      <div className={styles.container}>
      <h2 className={styles.title}>Dashboard</h2>
        <Card/>
        <Card/>
        <Card/>
      </div>

    </>
   
  )
}

export default Dashboard