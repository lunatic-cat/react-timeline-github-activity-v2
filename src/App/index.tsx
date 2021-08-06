import { useEffect } from 'react';

import upperCase from 'lodash/upperCase';

import { getTeamName } from 'utils';
import { fetchMembers } from 'store';

import Title from './components/Title';
import Timeline from './components/Timeline';
import { Container } from './styled';

const App: React.FC = () => {
  const teamName = getTeamName();

  useEffect(() => {
    if (teamName) fetchMembers(teamName).catch(() => null);
  });

  return teamName ? (
    <Container>
      <Title teamName={upperCase(teamName)} />
      <Timeline />
    </Container>
  ) : null;
};

export default App;
