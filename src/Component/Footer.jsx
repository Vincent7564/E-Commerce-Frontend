import { AiFillFacebook,AiFillTwitterCircle,AiFillGithub,AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1b240b] w-[100%] text-white px-[10rem] mt-auto pt-10 sticky">
        <div class="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <h1 className=" text-2xl">Discover</h1>
            <div><a href="/">Dashboard</a></div>
            <div>Cart</div>
            <div>Profile</div>
            <div>Transaction</div>
          </div>
          <div className="col-span-1 flex justify-evenly py-12 px-8">
            <span className="p-2"><a href="https://www.facebook.com/"><AiFillFacebook size={40} /></a></span>
            <span className="p-2"><a href="https://twitter.com/"><AiFillTwitterCircle size={40}/></a></span>
            <span className="p-2"><a href="https://github.com/"><AiFillGithub size={40}/></a></span>
            <span className="p-2"><a href="https://www.instagram.com/"><AiFillInstagram size={40}/></a></span>
          </div>
          <div className="col-span-1 flex justify-center">
            <img src={require('../Image/logo.png')} className="w-40 text-center" alt="" />
          </div>
          <div class="col-span-3 text-center pb-4">V&V E-Commerce Shop ©2023</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
