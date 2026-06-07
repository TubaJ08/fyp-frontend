import React from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import api from "../utils/api";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleCredentialResponse = async (response) => {
    try {
      const decoded = jwtDecode(response.credential);
      console.log("✅ Decoded Google User:", decoded);

      const res = await api.post("/auth/google", {
        token: response.credential, // 🔧 Send token, not name/email/pic manually
      });

      console.log("✅ Server Response:", res.data);
      login(res.data);
      navigate("/");
    } catch (error) {
      console.error("❌ Google Login Error:", error);
    }
  };
  

  return (
    <div className="flex justify-center">
      <GoogleLogin
        onSuccess={handleCredentialResponse}
        onError={() => console.log("❌ Login Failed")}
      />
    </div>
  );
};

export default GoogleLoginButton;
