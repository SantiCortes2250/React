import React, {useState} from 'react'
import {Sub} from '../types'



interface FormState {
  values: Sub
}

interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const Form = ({onNewSub}: FormProps) => {

    const [values, setValues] = useState<FormState["values"]>({
        nick: '',
        avatar: '',
        subMonths: 0,
        description: ''
    })

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        
    }


    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        onNewSub(values)


        

    }


  return (
    <div>
        <form
        onSubmit={HandleSubmit}
        >
            <input 
            type="text" 
            name='nick' 
            placeholder='Ingrese el nick'
            onChange={HandleChange}
            value={values.nick}
            />
            <input 
            type="text" 
            name='avatar' 
            placeholder='Ingrese el avatar'
            onChange={HandleChange}
            value={values.avatar}
            />
            <input 
            type="number" 
            name='subMonths' 
            placeholder='Ingrese la cantidad de meses'
            onChange={HandleChange}
            value={values.subMonths}
            />
            <textarea 
            name='description' 
            placeholder='Ingrese la descripcion'
            onChange={HandleChange}
            value={values.description}
            />
            <button>Save new Sub</button>
        </form>
    </div>
  )
}

export default Form