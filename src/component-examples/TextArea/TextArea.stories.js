/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import { WithLayer } from "../../../.storybook/templates/WithLayer";
import { View, FolderOpen, Folders, Information } from "@carbon/icons-react";
import { Button } from "@carbon/react";
import { AILabel, AILabelContent, AILabelActions } from "@carbon/react";
import { IconButton } from "@carbon/react";
import { default as TextArea, TextAreaSkeleton } from "./";
import { Tooltip } from "@carbon/react";
import mdx from "./TextArea.mdx";

export default {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  subcomponents: {
    TextAreaSkeleton,
  },
  argTypes: {
    light: {
      table: {
        disable: true,
      },
    },
    slug: {
      table: {
        disable: true,
      },
    },
  },
};

const sharedArgTypes = {
  className: {
    control: false,
  },
  cols: {
    control: {
      type: "number",
    },
  },
  defaultValue: {
    control: {
      type: "text",
    },
  },
  disabled: {
    control: {
      type: "boolean",
    },
  },
  enableCounter: {
    control: {
      type: "boolean",
    },
  },
  helperText: {
    control: {
      type: "text",
    },
  },
  hideLabel: {
    control: {
      type: "boolean",
    },
  },
  id: {
    control: false,
  },
  invalid: {
    control: {
      type: "boolean",
    },
  },
  invalidText: {
    control: {
      type: "text",
    },
  },
  labelText: {
    control: {
      type: "text",
    },
  },
  maxCount: {
    control: {
      type: "number",
    },
  },
  placeholder: {
    control: {
      type: "text",
    },
  },
  rows: {
    control: {
      type: "number",
    },
  },
  warn: {
    control: {
      type: "boolean",
    },
  },
  warnText: {
    control: {
      type: "text",
    },
  },
  value: {
    control: {
      type: "text",
    },
  },
};

export const Default = (args) => {
  return <TextArea {...args} id="text-area-1" />;
};

Default.argTypes = {
  ...sharedArgTypes,
};

Default.args = {
  enableCounter: true,
  helperText: "TextArea helper text",
  labelText: "TextArea label",
  maxCount: 500,
  disabled: false,
  hideLabel: false,
  invalid: false,
  invalidText:
    "Error message that is really long can wrap to more lines but should not be excessively long.",
  placeholder: "",
  rows: 4,
  warn: false,
  warnText: "This is a warning message.",
};

export const _WithLayer = () => (
  <WithLayer>
    {(layer) => (
      <TextArea
        labelText="Text Area label"
        helperText="Optional helper text"
        rows={4}
        id={`text-area-${layer}`}
      />
    )}
  </WithLayer>
);

export const withAILabel = (args) => {
  const aiLabel = (
    <AILabel className="ai-label-container">
      <AILabelContent>
        <div>
          <p className="secondary">AI Explained</p>
          <h2 className="ai-label-heading">84%</h2>
          <p className="secondary bold">Confidence score</p>
          <p className="secondary">
            Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
          </p>
          <hr />
          <p className="secondary">Model type</p>
          <p className="bold">Foundation model</p>
        </div>
        <AILabelActions>
          <IconButton kind="ghost" label="View">
            <View />
          </IconButton>
          <IconButton kind="ghost" label="Open Folder">
            <FolderOpen />
          </IconButton>
          <IconButton kind="ghost" label="Folders">
            <Folders />
          </IconButton>
          <Button>View details</Button>
        </AILabelActions>
      </AILabelContent>
    </AILabel>
  );

  return (
    <TextArea
      labelText="Text Area label"
      helperText="Optional helper text"
      rows={4}
      id="text-area-5"
      decorator={aiLabel}
      {...args}
    />
  );
};

withAILabel.argTypes = {
  ...sharedArgTypes,
};

export const Skeleton = () => {
  return <TextAreaSkeleton />;
};
