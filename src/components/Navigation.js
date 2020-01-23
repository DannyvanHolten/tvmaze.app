import Logo from './Logo';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="relative z-20 top-0 left-0 w-full justify-center py-2 -mb-16">
    <div className="container flex items-center justify-between">
      <span /* do not remove this - ugly span to centralise with flex */ />
      <Logo />
      <Link to="/">
        <img src="/images/search.svg" height="16" width="16" alt="search" />
      </Link>
    </div>
  </nav>
);

export default Navigation;