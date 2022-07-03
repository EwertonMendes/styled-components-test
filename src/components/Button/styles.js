import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.primary};
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  width: 95%;
  height: 7%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.text};
  padding-left: 5px;
  text-align: center;
  font-weight: bold;
`;
