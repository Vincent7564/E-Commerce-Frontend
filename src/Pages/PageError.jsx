import imagenotfound from '../Image/404.jpg'

const PageError = () => {
  return (
    <>
      <div class="w-full h-full pb-30 flex flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center pt-10">
            <img src={imagenotfound} className=' w-[400px] h-[400px]' alt="" />
          <p class="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">
            Page Not Found
          </p>
          <p class="md:text-lg lg:text-xl text-gray-600 mt-8">
            Sorry, the page you are looking for could not be found.
          </p>
          <a
            href="/"
            class="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-12 rounded transition duration-150"
            title="Return Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Return Home</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default PageError;
