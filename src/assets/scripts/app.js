import { onDocumentReady } from './utils';
import ExternalLinks from './externalLinks';
import Menu from './menu';

onDocumentReady(() => {
  new ExternalLinks();
  new Menu();
});
