export default function Layout({ children }) {
  return (
    <>
      <main className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white font-Quicksand">
        {children}
      </main>
    </>
  );
}
