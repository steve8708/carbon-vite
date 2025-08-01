/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Information } from '@carbon/icons-react';
import React, { useRef, useEffect } from 'react';
import { default as Button } from '@carbon/react';
import { default as Link } from '@carbon/react';
import {
  ToggletipLabel,
  Toggletip,
  ToggletipButton,
  ToggletipContent,
  ToggletipActions,
} from '../Toggletip';
import mdx from './Toggletip.mdx';

export default {
  title: 'Components/Toggletip',
  component: Toggletip,
  subcomponents: {
    ToggletipLabel,
    ToggletipButton,
    ToggletipContent,
    ToggletipActions,
  },
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
    children: {
      table: { disable: true },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const ExperimentalAutoAlign = () => {
  const ref = useRef();
  useEffect(() => {
    ref?.current?.scrollIntoView({ block: 'center', inline: 'center' });
  });

  return (
    <div style={ width: '5000px', height: '5000px' }>
      <div
        style={{
          position: 'absolute',
          top: '2500px',
          left: '2500px',
          inlineSize: '8rem',
        }}>
        <ToggletipLabel>Toggletip label</ToggletipLabel>
        <Toggletip align="bottom" autoAlign defaultOpen>
          <ToggletipButton label="Show information">
            <Information ref={ref} />
          </ToggletipButton>
          <ToggletipContent>
            <p>
              Scroll the container up, down, left or right to observe how the
              Toggletip will automatically change its position in attempt to
              stay within the viewport. This works on initial render in addition
              to on scroll.
            </p>
            <ToggletipActions>
              <Link href="#">Link action</Link>
              <Button size="sm">Button</Button>
            </ToggletipActions>
          </ToggletipContent>
        </Toggletip>
      </div>
    </div>
  );
};

// Note: autoAlign is used here only to make tooltips visible in StackBlitz,
// autoAlign is experimental and not part of the actual implementation.
export const Default = (args) => {
  return (
    <>
      <ToggletipLabel>Toggletip label</ToggletipLabel>
      <Toggletip autoAlign {...args}>
        <ToggletipButton label="Show information">
          <Information />
        </ToggletipButton>
        <ToggletipContent>
          <p>
            Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
          </p>
          <ToggletipActions>
            <Link href="#">Link action</Link>
            <Button size="sm">Button</Button>
          </ToggletipActions>
        </ToggletipContent>
      </Toggletip>
    </>
  );
};

Default.argTypes = {
  align: {
    options: [
      'top',
      'top-left',
      'top-right',

      'bottom',
      'bottom-left',
      'bottom-right',

      'left',
      'left-bottom',
      'left-top',

      'right',
      'right-bottom',
      'right-top',
    ],
    control: {
      type: 'select',
    },
  },
};

Default.story = {
  decorators: [
    (story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}>
        {story()}
      </div>
    ),
  ],
};
