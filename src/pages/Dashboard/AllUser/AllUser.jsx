import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  return (
    <section className="mt-16">
      <SectionTitle
        heading={"Manage All Users"}
        subHeading={"How Many??"}
      ></SectionTitle>
      <div className="mx-4 lg:mx-32 mt-12">
        <h2 className="cinzel font-bold text-3xl ">
          TOTAL Users : {users.length}
        </h2>
      </div>
      <div className="overflow-x-auto rounded-t-md md:rounded-t-2xl mx-4 lg:mx-32 my-6">
        <table className="table">
          {/* head */}
          <thead className="bg-[#d1a054] font-semibold text-white text-center lg:text-lg">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          {users?.map((user, index) => (
            <tbody key={user._id} className="text-center">
              <tr>
                <td className="font-bold">{index + 1}</td>
                
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><button className="btn bg-[#d1a054]">
                <FaUsers className="text-2xl text-white"></FaUsers></button></td>
                <td>
                  <button
                    className="btn bg-red-600 text-2xl text-white"
                  >
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

export default AllUser;
