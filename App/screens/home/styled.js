import styled from 'styled-components';
import { Input } from '../../components/Input';
import { Image } from '../../components/image';

export const Container = styled.View`
  align-items: center;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  flex: 1;
  justify-content: center;
  padding-bottom: 100px;
`;

export const Header = styled.View`
  align-items: flex-end;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  flex-direction: row;
  justify-content: space-between;
`;

export const InputWrapper = styled(Input)`
  padding: 10px;
`;

export const ImageWrapper = styled(Image)`
  height: 50px;
  margin: 10px;
  width: 50px;
`;
