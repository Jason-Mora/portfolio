export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-10 flex gap-2 justify-center items-center flex-col sm:flex-row">
      <p>© {new Date().getFullYear()} Jason Mora</p>
      <p className="hidden sm:block">–</p>
      <p>Tutti i diritti riservati</p>
    </footer>
  );
}
