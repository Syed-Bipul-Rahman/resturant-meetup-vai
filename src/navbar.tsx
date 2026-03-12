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
    const [activeSection, setActiveSection] = useState<string>("");

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    // Navigation links
    const navLinks: INavLink[] = [
        { title: "Home", href: "/" },
        {
            title: "Services",
            href: "#services",
        },
        {
            title: "Features",
            href: "#features",
        },
        {
            title: "FAQ",
            href: "#faq"
        },
        {
            title: "About us",
            href: "/about-us",
        },
    ];

    // Determine which nav link is active
    const isActive = (href: string | undefined) => {
        if (!href) return false;
        if (href.startsWith("#")) {
            return activeSection === href;
        }
        if (href === "/") {
            return pathname === "/" && activeSection === "";
        }
        return pathname === href;
    };

    // Track scroll position for navbar background
    useEffect(() => {
        const handleScroll = () => setIsScroll(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Track which section is in view using IntersectionObserver
    useEffect(() => {
        if (pathname !== "/") {
            setActiveSection("");
            return;
        }

        const sectionIds = navLinks
            .filter((l) => l.href?.startsWith("#"))
            .map((l) => l.href!.slice(1));

        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${id}`);
                    }
                },
                { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
            );

            observer.observe(el);
            observers.push(observer);
        });

        // Reset active section when scrolled back to top
        const handleScroll = () => {
            if (window.scrollY < 100) setActiveSection("");
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            observers.forEach((o) => o.disconnect());
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-10 py-4 transition-all duration-300
            ${isScroll
                    ? "bg-white/75 backdrop-blur-md text-black shadow-lg"
                    : "bg-transparent lg:py-8 text-black"
                }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <Link href="/">
                    <Logo isScroll={isScroll} />
                </Link>
                {/* menu  */}
                <nav className="hidden lg:flex space-x-7">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href || "#"}
                            className="relative font-medium pb-2 group"
                        >
                            {link.title}
                            <span
                                className={`absolute left-0 bottom-0 block w-full h-[3px] bg-primary transition-transform duration-500 ease-in-out origin-right group-hover:origin-left
                                    ${isActive(link.href)
                                        ? "scale-x-100"
                                        : "scale-x-0 group-hover:scale-x-100"
                                    }
                                `}
                            />
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:flex gap-8">
                    <button
                        className="px-5 py-2 rounded-md cursor-pointer text-white text-sm bg-primary hover:bg-primary/90 [transition:0.3s] w-max"
                    >
                        Download App
                    </button>
                </div>

                <div className="lg:hidden">
                    <button className="cursor-pointer hover:text-primary [transition:0.3s] text-black" onClick={() => toggleMenu()}>
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
                        <RiCloseLargeFill className="border border-primary rounded-full w-8 h-8 p-[6px] cursor-pointer hover:text-primary [transition:0.3s]" />
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
                                className={`absolute left-0 bottom-0 block w-full h-[3px] bg-primary transition-transform duration-500 ease-in-out origin-right group-hover:origin-left
                                    ${isActive(link.href)
                                        ? "scale-x-100"
                                        : "scale-x-0 group-hover:scale-x-100"
                                    }
                                `}
                            />
                        </Link>
                    ))}
                    <button
                        className="px-5 py-2 rounded-md cursor-pointer text-white text-sm bg-primary hover:bg-primary/90 [transition:0.3s] w-max"
                    >
                        Download App
                    </button>
                </nav>
            </aside>
        </header>
    );
}