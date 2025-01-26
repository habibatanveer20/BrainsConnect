import Link from "next/link";
import Image from "next/image";
import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

function Topbar() {
  const isUserLoggedIn = true;
  return (
    <nav className="Topbar sticky top-0 z-50 bg-dark-2 shadow-md">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/logo3.jpg" alt="logo" width={50} height={40} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">
          Brains Connect
        </p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image src="/logout.svg" alt="logout" width={30} height={30} />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            baseTheme:dark,
            elements: {
             organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
}

export default Topbar;
