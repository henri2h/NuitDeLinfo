import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar } from "react-bulma-components";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  return (
    <Navbar fixed="top">
      <Navbar.Brand>
        <Navbar.Item renderAs="a" href="#">
          Notre App
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container>
          <Navbar.Item href="#">Mes activités</Navbar.Item>
        </Navbar.Container>
        <Navbar.Container position="end">
          <Navbar.Item href="#">Ajouter une activitée</Navbar.Item>
          <Navbar.Item href="#">At the end</Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};
export default Header;
