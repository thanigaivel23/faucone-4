import React from 'react'
import customersupport from '../../../img/customersupport.png'

const CustomerSupport = () => {
    return (
        <>
            <section className='tw-flex tw-items-center tw-justify-center tw-mt-5 tw-ml-20 tw-mr-20 tw-bg-[#0baad4] tw-font-PuviMedium tw-rounded-3xl tw-border-solid tw-border-2 '>


                <div className='tw-w-[50%] '>
                    <img src={customersupport} alt="" className='tw-w-[300px]  tw-mx-auto' />
                </div>

                <div className=' tw-text-white tw-text-2xl tw-w-[40%] ' >


                    <p className='tw-mt-5 '>Customer support centre</p>
                    <p className='tw-mt-5 '>Customer experience centre</p>
                    <p className='tw-mt-5 '>Technology Development centre</p>
                </div>
                
                
                


            </section>
        </>
    )
}

export default CustomerSupport