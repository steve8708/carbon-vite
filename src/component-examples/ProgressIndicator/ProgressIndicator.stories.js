/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { ProgressIndicator, ProgressStep, ProgressIndicatorSkeleton } from "./";
import mdx from "./ProgressIndicator.mdx";

export default {
  title: "Components/ProgressIndicator",
  component: ProgressIndicator,
  subcomponents: {
    ProgressStep,
    ProgressIndicatorSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Interactive = () => {
  return (
    <ProgressIndicator currentIndex={1} onChange={() => alert("Clicked")}>
      <ProgressStep
        label="Click me"
        description="Step 1: Register a onChange event"
      />
      <ProgressStep
        label="Really long label"
        description="The progress indicator will listen for clicks on the steps"
      />
      <ProgressStep
        label="Third step"
        description="The progress indicator will listen for clicks on the steps"
      />
    </ProgressIndicator>
  );
};

export const Skeleton = () => {
  return <ProgressIndicatorSkeleton />;
};

export const Default = (args) => (
  <ProgressIndicator {...args}>
    <ProgressStep
      complete
      label="First step"
      description="Step 1: Getting started with Carbon Design System"
      secondaryLabel="Optional label"
    />
    <ProgressStep
      current
      label="Second step with tooltip"
      description="Step 2: Getting started with Carbon Design System"
    />
    <ProgressStep
      label="Third step with tooltip"
      description="Step 3: Getting started with Carbon Design System"
    />
    <ProgressStep
      label="Fourth step"
      description="Step 4: Getting started with Carbon Design System"
      invalid
      secondaryLabel="Example invalid step"
    />
    <ProgressStep
      label="Fifth step"
      description="Step 5: Getting started with Carbon Design System"
      disabled
    />
  </ProgressIndicator>
);

Default.args = {
  currentIndex: 0,
  spaceEqually: false,
  vertical: false,
};

Default.argTypes = {
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
  onChange: {
    table: {
      disable: true,
    },
  },
  currentIndex: {
    control: { type: "number" },
  },
  spaceEqually: {
    control: { type: "boolean" },
  },
  vertical: {
    control: { type: "boolean" },
  },
};
