"use client"
import React, { useState } from 'react'

const page = () => {
  const listItems: string[] = ["option1", "option2", "option3", "option4"]
  const [selected, setSelected] =  useState("Options")
  const [open, setOpen] = useState(false)
  const handleSelect = (item:string) =>{
    setSelected(item)
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className="flex justify-center flex-col m-auto w-max">
      <div>
        <h1 onClick={handleOpen} className='cursor-pointer border-slate-600 bg-slate-400 rounded-lg px-2 py-1'>{selected}</h1>
      </div>
      <div>
        {open && <ul>
        {
          listItems.map((item, index)=> (
            <li key={index} onClick={()=>handleSelect(item)} className='cursor-pointer rounded-lg px-2 py-1'>{item}</li>
          ))
        }
        </ul>}
      </div>
        </div>
  )
}

export default page