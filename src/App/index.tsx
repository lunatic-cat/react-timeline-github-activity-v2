import { useEffect } from 'react';

import upperCase from 'lodash/upperCase';
import isEmpty from 'lodash/isEmpty';

import { getTeamName, handleInfiniteScroll } from 'utils';
import { fetchMembers } from 'store';
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
    window.addEventListener(
      'scroll',
      () => handleInfiniteScroll(isLoaded, isAllAdditionalUserEventsLoaded),
    );

    return () => {
      window.removeEventListener(
        'scroll',
        () => handleInfiniteScroll(isLoaded, isAllAdditionalUserEventsLoaded),
      );
    };
  }, [isAllAdditionalUserEventsLoaded, isLoaded]);

  return teamName ? (
    <Container>
      <Title teamName={upperCase(teamName)} />
      <Timeline />
    </Container>
  ) : (
    <Container>
      <Title teamName="YOUR" />
    </Container>
  );
};

export default App;
