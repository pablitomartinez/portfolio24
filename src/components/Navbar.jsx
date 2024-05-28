import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row lg:w-72 lg:flex-col lg:h-screen justify-center items-start lg:space-y-4 space-x-4 lg:space-x-0 p-4">
      <Link href="/about">
        <p className="hover:text-gray-300 uppercase text-center block md:w-auto w-full">
          About
        </p>
      </Link>
      <Link href="/projects">
        <p className="hover:text-gray-300 uppercase text-center block md:w-auto w-full">
          Proyectos
        </p>
      </Link>
      <Link href="/skills">
        <p className="hover:text-gray-300 uppercase text-center block md:w-auto w-full">
          Skills
        </p>
      </Link>
      <Link href="/contact">
        <p className="hover:text-gray-300 uppercase text-center block md:w-auto w-full">
          Contacto
        </p>
      </Link>
    </nav>
  );
}
