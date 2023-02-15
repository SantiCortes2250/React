import React, {useState} from 'react'

const useSelect = (stateInitial, options) => {

    const [state, setstate] = useState(stateInitial)

    const SelectNoticies = () => (
        <select
        className='browser-default'
        value={state}
        onChange={e => setstate(e.target.value)}
        >
        {options.map(element => (
            <option key={element.value} value={element.value}>{element.label}</option>
        ))}
        </select>
    )
   

    return [state, SelectNoticies]
    
  
}

export default useSelect