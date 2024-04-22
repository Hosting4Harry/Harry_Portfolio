// import logo from "../assets/hp.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { TbLetterH, TbLetterP } from "react-icons/tb"
const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                {/* <img src={logo} alt="logo" className="mx-2 w-10"></img> */}
                <TbLetterH className="w-8 h-1/5" />
                <TbLetterP className="w-8 h-1/5" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/haraprasad-tripathy-22951922b/"><FaLinkedin /></a>
                <a href="https://github.com/Hosting4Harry"><FaGithub /></a>
                <a href="https://twitter.com/Hp_tripathy"><FaSquareXTwitter /></a>
                <a href="https://www.instagram.com/_h_a_r_r_y_boy_ig_"><FaInstagram /></a>
            </div>
        </nav>
    )
}

export default Navbar