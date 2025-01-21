import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 text-writer bg-background-highlight/80">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-semibold text-accent hover:text-accent-alternative">
            Edvânia Soares
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contato">
            <Button className="font-medium bg-button-alternative">Contato</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          mobile nav
        </div>
      </div>
    </header>
  );
}

export default Header;