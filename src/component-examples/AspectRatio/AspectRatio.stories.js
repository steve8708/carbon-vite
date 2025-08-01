/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import "./AspectRatio-story.scss";

import React from "react";
import { Grid, Column } from "@carbon/react";
import { AspectRatio } from "./";
import mdx from "./AspectRatio.mdx";

export default {
  title: "Components/AspectRatio",
  component: AspectRatio,
  decorators: [
    (Story) => (
      <div className="aspect-ratio-story">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = (args) => {
  return (
    <Grid {...args}>
      <Column sm={1} md={2} lg={4}>
        <AspectRatio {...args}>Content</AspectRatio>
      </Column>
      <Column sm={1} md={2} lg={4}>
        <AspectRatio {...args}>Content</AspectRatio>
      </Column>
      <Column sm={1} md={2} lg={4}>
        <AspectRatio {...args}>Content</AspectRatio>
      </Column>
      <Column sm={1} md={2} lg={4}>
        <AspectRatio {...args}>Content</AspectRatio>
      </Column>
    </Grid>
  );
};

Default.argTypes = {
  as: {
    control: false,
  },
  children: {
    control: false,
  },
  className: {
    control: false,
  },
  ratio: {
    control: {
      type: "select",
    },
    options: ["16x9", "9x16", "2x1", "1x2", "4x3", "3x4", "1x1"],
    table: {
      category: "AspectRatio",
    },
  },
};
