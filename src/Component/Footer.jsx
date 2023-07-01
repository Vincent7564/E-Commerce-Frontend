import { AiFillFacebook,AiFillTwitterCircle,AiFillGithub,AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1b240b] w-[100%] text-vnv-light px-[10rem] mt-auto pt-10 sticky">
        <div class="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <h1 className=" text-2xl">Discover</h1>
            <div className="ps-2 text-vnv-light-grey hover:text-vnv-green-dark-hover"><a href="/">Dashboard</a></div>
            <div className="ps-2 text-vnv-light-grey hover:text-vnv-green-dark-hover">Cart</div>
            <div className="ps-2 text-vnv-light-grey hover:text-vnv-green-dark-hover">Profile</div>
            <div className="ps-2 text-vnv-light-grey hover:text-vnv-green-dark-hover">Transaction</div>
          </div>
          <div className="col-span-1 flex justify-evenly py-12 px-8">
            <span className="p-2 hover:text-vnv-green-accent"><a href="https://www.facebook.com/"><AiFillFacebook size={40} /></a></span>
            <span className="p-2 hover:text-vnv-green-accent"><a href="https://twitter.com/"><AiFillTwitterCircle size={40}/></a></span>
            <span className="p-2 hover:text-vnv-green-accent"><a href="https://github.com/"><AiFillGithub size={40}/></a></span>
            <span className="p-2 hover:text-vnv-green-accent"><a href="https://www.instagram.com/"><AiFillInstagram size={40}/></a></span>
          </div>
          <div className="col-span-1 flex justify-center">
            <img src={require('../Image/logo.png')} className="h-[120px] [w-180px] overflow-hidden text-center" alt="" />
          </div>
          <div class="col-span-3 text-center pb-4">V&V E-Commerce Shop ©2023</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
