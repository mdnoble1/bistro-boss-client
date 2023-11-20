const MenuItem = ( { item } ) => {

    const { name , recipe , image , price } = item || {};

    return (
        <div className="flex gap-8">
            <img style={{borderRadius : "0 200px 200px 200px"}} className="h-16 md:w-28 lg:h-auto " src={image} alt="" />
            <div>
                <h2 className="cinzel text-xl text-black">{name} -------------</h2>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-xl text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;