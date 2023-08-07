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
    <div className="bg-zinc-800 max-w-md p-10 rounded-md text-white">
      {registerErrors.map((error, i) => (
        <div className="bg-red-500 p-2" key={i}>
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 px-4 py-2 rounded-md my-2"
          placeholder="Username"
        />

        {errors.username && (
          <p className="text-red-500">Username es requerido</p>
        )}
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700  px-4 py-2 rounded-md my-2"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">Email es requerido</p>}
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700  px-4 py-2 rounded-md my-2"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">Password es requerido</p>
        )}

        <button type="submit" className="">
          Register
        </button>
      </form>
      <p className="flex gap-x-2 justify-between">
        Ya tienes una cuenta?{" "}
        <Link to="/login" className="text-sky-500">
          Login
        </Link>
      </p>
    </div>
  );
};
