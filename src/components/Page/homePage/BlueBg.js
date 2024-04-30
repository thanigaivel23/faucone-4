import React from 'react'

const BlueBg = () => {
    return (
        <>
            {/*  */}
            <section className='tw-bg-[#0a73c0] tw-text-white tw-py-16 lg:tw-px-36 lg:tw-pt-24'>

                <p className='tw-text-center tw-text-3xl lg:tw-text-5xl tw-font-medium lg:tw-font-normal'>Made in India.</p>
                <p className='tw-text-center tw-text-3xl lg:tw-text-5xl tw-font-medium lg:tw-font-normal -tw-mt-2'>Made for the World.</p>


                <main className='sm:tw-grid tw-grid-cols-2 sm:tw-mt-10 '>
                    <div className='tw-text-center tw-mt-14 sm:tw-mt-5'>
                        <p className='tw-text-3xl tw-font-medium tw-tracking-wide'>100M+</p>
                        <p className='-tw-mt-2'>Users Globally</p>
                    </div>

                    <div className='tw-text-center tw-mt-14 sm:tw-mt-5'>
                        <p className='tw-text-3xl tw-font-medium tw-tracking-wide'>150+</p>
                        <p className='-tw-mt-2'>Countries Served</p>
                    </div>

                    <div className='tw-text-center tw-mt-14 sm:tw-mt-5'>
                        <p className='tw-text-3xl tw-font-medium tw-tracking-wide'>15K+</p>
                        <p className='-tw-mt-2'>Employees Worldwide</p>
                    </div>

                    <div className='tw-text-center tw-mt-14 sm:tw-mt-5'>
                        <p className='tw-text-3xl tw-font-medium tw-tracking-wide'>25+</p>
                        <p className='-tw-mt-2'>Years in Business</p>
                    </div>

                    <div className='tw-text-center tw-mt-14 sm:tw-mt-5'>
                        <p className='tw-text-3xl tw-font-medium tw-tracking-wide'>55+</p>
                        <p className='-tw-mt-2'>Products</p>
                    </div>

                    <div className='tw-flex tw-justify-center tw-items-center'>
                        <button className='tw-border tw-mt-14 sm:tw-mt-5 tw-px-6 tw-py-3 tw-font-medium tw-text-xs '>MORE ABOUT FAUCONE</button>
                    </div>

                </main>
            </section>
        </>
    )
}

export default BlueBg