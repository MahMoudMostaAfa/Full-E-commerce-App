function Heading({ title, color }) {
  return (
    <div className="flex gap-2 h-8 items-center ">
      <span className="bg-Secondary2 w-4 h-full text-h rounded-sm">&nbsp;</span>
      <h3
        className={`${
          color ? `text-${color}` : "text-Secondary2"
        } font-semibold capitalize  `}
      >
        {title}
      </h3>
    </div>
  );
}

export default Heading;
