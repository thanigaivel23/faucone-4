import React from 'react'
import india from '../../img/india.svg'
import australia from '../../img/australia.svg'
import singapore from '../../img/singapore.svg'
import uae from '../../img/uae.svg'
import malaysia from '../../img/malaysia.svg'
import faucone from '../../img/faucone.png'
import instagram from '../../img/instagram.png'
import facebook from '../../img/facebook.png'
import linkedin from '../../img/linkedin.png'
import youtube from '../../img/youtube.png'
import twitter from '../../img/twitter.png'
import newTitle from '../../img/newtitle.PNG'

import Accordion from 'react-bootstrap/Accordion';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    const aboutContent = (
        <div className='hover:tw-text-black md:tw-grid md:tw-justify-center '>
            <p className='tw-text-black tw-text-xl tw-hidden md:tw-block '>About</p>
            <p className='tw-py-1'>Company</p>
            <p className='tw-py-1'>Industries</p>
            <p className='tw-py-1'>Our Brands</p>
            <p className='tw-py-1'>Services</p>
            <p className='tw-py-1'>Contact</p>
        </div>
    )

    const communityContent = (
        <div className='hover:tw-text-black md:tw-grid md:tw-justify-center '>
            <p className='tw-text-black tw-text-xl tw-hidden md:tw-block '>Community</p>

            <p className='tw-py-1'>faucone Community</p>
            <p className='tw-py-1'>Faucone for Startups</p>
            <p className='tw-py-1'>Partner with Us</p>
            <p className='tw-py-1'>Customer Stories</p>
            <p className='tw-py-1'>Affiliate Program</p>
        </div>
    )

    const contactUSContent = (
        <div className='hover:tw-text-black md:tw-grid md:tw-justify-center '>
            <p className='tw-text-black tw-text-xl tw-hidden md:tw-block '>Contact Us</p>

            <p className='tw-py-1'>sales@faucone.com</p>
            <p className='tw-py-1'>support@faucone.com</p>
            <p className='tw-py-1'>1800 309 4377</p>
            <p className='tw-py-1'>www.faucone.com</p>
        </div>
    )
    return (
        <>
            {/* 13th section - zoho*/}
            <section className='tw-bg-blue-50 tw-mt-20'>

                {/* countries */}
                <div className='tw-flex tw-flex-wrap tw-justify-center tw-gap-x-16 md:tw-gap-x-20 lg:tw-gap-x-40 tw-py-20'>

                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-center'>
                        <img src={india} alt="" className=' ' />
                        <p className='tw-mt-2 tw-text-[#519fd3] tw-font-bold'>India</p>

                    </div>
                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-center'>
                        <img src={uae} alt="" className=' ' />
                        <p className='tw-mt-2 tw-text-[#519fd3] tw-font-bold'>UAE</p>

                    </div>
                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-center'>
                        <img src={australia} alt="" className=' ' />
                        <p className='tw-mt-2 tw-text-[#519fd3] tw-font-bold'>Australia</p>

                    </div>
                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-center'>
                        <img src={malaysia} alt="" className=' ' />
                        <p className='tw-mt-2 tw-text-[#519fd3] tw-font-bold'>Malaysia</p>

                    </div>
                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-center'>
                        <img src={singapore} alt="" className=' tw-pr-2' />
                        <p className='tw-mt-2 tw-text-[#519fd3] tw-font-bold'>Singapore</p>

                    </div>

                </div>

                {/* about, community, contact us */}
                <main className=' md:tw-flex md:tw-mx-5 lg:tw-mx-20'>
                    {/* faucone content */}
                    <div className='md:tw-w-[30%] lg:tw-w-[40%] tw-mb-10 '>
                        <img src={newTitle} alt="" />
                        <p className='tw-text-justify tw-mx-3 tw-mt-2 tw-text-sm lg:tw-mx-5 lg:tw-w-10/12 '>Faucone believes it is inevitable that the country will become the biggest market for the company. Working on software that can help developers generate correct code 'by design'. Apply this technology to building its future products."</p>
                    </div>

                    {/*RES  */}
                    <Accordion alwaysOpen className='md:tw-hidden' >
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>About</Accordion.Header>
                            <Accordion.Body>
                                {aboutContent}
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Community</Accordion.Header>
                            <Accordion.Body>
                                {communityContent}
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Contact Us</Accordion.Header>
                            <Accordion.Body>
                                {contactUSContent}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    {/* laptop */}
                    <div className=' tw-hidden md:tw-grid tw-grid-cols-3 md:tw-w-[70%] lg:tw-w-[60%]'>
                        {aboutContent}
                        {communityContent}
                        {contactUSContent}
                    </div>
                </main>

                {/* social media icons */}
                <div className='tw-pb-10 tw-mt-14 tw-px-10 tw-flex tw-items-center tw-justify-center tw-gap-x-6 ' >
                    <img src={twitter} alt="twitter" className='tw-w-6' />
                    <img src={facebook} alt="facebook" className='tw-w-7' />
                    <img src={instagram} alt="instagram" className='tw-w-7' />
                    <img src={linkedin} alt="linkedin" className='tw-w-7' />
                    <img src={youtube} alt="youtube" className='tw-w-9' />
                </div>

                {/* footer nav bar */}
                <div className='tw-flex tw-items-center tw-justify-center tw-gap-x-5 tw-flex-wrap tw-text-sm md:tw-text-base tw-pb-10'>
                    <p className='vertical_line tw-pr-5'>Security</p>
                    <p className='vertical_line tw-pr-5'>IPR Complaints</p>
                    <p className='vertical_line tw-pr-5'>Anti-spam Policy</p>
                    <p className='vertical_line tw-pr-5'>Terms of Service</p>
                    <p className='vertical_line tw-pr-5'>Privacy Policy</p>
                    <p className='vertical_line tw-pr-5'>Cookie Policy</p>
                    <p className='vertical_line tw-pr-5'>Abuse Policy </p>
                    <p className='tw-pr-5'>Disclaimer</p>
                </div>

                {/* black footer */}
                <div className='tw-bg-white-50 tw-border-t-4 tw-border-[#0b0d1f] tw-py-14 tw-flex tw-gap-y-5 tw-flex-col tw-justify-center tw-items-center'>
                    <img src={faucone} alt="" className='tw-w-[200px]  ' />
                    <p >&copy; {currentYear} Faucone. All Rights Reserved.</p>

                </div>

            </section>





        </>
    )
}

export default Footer