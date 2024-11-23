import Navbar from '@/app/Components/navbar/Navbar';
import React from 'react'

function Home() {
  const name:string = "Tahira Ibrahim";
  return (
    <>
      <p> Hello, {name} Here</p>
      <Navbar /> 
    </>
  )
}

export default Home