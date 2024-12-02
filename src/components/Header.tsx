import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function Header() {
  return (
    <nav className="z-50 fixed w-full bg-[#070A16] border-effect px-4 xl:px-16 py-6 flex items-center justify-between overflow-hidden">
      <a href="/">
        <Image src="/logo.svg" alt="Company Logo" width={120} height={45} />
      </a>
      <div className="hidden xl:flex gap-10 ">
        <Link href="#whoami">Qui je suis</Link>
        <Link href="#program">Notre accompagnement</Link>
        <Link href="#reviews">Avis clients</Link>
      </div>
      <Link
        href="https://calendly.com/juliancaille/calldecouverte"
        target="_blank"
      >
        <button className="hidden xl:flex custom-btn font-light">
          Réserver
          <span className="clashFont font-semibold">un appel</span>
        </button>
      </Link>
      <div className="xl:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image src="/icons/burger.svg" alt="Menu" width={24} height={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-red">
            <DropdownMenuLabel>
              <Link href="#whoami">Qui je suis</Link>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="#program">Notre accompagnement</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="#reviews">Avis clients</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
