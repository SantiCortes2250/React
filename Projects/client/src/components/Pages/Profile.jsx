import React, {useState} from 'react'
import Nav from '../layout/Nav'
import Sidebar from '../layout/Sidebar'
import CardLogout from '../layout/CardLogout'
import styles from '../../CSS/dashboard.module.css'
import InfoUser from '../layout/InfoUser'




const Profile = () => {

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
        <InfoUser/>

    </div>
    </>
   
  )
}

export default Profile