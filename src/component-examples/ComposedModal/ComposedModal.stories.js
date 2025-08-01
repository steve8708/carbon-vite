/**
 * Copyright IBM Corp. 2016, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ComposedModal, { ModalBody } from './ComposedModal';
import { ModalHeader } from './ModalHeader';
import { ModalFooter } from './ModalFooter';
import { MultiSelect } from '@carbon/react';
import { Dropdown } from '@carbon/react';
import { Select } from '@carbon/react';
import { SelectItem } from '@carbon/react';
import { TextInput } from '@carbon/react';
import { Button } from '@carbon/react';
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from '../StructuredList';
import { AILabel, AILabelContent, AILabelActions } from '@carbon/react';
import { IconButton } from '@carbon/react';
import { View, FolderOpen, Folders } from '@carbon/icons-react';
import mdx from './ComposedModal.mdx';

export default {
  title: 'Components/ComposedModal',
  component: ComposedModal,
  subcomponents: {
    ModalHeader,
    ModalBody,
    ModalFooter,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const sharedArgTypes = {
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
  containerClassName: {
    table: {
      disable: true,
    },
  },
  onClose: {
    action: 'onClose',
  },
  onKeyDown: {
    action: 'onKeyDown',
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

export const Default = (args) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch composed modal</Button>
      <ComposedModal {...args} open={open} onClose={() => setOpen(false)}>
        <ModalHeader
          label="Account resources"
          title="Add a custom domain"
          {...args}
        />
        <ModalBody>
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
        </ModalBody>
        <ModalFooter
          primaryButtonText="Add"
          secondaryButtonText="Cancel"
          {...args}
        />
      </ComposedModal>
    </>
  );
};

Default.argTypes = { ...sharedArgTypes };

export const FullWidth = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch composed modal</Button>
      <ComposedModal open={open} onClose={() => setOpen(false)} isFullWidth>
        <ModalHeader
          label="An example of a modal with no padding"
          title="Full Width Modal"
        />
        <ModalBody>
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
                  dui magna, finibus id tortor sed, aliquet bibendum augue.
                  Aenean posuere sem vel euismod dignissim. Nulla ut cursus
                  dolor. Pellentesque vulputate nisl a porttitor interdum.
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell noWrap>Row 2</StructuredListCell>
                <StructuredListCell>Row 2</StructuredListCell>
                <StructuredListCell>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  dui magna, finibus id tortor sed, aliquet bibendum augue.
                  Aenean posuere sem vel euismod dignissim. Nulla ut cursus
                  dolor. Pellentesque vulputate nisl a porttitor interdum.
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell noWrap>Row 3</StructuredListCell>
                <StructuredListCell>Row 3</StructuredListCell>
                <StructuredListCell>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  dui magna, finibus id tortor sed, aliquet bibendum augue.
                  Aenean posuere sem vel euismod dignissim. Nulla ut cursus
                  dolor. Pellentesque vulputate nisl a porttitor interdum.
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListBody>
          </StructuredListWrapper>
        </ModalBody>
        <ModalFooter primaryButtonText="Add" secondaryButtonText="Cancel" />
      </ComposedModal>
    </>
  );
};

export const PassiveModal = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch composed modal</Button>
      <ComposedModal open={open} onClose={() => setOpen(false)}>
        <ModalHeader title="You have been successfully signed out" />
        <ModalBody />
      </ComposedModal>
    </>
  );
};

export const WithStateManager = () => {
  const button = React.useRef();

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
  return (
    <ModalStateManager
      renderLauncher={({ setOpen }) => (
        <Button ref={button} onClick={() => setOpen(true)}>
          Launch composed modal
        </Button>
      )}>
      {({ open, setOpen }) => (
        <ComposedModal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          launcherButtonRef={button}>
          <ModalHeader label="Account resources" title="Add a custom domain" />
          <ModalBody>
            <p style={ marginBottom: '1rem' }>
              Custom domains direct requests for your apps in this Cloud Foundry
              organization to a URL that you own. A custom domain can be a
              shared domain, a shared subdomain, or a shared domain and host.
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
          </ModalBody>
          <ModalFooter primaryButtonText="Add" secondaryButtonText="Cancel" />
        </ComposedModal>
      )}
    </ModalStateManager>
  );
};

export const WithScrollingContent = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch composed modal</Button>
      <ComposedModal open={open} onClose={() => setOpen(false)}>
        <ModalHeader label="Account resources" title="Add a custom domain" />
        <ModalBody hasScrollingContent>
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
            leo nec molestie sollicitudin.{' '}
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
        </ModalBody>
        <ModalFooter primaryButtonText="Add" secondaryButtonText="Cancel" />
      </ComposedModal>
    </>
  );
};

export const WithInlineLoading = () => {
  const [open, setOpen] = useState(true);
  const [status, setStatus] = useState('inactive');
  const [description, setDescription] = useState('Submitting...');

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

    setDescription('Submitted!');
    setStatus('finished');
  };

  const resetStatus = () => {
    setStatus('inactive');
    setDescription('Submitting...');
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch composed modal</Button>
      <ComposedModal open={open} onClose={() => setOpen(false)}>
        <ModalHeader label="Account resources" title="Add a custom domain" />
        <ModalBody>
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
        </ModalBody>
        <ModalFooter
          primaryButtonText="Add"
          secondaryButtonText="Cancel"
          loadingStatus={status}
          loadingDescription={description}
          onRequestSubmit={submit}
          onLoadingSuccess={resetStatus}
        />
      </ComposedModal>
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

export const _withAILabel = {
  render: () => {
    const [open, setOpen] = useState(true); // eslint-disable-line
    return (
      <div className="ai-label-modal">
        <Button onClick={() => setOpen(true)}>Launch composed modal</Button>
        <ComposedModal
          open={open}
          onClose={() => setOpen(false)}
          decorator={aiLabel}>
          <ModalHeader label="Account resources" title="Add a custom domain" />
          <ModalBody>
            <p style={ marginBottom: '1rem' }>
              Custom domains direct requests for your apps in this Cloud Foundry
              organization to a URL that you own. A custom domain can be a
              shared domain, a shared subdomain, or a shared domain and host.
            </p>
            <p style={ marginBottom: '1rem' }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              eu nibh odio. Nunc a consequat est, id porttitor sapien. Proin
              vitae leo vitae orci tincidunt auctor eget eget libero. Ut
              tincidunt ultricies fringilla. Aliquam erat volutpat. Aenean arcu
              odio, elementum vel vehicula vitae, porttitor ac lorem. Sed
              viverra elit ac risus tincidunt fermentum. Ut sollicitudin nibh id
              risus ornare ornare. Etiam gravida orci ut lectus dictum, quis
              ultricies felis mollis. Mauris nec commodo est, nec faucibus nibh.
              Nunc commodo ante quis pretium consectetur. Ut ac nisl vitae mi
              mattis vulputate a at elit. Nullam porttitor ex eget mi feugiat
              mattis. Nunc non sodales magna. Proin ornare tellus quis hendrerit
              egestas. Donec pharetra leo nec molestie sollicitudin.
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
            <p style={ marginBlock: '1rem' }>
              Custom domains direct requests for your apps in this Cloud Foundry
              organization to a URL that you own. A custom domain can be a
              shared domain, a shared subdomain, or a shared domain and host.
            </p>
            <TextInput
              data-modal-primary-focus
              id="text-input-1"
              labelText="Domain name"
              placeholder="e.g. github.com"
              style={ marginBottom: '1rem' }
            />
          </ModalBody>

          <ModalFooter
            primaryButtonText="Save"
            secondaryButtons={[{ buttonText: 'Cancel' }]}
          />
        </ComposedModal>
      </div>
    );
  },
};
