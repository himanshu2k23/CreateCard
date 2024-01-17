

import React, { useState } from 'react'
import './App.css'
import Canvas from './assets/Canvas'
import UndoAndRedo from './assets/UndoAndRedo'
import Name from './assets/Name'

function App() {
  const [BridesName, setBridesName] = useState("Bride's Name")
  const [GroomsName, setGroomsName] = useState("Groom's Name")
  const [Font, setFont] = useState("")
  const [FontSize, setFontSize] = useState(20)
  const [FontColor, setFontColor] = useState("#000000")



  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-gray-300 " style={{ justifyContent: "space-evenly" }} >
      {/* <UndoAndRedo/> */}
      <Canvas GroomsName={GroomsName} BridesName={BridesName} Font={Font} FontColor={FontColor} FontSize={FontSize} />
      <Name
        GroomsName={GroomsName} BridesName={BridesName} Font={Font} FontColor={FontColor} FontSize={FontSize}
        setGroomsName={setGroomsName} setBridesName={setBridesName} setFont={setFont} setFontColor={setFontColor} setFontSize={setFontSize}
      />
    </div>
  )
}

export default App
