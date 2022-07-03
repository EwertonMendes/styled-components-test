import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bg};
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${(props) => props.theme.primary};
  text-align: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.text};
  margin-bottom: 10px;
  text-align: center;
`;

export const Image = styled.Image`
  width: 95%;
  height: 45%;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
`;
