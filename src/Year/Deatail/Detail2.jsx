import React from 'react'
import DetailItem from './DetailItem'
import data from '../data/JanData.json'

const Detail2 = () => {
    
    let d=data[2];
  return (
    <DetailItem ImgUrl={d.imgUrl} title={d.place} description = {d.description}/>
  )
}

export default Detail2
