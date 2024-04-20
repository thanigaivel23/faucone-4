import React, { useEffect, useState } from 'react'
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from "react-i18next";

const Language = () => {
    const { i18n } = useTranslation();
    const [selected, setSelected] = useState("US");
    useEffect(() => {
        i18n.changeLanguage(selected.toLowerCase());
    }, [selected, i18n])
    return (
        <ReactFlagsSelect
            selected={selected}
            onSelect={data => setSelected(data)}
            countries={["US", "FR", "DE", "ES", "MS", "NL", "ID", "TH", "ZH", "JA"]}
            customLabels={
                {
                    US: "English",
                    FR: "French",
                    DE: "German",
                    ES: "Spanish",
                    MS: "Malay",
                    NL: "Dutch",
                    ID: "Indonesian",
                    TH: "Thai",
                    ZH: "Chinese",
                    JA: "Japanese"
                }}
            className='tw-bg-blue-400 '
            placeholder="Select Language"

        />
    )
}

export default Language