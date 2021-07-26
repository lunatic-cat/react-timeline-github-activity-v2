import { Typography } from 'antd';

import { Container } from './styled';

type PropTypes = {
  teamName: string;
};

const TitleComponent: React.FC<PropTypes> = ({ teamName }) => (
  <Container align="center" direction="vertical" style={{ width: '100%' }}>
    <Typography.Title level={2}>A ACTIVITY HISTORY OF</Typography.Title>
    <Typography.Title>
      {teamName}
      {' '}
      TEAM
    </Typography.Title>
  </Container>
);

export default TitleComponent;
