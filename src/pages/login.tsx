import { useEffect, useState } from "react";
import { generateCardData } from "../data/generateData";
import { useAtom } from "jotai";
import { carAtom } from "../data/atoms";
import { useNavigate } from "react-router-dom";
import CosmoLogo from "../assets/CosmoLogo.svg";
import { IoMdPerson } from "react-icons/io";
import { MdPassword } from "react-icons/md";

interface LoginProps {
  customClass?: string;
}

const Login: React.FC<LoginProps> = () => {
    const [, setCarData] = useAtom(carAtom);
    const navigate = useNavigate();
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    useEffect(() => {
      // Initialize card data
      const totalCards = Math.floor(Math.random() * 300);
      const cards = Array.from({ length: totalCards }, generateCardData);
      setCarData(cards);
    }, [setCarData]);
  
    const checkUser = () => {
      if (!username || !password) {
        alert("Please enter both username and password.");
        return;
      }
  
      if (username === "admin" && password === "admin") {
        navigate("/StockFlowAdmin"); // Admin page
      } else {
        navigate("/StockFlow"); // Redirect to home or another page
      }
    };

  return (
    <section className="w-screen h-screen p-5 flex items-center justify-center">
      <div className="circle1 absolute w-80 aspect-square rounded-full bg-yellow-400 animate-moveCircle1"></div>
      <div className="circle2 absolute w-64 aspect-square rounded-full bg-yellow-200 animate-moveCircle2"></div>

      <div className=" w-full md:w-1/3 shadow drop-shadow-xl p-10 rounded-md bg-white">
        <img className="h-16" src={CosmoLogo} alt="logo" />
        <h1 className="text-lg font-semibold text-yellow-500 mt-8">
          Welcome to Cosmo
        </h1>
        <div className="flex items-center gap-2 mt-4">
          <IoMdPerson size={20} className="text-blue-900" />
          <input
            type="text"
            placeholder="Username"
            className="border w-full p-2 px-4 rounded-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 mt-4">
          <MdPassword size={20} className="text-blue-900" />
          <input
            type="password"
            placeholder="Username"
            className="border w-full p-2 px-4 rounded-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-yellow-400 text-blue-900 font-semibold w-full mt-4 py-2 rounded-full"
          onClick={checkUser}
        >
          Login
        </button>
      </div>
    </section>
  );
};

export default Login;
