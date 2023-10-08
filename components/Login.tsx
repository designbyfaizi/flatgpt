'use client'
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#11a37f] h-screen flex flex-col items-center justify-center">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="Logo"
      />
      <button
        onClick={() => signIn("google")}
        className="text-white bg-white/10 p-4 rounded-lg hover:bg-white/25 active:bg-white/30 font-bold text-3xl animate-pulse"
      >
        Sign in to use FlatGPT
      </button>
    </div>
  );
}

export default Login;
