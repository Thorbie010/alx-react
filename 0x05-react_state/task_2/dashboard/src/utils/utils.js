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

export function getLatestNotificationa() {
  return "New course available";
}

export function getLatestNotifications() {
  return "New resume available";
}

