"use client"; // Mark this file as a client component

import { sidebarLinks } from "@/constants";
import { SignedIn, SignOutButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";  // Correct import for client-side routing

function LeftSidebar() {
  const Pathname = usePathname();
  const router = useRouter();  // Use the useRouter hook
  const { userId } = useAuth();

  return (
    <section className="custom-scrollbar leftsidebar h-screen overflow-auto py-4">
      <div className="flex w-full flex-col gap-7 px-4">
        {sidebarLinks.map((link) => {
          const isActive =
            (Pathname.includes(link.route) && link.route.length > 1) ||
            Pathname === link.route;
            if (link.route === "/profile") link.route = `${link.route}/${userId}`;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link flex items-center gap-3 py-2 px-3 rounded 
                ${isActive ? "bg-purple-500 text-white" : "hover:bg-gray-800 text-gray-300"}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
                className="shrink-0"
              />
              <p className="text-light-1 max-lg:hidden text-sm">{link.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton>
            <button
              onClick={() => router.push('/sign-in')}
              className="flex cursor-pointer items-center gap-2"
            >
              <Image src="/logout.svg" alt="logout" width={30} height={30} />
              <p className="text-light-2 max-lg:hidden">Logout</p>
            </button>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}

export default LeftSidebar;
