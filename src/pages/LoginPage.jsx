import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: siginErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center bg-zinc-900 text-white">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {siginErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold ">Login</h1>
        <form onSubmit={onSubmit}>
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
            Login
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          No tienes una cuenta aun?{" "}
          <Link to="/register" className="text-sky-500">
            Registrate aqui
          </Link>
        </p>
      </div>
    </div>
  );
};
