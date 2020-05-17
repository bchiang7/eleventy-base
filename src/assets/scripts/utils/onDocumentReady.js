const onDocumentReady = callback => {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback, { once: true });
  }
};

export default onDocumentReady;
