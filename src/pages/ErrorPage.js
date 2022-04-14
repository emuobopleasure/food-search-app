import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const ErrorPage = ({content}) => {
  return (
    <section className='error-page'>
        <h1 className='about-header my-[5rem] text-center text-xl font-bold'>
             opps! page not found
        </h1>
        <Button
            content={<Link to='/'>Back Home</Link>}
        />
    </section>
  )
}

export default ErrorPage