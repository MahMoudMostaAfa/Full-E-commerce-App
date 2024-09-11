import { RiCustomerServiceLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";

function Benefits() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-14 ">
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
  );
}

export default Benefits;
