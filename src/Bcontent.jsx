import React from 'react'
import Accordion from './Accordion'
import { CarouselDefault } from './CarouselDefault'

function Bcontent() {
  return (
    <div className='m-4 p-10 flex flex-col gap-5 items-center h-80'>
        <CarouselDefault />
        <Accordion />
    </div>
  )
}

export default Bcontent