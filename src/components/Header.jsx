import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <header>
                <nav className="relative w-full items-center justify-between py-2 text-neutral-600 shadow-lg focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
                    data-te-navbar-ref>
                    <div className="flex w-full flex-wrap  hover:text-white justify- items-center px-3">
                        <div className="flex items-center">
                            <button
                                className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
                                type="button"
                                data-te-collapse-init
                                data-te-target="#navbarSupportedContentY"
                                aria-controls="navbarSupportedContentY"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="[&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="h-7 w-7">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className="mainDiv justify-between first-line:!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto space-x"
                            id="navbarSupportedContentY"
                            data-te-collapse-item>
                            <div>
                                <h1 className='uppercase'>Smart Engineering & Design Solutions</h1>
                            </div>
                            <div>
                                <ul
                                    className="mr-auto flex flex-col lg:flex-row"
                                    data-te-navbar-nav-ref>
                                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                        <Link className="block underline underline-offset-8 focus:decoration-4  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                                            to='/pageone'>pageOne</Link>
                                    </li>
                                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                        <Link className="block underline underline-offset-8 focus:decoration-4 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                                            to='/' >pageTwo</Link>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header