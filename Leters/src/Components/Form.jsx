import React, {useState} from "react";



const Form = () => {

    const [search, setsearch] = useState({
        artist: '',
        song: ''
    })

    const [error, seterror] = useState(false)


    const { artist, song } = search
    
    
    const HandleChange = (e) =>{
        setsearch({
            ...search,
            [e.target.name]:e.target.value
        })
    
    }

    const HandleSubmit = (e) =>{
        e.preventDefault()

        if(artist.trim() === '' || song.trim() === ''){
            seterror(true)
            return;
        }

        seterror(false)


    }
  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form 
          onSubmit={HandleSubmit}
          className="col card text-white bg-transparent mb-5 pt-5 pb-2">
            <fieldset>
              <legend className="text-center">Serch Music Leters</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artist</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Name Artist"
                      onChange={HandleChange}
                      value={artist}
                    
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Song</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Name Song"
                      onChange={HandleChange}
                      value={song}
                  
                    />
                  </div>
                </div>
              </div>
              <button
              type="submit"
              className="btn btn-primary float-right"

              >
                Search
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
