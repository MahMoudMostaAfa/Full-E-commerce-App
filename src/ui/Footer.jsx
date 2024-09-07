import { VscSend } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" py-14 grid grid-cols-5 font-light  gap-6 capitalize text-white">
      <div>
        <h4 className="font-bold mb-3">e shop</h4>
        <h5 className="mb-2">subscribe</h5>
        <p className="font-light mb-2">Get 10% off your first order</p>
        <div className="relative">
          <input
            className=" text-gray-50 focus:outline-[1px] outline outline-[1px] p-1 outline-white bg-transparent"
            type="email"
            placeholder="Enter your email"
          />
          <button className="absolute top-[50%] translate-y-[-50%] right-12   ">
            <VscSend />
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="mb-3 font-normal">support</h4>
        <p>
          111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
        </p>
        <p>eshop@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>
      <div className="space-y-2">
        <h4 className="mb-3 font-normal">account</h4>
        <ul className="space-y-3">
          <li>
            <Link to="/account">My Account</Link>
          </li>
          <li>
            <Link to="/signup">login/register</Link>
          </li>
          <li>
            <Link to="/cart">cart</Link>
          </li>
          <li>
            <Link to="/wishlist">wishlist</Link>
          </li>
          <li>
            <Link to="/products">shop</Link>
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <h4 className="mb-3 font-normal">quick link</h4>
        <ul className="space-y-3">
          <li>
            <Link to="/">privacy policy</Link>
          </li>
          <li>
            <Link to="/">term of use</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="mb-3 font-normal">download app</h4>
        <p className="mb-2">Save $3 with App New User Only</p>
        <div className="grid gap-1 grid-cols-2 grid-cols-2 mb-5">
          <img
            className="col-span-1 row-span-2"
            src="/qrcode.png"
            alt="qr code"
          />
          <img src="/appstore.png" alt="app store" />
          <img src="/googleplay.png" alt="google play" />
        </div>
        <ul className="flex justify-between items-center">
          <li>
            <img src="Icon-Facebook.svg" />
          </li>

          <li>
            <img src="Icon-Linkedin.svg" />
          </li>

          <li>
            <img src="Icon-Twitter.svg" />
          </li>

          <li>
            <img src="icon-instagram.svg" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
