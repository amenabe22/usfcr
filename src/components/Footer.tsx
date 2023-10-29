import Logo from "../assets/govguide.svg";

export const Footer = () => {
    return (
        <div className="main-footer mt-24">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <div style={{ height: 58 }}></div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <p className="footer-title">QUICK LINKS</p>
                    <div className="pt-6">
                        <p className="footer-item">
                            SAM Registration
                        </p>
                        <p className="footer-item">
                            Simplified Acquisition Program™
                        </p>
                        <p className="footer-item">

                            Advanced Procurement Portal (APP)
                        </p>
                        <p className="footer-item">

                            Federal Proposal Writing & Consulting
                        </p>
                        <p className="footer-item">

                            USFCR Academy
                        </p>
                        <p className="footer-item">

                            GSA Schedule Program
                        </p>
                        <p className="footer-item">

                            Vendor Management Program
                        </p>
                        <p className="footer-item">

                            Veteran-Owned Small Business
                        </p>
                        <p className="footer-item">

                            Women-Owned Small Business
                        </p>
                        <p className="footer-item">
                            HUBZone Registration
                        </p>
                    </div>
                </div>
                <div>
                    <p className="footer-title">COPMANY</p>

                    <div className="pt-6">
                        <p className="footer-item">
                            Resources
                        </p>
                        <p className="footer-item">
                            Our Team
                        </p>
                        <p className="footer-item">
                            Partners & Affiliates
                        </p>
                        <p className="footer-item">
                            Careers
                        </p>
                        <p className="footer-item">
                            Scholarships
                        </p>
                    </div>
                </div>
                <div>
                    <p className="footer-title">COMPANY</p>
                    <div className="pt-6">
                        <p className="footer-item">
                            Resources
                        </p>
                        <p className="footer-item">
                            Our Team
                        </p>
                        <p className="footer-item">
                            Partners & Affiliates
                        </p>
                        <p className="footer-item">
                            Careers
                        </p>
                        <p className="footer-item">
                            Scholarships
                        </p>
                    </div>
                </div>
                <div>
                    <p className="footer-title">CONTACT US</p>
                    <div className="pt-6">
                        <p className="footer-item">
                            US Federal Contractor Registration
                        </p>

                        <p className="footer-item">
                            15950 Bay Vista Dr, Suite 250
                        </p>
                        <p className="footer-item">
                            Clearwater, FL 33760
                        </p>
                        <p className="footer-item">
                            Contact Us or call (877) 252-2700
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
