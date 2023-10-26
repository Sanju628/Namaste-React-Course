import { LOGO_URL } from "../utils/Constants";

const Headers = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img 
                    className="logo"
                    src={LOGO_URL}
                />
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Services</li>
                    <li>SignIn</li>
                </ul>
            </div>
        </div>
    );
}

export default Headers;