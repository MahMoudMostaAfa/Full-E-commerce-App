function Button({ title, onClick, disabled, width }) {
  return (
    <button
      disabled={disabled ? true : false}
      type="submit"
      onClick={() => onClick?.()}
      className={`${
        width ? "w-full" : ""
      } relative  min-h-10  min-w-36   disabled:cursor-not-allowed  rounded-sm bg-Button2 hover:bg-ButtonHover transition-all text-white duration-200 capitalize font-normal max-md:px-3  px-6 py-2 `}
    >
      {title}
    </button>
  );
}

export default Button;
