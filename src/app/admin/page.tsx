'use client'
import Login from "./components/Login";
import ServiceForm from "./components/ServiceForm";
import ServiceTable from "./components/ServiceTable";
import { useState } from "react";

const page: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <div className="w-full max-w-4xl space-y-6">
          <h1 className="text-3xl font-bold text-center">Admin Panel</h1>
          <ServiceForm />
          <ServiceTable />
        </div>
      )}
    </div>
  );
};

export default page;
