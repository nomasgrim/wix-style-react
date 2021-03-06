import React from 'react';
import { storiesOf } from '@storybook/react';

import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';
import TabbedView from 'wix-storybook-utils/TabbedView';
import Markdown from 'wix-storybook-utils/Markdown';
import AutoDocs from 'wix-storybook-utils/AutoDocs';
import CodeExample from 'wix-storybook-utils/CodeExample';

import ExampleTooltip from './ExampleTooltip';
import ExamplePopover from './ExamplePopover';
import TooltipReadmeTestKit from '../../../src/Tooltip/README.TESTKIT.md';

import ExamplePlacement from '../Core/ExamplePlacement';
import ExamplePlacementRaw from '!raw-loader!../Core/ExamplePlacement';
import ExampleBounce from '../Core/ExampleBounce';
import ExampleBounceRaw from '!raw-loader!../Core/ExampleBounce';
import ExampleTheme from '../Core/ExampleTheme';
import ExampleThemeRaw from '!raw-loader!../Core/ExampleTheme';
import ExampleCustomContent from '../Core/ExampleCustomContent';
import ExampleCustomContentRaw from '!raw-loader!../Core/ExampleCustomContent';
import ExampleMove from '../Core/ExampleMove';
import ExampleMoveRaw from '!raw-loader!../Core/ExampleMove';
import TooltipSource from '!raw-loader!wix-style-react/Tooltip/Tooltip';

import ExamplePopoverEmptyState from './ExamplePopoverEmptyState';
import ExamplePopoverEmptyStateRaw from '!raw-loader!./ExamplePopoverEmptyState';

storiesOf('7. Tooltips', module)
  .add('7.1. Tooltip', () => (
    <TabbedView tabs={['Usage', 'API', 'Testkit']}>
      <div>
        <h1>Tooltip</h1>
        <InteractiveCodeExample title="Customize a <Tooltip/>">
          <ExampleTooltip />
        </InteractiveCodeExample>
      </div>

      <div>
        <AutoDocs source={TooltipSource} />

        <CodeExample title="Tooltip Placement" code={ExamplePlacementRaw}>
          <ExamplePlacement />
        </CodeExample>

        <CodeExample title="Tooltip Bounce" code={ExampleBounceRaw}>
          <ExampleBounce />
        </CodeExample>

        <CodeExample title="Tooltip Theme" code={ExampleThemeRaw}>
          <ExampleTheme />
        </CodeExample>

        <CodeExample
          title="Tooltip Custom Content"
          code={ExampleCustomContentRaw}
        >
          <ExampleCustomContent />
        </CodeExample>

        <CodeExample title="Custom tooltip adjustment" code={ExampleMoveRaw}>
          <ExampleMove />
        </CodeExample>
      </div>

      <Markdown source={TooltipReadmeTestKit} />
    </TabbedView>
  ))

  .add('7.2. Popover', () => (
    <div>
      <h1>Popover</h1>
      <InteractiveCodeExample title="Customize a <Tooltip/>">
        <ExamplePopover />
      </InteractiveCodeExample>

      <CodeExample
        title="Popover with EmptyState"
        code={ExamplePopoverEmptyStateRaw}
      >
        <ExamplePopoverEmptyState />
      </CodeExample>
    </div>
  ));
