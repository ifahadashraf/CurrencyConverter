import styled from 'styled-components';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => props.theme.PRIMARY_BUTTON_COLOR};
  border-radius: 12px;
  border: ${props => props.theme.PRIMARY_BUTTON_COLOR} 1px solid;
  min-height: 40px;
  min-width: 63px;
  padding: 10px;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  font-size: 18px;
  font-weight: bold;
`;
