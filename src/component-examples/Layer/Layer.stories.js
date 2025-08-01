/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './Layer-story.scss';
import React from 'react';
import { Layer, useLayer } from '@carbon/react';
import mdx from './Layer.mdx';

export default {
  title: 'Components/Layer',
  component: Layer,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    level: 0,
  },
};

export const Default = () => {
  function TestComponent() {
    return <div className="example-layer-test-component">Test component</div>;
  }

  return (
    <>
      <TestComponent />
      <Layer>
        <TestComponent />
        <Layer>
          <TestComponent />
        </Layer>
      </Layer>
    </>
  );
};

export const withBackground = () => {
  function TestComponent() {
    return (
      <div className="example-layer-test-component-no-background">
        Test component
      </div>
    );
  }

  return (
    <>
      <TestComponent />
      <Layer withBackground>
        <TestComponent />
        <Layer withBackground>
          <TestComponent />
        </Layer>
      </Layer>
    </>
  );
};

export const CustomLevel = (args) => {
  function TestComponent() {
    return <div className="example-layer-test-component">Test component</div>;
  }

  return (
    <Layer level={2} {...args}>
      <TestComponent />
    </Layer>
  );
};

CustomLevel.args = {
  level: 2,
};

export const UseLayer = () => {
  function ExampleComponent() {
    const { level } = useLayer();
    return (
      <div style={ padding: '1rem', background: 'var(--cds-layer)' }>
        The current layer level is: {level}
      </div>
    );
  }

  return (
    <>
      <ExampleComponent />
      <Layer>
        <ExampleComponent />
      </Layer>
    </>
  );
};

UseLayer.story = {
  name: 'useLayer',
};
