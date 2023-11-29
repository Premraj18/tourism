import React from 'react'
import TravelItem from '../Pages/TravelItem';
import './Jan.css'
import Navbar from '../components/Navbar';
import JanData from './data/JanData.json'

const Jan = () => {
   
  return (
    <>
    <Navbar/>
    <div className='cont'>
      <h2 className='mt-40 text-4xl font-bold text-center underline'>January- Lucknow</h2>
    </div>
      <div className=" flex gap-28 flex-wrap mx-40" >
        <div className='w-full'>
          <h2 className='w-full text-3xl font-bold mt-16'>Most Visited Destination</h2>
        </div>
        <div className='flex justify-center gap-x-24 gap-y-20 flex-wrap' style={{marginTop:'-80px'}}>
        {JanData && JanData.map((element) => {
        //   console.log(element);
          return <div className="flex" key={element.Url}>
            <TravelItem title={element.place} description={element.description} imgUrl={element.imgUrl}
              newsUrl=""/>
          </div>
        })}
        </div>

      
    </div>
  </>
  )
}

export default Jan
