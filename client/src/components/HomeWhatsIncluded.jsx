import React from 'react'
import '../styles/HomeWhatsIncluded.scss'
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const HomeWhatsIncluded = () => {
  return (
    <section className='whatsincludedContainer'>
        <div className="whatsincludedSubContainer">
            <h1>Included</h1>
            <div className="content">
                <FaCheck  />
                <p>1 Entrance ticket for Wet World Park, Shah Alam</p>
            </div>
        </div>
        <div className="whatsNotincludedSubContainer">
        <h1>Not Included</h1>
        <div className="contentContainer">

            <div className="content">
                <RxCross2 />
                <p>Locker</p>
            </div>
            <div className="content">
                <RxCross2 />
                <p>Tube</p>
            </div>
            <div className="content">
                <RxCross2 />
                <p>Meals</p>
            </div>
            <div className="content">
                <RxCross2 />
                <p>Parking</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default HomeWhatsIncluded