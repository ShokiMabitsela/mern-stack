import React from 'react';
const Hero = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="flex justify-center">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl">
          <h1 className="text-center text-3xl font-semibold mb-4">MERN Authentication</h1>
          <p className="text-center text-lg mb-6">
            This is a boilerplate for MERN authentication that stores a JWT in
            an HTTP-Only cookie. It also uses Redux Toolkit and the React
            Bootstrap library.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/login"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
            >
              Sign In
            </a>
            <a
              href="/register"
              className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600 transition"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
