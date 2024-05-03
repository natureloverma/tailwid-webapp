// Footer.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { FaLongArrowAltUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-light p-4  "
      style={{
        textAlign: "left",
      }}
    >
      <div className="container p-14 pb-5">
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-2">
            <a href="#">
              <h5 className=" text-3xl font-bold p-2 pb-1 text-center">
                UNIVERSITY
              </h5>
              <p className=" text-center text-gray-500">Landmark Education</p>{" "}
            </a>
          </div>

          <div className="col-md-2">
            <h5 className="p-2 font-bold text-2xl ">Quick Links</h5>
            <p className=" text-gray-400 hover:text-green-800 hover:underline p-2 ">
              <a href="#" className=" text-center">
                Work
              </a>
            </p>
            <p className=" text-gray-400 hover:text-green-800 hover:underline p-2 ">
              <a href="#" className=" text-center">
                Services
              </a>
            </p>
            <p className=" text-gray-400 hover:text-green-800 hover:underline p-2 ">
              <a href="#" className=" text-center">
                Products
              </a>
            </p>
            <p className=" text-gray-400 hover:text-green-800 hover:underline p-2 ">
              <a href="#" className=" text-center">
                Tips & Tricks
              </a>
            </p>
          </div>

          <div className="col-md-2">
            <h5 className="p-2 font-bold text-2xl">Programs</h5>
            <p> </p>
            <p className=" text-gray-400 hover:text-green-800 hover:underline p-2 ">
              <a href="#" className=" text-center">
                Air freight
              </a>
            </p>
            <p className=" text-gray-400 hover:text-green-800 hover:underline p-2 ">
              <a href="#" className=" text-center">
                Ocean freight
              </a>
            </p>
            <p className=" text-gray-400 hover:text-green-800 hover:underline p-2 ">
              <a href="#" className=" text-center">
                Large projects
              </a>
            </p>
          </div>

          <div className="col-md-2">
            <h5 className="p-2 font-bold text-2xl">Resourses</h5>
            <p> </p>
            <p className=" text-gray-400 hover:text-green-800 hover:underline p-2 ">
              <a href="#" className=" text-center">
                FAQ
              </a>
            </p>
            <p className=" text-gray-400 hover:text-green-800 hover:underline p-2 ">
              <a href="#" className=" text-center">
                Submit Ticket
              </a>
            </p>
            <p className=" text-gray-400 hover:text-green-800 hover:underline p-2 ">
              <a href="#" className=" text-center">
                Contact Us
              </a>
            </p>
          </div>

          <div className="col-md-4">
            <h5 className="p-2 font-bold text-2xl">Newsletter</h5>
            <p> </p>
            <p className="p-2 text-gray-400">
              Subsrcibe newsletter to get updates.
            </p>
            <div className="mail">
              <input
                type="text"
                id="email"
                className=" px-5 py-3 "
                placeholder="Enter your email"
                style={{ outline: "none" }}
              ></input>
              <Button className="bg-green-800 rounded-none border-none text-5xl hover:bg-green-800">
                <IoSendSharp />
              </Button>
            </div>
            <br />
            <div className="flex gap-2">
              <a
                className="text-2xl  hover:text-green-800"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fyour-website.com%2F&amp;src=sdkpreparse"
              >
                <FaFacebook />{" "}
              </a>

              <a
                className="text-2xl  hover:text-green-800"
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/search?q=instagram&rlz=1C1KNTJ_enLK1078LK1078&oq=ins&gs_lcrp=EgZjaHJvbWUqDQgDEAAYgwEYsQMYgAQyDwgAEEUYORiDARixAxiABDIMCAEQIxgnGIAEGIoFMgYIAhAjGCcyDQgDEAAYgwEYsQMYgAQyEAgEEAAYgwEYsQMYgAQYigUyBggFEAUYQDIGCAYQRRg8MgYIBxBFGD3SAQg1OTczajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
              >
                <FaInstagram />{" "}
              </a>

              <a
                className="text-2xl  hover:text-green-800"
                target="_blank"
                rel="noreferrer"
                href="https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558721_kw.linkedin%20profile_d.c_tid.kwd-10521864172_n.g_mt.e_geo.9069438&mcid=6844056167778418689&cid=&gclid=Cj0KCQiAyeWrBhDDARIsAGP1mWTU-xqbxkAiRc7caMkheyOpX1IZRhdVj10wsD-k8XXycpGFBNue41saAvRbEALw_wcB&gclsrc=aw.ds"
              >
                <FaLinkedinIn />{" "}
              </a>

              <a
                className="text-2xl  hover:text-green-800"
                target="_blank"
                rel="noreferrer"
                href="https://youtube.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558721_kw.linkedin%20profile_d.c_tid.kwd-10521864172_n.g_mt.e_geo.9069438&mcid=6844056167778418689&cid=&gclid=Cj0KCQiAyeWrBhDDARIsAGP1mWTU-xqbxkAiRc7caMkheyOpX1IZRhdVj10wsD-k8XXycpGFBNue41saAvRbEALw_wcB&gclsrc=aw.ds"
              >
                <FaYoutube />{" "}
              </a>
            </div>
          </div>
        </div>
        <hr className="p-10" />
        <div className="row mt-5 col-md-12 text-center text-gray-400 w-full">
          <p className="whitespace-nowrap overflow-hidden w-full">
            Copyright &copy; 2024 All rights reserved | This is made with
            <FaHeart className="text-green-800" /> by{" "}
            <a href="#" className="text-green-800">
              landmark
            </a>
          </p>{" "}
        </div>
      </div>{" "}
      <Button className="bg-green-700 rounded-full p-3 text-3xl fixed bottom-10 right-10  border-none hover:bg-green-700 ">
        <FaLongArrowAltUp />
      </Button>
    </footer>
  );
};

export default Footer;
