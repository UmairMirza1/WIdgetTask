import React, {Component} from 'react'
import DecButton from './DecButton'
import AddButton from './AddButton'
import Widget from './Widget'
import Area from './Area'
import './style.css'

export default function MainComponent() {
  return (
    <>
    <div className='MainDiv'>
      <Widget>   </Widget>
      <AddButton>   </AddButton>
      <DecButton>   </DecButton>
      <Area></Area>
    </div>
    </>
  )
}
