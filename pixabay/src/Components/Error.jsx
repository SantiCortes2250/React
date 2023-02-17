import React from 'react'

const Error = ({message}) => {
  return (
    <p className="my-3 text-center text-black alert alert-primary">{message}</p>
  )
}

export default Error