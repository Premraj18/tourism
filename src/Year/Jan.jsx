import React from 'react'
import TravelItem from '../Pages/TravelItem';
import './Jan.css'
import Navbar from '../components/Navbar';

const Jan = () => {
    let data = [
        {
            "Url": "0",
            "place": "Rumi Darwaza",
            "imgUrl": "https://banarastourism.in/wp-content/uploads/2023/01/rumi-darwaza--768x512.jpg",
            "description":"Rumi Daravaja is a famous historical landmark in the city of Lucknow, India. It was built in 1784 by Nawab Asaf-ud-Daula, the ruler of Awadh, as a symbol of his love for his wife, Begum Hazrat Mahal. "
        },
        {
            "Url": "1",   
            "place": "Ambedkar memorial Park",
            "imgUrl": "https://banarastourism.in/wp-content/uploads/2023/01/Ambedkar-Park53873-768x459.jpg",
            "description":"The Dr. Babasaheb Ambedkar Memorial Park in Lucknow is a fitting tribute to one of India’s most important historical figures. Ambedkar park is a good Lucknow tourist spot. "
        },
        {
            "Url": "2",
            "place": "Chota Imambara",
            "imgUrl": "https://banarastourism.in/wp-content/uploads/2023/01/chhota-imambara.jpg",
            "description":"The Chota Imambara in Lucknow is a beautiful example of Mughal architecture and one of the city’s most popular tourist attractions."
        }
    ]
  return (
    <>
    <div className="JanBgImg"></div>
    <Navbar/>
    <div className='container'>
      <h2 className='my-10  text-center'>January- Lucknow</h2>
      <div className="">
        {data.map((element) => {
        //   console.log(element);
          return <div className="" key={element.Url}>
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
