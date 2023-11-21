const BannerCover = ( { image , title , description } ) => {
  return (
    <div
      className="hero h-[400px] lg:h-[800px]"
      style={{
        backgroundImage:
          `url("${image}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md mt-20">
          <h1 className="mb-5 text-4xl lg:text-7xl font-bold uppercase cinzel">{title}</h1>
          <p className="mb-5 uppercase cinzel font-semibold lg:text-xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerCover;
