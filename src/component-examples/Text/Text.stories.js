/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { LayoutDirection } from '@carbon/react';
import { TextDirection, Text } from '.';
import { RadioButtonGroup } from '@carbon/react';
import { RadioButton } from '@carbon/react';
import { Button } from '@carbon/react';
import { Dropdown } from '@carbon/react';
import { ContentSwitcher } from '@carbon/react';
import { Switch } from '@carbon/react';
import { Heading } from '@carbon/react';
import mdx from './Text.mdx';

export default {
  title: 'Experimental/unstable_Text',
  component: Text,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = () => {
  return (
    <>
      <p>
        <Text>Hello world</Text>
      </p>
      <p>
        <Text>لكن لا بد أن أوضح لك أن كل</Text>
      </p>
    </>
  );
};

export const LayoutAndText = () => {
  return (
    <LayoutDirection dir="ltr">
      <p>
        Ipsum ipsa repellat doloribus magni architecto totam Laborum maxime
        ratione nobis voluptatibus facilis nostrum, necessitatibus magnam Maxime
        esse consequatur nemo sit repellat Dignissimos rem nobis hic
        reprehenderit ducimus? Fuga voluptatem?
      </p>
      <LayoutDirection dir="rtl">
        <Text as="p">
          المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك
          التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره
          أو يتجنب الشعور بالسعادة، ولكن بفضل هؤ.
        </Text>
      </LayoutDirection>
      <p>
        Ipsum ipsa repellat doloribus magni architecto totam Laborum maxime
        ratione nobis voluptatibus facilis nostrum, necessitatibus magnam Maxime
        esse consequatur nemo sit repellat Dignissimos rem nobis hic
        reprehenderit ducimus? Fuga voluptatem?
      </p>
    </LayoutDirection>
  );
};

export const SetTextDirection = () => {
  const legendText = 'הכותרת שלי!';

  return (
    <TextDirection
      getTextDirection={(text) => {
        if (text === legendText) {
          return 'ltr';
        }
        return 'auto';
      }}>
      {/* // TODO: These radio buttons don't work. */}
      <RadioButtonGroup
        legendText={legendText}
        name="radio-button-group"
        defaultSelected="radio-1"
        style={ maxWidth: '400px' }>
        <RadioButton
          labelText="שלום עולם Option 1"
          value="radio-1"
          id="radio-1"
        />
        <RadioButton
          labelText="שלום עולם Option 2"
          value="radio-1"
          id="radio-1"
        />
        <RadioButton
          labelText="שלום עולם Option 3"
          value="radio-1"
          id="radio-1"
        />
      </RadioButtonGroup>
    </TextDirection>
  );
};

export const UsageExamples = () => {
  const rtlText = 'שלום!!';
  const dropdownItems = [
    {
      id: 'option-0',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 'option-1',
      text: rtlText,
    },
  ];
  return (
    <>
      <Heading>
        <Text>{rtlText}</Text>
      </Heading>
      <Button kind="ghost">
        <Text>{rtlText}</Text>
      </Button>
      <div style={ width: 400 }>
        {/* // TODO: This dropdown doesn't work. */}
        <Dropdown
          id="default"
          titleText="Using <Text> with `itemToElement`"
          helperText="This is some helper text"
          label="Dropdown menu options"
          items={dropdownItems}
          itemToElement={(item) => <Text>{item.text}</Text>}
        />
      </div>
      <ContentSwitcher
        helperText="Using <Text> within <Switch>"
        onChange={() => {}}>
        <Switch name="one">
          <Text>{rtlText}</Text>
        </Switch>
        <Switch name="two" text="Second section" />
        <Switch name="three" text="Third section" />
      </ContentSwitcher>
    </>
  );
};
