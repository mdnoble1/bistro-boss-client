import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {

    const [ menu , setMenu ] = useState([]);

    useEffect( () => {
        fetch("menu.json")
            .then( res => res.json())
            .then( data =>  {
                const popularItems = data.filter( item => item.category === 'popular');
                setMenu(popularItems);
            })
    } , [])

    return (
        <section className="lg:mt-32 mb-20">
           <SectionTitle
           heading={"From Our Menu"}
           subHeading={"Check It Out"}></SectionTitle> 
           <div className="container mx-auto w-11/12 lg:w-full grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {
                menu.map( item => <MenuItem
                key={item._id} 
                item={item}></MenuItem>)
            }
           </div>
        </section>
    );
};

export default PopularMenu;