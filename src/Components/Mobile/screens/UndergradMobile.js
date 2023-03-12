import React from 'react'

const UndergradMobile = () => {

  // can flash undergrad card across screen before displaying options
  return (
    <div className="">
    <div className="screenHeaderMobile">
      undergrad
    </div>
    <div className="screenContainerMobile">
      <div className="screenButton" onClick={() => ''}>
        <p>unc chapel hill</p>
        {/* <img>open</img> */}
      </div>
      <div className="screenButton" onClick={() => ''}>
        <p>computer science</p>
      </div>

      <div className="screenButton" onClick={() => ''}>
        <p>entrepreneurship</p>
      </div>
      <div className="screenButton" onClick={() => ''}>
        <p>the sonder market</p>
      </div>

    </div>
  </div>
  )
}

export default UndergradMobile