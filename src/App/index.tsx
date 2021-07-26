import Title from './components/Title';
import Timeline from './components/Timeline';
import { Container } from './styled';

const App: React.FC = () => (
  <Container>
    <Title teamName="YOUR" />
    <Timeline />
  </Container>
);

export default App;
