import React from "react";
import { getProviders, signIn } from "next-auth/react";

export default function login({ providers }) {
  console.log(providers);
  let x = Object.values(providers).map((provider,index) => {
    return (
      <div key={provider.name}>
        <button onClick={()=> signIn(provider.id,{callbackUrl : "/"})} className="bg-[#18D860] text-white p-5 rounded-full">Login with {provider.name} </button>
      </div>
    );
  });
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black">
      <img
        className="mb-5 w-52"
        src="https://links.papareact.com/9xl"
        alt=""
        srcset=""
      />

      {x}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  console.log(providers);
  return {
    props: {
      providers,
    },
  };
}
