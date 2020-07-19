import React from 'react';
import * as L from 'korus-ui';
import { Link } from 'react-router-dom';

export const HomePage = () => (
  <>
    <L.H1>Home page</L.H1>
    <Link to="/about">to about page</Link>
  </>
);
