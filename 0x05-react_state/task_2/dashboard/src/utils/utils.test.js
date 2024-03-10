import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear function', () => {
    it('returns the correct current year', () => {
      const currentYear = new Date().getFullYear();
      expect(getFullYear()).toBe(currentYear);
    });
  });
  
  describe('getFooterCopy function', () => {
    it('returns correct string when argument is true', () => {
      const result = getFooterCopy(true);
      expect(result).toBe('Holberton School');
    });
  
    it('returns correct string when argument is false', () => {
      const result = getFooterCopy(false);
      expect(result).toBe('Holberton School main dashboard');
    });
  });
  
  describe('getLatestNotification function', () => {
    it('returns a non-empty string', () => {
      const result = getLatestNotification();
      expect(result).not.toBe('');
    });
  });