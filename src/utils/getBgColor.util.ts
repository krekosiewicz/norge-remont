
function assertUnreachable(x: unknown): never {
  // throw new Error("Didn't expect to get here");
}

export const getBgColor = (pathnameString: string): string => {
  switch (pathnameString) {
    case '/offer':
      return 'bg-green-50';
    case '/about':
    case '/gallery':
      return 'bg-gold-100';
    case '/':
      return '';
    case '/contact':
      return 'bg-contact';
  }
  return assertUnreachable(pathnameString);
}