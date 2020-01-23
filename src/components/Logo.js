import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/">
    <img alt="Videoland" src="/images/logo.svg" height="48" width="48" />
  </Link>
);

export default Logo;