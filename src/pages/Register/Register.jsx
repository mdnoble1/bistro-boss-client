import { Link } from "react-router-dom";
import image from "../../assets/others/authentication2.png";
import { Helmet } from "react-helmet";

const Login = () => {
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
              <form onSubmit="" className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-xl text-[#444]">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type Your Email"
                    className="input rounded"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-xl text-[#444]">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Type Your Password"
                    className="input rounded"
                    required
                  />
                </div>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
