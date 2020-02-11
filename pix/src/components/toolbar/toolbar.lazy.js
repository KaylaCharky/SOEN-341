import React, { lazy, Suspense } from 'react';

const Lazytoolbar = lazy(() => import('./toolbar'));

const toolbar = props => (
  <Suspense fallback={null}>
    <Lazytoolbar {...props} />
  </Suspense>
);

export default toolbar;
