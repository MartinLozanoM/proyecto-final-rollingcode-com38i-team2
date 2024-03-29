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
        <h1 className="page-titulo">Registrate</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="page-input"
            placeholder="Usuario"
          />

          {errors.username && (
            <p className="page-texto-rojo">El usuario es requerido</p>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            className="page-input"
            placeholder="Email"
          />
          {errors.email && (
            <p className="page-texto-rojo ">El email es requerido</p>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="page-input "
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className="page-texto-rojo">La contraseña es requerida</p>
          )}

          <button type="submit" className="task-form-button">
            Registrarme
          </button>
        </form>
        <p className="page-texto-flex">
          Ya tienes una cuenta?{" "}
          <Link to="/login" className="page-texto-cielo">
            Iniciar sesion
          </Link>
        </p>
      </div>
    </div>
  );
};
