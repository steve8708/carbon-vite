/**
 * Copyright IBM Corp. 2016, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { action } from '@storybook/addon-actions';
import Modal from './Modal';
import { Button } from '@carbon/react';
import { Select } from '@carbon/react';
import { MultiSelect } from '@carbon/react';
import { Checkbox as CheckboxIcon } from '@carbon/icons-react';
import { Popover, PopoverContent } from '@carbon/react';
import { Dropdown } from '@carbon/react';
import { SelectItem } from '@carbon/react';
import { TextInput } from '@carbon/react';
import { ComboBox } from '@carbon/react';
import mdx from './Modal.mdx';
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from '../StructuredList';
import { TextArea } from '@carbon/react';
import { AILabel, AILabelContent, AILabelActions } from '@carbon/react';
import { IconButton } from '@carbon/react';
import { View, FolderOpen, Folders } from '@carbon/icons-react';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const buttons = {
  'One (1)': '1',
  'Two (2)': '2',
  'Three (3)': '3',
};

export const Default = ({ numberOfButtons, ...args }) => {
  const [open, setOpen] = useState(true);
  const [popoverOpen, setPopoverOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
      <Modal
        onRequestClose={(e) => {
          action(e);
          setOpen(false);
        }}
        modalHeading="Add a custom domain"
        primaryButtonText="Add"
        secondaryButtonText="Cancel"
        aria-label="Modal content"
        open={open}
        {...args}
        {...modalFooter(numberOfButtons)}>
        <p style={ marginBottom: '1rem' }>
          Custom domains direct requests for your apps in this Cloud Foundry
          organization to a URL that you own. A custom domain can be a shared
          domain, a shared subdomain, or a shared domain and host.
        </p>
        <p style={ marginBottom: '1rem' }>
          Custom domains direct requests for your apps in this Cloud Foundry
          organization to a URL that you own. A custom domain can be a shared
          domain, a shared subdomain, or a shared domain and host.
        </p>
        <p style={ marginBottom: '1rem' }>
          Custom domains direct requests for your apps in this Cloud Foundry
          organization to a URL that you own. A custom domain can be a shared
          domain, a shared subdomain, or a shared domain and host.
        </p>
        <p style={ marginBottom: '1rem' }>
          Custom domains direct requests for your apps in this Cloud Foundry
          organization to a URL that you own. A custom domain can be a shared
          domain, a shared subdomain, or a shared domain and host.
        </p>
        <TextInput
          data-modal-primary-focus
          id="text-input-1"
          labelText="Domain name"
          placeholder="e.g. github.com"
          style={ marginBottom: '1rem' }
        />
        <Select
          id="select-1"
          defaultValue="us-south"
          labelText="Region"
          style={ marginBottom: '1rem' }>
          <SelectItem value="us-south" text="US South" />
          <SelectItem value="us-east" text="US East" />
        </Select>

        <ComboBox
          allowCustomValue
          autoAlign={true}
          id="carbon-combobox"
          items={[
            'Apple',
            'Orange',
            'Banana',
            'Pineapple',
            'Raspberry',
            'Lime',
          ]}
          titleText="ComboBox Example of Floating ui"
        />

        <Dropdown
          autoAlign={true}
          id="default"
          style={ margin: '1rem 0' }
          titleText="Dropdown Example of Floating ui"
          helperText="This is some helper text"
          label="Option 1"
          items={[
            {
              id: 'option-0',
              text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            },
            {
              id: 'option-1',
              text: 'Option 1',
            },
            {
              id: 'option-2',
              text: 'Option 2',
            },
            {
              id: 'option-3',
              text: 'Option 3 - a disabled item',
              disabled: true,
            },
            {
              id: 'option-4',
              text: 'Option 4',
            },
            {
              id: 'option-5',
              text: 'Option 5',
            },
          ]}
          itemToString={(item) => (item ? item.text : '')}
          direction="top"
        />
        <MultiSelect
          id="test"
          label="Multiselect"
          titleText="Multiselect"
          helperText="This is some helper text"
          autoAlign
          items={[
            {
              id: 'downshift-1-item-0',
              text: 'Option 1',
            },
            {
              id: 'downshift-1-item-1',
              text: 'Option 2',
            },
          ]}
          itemToString={(item) => (item ? item.text : '')}
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
          accumsan augue. Phasellus consequat augue vitae tellus tincidunt
          posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices
          condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus.
          Quisque consectetur non risus eu rutrum.{' '}
        </p>

        <Popover align={'bottom-right'} autoAlign open={popoverOpen}>
          <div className="default-trigger">
            <CheckboxIcon
              onClick={() => {
                setPopoverOpen(!popoverOpen);
              }}
            />
          </div>
          <PopoverContent className="p-3">
            <h2 className="popover-title">Popover Example</h2>
            <p className="popover-details">
              This server has 150 GB of block storage remaining.
            </p>
          </PopoverContent>
        </Popover>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
          accumsan augue. Phasellus consequat augue vitae tellus tincidunt
          posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices
          condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus.
          Quisque consectetur non risus eu rutrum.{' '}
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
          accumsan augue. Phasellus consequat augue vitae tellus tincidunt
          posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices
          condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus.
          Quisque consectetur non risus eu rutrum.{' '}
        </p>

        {args.hasScrollingContent && (
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
              accumsan augue. Phasellus consequat augue vitae tellus tincidunt
              posuere. Curabitur justo urna, consectetur vel elit iaculis,
              ultrices condimentum risus. Nulla facilisi. Etiam venenatis
              molestie tellus. Quisque consectetur non risus eu rutrum.{' '}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
              accumsan augue. Phasellus consequat augue vitae tellus tincidunt
              posuere. Curabitur justo urna, consectetur vel elit iaculis,
              ultrices condimentum risus. Nulla facilisi. Etiam venenatis
              molestie tellus. Quisque consectetur non risus eu rutrum.{' '}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
              accumsan augue. Phasellus consequat augue vitae tellus tincidunt
              posuere. Curabitur justo urna, consectetur vel elit iaculis,
              ultrices condimentum risus. Nulla facilisi. Etiam venenatis
              molestie tellus. Quisque consectetur non risus eu rutrum.{' '}
            </p>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
              accumsan augue. Phasellus consequat augue vitae tellus tincidunt
              posuere. Curabitur justo urna, consectetur vel elit iaculis,
              ultrices condimentum risus. Nulla facilisi. Etiam venenatis
              molestie tellus. Quisque consectetur non risus eu rutrum.{' '}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
              accumsan augue. Phasellus consequat augue vitae tellus tincidunt
              posuere. Curabitur justo urna, consectetur vel elit iaculis,
              ultrices condimentum risus. Nulla facilisi. Etiam venenatis
              molestie tellus. Quisque consectetur non risus eu rutrum.{' '}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
              accumsan augue. Phasellus consequat augue vitae tellus tincidunt
              posuere. Curabitur justo urna, consectetur vel elit iaculis,
              ultrices condimentum risus. Nulla facilisi. Etiam venenatis
              molestie tellus. Quisque consectetur non risus eu rutrum.{' '}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
              accumsan augue. Phasellus consequat augue vitae tellus tincidunt
              posuere. Curabitur justo urna, consectetur vel elit iaculis,
              ultrices condimentum risus. Nulla facilisi. Etiam venenatis
              molestie tellus. Quisque consectetur non risus eu rutrum.{' '}
            </p>
          </>
        )}
      </Modal>
    </>
  );
};

Default.args = {
  numberOfButtons: 'Two (2)',
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
  id: {
    table: {
      disable: true,
    },
  },
  modalHeading: {
    control: 'text',
  },
  modalLabel: {
    control: 'text',
  },
  numberOfButtons: {
    description: 'Count of Footer Buttons',
    options: Object.keys(buttons),
    mapping: buttons,
    control: {
      type: 'inline-radio',
      labels: Object.keys(buttons),
    },
  },
  onKeyDown: {
    action: 'onKeyDown',
  },
  onRequestSubmit: {
    action: 'onRequestSubmit',
  },
  onSecondarySubmit: {
    action: 'onSecondarySubmit',
    table: {
      disable: true,
    },
  },
  primaryButtonText: {
    control: 'text',
  },
  secondaryButtons: {
    table: {
      disable: true,
    },
  },
  secondaryButtonText: {
    control: 'text',
    table: {
      disable: true,
    },
  },
  selectorPrimaryFocus: {
    table: {
      disable: true,
    },
  },
  selectorsFloatingMenus: {
    table: {
      disable: true,
    },
  },
};

export const FullWidth = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
      <Modal
        open={open}
        onRequestClose={() => setOpen(false)}
        isFullWidth
        modalHeading="Full Width Modal"
        modalLabel="An example of a modal with no padding"
        primaryButtonText="Add"
        secondaryButtonText="Cancel">
        <StructuredListWrapper>
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head noWrap>
                Column A
              </StructuredListCell>
              <StructuredListCell head noWrap>
                Column B
              </StructuredListCell>
              <StructuredListCell head noWrap>
                Column C
              </StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>
          <StructuredListBody>
            <StructuredListRow>
              <StructuredListCell noWrap>Row 1</StructuredListCell>
              <StructuredListCell>Row 1</StructuredListCell>
              <StructuredListCell>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean
                posuere sem vel euismod dignissim. Nulla ut cursus dolor.
                Pellentesque vulputate nisl a porttitor interdum.
              </StructuredListCell>
            </StructuredListRow>
            <StructuredListRow>
              <StructuredListCell noWrap>Row 2</StructuredListCell>
              <StructuredListCell>Row 2</StructuredListCell>
              <StructuredListCell>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean
                posuere sem vel euismod dignissim. Nulla ut cursus dolor.
                Pellentesque vulputate nisl a porttitor interdum.
              </StructuredListCell>
            </StructuredListRow>
            <StructuredListRow>
              <StructuredListCell noWrap>Row 3</StructuredListCell>
              <StructuredListCell>Row 3</StructuredListCell>
              <StructuredListCell>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean
                posuere sem vel euismod dignissim. Nulla ut cursus dolor.
                Pellentesque vulputate nisl a porttitor interdum.
              </StructuredListCell>
            </StructuredListRow>
          </StructuredListBody>
        </StructuredListWrapper>
      </Modal>
    </>
  );
};

export const DangerModal = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
      <Modal
        open={open}
        onRequestClose={() => setOpen(false)}
        danger
        modalHeading="Are you sure you want to delete this custom domain?"
        modalLabel="Account resources"
        primaryButtonText="Delete"
        secondaryButtonText="Cancel"
      />
    </>
  );
};

const modalFooter = (numberOfButtons) => {
  const secondaryButtons = () => {
    switch (numberOfButtons) {
      case '1':
        return {
          secondaryButtons: [],
        };
      case '2':
        return {
          secondaryButtonText: 'Cancel',
        };
      case '3':
        return {
          secondaryButtons: [
            {
              buttonText: 'Keep both',
              onClick: action('onClick'),
            },
            {
              buttonText: 'Rename',
              onClick: action('onClick'),
            },
          ],
        };
      default:
        return null;
    }
  };
  return {
    ...secondaryButtons(),
  };
};

export const WithScrollingContent = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
      <Modal
        open={open}
        onRequestClose={() => setOpen(false)}
        hasScrollingContent
        modalHeading="Add a custom domain"
        modalLabel="Account resources"
        primaryButtonText="Add"
        secondaryButtonText="Cancel">
        <p style={ marginBottom: '1rem' }>
          Custom domains direct requests for your apps in this Cloud Foundry
          organization to a URL that you own. A custom domain can be a shared
          domain, a shared subdomain, or a shared domain and host.
        </p>
        <p style={ marginBottom: '1rem' }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu
          nibh odio. Nunc a consequat est, id porttitor sapien. Proin vitae leo
          vitae orci tincidunt auctor eget eget libero. Ut tincidunt ultricies
          fringilla. Aliquam erat volutpat. Aenean arcu odio, elementum vel
          vehicula vitae, porttitor ac lorem. Sed viverra elit ac risus
          tincidunt fermentum. Ut sollicitudin nibh id risus ornare ornare.
          Etiam gravida orci ut lectus dictum, quis ultricies felis mollis.
          Mauris nec commodo est, nec faucibus nibh. Nunc commodo ante quis
          pretium consectetur. Ut ac nisl vitae mi mattis vulputate a at elit.
          Nullam porttitor ex eget mi feugiat mattis. Nunc non sodales magna.
          Proin ornare tellus quis hendrerit egestas. Donec pharetra leo nec
          molestie sollicitudin.{' '}
        </p>
        <TextInput
          data-modal-primary-focus
          id="text-input-1"
          labelText="Domain name"
          placeholder="e.g. github.com"
          style={ marginBottom: '1rem' }
        />
        <div style={ marginBottom: '1rem' }>
          <Select id="select-1" defaultValue="us-south" labelText="Region">
            <SelectItem value="us-south" text="US South" />
            <SelectItem value="us-east" text="US East" />
          </Select>
        </div>
        <Dropdown
          id="drop"
          label="Dropdown"
          titleText="Dropdown"
          items={[
            { id: 'one', label: 'one', name: 'one' },
            { id: 'two', label: 'two', name: 'two' },
          ]}
          style={ marginBottom: '1rem' }
        />
        <MultiSelect
          id="test"
          label="Multiselect"
          titleText="Multiselect"
          items={[
            {
              id: 'downshift-1-item-0',
              text: 'Option 1',
            },
            {
              id: 'downshift-1-item-1',
              text: 'Option 2',
            },
          ]}
          itemToString={(item) => (item ? item.text : '')}
        />
      </Modal>
    </>
  );
};

export const WithStateManager = () => {
  /**
   * Simple state manager for modals.
   */
  const ModalStateManager = ({
    renderLauncher: LauncherContent,
    children: ModalContent,
  }) => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        {!ModalContent || typeof document === 'undefined'
          ? null
          : ReactDOM.createPortal(
              <ModalContent open={open} setOpen={setOpen} />,
              document.body
            )}
        {LauncherContent && <LauncherContent open={open} setOpen={setOpen} />}
      </>
    );
  };

  const button = React.useRef();

  return (
    <ModalStateManager
      renderLauncher={({ setOpen }) => (
        <Button ref={button} onClick={() => setOpen(true)}>
          Launch modal
        </Button>
      )}>
      {({ open, setOpen }) => (
        <Modal
          launcherButtonRef={button}
          modalHeading="Add a custom domain"
          modalLabel="Account resources"
          primaryButtonText="Add"
          secondaryButtonText="Cancel"
          open={open}
          onRequestClose={() => setOpen(false)}>
          <p style={ marginBottom: '1rem' }>
            Custom domains direct requests for your apps in this Cloud Foundry
            organization to a URL that you own. A custom domain can be a shared
            domain, a shared subdomain, or a shared domain and host.
          </p>
          <TextInput
            data-modal-primary-focus
            id="text-input-1"
            labelText="Domain name"
            placeholder="e.g. github.com"
            style={ marginBottom: '1rem' }
          />
          <Select id="select-1" defaultValue="us-south" labelText="Region">
            <SelectItem value="us-south" text="US South" />
            <SelectItem value="us-east" text="US East" />
          </Select>
        </Modal>
      )}
    </ModalStateManager>
  );
};

