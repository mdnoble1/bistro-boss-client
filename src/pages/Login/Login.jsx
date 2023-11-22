import { Link } from "react-router-dom";
import image from "../../assets/others/authentication2.png";
// import { useContext } from "react";
import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
// import { AuthContext } from "../../providers/AuthProvider";
// import Swal from "sweetalert2";
// import SocialLogin from "../../components/SocialLogin/SocialLogin";

import { Helmet } from "react-helmet";

const Login = () => {
    const [disabled, setDisabled] = useState(true);
  //   const { signIn } = useContext(AuthContext);
  //   const navigate = useNavigate();
  //   const location = useLocation();

  //   const from = location.state?.from?.pathname || "/";
  //   console.log("state in the location login page", location.state);

    useEffect(() => {
      loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (event) => {


      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      
      console.log(email, password);

      // signIn(email, password).then((result) => {
      //   const user = result.user;
      //   console.log(user);
      //   //sweetalert
      //   Swal.fire({
      //     title: "User Login Successful.",
      //     showClass: {
      //       popup: "animate_animated animate_fadeInDown",
      //     },
      //     hideClass: {
      //       popup: "animate_animated animate_fadeOutUp",
      //     },
      //   });
      //   navigate(from, { replace: true });
      // });
    };

    const handleValidateCaptcha = (e) => {
      const user_captcha_value = e.target.value;
      console.log(user_captcha_value);
      if (validateCaptcha(user_captcha_value)) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };

  return (
    <section>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen py-16">
        <div className="hero-content flex-col md:flex-row items-center justify-between gap-12 lg:gap-32">
          <div className="text-center md:w-1/2">
            <Link to="/"><img src={image} alt="" /></Link>
          </div>
          <div className="md:w-1/2">
            <h2 className="font-bold text-4xl text-black text-center mb-12">Login</h2>
            <div className="card rounded-sm shadow-2xl bg-slate-100 py-4">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-xl text-[#444]">Email</span>
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
                    <span className="label-text font-semibold text-xl text-[#444]">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Type Your Password"
                    className="input rounded"
                    required
                  />
                </div>

                {/* chaptcha */}
                <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type The Captcha You See Above"
                  className="input rounded"
                  required
                />
              </div>

                <div className="form-control mt-6">
                  <input
                      disabled={disabled}
                    className="btn btn-outline rounded font-bold text-xl text-white bg-[#d9b783] border-0 "
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="font-bold text-xl text-[#D1A054] text-center mb-6">
                New Here? <Link to="/register">Register Now !</Link>{" "}
              </p>
              {/* <SocialLogin></SocialLogin> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
