"use client";
import Link from "next/link";
import HeaderWrapper from "./header.style";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header">
        <Link href="/">
          <img src="/logo.png" alt="logo" className="header--logo" />
        </Link>
        <div className="header--menuWrapper">
          <Link href="/fish" className="header--menuWrapper__menu">
            물고기
          </Link>
          <Link href="/insect" className="header--menuWrapper__menu">
            곤충
          </Link>
          <Link href="/seafood" className="header--menuWrapper__menu">
            해산물
          </Link>
          <Link href="/artwork" className="header--menuWrapper__menu">
            미술품
          </Link>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
