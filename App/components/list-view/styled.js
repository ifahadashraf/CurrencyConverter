import styled from 'styled-components';
import {Image} from '../image';

export const Container = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  min-height: 40px;
  padding: 20px;
  width: 100%;
`;

export const ImageWrapper = styled(Image)`
  align-items: flex-end;
  min-height: 25px;
  min-width: 25px;
`;
