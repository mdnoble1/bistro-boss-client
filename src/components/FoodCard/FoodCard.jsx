/* eslint-disable no-unused-vars */
import MenuButton from "../../pages/shared/MenuButton/MenuButton";
import useAuth from "../../hooks/useAuth"
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item || {};

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch ] = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = ( food ) => {
    // console.log(food , user.email) 

    if( user && user.email ){
      // sending cart item to database 

      // console.log( user.email , food ) 

      const cartItem = {
        menuId : _id, 
        email : user.email,
        name, 
        image, 
        price
      }

      axiosSecure.post('/carts' , cartItem)
        .then(res => {
          console.log(res.data)

          if(res.data.insertedId){
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${name} Has Been Added To Your Cart !`,
              showConfirmButton: false,
              timer: 1500
            });

            // refetch cart to instantly update cart number 
            refetch();
          }
        })
    }
    else{
      Swal.fire({
        title: "You Are Not Logged In !",
        text: "Please Login To Add To Cart !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login !"
      }).then((result) => {
        if (result.isConfirmed) {
          // send user to login page 
          navigate("/login" , {state:  {form: location} });
        }
      });
    }
  }
    
  

  return (
    <div className="bg-[#F3F3F3] shadow-xl w-[360px] mx-auto">
      <div className="relative">
        <img src={image} alt="Food" />
        <p className="font-semibold text-white bg-black w-fit px-4 py-1 rounded-md absolute top-3 right-3">${price}</p>
      </div>
      <div className="text-center mt-8 px-2 h-28">
        <h2 className="font-semibold text-2xl text-black">{name}</h2>
        <p className="text-[#737373] mt-2">{recipe}</p>
      </div>
      <div className="mt-6 mb-8 text-center" onClick={() => handleAddToCart(item)}>
        <MenuButton buttonTitle={"Add To Cart"}></MenuButton>
      </div>
    </div>
  );
};

export default FoodCard;
