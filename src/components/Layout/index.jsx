import Header from "../Header";

export default function Layout({ children }) {
  return (
    <>
      <header className="w-full bg-[#3BB3C3] dark:bg-[#2C3E50] text-black dark:text-white font-Quicksand">
        <Header />
      </header>

      <main className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white font-Quicksand">
        {children}
      </main>
    </>
  );
}
