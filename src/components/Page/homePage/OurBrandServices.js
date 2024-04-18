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
            <section className='tw-bg-blue-50 tw-mt-20 tw-mx-auto tw-w-[90%] tw-rounded-xl'>
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