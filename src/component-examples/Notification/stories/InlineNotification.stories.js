/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { InlineNotification } from "../../Notification";
import { action } from "@storybook/addon-actions";
import mdx from "../Notification.mdx";

// eslint-disable-next-line storybook/csf-component
export default {
  title: "Components/Notifications/Inline",
  component: InlineNotification,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  args: {
    kind: "error",
    lowContrast: false,
    hideCloseButton: false,
    ["aria-label"]: "closes notification",
    statusIconDescription: "notification",
    onClose: action("onClose"),
    onCloseButtonClick: action("onCloseButtonClick"),
  },
};

export const Default = (args) => <InlineNotification {...args} />;

Default.argTypes = {
  actionButtonLabel: {
    table: {
      disable: true,
    },
  },
  ["aria-label"]: {
    table: {
      disable: true,
    },
  },
  ariaLabel: {
    table: {
      disable: true,
    },
  },
  onActionButtonClick: {
    table: {
      disable: true,
    },
  },
  onClose: {
    action: "onClose",
  },
  onCloseButtonClick: {
    action: "onCloseButtonClick",
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
};
Default.args = {
  title: "Notification title",
  subtitle: "Subtitle text goes here",
};
