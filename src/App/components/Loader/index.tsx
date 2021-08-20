import { Typography } from 'antd';
import HashLoader from 'react-spinners/HashLoader';

import colors from 'utils/colors';

import { LoaderContainer } from './styled';

type LoaderPropTypes = {
  message?: string;
};

const Loader: React.FC<LoaderPropTypes> = ({ message }) => (
  <LoaderContainer direction="vertical" align="center" size={72}>
    <Typography.Text style={{ fontSize: 24 }}>{message}</Typography.Text>
    <HashLoader size={96} color={colors.blue.dark} />
  </LoaderContainer>
);

export default Loader;
