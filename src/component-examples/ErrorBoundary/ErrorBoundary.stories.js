/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { ErrorBoundary, ErrorBoundaryContext } from './';
import { Button } from '@carbon/react';
import mdx from './ErrorBoundary.mdx';

export default {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = () => {
  function DemoComponent() {
    const [shouldThrowError, setShouldThrowError] = React.useState(false);

    function onClick() {
      setShouldThrowError(!shouldThrowError);
    }

    return (
      <>
        <Button onClick={onClick}>Toggle throwing error</Button>
        <div>
          <ErrorBoundary fallback={<Fallback />}>
            <ThrowError shouldThrowError={shouldThrowError} />
          </ErrorBoundary>
        </div>
      </>
    );
  }

  function Fallback() {
    return 'Whoops';
  }

  function ThrowError({ shouldThrowError }) {
    if (shouldThrowError) {
      throw new Error('Component threw error');
    }

    return 'Successfully rendered';
  }

  return <DemoComponent />;
};

export const WithCustomContext = () => {
  function DemoComponent() {
    const [shouldThrowError, setShouldThrowError] = useState(false);

    function onClick() {
      setShouldThrowError(!shouldThrowError);
    }

    return (
      <ErrorBoundaryContext.Provider value={ log: action('log') }>
        <Button onClick={onClick}>Toggle throwing error</Button>
        <div>
          <ErrorBoundary fallback={<Fallback />}>
            <ThrowError shouldThrowError={shouldThrowError} />
          </ErrorBoundary>
        </div>
      </ErrorBoundaryContext.Provider>
    );
  }

  function Fallback() {
    return 'Whoops';
  }

  function ThrowError({ shouldThrowError }) {
    if (shouldThrowError) {
      throw new Error('Component threw error');
    }

    return 'Successfully rendered';
  }

  return <DemoComponent />;
};

WithCustomContext.storyName = 'with custom context';
