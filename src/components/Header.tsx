"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Logo Dermamédical"
            width={50}
            height={50}
            className="rounded-lg object-contain"
          />
          <div className="flex flex-col leading-tight">
            <h1 className="text-xl font-bold text-gray-900">
              Dra. Erika Ramírez
            </h1>
            <span className="text-sm text-gray-500">
              Dermatóloga pediatra
            </span>
          </div>
        </div>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Inicio</Link>
          <Link href="/productos" className="hover:text-blue-600 transition">Productos</Link>
          <Link href="/Servicios" className="hover:text-blue-600 transition">Servicios</Link>
          <Link href="/sobre" className="hover:text-blue-600 transition">Sobre la doctora</Link>
          <Link href="/contacto" className="hover:text-blue-600 transition">Contacto</Link>
          <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
        </nav>

        {/* CTA DESKTOP */}
        <a
          href="tel:+521000000000"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Llamar
        </a>

        {/* BOTÓN HAMBURGUESA (MOBILE) */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-0.5 w-6 bg-gray-800 transition ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-800 transition ${open ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-800 transition ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col px-6 py-4 text-gray-700 text-lg font-medium space-y-4">

            <Link href="/" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">
              Inicio
            </Link>

            <Link href="/productos" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">
              Productos
            </Link>

            <Link href="/Servicios" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">
              Servicios
            </Link>

            <Link href="/sobre" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">
              Sobre la doctora
            </Link>

            <Link href="/contacto" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">
              Contacto
            </Link>

            <Link href="/blog" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">
              Blog
            </Link>

            <a
              href="tel:+521000000000"
              className="mt-4 inline-block bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold text-center hover:bg-blue-700 transition"
            >
              Llamar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
