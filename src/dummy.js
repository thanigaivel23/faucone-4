import React, { useEffect, useState } from 'react'
// import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from "react-i18next";
import { Popover } from 'antd';

import tickIcon from '../../img/tickicon.svg'
import china from '../../img/china.png'
import France from '../../img/France.png'
import Germany from '../../img/Germany.png'
import Indonesia from '../../img/Indonesia.png'
import Thailand from '../../img/Thailand.png'
import Netherlands from '../../img/Netherlands.png'
import Japan from '../../img/Japan.png'
import Malaysia from '../../img/Malaysia.png'
import Spain from '../../img/Spain.png'
import UK from '../../img/UK.png'

const Language = () => {


    const { i18n } = useTranslation();
    const [selected, setSelected] = useState("US");
    useEffect(() => {
        i18n.changeLanguage(selected.toLowerCase());
    }, [selected, i18n])

    const [language, setLanguage] = useState('English')

    const languageHandle = (e) => {
        setSelected(e.target.title)
        setLanguage(e.target.textContent)
    }

    const languageContainer = [
        {
            name: 'English',
            title: 'US',
            flag: (<img src={UK} className='tw-w-6' alt='' />)
        },
        {
            name: 'French',
            title: 'FR',
            flag: (<img src={France} className='tw-w-6' alt='' />)

        },
        {
            name: 'German',
            title: 'DE',
            flag: (<img src={Germany} className='tw-w-6' alt='' />)

        },
        {
            name: 'Spanish',
            title: 'ES',
            flag: (<img src={Spain} className='tw-w-6' alt='' />)

        },
        {
            name: 'Malay',
            title: 'MS',
            flag: (<img src={Malaysia} className='tw-w-6' alt='' />)

        },
        {
            name: 'Dutch',
            title: 'NL',
            flag: (<img src={Netherlands} className='tw-w-6' alt='' />)

        },
        {
            name: 'Indonesian',
            title: 'ID',
            flag: (<img src={Indonesia} className='tw-w-6' alt='' />)

        },
        {
            name: 'Thai',
            title: 'TH',
            flag: (<img src={Thailand} className='tw-w-6' alt='' />)

        },
        {
            name: 'Chinese',
            title: 'ZH',
            flag: (<img src={china} className='tw-w-6' alt='' />)

        },
        {
            name: 'Japanese',
            title: 'JA',
            flag: (<img src={Japan} className='tw-w-6' alt='' />)

        },

    ]


    const content = (
        <div className='tw-grid tw-grid-cols-2 tw-gap-x-5 tw-p-5'>


            {languageContainer.map((item, index) => (

                <main key={index} title={item.title} className={`tw-cursor-pointer hover:tw-text-[#056cb8] `}>

                    {language === item.name ? (

                        <div onClick={languageHandle} className='tw-flex my-2  tw-items-center tw-gap-x-2 '>

                            {item.flag}
                            <p className='tw-mb-0'>{item.name}</p>
                            <img src={tickIcon} alt="" className='tw-h-4 tw-w-4' />
                        </div>
                    ) :

                        <div onClick={languageHandle} className='tw-flex my-2  tw-items-center tw-gap-x-2 '>

                            {item.flag}
                            <p className='tw-mb-0'>{item.name}</p>
                        </div>}
                </main>
            ))}

        </div>
    );

    return (
        // <ReactFlagsSelect
        //     selected={selected}
        //     onSelect={data => setSelected(data)}
        //     countries={["US", "FR", "DE", "ES", "MS", "NL", "ID", "TH", "ZH", "JA"]}
        //     customLabels={
        //         {
        //             US: "English",
        //             FR: "French",
        //             DE: "German",
        //             ES: "Spanish",
        //             MS: "Malay",
        //             NL: "Dutch",
        //             ID: "Indonesian",
        //             TH: "Thai",
        //             ZH: "Chinese",
        //             JA: "Japanese"
        //         }}
        //     className='tw-bg-blue-400 '
        //     placeholder="Select Language"

        // />
        <Popover content={content} placement='bottomLeft' className='tw-transition tw-duration-200' trigger={'click'}>
            <button >{language}</button>
        </Popover>

    )
}

export default Language