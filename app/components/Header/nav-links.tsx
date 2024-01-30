import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavLinks = () => {
    const pathname = usePathname();
  const links = [
    { title: "Home", href: "/" },
    { title: "Our Therapy", href: "/ourTherapy" },
    { title: "About Us", href: "/about" },
    { title: "Login", href: "/login" },
  ];
  return (
    <div className="mx-auto flex flex-row items-center space-x-[3.75em] ">
      {links.map((link) => (
        <div key={link?.title}>
          <nav className="hover:text-rosePink active:text-rosePink visited:text-rosePink font-medium text-[1.25rem]">
            <Link
              href={link?.href}
              className={
                link?.href === pathname ? "text-rosePink" : "text-textBlackLight"
              }
            >
              {link.title}
            </Link>
          </nav>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
