import React, { useState } from 'react'

export default function Name({ GroomsName, BridesName, Font, FontColor, FontSize, setGroomsName, setBridesName, setFont, setFontColor, setFontSize }) {

  const handleColorChange = (event) => {
    setFontColor(event.target.value)
  };


  return (
    <div className='flex flex-col justify-between w-[300px] h-[800px] py-10'>
      <div className='flex flex-col space-y-10 ' >
        <div className='mt-10'>
          <label for="countries" className="block mb-1 text-sm font-medium text-gray-900">Font</label>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option selected>Choose a font</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className='flex flex-row '>
          <form className="max-w-sm mx-auto">
            <label for="number-input" className="block mb-2 text-sm font-medium text-gray-900">Font Size:</label>
            <input type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100px] p-2.5 " min="10" max="50" step="1" value={FontSize} onChange={(e)=>setFontSize(e.target.value)} required />
          </form>
          <form className="max-w-sm mx-auto">
            <label for="color-input" className="block mb-2 text-sm font-medium text-gray-900">Font Color:</label>
            <input type="color" id="color-input" className="rounded-md  h-[42px] w-[90px] m-0" value={FontColor} onChange={(e)=>setFontColor(e.target.value)} required />
          </form>
        </div>
      </div>
      <div className=''>
        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Groom's Name</label>
        <input type="text" id="first_name" className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Name" required  onChange={(e) => setGroomsName(e.target.value)} />
        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Bride's Name</label>
        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Name" required onChange={(e) => setBridesName(e.target.value)}/>
      </div>
    </div>
  )
}
