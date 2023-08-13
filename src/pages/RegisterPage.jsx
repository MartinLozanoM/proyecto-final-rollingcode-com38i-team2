import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="page-container-uno">
      <div className="page-container-dos">
        {registerErrors.map((error, i) => (
          <div className="page-container-tres" key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="page-input"
            placeholder="Username"
          />

          {errors.username && (
            <p className="page-texto-rojo">Username es requerido</p>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            className="page-input"
            placeholder="Email"
          />
          {errors.email && (
            <p className="page-texto-rojo ">Email es requerido</p>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="page-input "
            placeholder="Password"
          />
          {errors.password && (
            <p className="page-texto-rojo">Password es requerido</p>
          )}

          <button type="submit" className="">
            Registrarme
          </button>
        </form>
        <p className="page-texto-flex">
          Ya tienes una cuenta?{" "}
          <Link to="/login" className="page-texto-cielo">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
