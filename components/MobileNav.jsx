"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { IoMenu } from "react-icons/io5";
import { DialogTitle } from "@radix-ui/react-dialog";

const links = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "sobre mim",
    path: "/sobre-mim"
  },
  {
    name: "serviços",
    path: "/servicos"
  },
  {
    name: "e-books",
    path: "/e-books"
  },
  {
    name: "blog",
    path: "/blog"
  },
  {
    name: "contato",
    path: "/contato"
  },
]

const MobileNav = () => {
  const pathname = usePathname();
  return <Sheet>
    <SheetTrigger className="flex justify-center items-center">
      <IoMenu className="text-[32px] text-button-alternative" />
    </SheetTrigger>
    <SheetContent className="flex flex-col">
      <DialogTitle className="sr-only">Menu de navegação</DialogTitle>
      <div className="mt-32 mb-40 text-center text-2xl">
        <Link href="/">
          <h1 className="text-4xl font-semibold text-accent">
            Edvânia Soares
          </h1>
        </Link>
      </div>

      <nav className="flex flex-col justify-center items-center gap-8">
        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
              {link.name}
            </Link>
          );
        })}

      </nav>
    </SheetContent>
  </Sheet >
}

export default MobileNav;