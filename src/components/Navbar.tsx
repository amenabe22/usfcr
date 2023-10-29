import Logo from "../assets/logo.png";

export const Navbar = () => {
    return (
        <div className="bg-white p-4 w-full main-navbar">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </div>
    );
};
