// Function to get the current year
export function getFullYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }
  
  // Function to get footer copy based on the isIndex parameter
export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
  }

export function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}

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