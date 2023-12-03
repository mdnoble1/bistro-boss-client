import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { RiDeleteBin2Line } from "react-icons/ri";

const Cart = () => {
  const [cart] = useCart();

  // console.log(cart);

  const totalPrice = cart?.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <section className="mt-16">
      <SectionTitle
        heading={"Wanna Add More?"}
        subHeading={"My Cart"}
      ></SectionTitle>

      <div className="flex items-center justify-between mx-4 lg:mx-32 mt-12">
        <h2 className="cinzel font-bold text-3xl">
          TOTAL ORDER : {cart.length}
        </h2>
        <h2 className="cinzel font-bold text-3xl">
          TOTAL PRICE : {totalPrice}
        </h2>
        <button className="btn bg-[#d1a054] text-white text-lg">Pay</button>
      </div>

      <div className="overflow-x-auto rounded-t-md md:rounded-t-2xl mx-4 lg:mx-32 my-6">
        <table className="table">
          {/* head */}
          <thead className="bg-[#d1a054] font-semibold text-white text-center lg:text-lg">
            <tr>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {cart?.map((item) => (
            <tbody key={item._id} className="text-center">
              <tr>
                <td>
                  <img
                    className="w-20 rounded-lg mx-auto"
                    src={item.image}
                    alt=""
                  />
                </td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <td>
                  <button className="btn bg-red-600 text-2xl text-white">
                    <RiDeleteBin2Line></RiDeleteBin2Line>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
};

export default Cart;
