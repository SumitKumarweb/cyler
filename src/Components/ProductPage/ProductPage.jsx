import React from "react";
import ProductImage from "./test.jpg";

const ProductPage = () => {
  const darkMode = true; // Set this to true or false as needed

  return (
    <div className={`py-8 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div
              className={`aspect-w-3 aspect-h-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-300"} mb-4`}
            >
              <img
                className="w-full h-full object-cover"
                src={ProductImage}
                alt="Product"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button
                  className={`w-full ${darkMode ? "bg-gray-600" : "bg-gray-900"} text-white py-2 px-4 rounded-full font-bold hover:${darkMode ? "bg-gray-700" : "bg-gray-800"}`}
                >
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button
                  className={`w-full ${darkMode ? "bg-gray-600" : "bg-gray-900"} text-white py-2 px-4 rounded-full font-bold hover:${darkMode ? "bg-gray-700" : "bg-gray-800"}`}
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2
              className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"} mb-2`}
            >
              Social Media Hacking
            </h2>
            <p
              className={`text-sm mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span
                  className={`font-bold ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Price:
                </span>
                <span
                  className={` ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  $29.99
                </span>
              </div>
            </div>

            <div>
              <span
                className={`font-bold ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Product Description:
              </span>
              <p
                className={`text-sm mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis
                dapibus augue vel ipsum pretium, et venenatis sem blandit.
                Quisque ut erat vitae nisi ultrices placerat non eget velit.
                Integer ornare mi sed ipsum lacinia, non sagittis mauris
                blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt
                mi consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
