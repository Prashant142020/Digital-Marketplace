import Link from 'next/link';
import { NavbarLinks } from './NavbarLinks';
import { Button } from '../ui/button';
import MobileMenu from './MobileMenu';
import { UserNav } from './UserNav';
import getSession from '@/lib/getSession';
import { SignIn } from '../auth/sign-in';

async function Navbar() {
  const session = await getSession();
  const user = session?.user;

  return (
    <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
      <div className="md:col-span-3 ">
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            Prashant <span className="text-primary">UI</span>
          </h1>
        </Link>
      </div>
      <NavbarLinks />
      <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
        {user ? (
          // <h1>user is Authenticated</h1>
          <UserNav
            email={user.email as string}
            name={user.name as string}
            userImage={user.image ?? `https://avatar.vercel.sh/${user.name}`}
          />
        ) : (
          <div className="flex items-center gap-x-2">
            <SignIn />

            <Button variant={'ghost'}>Register</Button>
          </div>
        )}

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
