"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="finance.ai" width={173} height={39} />
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground transition-all duration-300 hover:text-primary hover:opacity-60"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transaction"
          className={
            pathname === "/transaction"
              ? "font-bold text-primary"
              : "text-muted-foreground transition-all duration-300 hover:text-primary hover:opacity-60"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "font-bold text-primary"
              : "text-muted-foreground transition-all duration-300 hover:text-primary hover:opacity-60"
          }
        >
          Assinatura
        </Link>
      </div>

      <div>
        <UserButton showName />
      </div>
    </nav>
  );
};

export default Navbar;
