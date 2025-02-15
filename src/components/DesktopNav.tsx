import logo from "../app/ig.png";
import Image from "next/image";
import Link from "next/link";
import {
  CameraIcon,
  HomeIcon,
  LayoutGridIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";

export default function DesktopNav() {
  return (
    <div className="hidden lg:block px-4 pb-4 w-48 shadow-md shadow-gray-400 shrink-0">
      <div className="top-4 sticky">
        <Image className="dark:invert" src={logo} alt="" />

        <div className="ml-1 inline-flex flex-col gap-6 mt-8 *:flex *:items-center *:gap-2">
          <Link href="/">
            <HomeIcon />
            Home
          </Link>

          <Link href="/search">
            <SearchIcon /> search
          </Link>

          <Link href="/browse">
            <LayoutGridIcon />
            Browse
          </Link>

          <Link href="/profile">
            <UserIcon />
            Profile
          </Link>

          <Link href="/create">
            <CameraIcon /> Create
          </Link>
        </div>
      </div>
    </div>
  );
}
