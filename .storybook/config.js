import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '../src/assets/uswds-2.0.1/scss/uswds.scss';
import '../src/assets/css/storybook.css';
import '../src/assets/css/global.scss';

addDecorator(
  withInfo({
    inline: true
  })
);

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}


configure(loadStories, module);
