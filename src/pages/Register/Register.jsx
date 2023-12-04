/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/others/authentication2.png";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    //console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      // console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          //console.log('user profile info updated')
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <section>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div className="hero min-h-screen py-16">
        <div className="hero-content flex-col md:flex-row-reverse items-center justify-between gap-12 lg:gap-32">
          <div className="text-center md:w-1/2">
            <Link to="/">
              <img src={image} alt="" />
            </Link>
          </div>
          <div className="md:w-1/2">
            <h2 className="font-bold text-4xl text-black text-center mb-12">
              Sign Up
            </h2>
            <div className="card rounded-sm shadow-2xl bg-slate-100 py-4">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-xl text-[#444]">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Type Your Name"
                    className="input rounded"
                  />
                </div>
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
                {/* photoURL */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-xl text-[#444]">
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Your Photo URL"
                    className="input rounded"
                  />
                  {errors.photoURL && (
                    <span className="text-red-600">Photo is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-xl text-[#444]">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="Type Your Email"
                    className="input rounded"
                  />
                </div>
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-xl text-[#444]">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    name="password"
                    placeholder="Type Your Password"
                    className="input rounded"
                  />
                </div>
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must contain Uppercase, lower case, number and
                    special characters.
                  </p>
                )}

                <div className="form-control mt-6">
                  <input
                    className="btn btn-outline rounded font-bold text-xl text-white bg-[#d9b783] border-0 "
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <p className="font-bold text-xl text-[#D1A054] text-center mb-6">
                Already Registered? <Link to="/login">Go To Login</Link>{" "}
              </p>
              <div className="text-center">
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
