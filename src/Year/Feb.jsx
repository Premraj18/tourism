import React from 'react'
import TravelItem from '../Pages/TravelItem'
// import img from './Image/MalikGhat.jpg'
const Feb = () => {
  return (
    <div>
      {
        data && data.map(element => {
            return <div className="flex" key={element.Url}>
            <TravelItem title={element.place} description={element.description} imgUrl={element.imgUrl}
              newsUrl=""/>
            </div>
        })
      }
    </div>
  )
}

export default Feb
