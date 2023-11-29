import React from 'react'
import { Link } from 'react-router-dom'
import Map from '../Map/Map'
import JanData from '../data/JanData.json'
import Navbar from '../../components/Navbar'
import TravelItem from '../../Pages/TravelItem'

const FebMap = () => {
  return (
    <>
      <Map />
      <Link className="link2" to="/Feb"></Link>
      <Navbar />
      <div className=" flex gap-28 flex-wrap mx-40" >
        <div className='w-full'>
          <h2 className='w-full text-3xl text-center font-bold my-12'>Most Visited Destination</h2>
        </div>
        <div className='flex justify-center gap-x-24 gap-y-20 flex-wrap' style={{ marginTop: '-80px' }}>
          {JanData && JanData.map((element) => {
            //   console.log(element);
            return <div className="flex" key={element.Url}>
              <TravelItem title={element.place} description={element.description} imgUrl={element.imgUrl}
                newsUrl="" />
            </div>
          })}
        </div>


      </div>
    </>
  )
}

export default FebMap
