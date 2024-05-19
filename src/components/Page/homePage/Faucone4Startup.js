import React from 'react'
import services from '../../../img/services3.svg'

const Faucone4Startup = () => {
    return (
        <>
            <section className='tw-bg-[#079fce] tw-text-white tw-ml-20 tw-rounded-tl-[130px] tw-mt-20 tw-px-40 tw-py-10'>
                <p className='tw-font-bold tw-text-3xl  after:tw-block after:tw-h-[2px] after:tw-w-14 after:tw-bg-white after:tw-mt-2'>Faucone 4 Startups</p>
                <p className='tw-mt-2 tw-text-xs'>Transforming Startup Globally</p>

                <main className='tw-flex tw-items-center tw-mt-10 tw-text-2xl tw-gap-x-20 '>
                    <div className='tw-flex tw-items-end tw-gap-x-4'>
                        <img src={services} alt="" className='tw-w-24' />
                        <p>Begin.</p>
                    </div>

                    <div className='tw-flex tw-items-end tw-gap-x-4'>
                        <img src={services} className='tw-w-24' alt="" />
                        <p>Build.</p>
                    </div>

                    <div className='tw-flex tw-items-end tw-gap-x-4'>
                        <img src={services} className='tw-w-24' alt="" />
                        <p>Expand.</p>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Faucone4Startup