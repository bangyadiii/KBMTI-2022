import React, { useState } from "react";
import NavLink from "@/Components/FrontPage/NavLink";
import { Link } from "@inertiajs/inertia-react";
import ResponsiveNavLink from "@/Components/FrontPage/ResponsiveNavLink";

function Navbar() {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <nav className="flex flex-wrap overflow-x-hidden justify-center">
            <div className="flex w-full md:w-[85rem] px-10 justify-between h-[120px] items-center overflow-hidden">
                <div className="shrink-0 flex items-center">
                    <Link
                        href="/"
                        className="tracking-wider font-[verdana] text-2xl"
                    >
                        <strong>KBMTI</strong> 2022
                    </Link>
                </div>
                <div className="hidden space-x-0 sm:-my-px sm:ml-10 sm:flex">
                    <div className="self-center">
                        <NavLink href={route("dashboard")} active={false}>
                            HOME
                        </NavLink>
                    </div>
                    <div className="self-center">
                        <NavLink href={route("dashboard")} active={false}>
                            ABOUT
                        </NavLink>
                    </div>
                </div>
                <div className="-mr-2 flex items-center sm:hidden z-20">
                    <button
                        onClick={() =>
                            setShowingNavigationDropdown(
                                (previousState) => !previousState
                            )
                        }
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                        {/* button humbergur */}
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            {/* humbergur icon */}
                            <path
                                className={
                                    !showingNavigationDropdown
                                        ? "inline-flex"
                                        : "hidden"
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />

                            {/* cross icon */}
                            <path
                                className={
                                    showingNavigationDropdown
                                        ? "inline-flex"
                                        : "hidden"
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className={`
                    fixed w-8/12 top-0 sm:hidden h-screen z-10 bg-neutral-800  transition-all duration-300
                    ${
                        showingNavigationDropdown ? "right-0" : "-right-full"
                    } flex justify-center items-center`}
            >
                <div className="pt-2 pb-3 flex flex-wrap gap-y-5 w-full text-center font-medium text-base">
                    <ResponsiveNavLink
                        className="text-white w-full hover:text-slate-500"
                        href={route("home")}
                        active={route().current("home")}
                    >
                        <p>Home</p>
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        className="text-white w-full hover:text-slate-500"
                        href={route("about")}
                        active={route().current("about")}
                    >
                        <p>About</p>
                    </ResponsiveNavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
