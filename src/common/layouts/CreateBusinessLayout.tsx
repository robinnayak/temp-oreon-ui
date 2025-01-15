import { Outlet } from "react-router";

export const CreateBusinessLayout = () => {
  return (
    <div className="min-h-screen w-full bg-[url('/src/assets/images/landing-bg.png')] bg-cover bg-center">
      <div className="container mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
        <header className="py-5 flex items-center">
          <img
            src="/src/assets/images/oreon-logo.png"
            alt="Oreon"
            width={55}
            height={55}
            className="w-[40px] h-[40px] sm:w-[55px] sm:h-[55px]"
          />
          <h1 className="ml-2 font-bold text-xl sm:text-2xl">oreon</h1>
        </header>

        <main className="p-4 sm:p-6 md:p-9 bg-white rounded-xl w-full md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto my-4 sm:my-8 min-h-[400px] gap-4 sm:gap-6 md:gap-9]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
