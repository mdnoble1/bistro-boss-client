const SectionTitle = ( { subHeading, heading } ) => {
    return (
        <div className="mx-auto text-center w-8/12 lg:w-3/12 my-8">
            <p className="md:text-xl text-[#D99904] mb-2">--- {subHeading} ---</p>
            <h2 className="font-medium text-3xl md:text-4xl text-[#151515] border-y-4 py-2 uppercase">{heading}</h2>
        </div>
    );
};

export default SectionTitle;