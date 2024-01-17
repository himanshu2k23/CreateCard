import React from 'react'

export default function Canvas({GroomsName, BridesName, Font, FontColor, FontSize} ) {
  return (
    <div className="flex flex-col items-center justify-between  w-[600px] h-[800px] p-2 bg-white" style={{ backgroundImage: "url('/invitation.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <p className=' mt-[300px]' style={{ fontSize: `${FontSize}px`, color: FontColor, fontFamily: Font  }}>{GroomsName}</p>
      <p className='mb-[335px]' style={{ fontSize: `${FontSize}px`, color: FontColor , fontFamily: Font }}>{BridesName}</p>
    </div>
  )
}
