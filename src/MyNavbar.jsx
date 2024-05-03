// MyNavbar.jsx
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import bgimg from "./assets/brand.png";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  //   function showSidebar() {
  //     const sidebar = document.querySelector(".sidebar");
  //     sidebar.style.display = "flex";
  //   }

  //   function hideSidebar() {
  //     const sidebar = document.querySelector(".sidebar");
  //     sidebar.style.display = "none";
  //   }

  return (
    // <Navbar className="nav" bg="white" href="#home" sticky="top">
    <Navbar className="sticky top-0 bg-white flex justify-items-right p-3 gap-[5vw]">
      <div>
        <a href="#">
          <img src={bgimg} alt="" width={250} height={70} />
        </a>{" "}
      </div>

      <ul className="flex  gap-[4vw] ">
        <li className="hover:text-green-700 ">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-green-700">
          <a href="#">About</a>
        </li>
        <li className="hover:text-green-700">
          <a href="#">Programs</a>
        </li>
        <li className="hover:text-green-700">
          <a href="#">Blog</a>
        </li>
        <li className="hover:text-green-700">
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <ul>
        <div>
          <ul className="flex gap-[1vw]">
            <a href="#" className="text-green-800">
              Call Us :{" "}
            </a>{" "}
            <a href="#" className="ca">
              0 (78) 1234567
            </a>
            <a href="#" className="text-gray-300">
              |
            </a>
            <a
              className="Social-icon-facebook text-2xl text-blue-800  transition-transform duration-300  hover:scale-x-[-1]"
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fyour-website.com%2F&amp;src=sdkpreparse"
            >
              <FaFacebookSquare />{" "}
            </a>
            <a
              className="Social-icon-twitter text-2xl text-blue-800 transition-transform duration-300  hover:scale-x-[-1]"
              href="https://twitter.com/intent/tweet"
              target="_blank"
              rel="noreferrer"
            >
              <FaSquareTwitter />{" "}
            </a>
            <a
              className="Social-icon-linkedin text-2xl text-blue-500 transition-transform duration-300  hover:scale-x-[-1]"
              href="https://lk.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />{" "}
            </a>
            <a
              className="Social-icon-youtube text-2xl text-red-500 transition-transform duration-300  hover:scale-x-[-1]"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutubeSquare />{" "}
            </a>
            <a
              className="Social-icon-mail text-2xl text-green-500 transition-transform duration-300  hover:scale-x-[-1]"
              href="https://mail.google.com/mail"
              target="_blank"
              rel="noreferrer"
            >
              <IoMdMail />{" "}
            </a>
            {/* <li className="menu-button">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </a>
            </li> */}
          </ul>
        </div>
      </ul>
      {/* <ul className="sidebar">
        <li>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </a>
        </li>
      </ul> */}
    </Navbar>
  );
};

export default MyNavbar;
