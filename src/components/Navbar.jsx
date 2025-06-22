import { Menu, X } from 'lucide-react';
import { navItems } from '../constants';
import DevRixLogo from './../assets/devRixLogo.png';
import { useState } from 'react';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 border-b border-neutral-700/80 backdrop-blur-lg">
            <div className="container relative px-4 mx-auto text-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-14 w-14" src={DevRixLogo} alt="Logo" />
                    </div>

                    <ul className="hidden space-x-12 lg:flex ml-14">
                        {navItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.href}>
                                        {item.label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="items-center justify-center hidden space-x-12 lg:flex">
                        <a href="#" className="px-3 py-2 border rounded-md">
                            Sign in
                        </a>

                        <a href="#" className="px-3 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                            Create an Account
                        </a>
                    </div>

                    <div className="flex-col justify-end lg:hidden md:flex">
                        <button onClick={toggleNavbar} className="">
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {mobileDrawerOpen &&
                    <div className="fixed right-0 z-20 flex flex-col items-center justify-center w-full p-12 bg-neutral-900 lg:hidden">
                        <ul>
                            {navItems.map((item, index) => {
                                return (
                                    <li key={index} className="py-4">
                                        <a href={item.href}>
                                            {item.label}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>

                        <div className="flex space-x-6">
                            <a href="#" className="px-3 py-2 border rounded-md">
                                Sign in
                            </a>

                            <a href="#" className="px-3 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                                Create an Account
                            </a>
                        </div>
                    </div>
                }
            </div>
        </nav>
    )
};

export default Navbar;
