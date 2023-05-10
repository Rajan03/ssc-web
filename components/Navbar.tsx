import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { IconType } from 'react-icons';
import { CgMenuRight } from 'react-icons/cg';
import { FaBell } from 'react-icons/fa';
import { IoIosRemoveCircleOutline, IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import Logo from './Logo';

const navItems = [
  { text: 'Home', url: '/' },
  { text: 'About Us', url: '/about' },
  { text: 'Our Team', url: '/team' },
  { text: 'Reasources', url: '/resource' },
  { text: 'Contact', url: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // NAV MENU ICON CLASSES
  const menuIconClasses = (forOpen: boolean) =>
    clsx(
      'absolute top-8 right-10 text-6xl text-primary cursor-pointer sm:hidden transition-all duration-300 ease-in-out ',
      forOpen
        ? isOpen
          ? 'w-12 h-12 '
          : 'w-0 h-0 '
        : !isOpen
        ? 'w-12 h-12 '
        : 'w-0 h-0 '
    );

  // NAV ITEM CLASSES
  const navItemsClasses = clsx(
    isOpen ? 'h-96 ' : 'h-0 ',
    'absolute top-[100%] flex flex-col items-start justify-evenly gap-y-12 ',
    'sm:hidden transition-[height] duration-300 ease-in-out overflow-hidden',
    'w-full bg-white shadow-lg shadow-gray-200/80 rounded-b'
  );

  return (
    <>
      <nav
        className="container fixed top-0 left-1/2 -translate-x-1/2 flex flex-col
      transition-all duration-300 ease-in-out h-navbar z-30"
      >
        {/* TOP BAR */}
        <TopBar />

        {/* NAVBAR */}
        <div className="relative flex flex-col items-stretch justify-start gap-y-6 rounded bg-white shadow-lg shadow-black/5">
          {/* LOGO AND MENU BTN */}
          <div className="max-h-[8rem] py-4 self-center">
            <Logo />

            {/* MENU BTN - ON MOBILE SCREENS */}
            <IoIosRemoveCircleOutline
              className={menuIconClasses(true)}
              onClick={() => setIsOpen(false)}
            />
            <CgMenuRight
              className={menuIconClasses(false)}
              onClick={() => setIsOpen(true)}
            />
          </div>

          {/* NAV ITEMS - ON TABLET AND LARGER SCREENS */}
          <div className="hidden sm:flex flex-1 items-center justify-evenly gap-x-4 pt-4 pb-6">
            {navItems.map((item, i) => (
              <NavItem
                key={item.text + i}
                text={item.text}
                url={item.url}
                selected={router.pathname === item.url}
              />
            ))}
          </div>

          {/* NAV ITEMS - ON MOBILE SCREENS */}
          <div className={navItemsClasses}>
            {isOpen &&
              navItems.map((item, i) => (
                <NavItem
                  key={item.text + i}
                  text={item.text}
                  url={item.url}
                  selected={router.pathname === item.url}
                  className="text-2xl"
                />
              ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const TopBar = () => {
  return (
    <div className="flex items-center justify-end h-20 p-4 top-nav">
      <TopItem
        text="We help take your strengths the next level."
        IconName={FaBell}
        className="hidden md:flex flex-1"
      />

      <div className="flex items-center gap-x-4">
        <TopItem text="(+612) 555-8425" IconName={IoMdCall} />
        <div className="h-[14px] w-1 bg-neutral-300 rounded" />
        <TopItem text="example@gmai.com" IconName={MdEmail} />
      </div>
    </div>
  );
};

const TopItem: FC<{ text: string; IconName: IconType; className?: string }> = ({
  text,
  IconName,
  className,
}) => {
  return (
    <div className={'flex items-center justify-start gap-x-4 ' + className}>
      <IconName className="text-3xl text-primary" />
      <span className="text-xl font-medium text-dark max-w-lg truncate">
        {text}
      </span>
    </div>
  );
};

const NavItem: FC<{
  text: string;
  url: string;
  className?: string;
  selected: boolean;
}> = ({ text, url, className, selected }) => {
  const linkClassName = clsx(
    'text-xl font-bold px-8 sm:px-0 text-dark uppercase text-left transition-all duration-300 ease-in-out ' +
      'hover:text-primary hover:scale-110  ' +
      (selected &&
        ' scale-100 before:absolute before:bottom-[-2px] before:left-0 before:h-1 before:w-full' +
          'before:bg-primary before:rounded-xl '),
    className
  );

  return (
    <Link href={url} passHref className={linkClassName}>
      {text}
    </Link>
  );
};
