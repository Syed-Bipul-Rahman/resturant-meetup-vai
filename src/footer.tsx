import Link from 'next/link';
import { FaUtensils } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Logo from './components/reuseable/logo';

export default function Footer() {
    const data = new Date();
    const year = data.getFullYear();
    return (
        <footer className="bg-black pt-20 pb-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-4">
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="flex items-center gap-2 group mb-2">
                        <Logo className='w-max' />
                        <h1 className="text-2xl font-bold text-white">
                            Restaurant
                        </h1>
                    </Link>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        Redefining restaurant meetups through curated culinary experiences and meaningful connections.
                    </p>
                    <div className="flex gap-4">
                        {[FaFacebook, FaYoutube, FaInstagram, FaTwitter,].map((Icon, i) => (
                            <Link
                                key={i}
                                href="#"
                                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary  hover:bg-primary hover:text-white transition-colors"
                            >
                                <Icon size={20} />
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <h6 className="font-bold text-white mb-6">Platform</h6>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><Link className="hover:text-primary transition-colors" href="#">How it works</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="#">Partner Restaurants</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="#">Safety Guidelines</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="#">Pricing</Link></li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold text-white mb-6">Company</h6>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><Link className="hover:text-primary transition-colors" href="/about-us">About Us</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="/terms-and-service">Terms And Service</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="#">Success Stories</Link></li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold text-white mb-6">Subscribe to our newsletter</h6>
                    <p className="text-sm text-slate-400 mb-4">
                        Get the latest restaurant openings and dating tips.
                    </p>
                    <div className="flex gap-2">
                        <input
                            className="border border-primary/20 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-slate-400"
                            placeholder="Email address"
                            type="email"
                        />
                        <button className="bg-primary text-white p-2 rounded-lg cursor-pointer hover:bg-primary/90 transition-colors">
                            <FaArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                <p>© {year} Restaurant Meetup Inc. All rights reserved.</p>
                <div className="flex gap-8">
                    <Link className="hover:text-primary transition-colors" href="/privacy-policy">Privacy Policy</Link>
                    <Link className="hover:text-primary transition-colors" href="/terms-and-service">Terms of Service</Link>
                    <Link className="hover:text-primary transition-colors" href="#">Cookie Policy</Link>
                </div>
            </div>
        </footer>
    );
}
