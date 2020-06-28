import styled from 'styled-components';
import { Image } from '../../components/image';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;

export const ImageWrapper = styled(Image)`
  height: 50px;
  width: 50px;
  margin: 10px;
`;
