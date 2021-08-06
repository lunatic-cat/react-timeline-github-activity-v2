export const getTeamName = (): string | null => {
  const { pathname } = window.location;

  return pathname ? pathname.replace('/', '') : null;
};
