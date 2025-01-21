import LoginBgImg from "@/assets/images/login/bg.png";
const Login = () => {
  return (
    <div
      className="w-full h-full "
      style={{
        backgroundImage: `url(${LoginBgImg})`,
        backgroundSize: "contain"
      }}
    >
      <h1>Login</h1>
    </div>
  );
};

export default Login;
