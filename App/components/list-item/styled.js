import styled from 'styled-components';
import {Image} from '../image';

export const Container = styled.TouchableOpacity`
  min-height: 40px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
`;

export const ImageWrapper = styled(Image)`
  align-items: flex-end;
  min-height: 25px;
  min-width: 25px;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: lightgrey;
`;
