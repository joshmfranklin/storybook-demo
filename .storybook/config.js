import { configure } from '@storybook/react';
import '../src/assets/uswds-2.0.1/scss/uswds.scss';
import '../src/assets/css/storybook.css';

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
