import React from 'react'

import vision from '../../../img/vision.PNG'
import mission from '../../../img/mission.PNG'
import motto from '../../../img/motto.PNG'
import value from '../../../img/values.PNG'
import goal from '../../../img/goals.PNG'
import { useTranslation } from 'react-i18next'

const FivePoints = () => {
    const { t } = useTranslation();
    return (
        <>
            {/* vision */}
            <section className=' lg:tw-flex tw-my-10 '>
                <img src={vision} alt="" className='tw-hidden lg:tw-inline tw-w-[60%]' />
                <div className='lg:tw-w-[40%] lg:tw-px-5 lg:tw-mt-10 tw-px-3'>
                    <p className='tw-text-[#5890de] tw-font-bold tw-text-xl '>{t('home.vision')}</p>
                    <img src={vision} alt="" className='lg:tw-hidden tw-my-3' />

                    <p className='tw-text-sm lg:tw-mt-20 lg:tw-pr-36 tw-text-justify'>{t('home.vision_desc')}</p>
                </div>
            </section>

            {/* mission */}
            <section className='lg:tw-flex tw-my-10'>
                <div className='lg:tw-w-[40%] tw-px-3 lg:tw-px-5 lg:tw-mt-10 tw-text-right'>
                    <p className='tw-text-[#5890de] tw-font-bold tw-text-xl '>{t('home.mision')}</p>
                    <img src={mission} alt="" className='lg:tw-hidden tw-my-3' />

                    <p className='tw-text-sm lg:tw-mt-20 lg:tw-pl-36 tw-text-justify'>{t('home.mision_desc')}.</p>
                </div>
                <img src={mission} alt="" className='tw-hidden lg:tw-inline tw-w-[60%]' />

            </section>

            {/* values */}
            <section className='lg:tw-flex tw-my-10'>
                <img src={value} alt="" className='tw-hidden lg:tw-inline tw-w-[60%]' />
                <div className='lg:tw-w-[40%] tw-px-3 lg:tw-px-5 lg:tw-mt-10'>
                    <p className='tw-text-[#5890de] tw-font-bold tw-text-xl'>{t('home.ourValues')}</p>
                    <img src={value} alt="" className='lg:tw-hidden my-3' />
                    {/* <p className='tw-text-sm lg:tw-mt-20 lg:tw-pr-36 tw-text-justify'>{t('home.value1')} <br />{t('home.value2')} <br />{t('home.value3')}</p> */}
                    <ul className='tw-list-disc tw-text-sm lg:tw-mt-20 lg:tw-pr-36 tw-text-justify'>
                        <li>{t('home.value1')}</li>
                        <li>{t('home.value2')}</li>
                        <li>{t('home.value3')}</li>
                    </ul>
                </div>
            </section>

            {/* goals */}
            <section className='lg:tw-flex tw-my-10'>
                <div className='lg:tw-w-[40%] tw-px-3 lg:tw-px-5 lg:tw-mt-10 tw-text-right'>
                    <p className='tw-text-[#5890de] tw-font-bold tw-text-xl '>{t('home.goal')}</p>
                    <img src={goal} alt="" className='lg:tw-hidden tw-my-3' />

                    <p className='tw-text-sm lg:tw-mt-20 lg:tw-pl-36 tw-text-justify'>{t('home.goal_desc')}.</p>
                </div>
                <img src={goal} alt="" className='tw-hidden lg:tw-inline tw-w-[60%]' />

            </section>

            {/* motto */}
            <section className='lg:tw-flex tw-my-10'>
                <img src={motto} alt="" className='tw-hidden lg:tw-inline tw-w-[60%]' />
                <div className='lg:tw-w-[40%] tw-px-3 lg:tw-px-5 lg:tw-mt-10'>
                    <p className='tw-text-[#5890de] tw-font-bold tw-text-xl'>{t('home.motto')}</p>
                    <img src={motto} alt="" className='lg:tw-hidden my-3' />
                    <p className='tw-text-sm lg:tw-mt-20 lg:tw-pr-36 tw-text-justify'>{t('home.motto_desc')}.</p>
                </div>
            </section>


        </>
    )
}

export default FivePoints