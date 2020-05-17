const getFocusables = container => {
  const focusables = ['button', '[href]', '[tabindex]'];
  const focusablesQuery = focusables.map(e => `${e}:not([tabindex="-1"])`).join(', ');
  const elements = Array.from(container.querySelectorAll(focusablesQuery));
  // Prevent selecting hidden elements
  return elements.filter(el => el.offsetParent !== null);
};

export default getFocusables;
