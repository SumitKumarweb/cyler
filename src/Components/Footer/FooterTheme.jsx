import { Link } from "react-router-dom";

const FooterTheme = () => {
  return (
    <footer className="px-4 divide-y bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link
            rel="noopener noreferrer"
            to="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400 dark:bg-violet-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 rounded-full text-gray-900 dark:text-gray-50"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <span className="self-center text-2xl font-semibold">Cyler</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-50 dark:text-gray-900">
              Product
            </h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" to="/Maintenance">
                  Features
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/Maintenance">
                  Integrations
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/Maintenance">
                  Pricing
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/FAQ">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-50 dark:text-gray-900">
              Company
            </h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" to="/PrivacyPolicy">
                  Privacy
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/Terms">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-gray-50 dark:text-gray-900">
              Social media
            </div>
            <div className="flex justify-start space-x-3">
              <Link
                rel="noopener noreferrer"
                to="/Maintenance"
                title="Facebook"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </Link>
              <Link
                rel="noopener noreferrer"
                to="/Maintenance"
                title="Twitter"
                className="flex items-center p-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                </svg>
              </Link>
              <Link
                rel="noopener noreferrer"
                to="/Maintenance"
                title="Instagram"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.709 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.396 2.176 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.709-0.084 2.865-0.349 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.781 1.849-2.833 0.396-1.020 0.661-2.176 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.709-0.349-2.865-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.781-1.443-2.833-1.849-1.020-0.396-2.176-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.563 0.073 2.411 0.333 2.974 0.553 0.751 0.292 1.276 0.635 1.844 1.198 0.563 0.563 0.911 1.088 1.198 1.844 0.219 0.563 0.48 1.411 0.553 2.974 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.093 6.469c-0.073 1.563-0.333 2.411-0.553 2.974-0.292 0.751-0.635 1.276-1.198 1.844-0.563 0.563-1.088 0.911-1.844 1.198-0.563 0.219-1.411 0.48-2.974 0.553-1.688 0.072-2.199 0.093-6.469 0.093s-4.781-0.021-6.469-0.093c-1.563-0.073-2.411-0.333-2.974-0.553-0.751-0.292-1.276-0.635-1.844-1.198-0.563-0.563-0.911-1.088-1.198-1.844-0.219-0.563-0.48-1.411-0.553-2.974-0.072-1.688-0.093-2.199-0.093-6.469s0.021-4.781 0.093-6.469c0.073-1.563 0.333-2.411 0.553-2.974 0.292-0.751 0.635-1.276 1.198-1.844 0.563-0.563 1.088-0.911 1.844-1.198 0.563-0.219 1.411-0.48 2.974-0.553 1.688-0.072 2.199-0.093 6.469-0.093zM16 7.802a8.198 8.198 0 100 16.396 8.198 8.198 0 000-16.396zM16 21.396a5.396 5.396 0 110-10.792 5.396 5.396 0 010 10.792zM26.844 7.156a1.916 1.916 0 11-3.833 0 1.916 1.916 0 013.833 0z"></path>
                </svg>
              </Link>
              <Link
                rel="noopener noreferrer"
                to="/Maintenance"
                title="Linkedin"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M29 0h-26c-1.656 0-3 1.344-3 3v26c0 1.656 1.344 3 3 3h26c1.656 0 3-1.344 3-3v-26c0-1.656-1.344-3-3-3zM9 27h-4v-14h4v14zM7 11.75c-1.312 0-2.375-1.063-2.375-2.375s1.063-2.375 2.375-2.375c1.312 0 2.375 1.063 2.375 2.375s-1.063 2.375-2.375 2.375zM27 27h-4v-7.25c0-1.732-0.031-3.969-2.5-3.969s-2.875 1.953-2.875 3.844v7.375h-4v-14h3.844v1.906h0.062c0.531-1 1.812-2.062 3.719-2.062 3.969 0 4.688 2.625 4.688 6.031v8.125z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-400 dark:text-gray-600">
        © 1968 Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterTheme;
