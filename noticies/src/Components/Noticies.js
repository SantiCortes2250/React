import React from 'react'
import Noticie from './Noticie'

const Noticies = ({Noticies}) => (
    <div className="row">
        {Noticies.map(noticie => (
            <Noticie 
            key={noticie.url}
            noticie={noticie}/>
        ))}
    </div>
)

export default Noticies