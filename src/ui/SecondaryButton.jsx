function SecondaryButton({ onClick, title }) {
  return (
    <button
      onClick={() => onClick?.()}
      className="border border-black capitalize font-normal text-lg px-6 py-2 "
    >
      {title}
    </button>
  );
}

export default SecondaryButton;
