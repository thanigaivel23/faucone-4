import React from 'react'
import brand_service_1 from '../../../img/brand_service_1.svg'
import brand_service_2 from '../../../img/brand_service_2.svg'
import brand_service_3 from '../../../img/brand_service_3.svg'
import brand_service_4 from '../../../img/brand_service_4.svg'
import brand_service_5 from '../../../img/brand_service_5.svg'
import brand_service_6 from '../../../img/brand_service_6.svg'
import brand_service_7 from '../../../img/brand_service_7.svg'
import brand_service_8 from '../../../img/brand_service_8.svg'
import brand_service_9 from '../../../img/brand_service_9.svg'
import brand_service_10 from '../../../img/brand_service_10.svg'
import brand_service_11 from '../../../img/brand_service_11.svg'
import brand_service_12 from '../../../img/brand_service_12.svg'
import { useTranslation } from 'react-i18next'


const OurBrandServices = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className='tw-flex tw-justify-center tw-items-center tw-mt-32 tw-gap-x-3'>
                <p className='tw-bg-[#2dbfea] tw-h-[2px] tw-w-14  tw-rounded-2xl '></p>

                <p className='tw-text-[#2dbfea] tw-text-3xl tw-font-bold tw-text-center'>16 Solutions 1 Brand</p>
                <p className='tw-bg-[#2dbfea] tw-h-[2px] tw-w-14  tw-rounded-2xl '></p>
            </div>

            <main className='tw-grid tw-grid-cols-4 tw-gap-x-10 tw-w-[90%] tw-mx-auto tw-mt-10 '>
                <section className='tw-shadow-xl tw-bg-[#dcf7ff] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-rounded-br-[100px]'>
                    <img src={brand_service_6} alt="" />
                    <p className='tw-text-gray-500 tw-font-bold tw-mt-3 tw-text-xl'>BUSINESS</p>
                    <p className='tw-text-gray-500 tw-mt-2 tw-text-sm'>Faucone business services can meet all the needs of a business consulting...</p>

                    <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>TRY NOW</button>
                </section>
                
                <section className='tw-shadow-xl tw-bg-[#f2f2f2] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-rounded-br-[100px]'>
                    <img src={brand_service_6} alt="" />
                    <p className='tw-text-gray-500 tw-font-bold tw-mt-3 tw-text-xl'>DIGITAL</p>
                    <p className='tw-text-gray-500 tw-mt-2 tw-text-sm'>Faucone digital offer a wide range of digital service and strategies to...</p>

                    <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>TRY NOW</button>
                </section>

                <section className='tw-shadow-xl tw-bg-[#d6e8ff] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-rounded-br-[100px]'>
                    <img src={brand_service_6} alt="" />
                    <p className='tw-text-gray-500 tw-font-bold tw-mt-3 tw-text-xl'>TECHNOLOGIES</p>
                    <p className='tw-text-gray-500 tw-mt-2 tw-text-sm'>Faucone technologies can help you to grow your business and it is comm...</p>

                    <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>TRY NOW</button>
                </section>

                <section className='tw-shadow-xl tw-bg-[#eff2f7] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-rounded-br-[100px]'>
                    <img src={brand_service_6} alt="" />
                    <p className='tw-text-gray-500 tw-font-bold tw-mt-3 tw-text-xl'>SOLUTIONS</p>
                    <p className='tw-text-gray-500 tw-mt-2 tw-text-sm'>faucone solutions trust in providing value added and optimized IT and...</p>

                    <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>TRY NOW</button>
                </section>
            </main>

            {/* old code */}
            <section hidden className='tw-bg-blue-50 tw-mt-20 tw-mx-auto tw-w-[90%] tw-rounded-xl'>
                <p className='tw-tracking-[3px]  tw-font-bold tw-text-[#3a9ddb] tw-text-lg md:tw-text-xl tw-text-center tw-pt-10 md:tw-pt-16'>OUR BRAND SERVICES</p>
                <main className='tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-x-5 md:tw-gap-x-0 tw-gap-y-7 tw-pb-5 md:tw-pb-16'>

                    <div className='' >
                        <img src={brand_service_1} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5 tw-mx-auto'>{t('home.socity1')}</p>
                    </div>

                    <div>
                        <img src={brand_service_2} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5  tw-mx-auto'>{t('home.socity4')}</p>
                    </div>

                    <div>
                        <img src={brand_service_3} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5  tw-mx-auto'>{t('home.socity7')}</p>
                    </div>

                    <div className='' >
                        <img src={brand_service_4} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5 tw-mx-auto'>{t('home.socity10')}</p>
                    </div>

                    <div>
                        <img src={brand_service_5} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5  tw-mx-auto'>{t('home.socity2')}</p>
                    </div>

                    <div>
                        <img src={brand_service_6} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5  tw-mx-auto'>{t('home.socity5')}</p>
                    </div>

                    <div className='' >
                        <img src={brand_service_7} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5 tw-mx-auto'>{t('home.socity8')}</p>
                    </div>

                    <div>
                        <img src={brand_service_8} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5  tw-mx-auto'>{t('home.socity11')}</p>
                    </div>

                    <div>
                        <img src={brand_service_9} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5  tw-mx-auto'>{t('home.socity3')}</p>
                    </div>

                    <div className='' >
                        <img src={brand_service_10} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5 tw-mx-auto'>{t('home.socity6')}</p>
                    </div>

                    <div>
                        <img src={brand_service_11} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5  tw-mx-auto'>{t('home.socity9')}</p>
                    </div>

                    <div>
                        <img src={brand_service_12} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5  tw-mx-auto'>{t('home.socity12')}</p>
                    </div>
                </main>
            </section>
        </>
    )
}

export default OurBrandServices