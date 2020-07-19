import React from 'react';
import * as L from 'korus-ui';
import { useSelector } from 'react-redux';

import { selectors } from '../selectors';

export const ErrorLayout = () => {
  const title = useSelector(selectors.errorTitle);
  const message = useSelector(selectors.errorMessage);
  const code = useSelector(selectors.errorCode);

  return (
    <>
      <L.H1>{title}</L.H1>
      <L.P>{`${code} - ${message}`}</L.P>
    </>
  );
};
