import React from 'react'
import DetailItem from './DetailItem'
import data from '../data/JanData.json'

const Detail17 = () => {
    
    let d=data[17];
  return (
    <DetailItem ImgUrl={d.imgUrl} title={d.place} description = {d.description}/>
  )
}

export default Detail17
