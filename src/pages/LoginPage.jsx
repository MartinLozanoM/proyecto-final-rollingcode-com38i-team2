import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: siginErrors, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  return (
    <div className="page-container-uno">
      <div className="page-container-dos">
        {siginErrors.map((error, i) => (
          <div className="page-container-tres" key={i}>
            {error}
          </div>
        ))}
        <h1 className="page-titulo">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="page-input"
            placeholder="Email"
          />
          {errors.email && (
            <p className="page-texto-rojo">Email es requerido</p>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="page-input"
            placeholder="Password"
          />
          {errors.password && (
            <p className="page-texto-rojo">Password es requerido</p>
          )}

          <button type="submit" className="">
            Login
          </button>
        </form>
        <p className="page-texto-flex">
          No tienes una cuenta aun?{" "}
          <Link to="/register" className="page-texto-cielo">
            Registrate aqui
          </Link>
        </p>
      </div>
    </div>
  );
};
