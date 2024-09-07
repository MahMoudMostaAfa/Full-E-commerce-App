import { Link } from "react-router-dom";

function Empty({ title, goTo }) {
  return (
    <div className="  text-center text-2xl mt-2">
      No items in your {title} ...{" "}
      <Link className="text-Button2" to={goTo}>
        start add to {title}
      </Link>
    </div>
  );
}

export default Empty;
