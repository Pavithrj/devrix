import DevRixLogo from './../assets/devRixLogo.png';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 py-3 border-b backdrop-blur-lg">
            <div className="container relative px-4 mx-auto text-sm">
                <div className="flex items-center justify-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="w-24 h-10" src={DevRixLogo} alt="Logo" />
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
