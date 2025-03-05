import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import AxiosInstance from "@/components/AxiosInstance";
import { useRouter } from "next/router";
import { useUser } from "@/components/UserContext";
import LoginForm from "@/components/LoginForm";

export default function Layout({ children, resetStoreData }) {
  const [showNav, setShowNav] = useState(false);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { user, setUser } = useUser(null);

  useEffect(() => {
    if (token) {
      fetchUser();
    } else {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      fetchUser(storedToken);
    } else {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
      const error = urlParams.get("error");
      if (token) {
        localStorage.setItem("token", token);
        setToken(token);
        fetchUser(token);
        router.replace(router.pathname); 
      } else if (error) {
        setError(error);
        router.replace(router.pathname); 
      }
    }
  }
  }, [token]);

  const fetchUser = async () => {
    try {
      const response = await AxiosInstance.get('auth/store/users/me');
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      localStorage.removeItem("token");
      setToken(null);
    }
  };

  const handleGoogleLogin = async () => {
    const response = await axios.get("/api/auth/google");
    const { url } = response.data;
    window.location.href = url;
  };

  if (error === "unauthorized") {
    return (
      <div className="bg-bgGray w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <p className="text-red-500">Unauthorized access. Please try again.</p>
          <LoginForm onLoginSuccess={setToken} />
          <button onClick={handleGoogleLogin} className="bg-white p-2 px-4 rounded-lg">
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="bg-bgGray w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <LoginForm onLoginSuccess={setToken} />
          <button onClick={handleGoogleLogin} className="bg-white p-2 px-4 rounded-lg">
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bgGray min-h-screen ">
      <div className="block md:hidden items-center p-4">
        <button onClick={() => setShowNav(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
        </div>
      </div>
      <div className="flex">
        <Nav show={showNav} />
        <div className="flex-grow p-4 mt-10 w-4/5">
          <div className="flex w-fit absolute md:top-4 right-4 bg-highlight gap-1 text-primary font-medium rounded-lg overflow-hidden">
            {user?.picture && <img src={user?.picture} alt="" className="w-10 h-10" />}
            <span className="px-2 my-auto">{user?.name}</span>
            <span className="px-2 my-auto">{user?.is_admin ? "Admin" : "Employee"}</span>
            <button onClick={() => {
              localStorage.removeItem("token");
              setToken(null);
              setUser(null);
              window.location.reload();
              // resetStoreData();
            }} className="bg-white p-2 px-4 rounded-lg">
              Logout
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}