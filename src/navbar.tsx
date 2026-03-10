"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RiCloseLargeFill, RiMenu3Fill } from "react-icons/ri";
import { INavLink } from "./interface";
import Logo from "./components/reuseable/logo";

export default function Navbar() {
    const pathname = usePathname();
    const [isScroll, setIsScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle menu visibility
    const toggleMenu = () => setMenuOpen((prev) => !prev);

    // Navigation links
    const navLinks: INavLink[] = [
        { title: "Home", href: "/" },
        {
            title: "Services",
            href: "services",
        },
        {
            title: "Blogs",
            href: "/blogs"
        },
        {
            title: "About us",
            href: "about-us",
        },
        {
            title: "Contact us",
            href: "contact-us"
        },
    ];

    // Handle scroll event to toggle sticky navbar
    useEffect(() => {
        const handleScroll = () => setIsScroll(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-10 py-4 transition-all duration-300
            ${isScroll
                    ? "bg-white bg-opacity-75 backdrop-blur-md text-black shadow-lg"
                    : "bg-black lg:bg-transparent lg:py-8 text-black"
                }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <Logo isScroll={isScroll} />

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex space-x-7">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href || "#"}
                            className="relative font-medium pb-2 group"
                        >
                            {link.title}
                            <span
                                className={`absolute left-0 bottom-0 block w-full h-[3px] bg-[#2571ff] transition-transform duration-500 ease-in-out origin-right group-hover:origin-left
                                    ${pathname === link.href
                                        ? "scale-x-100"
                                        : "scale-x-0 group-hover:scale-x-100"
                                    }
                                `}
                            />
                        </Link>
                    ))}
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex gap-8">
                    <button
                        className="px-5 py-2 rounded-md cursor-pointer text-whitetext-sm bg-[#2571ff] hover:bg-[#2571ff]/90 [transition:0.3s] text-white px-5 py-2 rounded-md cursor-pointer lg:text-base w-max"
                    >
                        Download App
                    </button>
                </div>


                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button className="cursor-pointer text-white" onClick={() => toggleMenu()}>
                        <RiMenu3Fill size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Overlay */}
            {menuOpen && (
                <div
                    className="fixed w-full h-screen inset-0 bg-black bg-opacity-75 z-40"
                    onClick={toggleMenu}
                ></div>
            )}

            {/* Mobile Sidebar */}
            <aside
                className={`fixed top-0 left-0 !z-[999] w-64 h-screen bg-white text-black shadow-xl transform transition-transform duration-300 ease-in-out
                ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end items-center py-3 pr-5">
                    <button onClick={toggleMenu}>
                        <RiCloseLargeFill className="border border-[#2571ff] rounded-full w-8 h-8 p-[6px]" />
                    </button>
                </div>
                <nav
                    className="flex flex-col space-y-5 mt-3 px-5"
                    onClick={() => setMenuOpen(false)}
                >
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href || "#"}
                            className="relative text-black font-medium pb-2 group"
                        >
                            {link.title}
                            <span
                                className={`absolute left-0 bottom-0 block w-full h-[3px] bg-[#2571ff] transition-transform duration-500 ease-in-out origin-right group-hover:origin-left
                                    ${pathname === link.href
                                        ? "scale-x-100"
                                        : "scale-x-0 group-hover:scale-x-100"
                                    }
                                `}
                            />
                        </Link>
                    ))}
                </nav>
                <button
                    className="px-5 py-2 rounded-md cursor-pointer text-whitetext-sm bg-[#2571ff] hover:bg-[#2571ff]/90 [transition:0.3s] text-white px-5 py-2 rounded-md cursor-pointer lg:text-base w-max"
                >
                    Download App
                </button>
            </aside>
        </header>
    );
}