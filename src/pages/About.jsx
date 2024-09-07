import { IoBagHandleOutline, IoStorefrontOutline } from "react-icons/io5";
import { LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";
import { RiCustomerServiceLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbMoneybag, TbTruckDelivery } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";

function About() {
  return (
    <div>
      <section className="min-h-[20rem] w-full flex items-center  mb-40">
        <div className="basis-1/2">
          <h2 className="text-5xl capitalize text-black  mb-5 font-semibold">
            our story
          </h2>
          <p className="capitalize font-normal ">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
            <br />
            <span className="mt-2">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </span>
          </p>
        </div>
        <div className="basis-1/2 relative left-[6rem]  flex items-center ">
          <img src="/about-bg.jpg" className="object-cover" />
        </div>
      </section>
      <section className="grid grid-cols-4 gap-10 mb-40">
        <div className="cursor-pointer  group text-center transition-colors duration-200 hover:border-none hover:bg-Secondary2 hover:text-white  border border-Text1 rounded-sm py-10 px-5">
          <span className=" outline transition group-hover:outline-[rgba(255,255,255,0.24)] outline-Text1 outline-[8px] m-auto flex justify-center items-center text-3xl text-white group-hover:text-black group-hover:bg-white bg-black w-12 h-12 p-1  rounded-full mb-5">
            <IoStorefrontOutline />
          </span>
          <h4 className="text-xl font-bold mb-5">10.5k</h4>
          <p className="font-normal">Sallers active our site</p>
        </div>
        <div className="cursor-pointer group text-center transition-colors duration-200 hover:border-none hover:bg-Secondary2 hover:text-white  border border-Text1 rounded-sm py-10 px-5">
          <span className=" outline transition group-hover:outline-[rgba(255,255,255,0.24)] outline-Text1 outline-[8px] m-auto flex justify-center items-center text-3xl text-white group-hover:text-black group-hover:bg-white bg-black w-12 h-12 p-1  rounded-full mb-5">
            <RiMoneyDollarCircleLine />
          </span>
          <h4 className="text-xl font-bold mb-5">33k</h4>
          <p className="font-normal">Mopnthly Produduct Sale</p>
        </div>
        <div className="cursor-pointer group text-center transition-colors duration-200 hover:border-none hover:bg-Secondary2 hover:text-white  border border-Text1 rounded-sm py-10 px-5">
          <span className=" outline transition group-hover:outline-[rgba(255,255,255,0.24)] outline-Text1 outline-[8px] m-auto flex justify-center items-center text-3xl text-white group-hover:text-black group-hover:bg-white bg-black w-12 h-12 p-1  rounded-full mb-5">
            <IoBagHandleOutline />
          </span>
          <h4 className="text-xl font-bold mb-5">45.5k</h4>
          <p className="font-normal">Customer active in our site</p>
        </div>
        <div className="cursor-pointer group text-center transition-colors duration-200 hover:border-none hover:bg-Secondary2 hover:text-white  border border-Text1 rounded-sm py-10 px-5">
          <span className=" outline transition group-hover:outline-[rgba(255,255,255,0.24)] outline-Text1 outline-[8px] m-auto flex justify-center items-center text-3xl text-white group-hover:text-black group-hover:bg-white bg-black w-12 h-12 p-1  rounded-full mb-5">
            <TbMoneybag />
          </span>
          <h4 className="text-xl font-bold mb-5">10.5k</h4>
          <p className="font-normal">Anual gross sale in our site</p>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-14 mb-40">
        <div>
          <div className="  text-center bg-Text1  overflow-hidden  w-full h-[25rem] relative ">
            <img
              src="/person1.png"
              className=" absolute bottom-[-1px] left-[50%] translate-x-[-50%] "
            />
          </div>
          <h3 className="text-xl font-semibold mt-2 capitalize">Tom Cruise</h3>
          <p className="font-normal  ">Founder & Chairman</p>
          <div className="flex gap-4 mt-1 font-semibold">
            <LuTwitter />
            <LuLinkedin />
            <LuInstagram />
          </div>
        </div>
        <div>
          <div className="  text-center bg-Text1  overflow-hidden  w-full h-[25rem] relative ">
            <img
              src="/person2.png"
              className=" absolute bottom-[-1px] left-[50%] translate-x-[-50%] "
            />
          </div>
          <h3 className="text-xl font-semibold mt-2 capitalize">Emma Watson</h3>
          <p className="font-normal  ">Founder & Chairman</p>
          <div className="flex gap-4 mt-1 font-semibold">
            <LuTwitter />
            <LuLinkedin />
            <LuInstagram />
          </div>
        </div>
        <div>
          <div className="  text-center bg-Text1  overflow-hidden  w-full h-[25rem] relative ">
            <img
              src="/person3.png"
              className=" absolute bottom-[-1px] left-[50%] translate-x-[-50%] "
            />
          </div>
          <h3 className="text-xl font-semibold mt-2 capitalize">Will Smith</h3>
          <p className="font-normal  ">Founder & Chairman</p>
          <div className="flex gap-4 mt-1 font-semibold">
            <LuTwitter />
            <LuLinkedin />
            <LuInstagram />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-14 ">
        <div className="cursor-pointer  group text-center py-10 px-5">
          <span className=" outline transition outline-Text1 outline-[8px] m-auto flex justify-center items-center text-3xl text-white bg-black w-12 h-12 p-1  rounded-full mb-5">
            <TbTruckDelivery />
          </span>
          <h4 className="text-xl font-bold mb-2 uppercase">
            FREE AND FAST DELIVERY
          </h4>
          <p className="font-normal">Sallers active our site</p>
        </div>
        <div className="cursor-pointer group text-center py-10 px-5">
          <span className=" outline transition outline-Text1 outline-[8px] m-auto flex justify-center items-center text-3xl text-white bg-black w-12 h-12 p-1  rounded-full mb-5">
            <RiCustomerServiceLine />
          </span>
          <h4 className="text-xl font-bold mb-2 uppercase">
            24/7 CUSTOMER SERVICE
          </h4>
          <p className="font-normal">Mopnthly Produduct Sale</p>
        </div>
        <div className="cursor-pointer group text-center py-10 px-5">
          <span className=" outline transition outline-Text1 outline-[8px] m-auto flex justify-center items-center text-3xl text-white bg-black w-12 h-12 p-1  rounded-full mb-5">
            <VscWorkspaceTrusted />
          </span>
          <h4 className="text-xl font-bold mb-2 uppercase">
            MONEY BACK GUARANTEE
          </h4>
          <p className="font-normal">We reurn money within 30 days</p>
        </div>
      </section>
    </div>
  );
}

export default About;
