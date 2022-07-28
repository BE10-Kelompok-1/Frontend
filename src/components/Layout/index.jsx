import Header from "../Header";
import Sidemenu from "../Sidemenu";

export default function Layout({ children }) {
  return (
    <>
      <header className="w-full bg-[#3BB3C3] dark:bg-[#2C3E50] text-black dark:text-white font-Quicksand">
        <Header />
      </header>
      <main className="min-h-screen w-full md:flex bg-[#ECF0F1] dark:bg-black text-black dark:text-white font-Quicksand">
        <Sidemenu />
        {children}
      </main>
    </>
  );
}
