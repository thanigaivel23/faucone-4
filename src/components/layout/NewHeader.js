import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RiSearchLine } from 'react-icons/ri';
import { TbSpeakerphone } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Dropdown,
    Ripple,
    initTWE,
} from "tw-elements";
import title from '../../img/title.png'
import Language from './Language';

const NewHeader = () => {
    const { t } = useTranslation();
    useEffect(() => {
        initTWE({ Collapse, Dropdown, Ripple });
    }, [])

    return (
        <div className='tw-z-50  tw-top-0 tw-sticky tw-bg-white'>
            <nav
                className="tw-relative tw-flex tw-items-center tw-justify-between tw-gap-x-5 tw-px-5  md:tw-px-20 tw-py-4"
                data-twe-navbar-ref>
                <div className='lg:tw-flex  lg:tw-items-center lg:tw-gap-x-12   '>
                    <Link to={'/'} className=' '>
                        <img src={title} alt="" />
                    </Link>
                    <div className="!tw-visible tw-hidden tw-flex-grow tw-basis-[100%] tw-items-center lg:!tw-flex lg:tw-basis-auto"
                        id="navbarSupportedContent1"
                        data-twe-collapse-item>
                        <ul className="me-auto tw-flex tw-flex-row" data-twe-navbar-nav-ref>
                            {/* <li data-twe-nav-item-ref>
                                <a
                                    className="tw-block tw-py-2 pe-2 text-black/60 tw-transition tw-duration-200 hover:text-black/80 hover:tw-ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:tw-transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:tw-px-2"
                                    href="/"
                                >Regular link</a
                                >
                            </li> */}
                            <li className="tw-static" data-twe-nav-item-ref data-twe-dropdown-ref>
                                <a
                                    className="tw-flex tw-no-underline tw-items-center tw-whitespace-nowrap tw-py-2 pe-2 tw-text-black/60 tw-transition tw-duration-200 hover:tw-text-black/80 hover:tw-ease-in-out focus:tw-text-black/80 active:tw-text-black/80 motion-reduce:tw-transition-none dark:tw-text-white/60 dark:hover:tw-text-white/80 dark:focus:tw-text-white/80 dark:active:tw-text-white/80 lg:tw-px-2"
                                    href="/"
                                    type="button"
                                    id="dropdownMenuButtonX"
                                    data-twe-dropdown-toggle-ref
                                    aria-expanded="false"
                                    data-twe-nav-link-ref
                                >Solutions
                                    <span className="tw-ms-2 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </a>

                                <div
                                    className=" after:tw-block after:tw-h-screen tw-bg-black tw-bg-opacity-50 tw-absolute tw-left-0 tw-right-0 tw-top-full z-[1000] tw-mt-0 tw-hidden tw-w-full tw-border-none  tw-bg-clip-padding tw-shadow-2xl data-[twe-dropdown-show]:tw-block dark:tw-bg-neutral-700"
                                    aria-labelledby="dropdownMenuButtonX"
                                    data-twe-dropdown-menu-ref>
                                    <div className="tw-px-6 tw-py-5 lg:tw-px-8 tw-bg-white">
                                        <div className="tw-grid tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-4">
                                            <div>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.ourBrands.Business')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.ourBrands.Digital')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.ourBrands.Technologies')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.ourBrands.Solutions')}</a
                                                >

                                            </div>

                                            <div>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.ourBrands.Finance')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.ourBrands.Consultancy')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.ourBrands.Studios')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.ourBrands.Advertising')}</a
                                                >


                                            </div>

                                            <div>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.ourBrands.Space')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.ourBrands.Design')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.ourBrands.Prints')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.ourBrands.Accounting')}</a
                                                >


                                            </div>

                                            <div>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.ourBrands.Legal')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.ourBrands.Supplies')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.ourBrands.Academy')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.ourBrands.Overseas')}</a
                                                >

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>















                            <li className="tw-static " data-twe-nav-item-ref data-twe-dropdown-ref>
                                <a
                                    className=" tw-flex tw-no-underline tw-items-center tw-whitespace-nowrap tw-py-2 pe-2 tw-text-black/60 tw-transition tw-duration-200 hover:tw-text-black/80 hover:tw-ease-in-out focus:tw-text-black/80 active:tw-text-black/80 motion-reduce:tw-transition-none dark:tw-text-white/60 dark:hover:tw-text-white/80 dark:focus:tw-text-white/80 dark:active:tw-text-white/80 lg:tw-px-2"
                                    href="/"
                                    type="button"
                                    id="dropdownMenuButtonX"
                                    data-twe-dropdown-toggle-ref
                                    aria-expanded="false"
                                    data-twe-nav-link-ref
                                >{t('mainHeader.industries.name')}
                                    <span className="tw-ms-2 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </a>





                                <div
                                    className=" after:tw-block after:tw-h-screen tw-bg-black tw-bg-opacity-50 tw-absolute tw-left-0 tw-right-0 tw-top-full z-[1000] tw-mt-0 tw-hidden tw-w-full tw-border-none  tw-bg-clip-padding tw-shadow-lg data-[twe-dropdown-show]:tw-block dark:tw-bg-neutral-700"
                                    aria-labelledby="dropdownMenuButtonX"
                                    data-twe-dropdown-menu-ref>
                                    <div className="tw-px-6 tw-py-5 lg:tw-px-8 tw-bg-white">
                                        <div className="tw-grid tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-4">
                                            <div>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.aero')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.aviation')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.automotive')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.bankFinance')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.capital')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.construction')}</a
                                                >
                                            </div>
                                            <div>

                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.chemical')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.consumer')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.energy')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.fmcg')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.food')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.health')}</a
                                                >
                                            </div>
                                            <div>

                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.industrial')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.insurance')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.lifeScience')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.manufacture')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.media')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.mining')}</a
                                                >
                                            </div>
                                            <div>

                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.oil')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.public')}</a
                                                >

                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.retail')}</a
                                                >

                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.telecom')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.travel')}</a
                                                >
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-block tw-no-underline tw-w-full tw-border-b border-neutral-100 tw-bg-white tw-px-6 tw-py-2 tw-text-black  hover:tw-bg-[#2e93d2] focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:border-white/10 dark:bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >{t('mainHeader.industries.transport')}</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>

                <div className=' lg:tw-flex  lg:tw-items-center lg:tw-gap-x-4 '>

                    <div className='tw-hidden  lg:tw-flex tw-items-center tw-justify-center tw-rounded-full tw-p-1 '><RiSearchLine className=' tw-h-6 tw-w-6 tw-font-light' /></div>
                    <div className='tw-hidden  lg:tw-flex tw-items-center tw-justify-center tw-rounded-full tw-p-1 '><TbSpeakerphone className=' tw-h-6 tw-w-6 tw-font-light' /></div>

                    <div className=' lg:tw-outline-none lg:tw-py-1 lg:tw-my-1 lg:tw-px-2 tw-font-PuviMedium'>
                        <Language />
                    </div>

                    <button className='tw-hidden  lg:tw-flex tw-font-PuviMedium'>Sign in</button>

                    <button className='tw-hidden  tw-font-PuviMedium lg:tw-flex tw-border tw-font-medium tw-px-3 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-duration-300'>Sign up</button>

                </div>
            </nav>
        </div>
    )
}

export default NewHeader