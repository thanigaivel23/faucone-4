import React, { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Drawer } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Language from './Language';
import title from '../../img/title.png'
import menu from '../../img/menu.svg'
import { RiSearchLine } from 'react-icons/ri';





const Header = () => {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);

    };

    const navigate = useNavigate()

    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showDropdown3, setShowDropdown3] = useState(false);

    const handleMouseEnter1 = () => {
        setShowDropdown1(true);
    };

    const handleMouseLeave1 = () => {
        setShowDropdown1(false);
    };

    const handleMouseEnter2 = () => {
        setShowDropdown2(true);
    };

    const handleMouseLeave2 = () => {
        setShowDropdown2(false);
    };

    const handleMouseEnter3 = () => {
        setShowDropdown3(true);
    };

    const handleMouseLeave3 = () => {
        setShowDropdown3(false);
    };


    return (
        <>
            <nav className='tw-flex tw-items-center tw-justify-between tw-gap-x-5 tw-px-5  xl:tw-px-20 tw-py-4'>

                {/* res nav bar */}
                <div>
                    {/* 3 lines(res) */}
                    <button onClick={showDrawer} className='lg:tw-hidden'>
                        <img src={menu} alt="" className='tw-tet-3xl' />
                    </button>

                    <Drawer title={false} onClose={onClose} open={open} placement='left' width={300}>
                        <div className='tw-text-gray-600 '>

                            <div className='tw-py-1'>Company</div>

                            <NavDropdown title='Industries' show={showDropdown1} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className='tw-py-1 tw-cursor-pointer'>
                                <NavDropdown.Item onClick={() => navigate('/industries')}>Aerospace and Defence</NavDropdown.Item>
                                <NavDropdown.Item>Aviation</NavDropdown.Item>
                                <NavDropdown.Item>Automotive</NavDropdown.Item>
                                <NavDropdown.Item>Banking & Finance</NavDropdown.Item>
                                <NavDropdown.Item>Capital Markets</NavDropdown.Item>
                                <NavDropdown.Item>Construction & Engineering</NavDropdown.Item>
                                <NavDropdown.Item>Chemical & Process</NavDropdown.Item>
                                <NavDropdown.Item>Consumer Goods</NavDropdown.Item>
                                <NavDropdown.Item>Energy & Utilities</NavDropdown.Item>
                                <NavDropdown.Item>FMCG</NavDropdown.Item>
                                <NavDropdown.Item>Food & Beverage</NavDropdown.Item>
                                <NavDropdown.Item>Healthcare</NavDropdown.Item>
                                <NavDropdown.Item>Industrial Manufacturing</NavDropdown.Item>
                                <NavDropdown.Item>Insurance</NavDropdown.Item>
                                <NavDropdown.Item>Life Sciences</NavDropdown.Item>
                                <NavDropdown.Item>Manufacturing Industries</NavDropdown.Item>
                                <NavDropdown.Item>Media & Entertainment</NavDropdown.Item>
                                <NavDropdown.Item>Mining & Natural Resources</NavDropdown.Item>
                                <NavDropdown.Item>Oil & Gas</NavDropdown.Item>
                                <NavDropdown.Item>Public Sector</NavDropdown.Item>
                                <NavDropdown.Item>Retail</NavDropdown.Item>
                                <NavDropdown.Item>Telecom</NavDropdown.Item>
                                <NavDropdown.Item>Travel</NavDropdown.Item>
                                <NavDropdown.Item>Transport, Logistics & Hospitality</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title='Our Brands' show={showDropdown2} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} className='tw-py-1'>
                                <NavDropdown.Item onClick={() => navigate('/ourbrands')}>Faucone Business</NavDropdown.Item>
                                <NavDropdown.Item>Faucone Digital</NavDropdown.Item>
                                <NavDropdown.Item>Faucone Technologies</NavDropdown.Item>
                                <NavDropdown.Item>Faucone Solutions</NavDropdown.Item>
                                <NavDropdown.Item>Faucone Finance</NavDropdown.Item>
                                <NavDropdown.Item>Faucone Consultancy</NavDropdown.Item>
                                <NavDropdown.Item>Faucone Studios</NavDropdown.Item>
                                <NavDropdown.Item>Faucone Advertising</NavDropdown.Item>
                                <NavDropdown.Item>Faucone Space</NavDropdown.Item>
                                <NavDropdown.Item>Faucone Design</NavDropdown.Item>
                                <NavDropdown.Item>Faucone Prints</NavDropdown.Item>
                                <NavDropdown.Item>Faucone Accounting</NavDropdown.Item>
                                <NavDropdown.Item>Faucone Legal</NavDropdown.Item>
                                <NavDropdown.Item>Faucone Supplies</NavDropdown.Item>
                                <NavDropdown.Item>Faucone Academy</NavDropdown.Item>
                                <NavDropdown.Item>Faucone Overseas</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title='Services' show={showDropdown3} onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} className='tw-py-1'>
                                <NavDropdown.Item onClick={() => navigate('/services')}>Multi-Dimensional Branding & Marketing</NavDropdown.Item>
                                <NavDropdown.Item>360 degree Advertising Solutions</NavDropdown.Item>
                                <NavDropdown.Item>Brand Transformation</NavDropdown.Item>
                                <NavDropdown.Item>Scaling Technology for Development</NavDropdown.Item>
                                <NavDropdown.Item>Interlinking Business Concept</NavDropdown.Item>
                                <NavDropdown.Item>1:1 Business Coaching</NavDropdown.Item>
                                <NavDropdown.Item>Innovative Entrepreneurship Process</NavDropdown.Item>
                                <NavDropdown.Item>Implementing a Quality Business Process</NavDropdown.Item>
                                <NavDropdown.Item>Revenue lox</NavDropdown.Item>
                                <NavDropdown.Item>Career Planning and Development</NavDropdown.Item>
                                <NavDropdown.Item>Startup Investor Connect</NavDropdown.Item>
                                <NavDropdown.Item>Developing a Hybrid Work Model</NavDropdown.Item>
                            </NavDropdown>

                            <Link to={'/insights'} className='tw-py-1 tw-no-underline tw-text-gray-600 tw-block'>Insights</Link>
                            <Link to={'/contact-us'} className='tw-py-1 tw-no-underline tw-text-gray-600 tw-block' >Contact us</Link>

                            <div className='tw-bg-blue-200 tw-h-7 tw-w-7 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-p-1 '><RiSearchLine className=' ' /></div>


                            <div className='tw-hidden lg:tw-block tw-outline-none tw-py-1 tw-my-1 tw-px-2'>
                                <Language />
                            </div>
                        </div>
                    </Drawer>
                </div>

                {/* name and company, industries, brands, services, insights, contact us*/}
                <div className='lg:tw-flex lg:tw-items-center lg:tw-gap-x-12 xl:-tw-ml-44  '>
                    <Link to={'/'} className=''>
                        <img src={title} alt="" />
                    </Link>

                    <div className='tw-hidden lg:tw-flex tw-items-center tw-gap-x-12 tw-text-gray-600'>

                        <div className='tw-py-1'>Company</div>

                        <NavDropdown title='Industries' show={showDropdown1} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className='tw-py-1 tw-cursor-pointer'>
                            <NavDropdown.Item onClick={() => navigate('/industries')}>Aerospace and Defence</NavDropdown.Item>
                            <NavDropdown.Item>Aviation</NavDropdown.Item>
                            <NavDropdown.Item>Automotive</NavDropdown.Item>
                            <NavDropdown.Item>Banking & Finance</NavDropdown.Item>
                            <NavDropdown.Item>Capital Markets</NavDropdown.Item>
                            <NavDropdown.Item>Construction & Engineering</NavDropdown.Item>
                            <NavDropdown.Item>Chemical & Process</NavDropdown.Item>
                            <NavDropdown.Item>Consumer Goods</NavDropdown.Item>
                            <NavDropdown.Item>Energy & Utilities</NavDropdown.Item>
                            <NavDropdown.Item>FMCG</NavDropdown.Item>
                            <NavDropdown.Item>Food & Beverage</NavDropdown.Item>
                            <NavDropdown.Item>Healthcare</NavDropdown.Item>
                            <NavDropdown.Item>Industrial Manufacturing</NavDropdown.Item>
                            <NavDropdown.Item>Insurance</NavDropdown.Item>
                            <NavDropdown.Item>Life Sciences</NavDropdown.Item>
                            <NavDropdown.Item>Manufacturing Industries</NavDropdown.Item>
                            <NavDropdown.Item>Media & Entertainment</NavDropdown.Item>
                            <NavDropdown.Item>Mining & Natural Resources</NavDropdown.Item>
                            <NavDropdown.Item>Oil & Gas</NavDropdown.Item>
                            <NavDropdown.Item>Public Sector</NavDropdown.Item>
                            <NavDropdown.Item>Retail</NavDropdown.Item>
                            <NavDropdown.Item>Telecom</NavDropdown.Item>
                            <NavDropdown.Item>Travel</NavDropdown.Item>
                            <NavDropdown.Item>Transport, Logistics & Hospitality</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title='Our Brands' show={showDropdown2} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} className='tw-py-1'>
                            <NavDropdown.Item onClick={() => navigate('/ourbrands')}>Faucone Business</NavDropdown.Item>
                            <NavDropdown.Item>Faucone Digital</NavDropdown.Item>
                            <NavDropdown.Item>Faucone Technologies</NavDropdown.Item>
                            <NavDropdown.Item>Faucone Solutions</NavDropdown.Item>
                            <NavDropdown.Item>Faucone Finance</NavDropdown.Item>
                            <NavDropdown.Item>Faucone Consultancy</NavDropdown.Item>
                            <NavDropdown.Item>Faucone Studios</NavDropdown.Item>
                            <NavDropdown.Item>Faucone Advertising</NavDropdown.Item>
                            <NavDropdown.Item>Faucone Space</NavDropdown.Item>
                            <NavDropdown.Item>Faucone Design</NavDropdown.Item>
                            <NavDropdown.Item>Faucone Prints</NavDropdown.Item>
                            <NavDropdown.Item>Faucone Accounting</NavDropdown.Item>
                            <NavDropdown.Item>Faucone Legal</NavDropdown.Item>
                            <NavDropdown.Item>Faucone Supplies</NavDropdown.Item>
                            <NavDropdown.Item>Faucone Academy</NavDropdown.Item>
                            <NavDropdown.Item>Faucone Overseas</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title='Services' show={showDropdown3} onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} className='tw-py-1'>
                            <NavDropdown.Item onClick={() => navigate('/services')}>Multi-Dimensional Branding & Marketing</NavDropdown.Item>
                            <NavDropdown.Item>360 degree Advertising Solutions</NavDropdown.Item>
                            <NavDropdown.Item>Brand Transformation</NavDropdown.Item>
                            <NavDropdown.Item>Scaling Technology for Development</NavDropdown.Item>
                            <NavDropdown.Item>Interlinking Business Concept</NavDropdown.Item>
                            <NavDropdown.Item>1:1 Business Coaching</NavDropdown.Item>
                            <NavDropdown.Item>Innovative Entrepreneurship Process</NavDropdown.Item>
                            <NavDropdown.Item>Implementing a Quality Business Process</NavDropdown.Item>
                            <NavDropdown.Item>Revenue lox</NavDropdown.Item>
                            <NavDropdown.Item>Career Planning and Development</NavDropdown.Item>
                            <NavDropdown.Item>Startup Investor Connect</NavDropdown.Item>
                            <NavDropdown.Item>Developing a Hybrid Work Model</NavDropdown.Item>
                        </NavDropdown>

                        <Link to={'/insights'} className='tw-py-1 tw-no-underline tw-text-gray-600 tw-block'>Insights</Link>

                        <Link to={'/contact-us'} className='tw-py-1 tw-no-underline tw-text-gray-600 tw-block' >Contact us</Link>

                    </div>
                </div>

                {/* search and languages */}
                <div className=' lg:tw-flex lg:tw-items-center lg:tw-gap-x-12 tw-text-gray-600'>

                    <div className='tw-hidden tw-h-7 tw-w-7 lg:tw-flex tw-items-center tw-justify-center tw-rounded-full tw-p-1 '><RiSearchLine className=' ' /></div>

                    <div className=' lg:tw-outline-none lg:tw-py-1 lg:tw-my-1 lg:tw-px-2'>
                        <Language />
                    </div>

                </div>


            </nav>

            <div className='tw-h-2 tw-bg-[#2e93d2]'></div>
        </>
    )
}

export default Header