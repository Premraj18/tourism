import React from 'react'
import DetailItem from './DetailItem'
import data from '../data/JanData.json'

const Detail4 = () => {
    
    let d=data[4];
  return (
    <DetailItem ImgUrl={d.imgUrl} title={d.place} description = {d.description}/>
  )
}

export default Detail4
