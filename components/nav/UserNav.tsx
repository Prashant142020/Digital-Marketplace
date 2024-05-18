import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
// import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from 'next/link';
import { Button } from '../ui/button';
import { Lock, LogOut } from 'lucide-react';
import { signOut } from '@/auth';
import getSession from '@/lib/getSession';

interface iAppProps {
  email: string;
  name: string;
  userImage: string | undefined;
}

export async function UserNav({ email, name, userImage }: iAppProps) {
  const session = await getSession();
  const user = session?.user;
  // console.log(session);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={userImage} alt="User Image" />
            <AvatarFallback>{name.slice(0, 1)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/sell">Sell your Product</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="my-products">My Products</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/billing">Billing</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {user.role === 'admin' && (
          <DropdownMenuItem asChild>
            <Link href="/admin">
              <Lock className="mr-2 h-4 w-4" />
              Admin
            </Link>
          </DropdownMenuItem>
        )}

        <DropdownMenuItem asChild>
          {/* Todo: add auth logOut */}

          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button className="flex w-full items-center" type="submit">
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
