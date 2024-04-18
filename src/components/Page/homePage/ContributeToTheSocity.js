import React from 'react'

import { useTranslation } from 'react-i18next'

const ContributeToTheSocity = () => {
    const { t } = useTranslation();
    return (
        <>
            {/* 5th section - contribute to the socity */}
            <section className='tw-bg-gradient-to-r tw-from-sky-300 tw-to-red-400 md:tw-px-5 tw-grid xs:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-5 md:tw-gap-10 lg:tw-gap-0 lg:tw-gap-x-20 tw-mt-20 md:tw-mt-40 tw-px-5 tw-py-5 md:tw-px-10'>

                <div className=' tw-bg-gray-200 tw-rounded-xl tw-px-9 tw-py-5 tw-bg-opacity-50'>
                    <p className='tw-mt-3 tw-text-[#41a5e8] tw-font-bold tw-text-xl'>{t('home.women_empower')}</p>
                    <p className='    tw-text-sm  md:tw-pt-10'>
                        <b>Digital literacy:</b> {t('home.women_empower_desc1')}

                        <br /><br /> <b>Family and community impact:</b> {t('home.women_empower_desc2')}.

                        <br /><br />  <b>Economical Development:</b> {t('home.women_empower_desc3')}.
                    </p>
                </div>

                <div className=' tw-bg-gray-200 tw-rounded-xl tw-px-9 tw-py-5 tw-bg-opacity-50'>
                    <p className='tw-mt-3 tw-text-[#41a5e8] tw-font-bold tw-text-xl'>{t('home.startup_ecoSystem')}</p>
                    <p className='     tw-text-sm tw-pt-3'>{t('home.startup_ecoSystem_desc')}.</p>

                </div>

                <div className=' tw-bg-gray-200 tw-rounded-xl tw-px-9 tw-py-5 tw-bg-opacity-50'>
                    <p className='tw-mt-3 tw-text-[#41a5e8] tw-font-bold tw-text-xl'>{t('home.women_enterpernership')}</p>
                    <p className=' tw-text-sm tw-pt-3'>{t('home.women_enterpernership_desc')}.</p>

                </div>

                <div className=' tw-bg-gray-200 tw-rounded-xl tw-px-9 tw-py-5 tw-bg-opacity-50'>
                    <p className='tw-mt-3 tw-text-[#41a5e8] tw-font-bold tw-text-xl'>{t('home.gig_economy')}</p>
                    <p className=' tw-text-sm tw-pt-3'>{t('home.gig_economy_desc')}</p>
                </div>

            </section>

        </>
    )
}

export default ContributeToTheSocity