// Function to get the current year
export function getFullYear() {
  return new Date().getFullYear();
}

// Function to return footer text based on isIndex argument
export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

// Function that returns the followin strings: <strong>Urgent requirement</strong> - complete by EOD.
export function getLatestNotification() {
	return "<strong>Urgent requirement</strong> - complete by EOD";
}
