import React from 'react'

import vision from '../../../img/vision.PNG'
import mission from '../../../img/mission.PNG'
import motto from '../../../img/motto.PNG'
import value from '../../../img/values.PNG'
import goal from '../../../img/goals.PNG'

const FivePoints = () => {
    return (
        <>
            {/* vision */}
            <section className='tw-flex tw-my-10'>
                <img src={vision} alt="" className='tw-w-[60%]' />
                <div className='tw-w-[40%] tw-px-5 tw-mt-10'>
                    <p className='tw-text-[#5890de] tw-font-bold tw-text-xl '>Our Vision</p>
                    <p className='tw-text-sm tw-font-medium tw-text-gray-500 tw-mt-20 tw-pr-36'>Our vision is to create brands. business solution and training for entrepreneurs and businesses, so that they can expand their business to a higher level in the ever-changing business environment</p>
                </div>
            </section>

            {/* mission */}
            <section className='tw-flex tw-my-10'>
                <div className='tw-w-[40%] tw-px-5 tw-mt-10 tw-text-right'>
                    <p className='tw-text-[#5890de] tw-font-bold tw-text-xl '>Our Mission</p>
                    <p className='tw-text-sm tw-font-medium tw-text-gray-500 tw-mt-20 tw-pl-36'>Our mission is to create entrepreneurs, power brands and build a meaningful future through advanced idea.</p>
                </div>
                <img src={mission} alt="" className='tw-w-[60%]' />

            </section>

            {/* values */}
            <section className='tw-flex tw-my-10'>
                <img src={value} alt="" className='tw-w-[60%]' />
                <div className='tw-w-[40%] tw-px-5 tw-mt-10'>
                    <p className='tw-text-[#5890de] tw-font-bold tw-text-xl'>Our Values</p>
                    <p className='tw-text-sm tw-font-medium tw-text-gray-500 tw-mt-20 tw-pr-36'>Limpidity <br />Virtuous <br />Gratitude</p>
                </div>
            </section>

            {/* goals */}
            <section className='tw-flex tw-my-10'>
                <div className='tw-w-[40%] tw-px-5 tw-mt-10 tw-text-right'>
                    <p className='tw-text-[#5890de] tw-font-bold tw-text-xl '>Our Goal</p>
                    <p className='tw-text-sm tw-font-medium tw-text-gray-500 tw-mt-20 tw-pl-36'>Our goal is to create and develop 100000 successful business owners and brands through Technology and innovation by the next 10 years.</p>
                </div>
                <img src={goal} alt="" className='tw-w-[60%]' />

            </section>

            {/* motto */}
            <section className='tw-flex tw-my-10'>
                <img src={motto} alt="" className='tw-w-[60%]' />
                <div className='tw-w-[40%] tw-px-5 tw-mt-10'>
                    <p className='tw-text-[#5890de] tw-font-bold tw-text-xl'>Our Motto</p>
                    <p className='tw-text-sm tw-font-medium tw-text-gray-500 tw-mt-20 tw-pr-36'>We operate our client's business as if they're our own.</p>
                </div>
            </section>


        </>
    )
}

export default FivePoints