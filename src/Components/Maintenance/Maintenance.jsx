import React from "react";
import { Link } from "react-router-dom";

const Maintenance = () => {
  return (
    <div class="bg-gray-100 dark:bg-gray-800">
      <div class="min-h-screen flex flex-col justify-center items-center">
        <img
          src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
          alt="Logo"
          class="mb-8 h-40"
        />
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">
          Site is under maintenance
        </h1>
        <p class="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
          We're working hard to improve the user experience. Stay tuned!
        </p>
        <Link
          to="/"
          class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <div class="flex space-x-4">Home</div>
        </Link>
      </div>
    </div>
  );
};

export default Maintenance;
