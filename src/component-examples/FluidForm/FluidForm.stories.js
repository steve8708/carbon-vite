/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import FluidForm from '.';
import { FluidDatePicker } from '@carbon/react';
import { FluidDatePickerInput } from '@carbon/react';
import { FluidSelect } from '@carbon/react';
import { SelectItem } from '@carbon/react';
import { SelectItemGroup } from '@carbon/react';
import { FluidTextInput } from '@carbon/react';
import { FluidTextArea } from '@carbon/react';
import { FluidTimePicker } from '@carbon/react';
import { FluidTimePickerSelect } from '@carbon/react';
import { FluidNumberInput } from '@carbon/react';
import { ModalWrapper } from '@carbon/react';
import mdx from './FluidForm.mdx';

const additionalProps = {
  className: 'some-class',
};

const TextInputProps = {
  className: 'some-class',
  id: 'test2',
  labelText: 'Text Input label',
  placeholder: 'Placeholder text',
};

const TextAreaProps = {
  className: 'some-class',
  id: 'test3',
  labelText: 'Text Area label',
  placeholder: 'Placeholder text',
};

const InvalidPasswordProps = {
  className: 'some-class',
  id: 'test4',
  labelText: 'Password',
  value: '0000',
};

export default {
  title: 'Experimental/Fluid Components/FluidForm',
  component: FluidForm,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = () => (
  <>
    <FluidForm aria-label="sample form" {...additionalProps}>
      <div style={ display: 'flex' }>
        <FluidTimePicker
          id="time-picker-1"
          labelText="Time"
          placeholder="hh:mm">
          <FluidTimePickerSelect id="select-01" labelText="Clock">
            <SelectItem value="am" text="AM" />
            <SelectItem value="pm" text="PM" />
          </FluidTimePickerSelect>
          <FluidTimePickerSelect id="select-02" labelText="Timezone">
            <SelectItem value="et" text="Eastern Time (ET)" />
            <SelectItem value="ct" text="Central Time (CT)" />
            <SelectItem value="mt" text="Mountain Time (MT)" />
            <SelectItem value="pt" text="Pacific Time (PT)" />
          </FluidTimePickerSelect>
        </FluidTimePicker>
        <FluidDatePicker datePickerType="range">
          <FluidDatePickerInput
            id="date-picker-input-id-start"
            placeholder="mm/dd/yyyy"
            labelText="Choose your dates"
          />
          <FluidDatePickerInput
            id="date-picker-input-id-finish"
            placeholder="mm/dd/yyyy"
            labelText="End date"
          />
        </FluidDatePicker>
        <FluidSelect
          id="select-1"
          defaultValue="placeholder-item"
          labelText="Choose an option">
          <SelectItem
            disabled
            hidden
            value="placeholder-item"
            text="Choose an option"
          />
          <SelectItemGroup label="Category 1">
            <SelectItem value="option-1" text="Option 1" />
            <SelectItem value="option-2" text="Option 2" />
          </SelectItemGroup>
          <SelectItemGroup label="Category 2">
            <SelectItem value="option-3" text="Option 3" />
            <SelectItem value="option-4" text="Option 4" />
          </SelectItemGroup>
        </FluidSelect>
      </div>
      <div style={ display: 'flex' }>
        <FluidTextInput {...TextInputProps} />
        <FluidNumberInput
          label="Number Input Label"
          labelText="Fluid Number Input"
          placeholder="Placeholder text"
          id="input-default"
          step={10}
          min={0}
          max={100}
          defaultValue={50}
        />
      </div>

      <FluidTextInput
        type="password"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
        {...InvalidPasswordProps}
      />
      <FluidTextArea {...TextAreaProps} />
    </FluidForm>

    <br />

    <ModalWrapper
      hasScrollingContent
      buttonTriggerText="Fluid form in modal"
      modalHeading="Modal heading"
      modalLabel="Label"
      handleSubmit={() => {}}
      size="md">
      <FluidForm {...additionalProps}>
        <FluidTextInput {...TextInputProps} />
        <FluidTextInput
          type="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          {...InvalidPasswordProps}
        />
        <FluidTextArea {...TextAreaProps} />
      </FluidForm>
    </ModalWrapper>
  </>
);
