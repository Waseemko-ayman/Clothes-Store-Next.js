export const formatHeader = (key: string) => {
  if (key.startsWith('user_')) {
    const parts = key.split('_');
    const keyVar = parts[1] ?? '';
    return keyVar
      ? `User ${keyVar.charAt(0).toUpperCase() + keyVar.slice(1)}`
      : 'User';
  }

  return key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
};
