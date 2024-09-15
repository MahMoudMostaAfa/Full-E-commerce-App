import { FaRegEnvelope } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import ContactForm from "../ui/ContactForm";

function Contact() {
  return (
    <div className="grid grid-cols-5  gap-4 min-h-[10rem]">
      <div className="col-span-full  lg:col-span-2 p-8 space-y-5 shadow-md">
        <figure className="space-y-4 font-medium pb-8 border-b border-gray-300">
          <div className="flex gap-4 items-center">
            <div className="bg-Secondary2 w-12 h-12 p-2  rounded-full text-white flex items-center justify-center ">
              <LuPhone className="text-2xl font-light" />
            </div>
            <h5 className="flex-grow text-xl font-semibold capitalize ">
              call to use
            </h5>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </figure>
        <figure className="space-y-4 font-medium pb-8 ">
          <div className="flex gap-4 items-center">
            <div className="bg-Secondary2 w-12 h-12 p-2  rounded-full text-white flex items-center justify-center ">
              <FaRegEnvelope className="text-2xl font-light" />
            </div>
            <h5 className="flex-grow text-xl font-semibold capitalize ">
              write to us
            </h5>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </figure>
      </div>
      <div className=" col-span-full  lg:col-span-3 p-8  shadow-md ">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
