import React from 'react'
import DetailItem from './DetailItem'
import data from '../data/JanData.json'

const Detail3 = () => {
    
    let d=data[3];
  return (
    <DetailItem ImgUrl={d.imgUrl} title={d.place} description = {d.description}/>
  )
}

export default Detail3
