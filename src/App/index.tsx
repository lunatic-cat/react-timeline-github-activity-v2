import { useEffect } from 'react';

import upperCase from 'lodash/upperCase';
import isEmpty from 'lodash/isEmpty';

import { getTeamName } from 'utils';
import { fetchAllUserEvents, fetchMembers } from 'store';
import { useTypedSelector } from 'utils/hooks';

import Title from './components/Title';
import Timeline from './components/Timeline';
import { Container } from './styled';

const App: React.FC = () => {
  const teamName = getTeamName();
  const isLoaded = useTypedSelector((state) => state.ui.isAdditionalEventsLoaded);
  const isAllAdditionalUserEventsLoaded = useTypedSelector(
    (state) => (isEmpty(state.users) ? false : state.users.every((user) => user.isAllEventsLoaded)),
  );

  useEffect(() => {
    if (teamName) fetchMembers(teamName).catch(() => null);
  }, [teamName]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = Math.abs(document.documentElement.getBoundingClientRect().top)
        + document.documentElement.clientHeight;
      const { scrollHeight } = document.documentElement;
      const screenHeight = window.screen.height;

      if (!scrollHeight || scrollHeight === document.documentElement.clientHeight) return;

      if (isLoaded
        && !isAllAdditionalUserEventsLoaded
        && scrollPosition > scrollHeight - screenHeight
      ) fetchAllUserEvents().catch(() => null);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAllAdditionalUserEventsLoaded, isLoaded]);

  return teamName ? (
    <Container>
      <Title teamName={upperCase(teamName)} />
      <Timeline />
    </Container>
  ) : null;
};

export default App;
