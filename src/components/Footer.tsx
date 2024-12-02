import Link from "next/link";

export default function Footer() {
  return (
    <footer className="my-20 px-4 md:px-20">
      <div className="flex justify-between">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/julian-caille-b01950207/"
        >
          <img src="/logo.svg" alt="logo" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/julian-caille-b01950207/"
        >
          <img src="/linkedin.svg" alt="linkeidn" />
        </Link>
      </div>
      <p className="text-[#ffffff80] clashFont mt-3">
        © 2024 Agence LaLanding!
      </p>
    </footer>
  );
}
