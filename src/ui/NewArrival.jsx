import { Link } from "react-router-dom";

function NewArrival({ title, description }) {
  return (
    <div className=" left-[-100%] group-hover:left-0 transition-all duration-400 text-white p-8 absolute bottom-0 w-full z-30 ">
      <h3 className="font-semibold text-2xl capitalize mb-2">{title}</h3>
      <p className="capitalize  w-3/4">{description}</p>
      <Link
        to="/products"
        className="text-xl capitalize font-semibold underline underline-offset-8 "
      >
        {" "}
        shop now
      </Link>
    </div>
  );
}

export default NewArrival;
