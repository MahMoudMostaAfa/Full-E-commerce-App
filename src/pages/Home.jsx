import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useProducts } from "../features/Products/useProducts";
import ProductItem from "../features/Products/ProductItem";

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

import Top from "../ui/Top";
import Benefits from "../ui/Benefits";
import { Helmet } from "react-helmet";

const ArrivalItems = lazy(() => import("../ui/ArrivalItems"));

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
      <Helmet>
        <title>Home | E shop</title>
        <meta
          name="description"
          content="Discover the best products on our website."
        />
        <meta name="keywords" content="products, shopping, deals" />
      </Helmet>
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
      <section
        role="region"
        aria-label="Products section"
        ref={sectionRef}
        className="py-10 border-y"
      >
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
        <Suspense fallback={<Spinner />}>
          <ArrivalItems />
        </Suspense>
      </section>
      <Benefits />
    </div>
  );
}

export default Home;
