import React from 'react';
import { useSelector } from 'react-redux';
import * as L from 'korus-ui';

import { selectors } from '../selectors';

/**
 * Компонент глобального лоадера
 *
 * @reactProps {React.Element}
 * @returns {React.FC} - компонент глобального лоадера
 */
export const GlobalLoader = ({ children }: { children: React.ReactNode }) => {
  const isLoading = useSelector(selectors.isLoading);
  const isGlobal = useSelector(selectors.isGlobal);

  return (
    <L.Loader isLoading={isLoading} isGlobal={isGlobal}>
      {children}
    </L.Loader>
  );
};
