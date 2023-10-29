import Logo from "../assets/govguide.png";

export const Navbar = () => {
    return (
        <div className="bg-white p-4 w-full main-navbar flex justify-start items-start">
            <img src={Logo} alt="Logo" className="h-10 object-contain" />
        </div>
    );
};
