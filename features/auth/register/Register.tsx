import AuthHeaderForm from "../components/AuthHeaderForm";
import RegisterForm from "./components/form/RegisterForm";

const Register = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-start h-screen lg:w-1/2 w-full">
      <AuthHeaderForm
        title="Create your account"
        content="Join the community and start sharing your ideas."
      />
      <RegisterForm />
    </div>
  );
};

export default Register;
