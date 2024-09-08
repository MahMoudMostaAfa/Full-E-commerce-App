import { se } from "date-fns/locale";
import { FaArrowUp } from "react-icons/fa";

function Top({ isVisible, setIsVisible, setToTop }) {
  console.log(isVisible);
  return (
    <button
      onClick={() => {
        setToTop(true);
        setIsVisible(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={` ${
        isVisible ? "visible opacity-100" : "invisible opacity-0"
      } fixed  rounded-full bg-Secondary shadow-md p-4 top-effect right-10 bottom-10 z-40 transition-all`}
    >
      <FaArrowUp />
    </button>
  );
}

export default Top;
