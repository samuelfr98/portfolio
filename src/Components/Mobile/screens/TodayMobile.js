import React from 'react'

const TodayMobile = () => {

  // can flash ibm card on screen when loading
  return (
    <div className="mobileScreen">
    <div className="screenHeaderMobile">
      career
    </div>
    <div className="screenContainerMobile">
      <div className="screenButton" onClick={() => ''}>
        <p>ibm</p>
        {/* <img>open</img> */}
      </div>
      <div className="screenButton" onClick={() => ''}>
        <p>certifications</p>
      </div>

      <div className="screenButton" onClick={() => ''}>
        <p>design thinking</p>
      </div>
      <div className="screenButton" onClick={() => ''}>
        <p>awards</p>
      </div>

    </div>
  </div>
  )
}

export default TodayMobile