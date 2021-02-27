import React, { Suspense } from 'react';

const withLazyComponent = (LazyComponent) => {
  return (props) => (
    <Suspense fallback="Lazy component is loading ...">
      <LazyComponent {...props} />
    </Suspense>
  )
}

export default withLazyComponent;