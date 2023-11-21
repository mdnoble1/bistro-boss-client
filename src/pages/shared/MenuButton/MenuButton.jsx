const MenuButton = ( { buttonTitle } ) => {
  return (
    <div>
      <button className="btn btn-outline text-black uppercase border-0 border-b-4 bg-base-300">
        {buttonTitle}
      </button>
    </div>
  );
};

export default MenuButton;
