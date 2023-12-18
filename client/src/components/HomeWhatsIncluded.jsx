import React from 'react'
import '../styles/HomeWhatsIncluded.scss'
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { BiSolidDollarCircle } from 'react-icons/bi';


const HomeWhatsIncluded = () => {
  return (
    <section className='whatsincludedContainer'>
         <div className="whatsincludedSubContainer">
            <h1>Cancellation policy</h1>
            <div className="content">
                <BiSolidDollarCircle  />
                <p>These tickets can't be cancelled or rescheduled</p>
            </div>
        </div>
        <div className="whatsincludedSubContainer">
            <h1>Inclusions</h1>
            <ul className="content">
                <li>1 Entrance ticket for Wet World Park, Shah Alam</li>
            </ul>
        </div>
        <div className="whatsNotincludedSubContainer">
        <h1>Exclusions</h1>
        <div className="contentContainer">

            <ul className="content">
                <li>Locker</li>
            </ul>
            <ul className="content">
                <li>Tube</li>
            </ul>
            <ul className="content">
                <li>Meals</li>
            </ul>
            <ul className="content">
                <li>Parking</li>
            </ul>
        </div>
        </div>
    </section>
  )
}

export default HomeWhatsIncluded