import React from 'react'

const Noticie = ({noticie}) => {

    const {urlToImage, url, title, description, source} = noticie;


    const imagen = urlToImage ? (
      <div className="card-image">
        <img src={urlToImage} alt={title} />
        <span className="card-title">{source.name}</span>
      </div>
    ) : null;
  return (
    <div className="col s12 m5 l4">
        <div className="card">
            {imagen}
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <a 
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='waves-effect waves-light button'
                >View Noticie</a>
            </div>
        </div>
    </div>
  )
}

export default Noticie