import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    <Wrapper>
      <form className="loginForm" onSubmit={handleSubmit(submitForm)}>
        <p className="login-title">Join Us! </p>
        <br />
        <input
          type="text"
          className="input"
          placeholder="username"
          {...register("username")}
        />
        <p>{errors.username?.message}</p>
        <input
          type="text"
          className="input"
          placeholder="password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <input
          type="text"
          className="input"
          placeholder="confirm password"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
        <input
          type="text"
          className="input"
          placeholder="email"
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  font-size: 1.2rem;

  .input {
    height: 25px;
    border-radius: 10px;
    margin-bottom: 7px;
    margin-top: 5px;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    height: 30px;
    font-weight: bold;
  }

  .loginForm {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 10px auto;
    border-radius: 10px;
    border: 0px solid;
    padding: 55px;
    padding-bottom: 15px;
    background-color: white;
    color: rgb(4, 3, 3);
    font-family: Georgia, "Times New Roman", Times, serif;
  }

  .login-title {
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 100px;
  }

  .login-btn {
    background-color: hsl(360, 67%, 44%);
    color: white;
    border: 0px solid;
    border-radius: 10px;
    margin-top: 15px;
    width: 150px;
    margin-left: 70px;
    height: 35px;
  }

  .login-btn:hover {
    cursor: pointer;
  }

  .register-div {
    margin-left: 50px;
    font-size: large;
  }

  .register-now {
    color: rgb(137, 137, 137);
  }

  .register-now:hover {
    cursor: pointer;
    color: white;
  }
`;