export const PassiveModal = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
      <Modal
        open={open}
        onRequestClose={() => setOpen(false)}
        passiveModal
        modalHeading="You have been successfully signed out"
      />
    </>
  );
};

export const WithInlineLoading = () => {
  const [status, setStatus] = useState('inactive');
  const [description, setDescription] = useState('Deleting...');

  const fakePromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  const submit = async () => {
    setStatus('active');

    await fakePromise();

    setDescription('Deleted!');
    setStatus('finished');
  };

  const resetStatus = () => {
    setStatus('inactive');
    setDescription('Deleting...');
  };

  const [open, setOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
      <Modal
        open={open}
        onRequestClose={() => setOpen(false)}
        danger
        modalHeading="Are you sure you want to delete this custom domain?"
        modalLabel="Account resources"
        primaryButtonText="Delete"
        secondaryButtonText="Cancel"
        onRequestSubmit={submit}
        loadingStatus={status}
        loadingDescription={description}
        onLoadingSuccess={resetStatus}
      />
    </>
  );
};

const aiLabel = (
  <AILabel className="ai-label-container">
    <AILabelContent>
      <div>
        <p className="secondary">AI Explained</p>
        <h2 className="ai-label-heading">84%</h2>
        <p className="secondary bold">Confidence score</p>
        <p className="secondary">
          Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
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

export const withAILabel = {
  render: () => {
    const [open, setOpen] = useState(true); // eslint-disable-line
    return (
      <div className="ai-label-modal">
        <Button onClick={() => setOpen(true)}>Launch modal</Button>
        <Button onClick={() => setOpen2(true)}>
          Launch modal decorator tooltip
        </Button>
        <Modal
          open={open}
          onRequestClose={() => setOpen(false)}
          modalHeading="Add a custom domain"
          modalLabel="Account resources"
          primaryButtonText="Add"
          secondaryButtonText="Cancel"
          decorator={aiLabel}>
          <p style={ marginBottom: '1rem' }>
            Custom domains direct requests for your apps in this Cloud Foundry
            organization to a URL that you own. A custom domain can be a shared
            domain, a shared subdomain, or a shared domain and host.
          </p>
          <p style={ marginBottom: '1rem' }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eu nibh odio. Nunc a consequat est, id porttitor sapien. Proin vitae
            leo vitae orci tincidunt auctor eget eget libero. Ut tincidunt
            ultricies fringilla. Aliquam erat volutpat. Aenean arcu odio,
            elementum vel vehicula vitae, porttitor ac lorem. Sed viverra elit
            ac risus tincidunt fermentum. Ut sollicitudin nibh id risus ornare
            ornare. Etiam gravida orci ut lectus dictum, quis ultricies felis
            mollis. Mauris nec commodo est, nec faucibus nibh. Nunc commodo ante
            quis pretium consectetur. Ut ac nisl vitae mi mattis vulputate a at
            elit. Nullam porttitor ex eget mi feugiat mattis. Nunc non sodales
            magna. Proin ornare tellus quis hendrerit egestas. Donec pharetra
            leo nec molestie sollicitudin.
          </p>
          <TextInput
            data-modal-primary-focus
            id="text-input-1"
            labelText="Domain name"
            placeholder="e.g. github.com"
          />
          <Select id="select-1" defaultValue="us-south" labelText="Region">
            <SelectItem value="us-south" text="US South" />
            <SelectItem value="us-east" text="US East" />
          </Select>
          <TextArea labelText="Comments" />
        </Modal>
      </div>
    );
  },
};
