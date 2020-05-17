import onDocumentReady from './onDocumentReady';
import ExternalLinks from './externalLinks';
import Menu from './menu';

onDocumentReady(() => {
  new ExternalLinks();
  new Menu();
});
