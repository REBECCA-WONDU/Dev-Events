'use client'

import Image from "next/image"

const ExploreBtn = () => {
  return (
    <button type="button" id="explore-btn" className="mt-7 mx-auto flex flex-col items-center justify-center gap-2" onClick={()=> console.log("Click")}>
        <div className="flex items-center justify-center gap-2">
        <span>Explore Events</span>
        <Image 
          src="/icons/arrow-down.svg" 
          alt="arrow down" 
          width={20} 
          height={20}
        />
      </div>
        </button>
  )
}

export default ExploreBtn