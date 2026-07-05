import AuthHeaderForm from "../components/AuthHeaderForm";
import LoginForm from "./components/form/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-start h-screen lg:w-1/2 w-full">
      <AuthHeaderForm
        title="Welcome Back"
        content="Enter your credentials to access your workspace."
      />
      <LoginForm />
    </div>
  );
};

export default Login;
