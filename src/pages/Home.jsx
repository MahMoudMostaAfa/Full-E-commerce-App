import { useEffect, useRef, useState } from "react";
import { useProducts } from "../features/Products/useProducts";
import ProductItem from "../features/Products/ProductItem";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Carousel from "../ui/Carousel";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import {
  AiOutlineCamera,
  AiOutlineDesktop,
  AiOutlineMobile,
} from "react-icons/ai";
import { IoWatchOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { BiJoystick } from "react-icons/bi";
import ProductsContainer from "../ui/ProductsContainer";
import { Link, useNavigate } from "react-router-dom";
import NewArrival from "../ui/NewArrival";
import Top from "../ui/Top";
import Benefits from "../ui/Benefits";

const images = [
  {
    src: "/home.jpg",
    alt: "fashion",
  },
  {
    src: "/home2.jpg",
    alt: "fashion",
  },
  {
    src: "/home3.jpg",
    alt: "fashion",
  },
  {
    src: "/home4.jpg",
    alt: "fashion",
  },
];
const categories = [
  {
    title: "phones",
    icon: (
      <AiOutlineMobile className="m-auto text-4xl group-hover:text-white transition-colors" />
    ),
  },
  {
    title: "computers",
    icon: (
      <AiOutlineDesktop className="m-auto text-4xl group-hover:text-white transition-colors" />
    ),
  },
  {
    title: "smartwatches",
    icon: (
      <IoWatchOutline className="m-auto text-4xl group-hover:text-white transition-colors" />
    ),
  },
  {
    title: "camera",
    icon: (
      <AiOutlineCamera className="m-auto text-4xl group-hover:text-white transition-colors" />
    ),
  },
  {
    title: "headphones",
    icon: (
      <CiHeadphones className="m-auto text-4xl group-hover:text-white transition-colors" />
    ),
  },
  {
    title: "gaming",
    icon: (
      <BiJoystick className="m-auto text-4xl group-hover:text-white transition-colors" />
    ),
  },
];
function Home() {
  const navigate = useNavigate();
  const { products, isLoading } = useProducts();
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const sectionRef = useRef(null); // Reference to the section
  const [toTop, setToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0 && isVisible) {
        setIsVisible(false); // Hide the button when scrolled to the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the section is intersecting with the viewport
        if (entry.isIntersecting && !toTop) {
          // console.log("visible");
          setIsVisible(true); // Show the element
          setToTop(false);
        }
      },
      { threshold: 0.5 } // 50% of the section needs to be visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section
    }

    // Cleanup observer on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isLoading]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <Top
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setToTop={setToTop}
      />
      <section className="flex   items-center justify-between h-[20rem] lg:mb-20">
        <ul className="max-sm:hidden capitalize font-medium border-r  border-gray-500 space-y-2 pr-8">
          <li>
            <Link to="/products"> woman&apos;s fasion</Link>
          </li>
          <li>
            {" "}
            <Link to="/products"> men&apos;s fasion</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/products"> electronics</Link>
          </li>
          <li>
            {" "}
            <Link to="/products"> home & lifestyle</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/products"> medicine</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/products"> sports & outdour</Link>
          </li>
          <li>
            {" "}
            <Link to="/products"> baby&apos;s & toys</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/products"> Groceries & pets</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/products"> health & beauty</Link>
          </li>
        </ul>
        <Carousel images={images} />
      </section>
      <section className=" py-10 border-y">
        <Heading title="Categories" />
        <div className="flex justify-between items-center mt-5  mb-10">
          <h3 className="text-2xl font-semibold capitalize">
            Browse By Category
          </h3>
          {/* <div className="flex items-center gap-4">
            <button className="w-8 h-8 p-2 text-center  rounded-full bg-Secondary">
              <FaLongArrowAltLeft className="m-auto " />
            </button>
            <button className="w-8 h-8 p-2 text-center  rounded-full bg-Secondary">
              <FaLongArrowAltRight className="m-auto " />
            </button>
          </div> */}
        </div>
        <div className="flex items-start gap-y-4 flex-wrap justify-between mt-6 ">
          {categories.map((category, index) => (
            <Link
              to="/products"
              key={index}
              className="border py-8 w-44 cursor-pointer rounded-md  group hover:bg-Secondary2 hover:border-none transition-colors "
            >
              <div className="text-center">{category.icon}</div>
              <h3 className="text-xl text-center font-semibold mt-4 group-hover:text-white transition-colors  capitalize ">
                {category.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
      <section role="products" ref={sectionRef} className="py-10 border-y">
        <Heading title="our Products" />
        {/* <div className="flex justify-between items-center mt-5 mb-10">
          <h3 className="text-2xl font-semibold capitalize">
            Explore Our Products
          </h3>
          <div className="flex items-center gap-4">
            <button className="w-8 h-8 p-2 text-center  rounded-full bg-Secondary">
              <FaLongArrowAltLeft className="m-auto " />
            </button>
            <button className="w-8 h-8 p-2 text-center  rounded-full bg-Secondary">
              <FaLongArrowAltRight className="m-auto " />
            </button>
          </div>
        </div> */}
        <ProductsContainer>
          {products.slice(0, 8).map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ProductsContainer>
        <div className="text-center py-10">
          <Button
            onClick={() => navigate("/products")}
            title={"view all products"}
          />
        </div>
      </section>
      <section className="py-10 border-y">
        {" "}
        <Heading title="featured" />
        <div className="flex justify-between items-center mt-5  mb-10">
          <h3 className="text-2xl font-semibold capitalize">new arrivals</h3>
        </div>
        <div className=" h-[50rem] md:h-[35rem] grid grid-cols-4 grid-rows-4 md:grid-rows-2  gap-2 md:gap-6 ">
          <div className=" group relative col-start-1 col-span-full md:col-span-2 row-start-1 row-span-2 overflow-hidden">
            <NewArrival
              title="playstation 5"
              description="Black and White version of the PS5 coming out on sale."
            />

            <img
              src="/ps5.jpg"
              alt="ps"
              loading="lazy"
              className="group-hover:blur-sm object-cover w-full hover:scale-110 transition-all  h-full grayscale"
            />
          </div>
          <div className="relative group col-start-1 col-span-full md:col-start-3 md:col-span-2 row-start-3  row-span-1 md:row-span-1 bg-slate-300 overflow-hidden">
            <NewArrival
              title="Women’s Collections"
              description="Featured woman collections that give you another vibe.."
            />
            <img
              loading="lazy"
              src="/clothes.jpg"
              alt="clothes"
              className="object-cover group-hover:blur-sm w-full hover:scale-110 transition-all  h-full  "
            />
          </div>
          <div className="relative group col-start-1 md:col-start-3 col-span-2 md:col-span-1 row-start-4 md:row-start-2 row-span-1 bg-slate-300 overflow-hidden">
            <NewArrival
              title="Speakers"
              description="Amazon wireless speakers"
            />
            <img
              loading="lazy"
              src="/speaker.jpg"
              alt="ps"
              className="group-hover:blur-sm object-cover hover:scale-110 transition-all w-full  h-full grayscale"
            />
          </div>
          <div className="relative group col-start-3 md:col-start-4 col-span-2 md:col-span-1 row-start-4 md:row-start-2 row-span-1 bg-slate-300 overflow-hidden">
            <NewArrival title="Perfume" description="gucci intense oud edp" />
            <img
              loading="lazy"
              src="/perfume.jpg"
              alt="perfume"
              className="group-hover:blur-sm object-cover hover:scale-110 transition-all w-full  h-full grayscale"
            />
          </div>
        </div>
      </section>
      <Benefits />
    </div>
  );
}

export default Home;
