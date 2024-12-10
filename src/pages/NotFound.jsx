import Navbar from "../components/ContactNavbar";

const NotFound = () => {
  return (
    <section class="bg-white h-screen select-none">
      <Navbar />
      <div class="py-8 mx-auto max-w-[1400px] lg:py-16 h-[100%] ">
        <div class="flex flex-col justify-center items-center h-[100%]">
          <h1 class="mb-4 text-7xl tracking-tight font-bold lg:text-9xl text-[#1c1c1c]">
            404
          </h1>
          <p class="mb-4 tracking-tight font-bold text-[#1c1c1c] text-4xl text-center">
            Something's missing.
          </p>
          <p class="mb-4 text-lg text-sideHeading text-center px-4">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <div className="flex lg:justify-start justify-center">
            <a
              href="/"
              class="relative mt-8 flex h-[50px] w-48 items-center justify-center overflow-hidden bg-mainColor border border-mainColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56 rounded"
            >
              <span class="relative z-10">Back to home page</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
