import React, { useEffect, useState } from 'react'
// import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from "react-i18next";
import { Popover } from 'antd';

const Language = () => {

    const [language, setLanguage] = useState('English')
    const languageHandle = (e)=> {
        setSelected(e.target.title)
        setLanguage(e.target.textContent)
    }

    const { i18n } = useTranslation();
    const [selected, setSelected] = useState("US");
    useEffect(() => {
        i18n.changeLanguage(selected.toLowerCase());
    }, [selected, i18n])

    const content = (
        <div className='tw-grid tw-grid-cols-2 tw-gap-x-5 tw-p-5'>
            <p onClick={languageHandle} title='US' className='tw-cursor-pointer'>English</p>
            <p onClick={languageHandle} title='FR' className='tw-cursor-pointer'>French</p>
            <p onClick={languageHandle} title='DE' className='tw-cursor-pointer'>German</p>
            <p onClick={languageHandle} title='ES' className='tw-cursor-pointer'>Spanish</p>
            <p onClick={languageHandle} title='MS' className='tw-cursor-pointer'>Malay</p>
            <p onClick={languageHandle} title='NL' className='tw-cursor-pointer'>Dutch</p>
            <p onClick={languageHandle} title='ID' className='tw-cursor-pointer'>Indonesian</p>
            <p onClick={languageHandle} title='TH' className='tw-cursor-pointer'>Thai</p>
            <p onClick={languageHandle} title='ZH' className='tw-cursor-pointer'>Chinese</p>
            <p onClick={languageHandle} title='JA' className='tw-cursor-pointer'>Japanese</p>

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