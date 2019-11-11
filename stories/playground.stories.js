/* eslint-disable import/extensions */
import { html } from 'lit-html';
import { withKnobs, withWebComponentsKnobs, text } from '@open-wc/demoing-storybook';

import '../first-time.js';

export default {
  title: 'FirstTime|Playground',
  component: 'first-time',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } },
};

export const singleComponent = () => html`
  <first-time></first-time>
`;

export const manualContent = () => html`
  <first-time>
    <p>${text('Content', 'Some text', 'Properties')}</p>
  </first-time>
`;
