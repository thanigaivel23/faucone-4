import React from 'react'



import party1 from '../../img/party1.jpg'
import party2 from '../../img/party2.jpg'
import party3 from '../../img/party3.jpg'
import location from '../../img/location.PNG'



import services1 from '../../img/services1.svg'
import services2 from '../../img/services2.svg'
import services3 from '../../img/services3.svg'
import services4 from '../../img/services4.svg'
import services5 from '../../img/services5.svg'
import services6 from '../../img/services6.svg'
import services7 from '../../img/services7.svg'
import services8 from '../../img/services8.svg'
import services9 from '../../img/services9.svg'
import services10 from '../../img/services10.svg'
import services11 from '../../img/services11.svg'
import services12 from '../../img/services12.svg'




import { FaRegClock } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import { PiUserCircleThin } from "react-icons/pi";
import { AiOutlineGlobal } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";

import Header from '../layout/Header'


import 'react-multi-carousel/lib/styles.css';
import './carousal.css'
import './home.css'
import PoweringBrands from './homePage/PoweringBrands'
import FivePoints from './homePage/FivePoints'
import ContributeToTheSocity from './homePage/ContributeToTheSocity'
import OurBrandServices from './homePage/OurBrandServices'
import IndustriesWeServe from './homePage/IndustriesWeServe'


