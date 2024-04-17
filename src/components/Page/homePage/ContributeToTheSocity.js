import React from 'react'
import women from '../../../img/women.svg'
import gobal from '../../../img/gobal.svg'
import developing from '../../../img/developing.svg'
import empowerment from '../../../img/empowerment.svg'

const ContributeToTheSocity = () => {
    return (
        <>
            {/* 5th section - contribute to the socity */}
            <section className='md:tw-px-5 tw-grid xs:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-5 md:tw-gap-10 lg:tw-gap-0 lg:tw-gap-x-20 tw-mt-20 md:tw-mt-40 tw-mx-5  md:tw-mx-10'>
               
                <div className=' tw-bg-gray-200 tw-rounded-xl tw-px-9 tw-py-5 tw-bg-opacity-50'>
                    <img src={empowerment} alt="" className='tw-w-20 tw-h-24' />
                    <p className='tw-mt-3 tw-text-[#5db6f1] tw-font-bold tw-text-xl'>Women Empowerment</p>
                    <p className=' tw-text-sm tw-font-medium  md:tw-pt-10'>
                        <b>Digital literacy:</b> Access to the internet, allows women to receive training which opens the door to other essential skills

                        <br /><br /> <b>Family and community impact:</b> Giving women access is an investment that yields a range of benefits that affect not just women but also their families and communities as a whole.

                        <br /><br />  <b>Economical Development:</b> Access to internet may enable women to create their own businesses, which would benefits both developing countries financially.
                    </p>
                </div>

                <div className=' tw-bg-gray-200 tw-rounded-xl tw-px-9 tw-py-5 tw-bg-opacity-50'>
                    <img src={gobal} alt="" className='tw-w-20 tw-h-24' />
                    <p className='tw-mt-3 tw-text-[#5db6f1] tw-font-bold tw-text-xl'>Drivers of Startup Ecosystem velambrose</p>
                    <p className='    tw-text-sm tw-font-medium tw-pt-3'>The startup ecosystem is a collection Of individuals, companies, and associated organisations that work together to build and scale startups. Startup ecosystems are frequently developed in a very small geographic region with a centre Of gravity. such as a university or a cluster Of technology enterprises. Faucone is a major player in the Startup Ecosystem.</p>

                </div>

                <div className=' tw-bg-gray-200 tw-rounded-xl tw-px-9 tw-py-5 tw-bg-opacity-50'>
                    <img src={women} alt="" className='tw-w-20 tw-h-24' />
                    <p className='tw-mt-3 tw-text-[#5db6f1] tw-font-bold tw-text-xl'>Women Entreprenurship</p>
                    <p className='tw-text-sm tw-font-medium tw-pt-3'>The increasing presence of women as entrepreneurs has led to significant business and economic growth in the country. Women-owned business enterprises are playing a prominent role in society by generating employment opportunities in the country, brining in demographic shifts and inspiring the next generation of women founders.</p>

                </div>

                <div className=' tw-bg-gray-200 tw-rounded-xl tw-px-9 tw-py-5 tw-bg-opacity-50'>
                    <img src={developing} alt="" className='tw-w-20 tw-h-24' />
                    <p className='tw-mt-3 tw-text-[#5db6f1] tw-font-bold tw-text-xl'>Developing Gig Economy</p>
                    <p className='tw-text-sm tw-font-medium tw-pt-3'>GIG Economy - India's gig workforce, estimated to be at 77 lakh in 2020-2021, is a expected to go up 2.35 crore by 2029-30. Faucone supports and provides opportunities for GIG Economy</p>
                </div>

            </section>

        </>
    )
}

export default ContributeToTheSocity