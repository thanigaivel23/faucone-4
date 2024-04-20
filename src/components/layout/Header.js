import React, { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Drawer } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Language from './Language';
import title from '../../img/title.png'
import digital from '../../img/digital2.png'
import menu from '../../img/menu.svg'
import { useTranslation } from 'react-i18next';


const Header = () => {
    const { t } = useTranslation();
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

                            <div className='tw-py-1'>{t('mainHeader.company')}</div>

                            <NavDropdown title={t('mainHeader.industries.name')} show={showDropdown1} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className='tw-py-1 tw-cursor-pointer'>
                                <NavDropdown.Item onClick={() => navigate('/industries')} className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.aero')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-text-red-500 tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.aviation')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.automotive')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.bankFinance')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.capital')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.construction')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.chemical')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.consumer')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.energy')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.fmcg')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.food')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.health')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.industrial')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.insurance')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.lifeScience')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.manufacture')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.media')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.mining')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.oil')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.public')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.retail')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.telecom')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.travel')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.transport')}</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title={t('mainHeader.ourBrands.name')} show={showDropdown2} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} className='tw-py-1'>
                                <NavDropdown.Item onClick={() => navigate('/ourbrands')} className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Business')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Digital')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Technologies')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Solutions')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Finance')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Consultancy')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Studios')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Advertising')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Space')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Design')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Prints')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Accounting')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Legal')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Supplies')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Academy')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Overseas')}</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title={t('mainHeader.services.name')} show={showDropdown3} onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} className='tw-py-1'>
                                <NavDropdown.Item onClick={() => navigate('/services')} className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.multi')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.advertise')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.brand')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.scaling')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.interlink')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.business')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.innovative')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.quality')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.revenue')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.career')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.startup')}</NavDropdown.Item>
                                <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.hybird')}</NavDropdown.Item>
                            </NavDropdown>

                            <Link to={'/insights'} className='tw-py-1 tw-no-underline tw-text-gray-600 tw-block'>{t('mainHeader.insights')}</Link>
                            <Link to={'/contact-us'} className='tw-py-1 tw-no-underline tw-text-gray-600 tw-block' >{t('mainHeader.contactUs')}</Link>

                            {/* <div className='tw-bg-blue-200 tw-h-7 tw-w-7 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-p-1 '><RiSearchLine className=' ' /></div> */}


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

                        <div className='tw-py-1'>{t('mainHeader.company')}</div>

                        <NavDropdown title={t('mainHeader.industries.name')} show={showDropdown1} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className='tw-py-1 tw-cursor-pointer'>
                            <NavDropdown.Item onClick={() => navigate('/industries')} className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white'><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.aero')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white'><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.aviation')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white'><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.automotive')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white'><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.bankFinance')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white'><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.capital')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white'><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.construction')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white'><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.chemical')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white'><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.consumer')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.energy')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.fmcg')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.food')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.health')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.industrial')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.insurance')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.lifeScience')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.manufacture')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.media')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.mining')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.oil')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.public')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.retail')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.telecom')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.travel')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.industries.transport')}</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title={t('mainHeader.ourBrands.name')} show={showDropdown2} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} className='tw-py-1'>
                            <NavDropdown.Item onClick={() => navigate('/ourbrands')} className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Business')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Digital')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Technologies')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Solutions')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Finance')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Consultancy')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Studios')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Advertising')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Space')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Design')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Prints')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Accounting')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Legal')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Supplies')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Academy')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.ourBrands.Overseas')}</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title={t('mainHeader.services.name')} show={showDropdown3} onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} className='tw-py-1'>
                            <NavDropdown.Item onClick={() => navigate('/services')} className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.multi')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.advertise')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.brand')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.scaling')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.interlink')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.business')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.innovative')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.quality')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.revenue')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.career')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.startup')}</NavDropdown.Item>
                            <NavDropdown.Item className='tw-p-2  tw-flex tw-gap-x-4 tw-items-center hover:tw-bg-[#2e93d2] hover:tw-text-white '><img src={digital} alt='' className='tw-w-6' /> {t('mainHeader.services.hybird')}</NavDropdown.Item>
                        </NavDropdown>

                        <Link to={'/insights'} className='tw-py-1 tw-no-underline tw-text-gray-600 tw-block'>{t('mainHeader.insights')}</Link>

                        <Link to={'/contact-us'} className='tw-py-1 tw-no-underline tw-text-gray-600 tw-block' >{t('mainHeader.contactUs')}</Link>

                    </div>
                </div>

                {/* search and languages */}
                <div className=' lg:tw-flex lg:tw-items-center lg:tw-gap-x-12 tw-text-gray-600'>

                    {/* <div className='tw-hidden tw-h-7 tw-w-7 lg:tw-flex tw-items-center tw-justify-center tw-rounded-full tw-p-1 '><RiSearchLine className=' ' /></div> */}

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