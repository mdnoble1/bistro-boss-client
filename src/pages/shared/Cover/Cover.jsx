const Cover = ( { image , title , description } ) => {
  return (
    <div
      className="hero h-[300px] lg:h-[500px]"
      style={{
        backgroundImage: `url("${image}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl lg:mt-20">
          <h1 className="mb-5 text-4xl lg:text-5xl font-semibold uppercase cinzel">
            {title}
          </h1>
          <p className="mb-5 uppercase font-semibold">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