const Home = () => {






    return (
        <>
            <Header />

            <PoweringBrands />

            <FivePoints />

            <ContributeToTheSocity />

            <OurBrandServices />

            <IndustriesWeServe />



            {/* 6th section - to the socity */}
            <section className='tw-mb-20 tw-mt-7 tw-flex tw-items-center tw-justify-center tw-flex-col'>
                <p className='tw-font-abel  tw-text-center tw-tracking-[3px] tw-text-2xl md:tw-text-4xl tw-mt-14 '>TO THE <span className='tw-text-[#5db6f1] tw-font-bold'>SOCITY</span></p>
                <p className='tw-bg-[#5db6f1] tw-h-0.5 tw-w-10 tw-mt-4 tw-mx-auto'></p>

                <main className='tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-mx-5 tw-gap-4 lg:tw-gap-6 tw-mt-10 lg:tw-w-[80%]'>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={services1} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold  tw-p-2'>Multi-Dimensional Branding and Marketing</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={services2} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold  tw-p-2'>360. Advertising Solutions</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={services3} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold  tw-p-2'>Brand Transformation</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={services4} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold  tw-p-2'>Scalling Technology for Development</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={services5} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold  tw-p-2'>Interlinking Business Concept</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={services6} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold  tw-p-2'>1:1 Business Coaching</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={services7} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold  tw-p-2'>Innovative Entrepreneurship Process</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={services8} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold  tw-p-2'>Implementing a Quality Business Process</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={services9} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold  tw-p-2'>Revenue 10X</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={services10} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold  tw-p-2'>Career Planning and Development</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={services11} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold  tw-p-2'>Startup Investor Connect</p>
                    </div>

                    <div className='md:tw-flex tw-items-center  tw-rounded-md tw-shadow-md'>
                        <img src={services12} alt="" className='tw-w-16 tw-m-2' />
                        <p className='tw-text-xs tw-font-bold  tw-p-2'>Developing a Hybrid Work Model</p>
                    </div>
                </main>
            </section>

            {/* 7th section - golbe location */}
            <section className=' tw-flex tw-items-center tw-justify-center'>
                <img src={location} alt="" />
            </section>



            {/* 9th section - popular events */}
            <section className=' tw-mb-20'>

                <div className='tw-flex tw-items-center tw-justify-center tw-flex-col'>
                    <p className='tw-font-abel  tw-text-center tw-tracking-[3px] tw-text-2xl md:tw-text-4xl tw-mt-14 '>POPULAR <span className='tw-text-[#5db6f1] tw-font-bold'>EVENTS</span></p>
                    <p className='tw-bg-[#5db6f1] tw-h-0.5 tw-w-10 tw-mt-4 tw-mx-auto'></p>
                </div>

                <main className='tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-mt-12 tw-gap-x-24 tw-mx-5   lg:tw-mx-20'>
                    <div className='tw-flex '>
                        <img src={party1} alt="" className='tw-h-32 tw-w-32 tw-rounded-md ' />
                        <div className='tw-pl-4  tw-grid '>
                            <p className='tw-text-gray-700 tw-text-sm tw-font-bold'>Multi-Dimensional Branding and Marketing</p>
                            <p className=' tw-text-[#5db6f1] tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><FaRegClock className='tw-text-base' />Saturday - 6:00 PM</p>
                            <p className=' tw-text-gray-400 tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><RiSendPlaneLine className='tw-text-base' />Po'ina Restaurant & Lounge</p>
                            <p className=' tw-text-[#5db6f1] tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><AiOutlineGlobal className='tw-text-base' />Abbey Chun & Heather Stoltz</p>
                            <p className='  tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><PiUserCircleThin className='tw-text-xl tw-font-extrabold' />26 followers</p>

                        </div>
                    </div>
                    <div className='tw-hidden lg:tw-flex  '>
                        <img src={party2} alt="" className='tw-h-32 tw-w-32 tw-rounded-md ' />
                        <div className='tw-pl-4  tw-grid '>
                            <p className='tw-text-gray-700 tw-text-sm tw-font-bold'>Multi-Dimensional Branding and Marketing</p>
                            <p className=' tw-text-[#5db6f1] tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><FaRegClock className='tw-text-base' />Saturday - 6:00 PM</p>
                            <p className=' tw-text-gray-400 tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><RiSendPlaneLine className='tw-text-base' />Po'ina Restaurant & Lounge</p>
                            <p className=' tw-text-[#5db6f1] tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><AiOutlineGlobal className='tw-text-base' />Abbey Chun & Heather Stoltz</p>
                            <p className='  tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><PiUserCircleThin className='tw-text-xl tw-font-extrabold' />26 followers</p>

                        </div>
                    </div>
                    <div className='tw-hidden lg:tw-flex   '>
                        <img src={party3} alt="" className='tw-h-32 tw-w-32 tw-rounded-md ' />
                        <div className='tw-pl-4  tw-grid '>
                            <p className='tw-text-gray-700 tw-text-sm tw-font-bold'>Multi-Dimensional Branding and Marketing</p>
                            <p className=' tw-text-[#5db6f1] tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><FaRegClock className='tw-text-base' />Saturday - 6:00 PM</p>
                            <p className=' tw-text-gray-400 tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><RiSendPlaneLine className='tw-text-base' />Po'ina Restaurant & Lounge</p>
                            <p className=' tw-text-[#5db6f1] tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><AiOutlineGlobal className='tw-text-base' />Abbey Chun & Heather Stoltz</p>
                            <p className='  tw-font-bold tw-text-xs tw-flex tw-items-center tw-gap-x-2 '><PiUserCircleThin className='tw-text-xl tw-font-extrabold' />26 followers</p>

                        </div>
                    </div>
                </main>
            </section>

            {/* 10th section - WORK TOGETHER */}
            <section className='tw-mb-20 '>
                <div className='tw-flex tw-items-center tw-justify-center tw-flex-col'>
                    <p className='tw-font-abel  tw-text-center tw-tracking-[3px] tw-text-2xl md:tw-text-4xl tw-mt-14 '>LET'S WORK <span className='tw-text-[#5db6f1] tw-font-bold'>TOGETHER!</span></p>
                    <p className='tw-bg-[#5db6f1] tw-h-0.5 tw-w-10 tw-mt-4 tw-mx-auto'></p>
                </div>

                <main className='lg:tw-flex lg:tw-mx-10 tw-mt-12 lg:tw-justify-between lg:tw-gap-x-16   '>
                    {/*left*/}
                    <form className='tw-mx-7 lg:tw-w-[32%] '>
                        <input type="text" placeholder='Full Name' className='tw-outline-none tw-border-b-2 placeholder:tw-text-sm placeholder:tw-font-bold placeholder:tw-text-gray-500 tw-pl-3 tw-pb-2 tw-w-[90%]' /><br />
                        <input type="text" placeholder='Email ID' className='tw-outline-none tw-border-b-2 placeholder:tw-text-sm placeholder:tw-font-bold placeholder:tw-text-gray-500 tw-pl-3 tw-pb-2 tw-mt-7 tw-w-[90%]' /><br />
                        <input type="number" placeholder='Phone No.' className='tw-outline-none tw-border-b-2 placeholder:tw-text-sm placeholder:tw-font-bold placeholder:tw-text-gray-500 tw-pl-3 tw-pb-2 tw-mt-7 tw-w-[90%]' /><br />
                        <input type="text" placeholder='Position applying for' className='tw-outline-none tw-border-b-2 placeholder:tw-text-sm placeholder:tw-font-bold placeholder:tw-text-gray-500 tw-pl-3 tw-pb-2 tw-mt-7 tw-w-[90%]' /><br />
                        <input type="file" className='tw-hidden' id='resume' /><br />
                        <label htmlFor="resume" className='tw-outline-dashed tw-outline-2 tw-outline-gray-500 tw-font-semibold  tw-text-center tw-rounded-md tw-mx-5 tw-py-2 tw-mt-7 tw-border-2 tw-border-blue-100 tw-w-[90%]'>Resume</label><br />
                        <button className=' tw-text-center tw-rounded-md tw-mx-5  tw-py-3 tw-mt-10 tw-text-white tw-font-semibold tw-bg-[#5db6f1] tw-w-[90%] '>Submit</button>
                    </form>

                    {/*right*/}
                    <div className='tw-hidden lg:tw-block  tw-w-[60%]  tw-mr-16'>
                        <div className='tw-flex tw-items-center tw-justify-between'>
                            <p className=' tw-text-sm tw-font-bold'>See how we can help to overcome your challenges</p>
                            <p className='tw-flex tw-items-center tw-justify-center tw-text-[#56a9ed] tw-font-bold tw-gap-x-4'>See All Job <span><GrLinkNext className='tw-font-bold tw-text-xl' /></span></p>
                        </div>

                        <div className=' tw-p-5 tw-my-5 tw-shadow-md'>
                            <p className=' tw-text-sm tw-font-bold'>Marketing/Growth <span className='tw-pl-1 tw-text-[#56a9ed]'>3 Open Roles</span></p>
                            <div className='tw-flex tw-justify-between'>
                                <p className='tw-font-bold  tw-text-slate-700'>Impact Campaigns Associate</p>
                                <p><GrLinkNext className='tw-font-bold tw-text-xl tw-text-gray-400' /></p>
                            </div>
                            <p className=' tw-text-sm tw-font-bold'>Saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae earum rerum hic tenetur</p>
                        </div>

                        <div className=' tw-p-5 tw-my-5 tw-shadow-md'>
                            <p className=' tw-text-sm tw-font-bold'>Content Development <span className='tw-pl-1 tw-text-[#56a9ed]'>2 Open Roles</span></p>
                            <div className='tw-flex tw-justify-between'>
                                <p className='tw-font-bold  tw-text-slate-700'>Pulso Video Producer & Content Manager</p>
                                <p><GrLinkNext className='tw-font-bold tw-text-xl tw-text-gray-400' /></p>
                            </div>
                            <p className=' tw-text-sm tw-font-bold'>A sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis asperiores repellat.</p>
                        </div>

                        <div className=' tw-p-5 tw-my-5 tw-shadow-md'>
                            <p className=' tw-text-sm tw-font-bold'>Operations <span className='tw-pl-1 tw-text-[#56a9ed]'>4 Open Roles</span></p>
                            <div className='tw-flex tw-justify-between'>
                                <p className='tw-font-bold  tw-text-slate-700'>Paralegal (Full Time, Remote)</p>
                                <p><GrLinkNext className='tw-font-bold tw-text-xl tw-text-gray-400' /></p>
                            </div>
                            <p className=' tw-text-sm tw-font-bold'>Magnam aliquam quaerat voluptatemt enim and minima veniam, so quis nostrum that's exercitationem</p>
                        </div>








                    </div>
                </main>
            </section>

            {/* 11th section - footer*/}
            {/* <Footer /> */}


        </>
    )

}

export default Home