import '@testing-library/jest-dom';
import { beforeEach } from 'vitest';

// jsdom doesn't implement scrollIntoView — stub it so components that use it don't throw.
if (typeof Element !== 'undefined' && !Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = () => {};
}

beforeEach(() => {
  if (typeof localStorage !== 'undefined') {
    localStorage.clear();
  }
});
