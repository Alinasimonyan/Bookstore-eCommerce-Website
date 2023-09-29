import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  username: yup.string().required("Type your username please"),
  password: yup
    .string()
    .min(7)
    .max(12)
    .required("Type your password please"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match"),
  email: yup
    .string()
    .email()
    .required("Type your email please"),
});

export const Login = () => {
  const navigate = useNavigate();
  const submitForm = (data) => {
    console.log(data);
    navigate("/", { state: data.username });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form className="loginForm" onSubmit={handleSubmit(submitForm)}>
      <p className="login-title">Join Us Now! </p>
      <br />
      <input
        type="text"
        className="input"
        placeholder="username..."
        {...register("username")}
      />
      <p>{errors.username?.message}</p>
      <input
        type="text"
        className="input"
        placeholder="password..."
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <input
        type="text"
        className="input"
        placeholder="confirm password..."
        {...register("confirmPassword")}
      />
      <p>{errors.confirmPassword?.message}</p>
      <input
        type="text"
        className="input"
        placeholder="email..."
        {...register("email")}
      />
      <p>{errors.email?.message}</p>
      <button type="submit" className="login-btn">
        Subscribe
      </button>
      <div className="register-div">
        <h5>
          Already a member? <span className="register-now"> Login </span>
        </h5>
      </div>
    </form>
  );
};
