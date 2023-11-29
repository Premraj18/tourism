import React from 'react'
import { Link } from 'react-router-dom'

const TravelItem = (props) => {
    return (
        <>
            {/* <div classNameName='bix mx-3'>
                <div classNameName="card" style={{ width: '100%' }}>
                    <img src={props.imgUrl} classNameName="card-img-top" alt="..." />
                    <div classNameName="card-body">
                        <h5 classNameName="card-title">{props.title}</h5>
                        <p classNameName="card-text">{props.description}...</p>
                        <a href={props.newsUrl} target='blank' classNameName="btn btn-sm btn-primary">Visit</a>
                    </div>
                </div>
            </div> */}
            <div
        className="block w-80 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <a href="#!">
          <img
            className="rounded-t-lg"
            src={props.imgUrl} 
            alt="" />
        </a>
        <div className="p-6">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {props.title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {props.description}...
          </p>  
          <Link to={`/${props.link}`}>     
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              Know More
            </button>
          </Link> 
        </div>
      </div>
        </>
    )
}

export default TravelItem
