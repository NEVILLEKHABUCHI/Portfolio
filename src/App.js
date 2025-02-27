import React from 'react';
import NavBars from './Navbars';

export default function App(){
  return <AppContainer/>
}

function AppContainer() {
  return (
    <div className='appContainer'>
      <ContainerLeft/>
      <ContainerRight/>
    </div>
  )
}

function ContainerLeft() {
  return (
    <div className='containerLeft'>

    </div>
  )
}

function ContainerRight() {
  return (
    <div className='containerRight'>
        <NavBars />
    </div>
  )
}