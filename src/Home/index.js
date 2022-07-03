import { Container, Text, Title, Image } from './styles';
import Button from '../components/Button';
import { Linking } from 'react-native';

const openURL = (url) => {
  Linking.canOpenURL(url).then((supported) => {
    if (supported) {
      Linking.openURL(url);
    }
  });
};

export default function Home() {
  return (
    <Container>
      <Text>
        E ai! Me chamo <Title>Ewerton Mendes</Title>
      </Text>
      <Image source={require('../assets/eu1.jpg')} />
      <Text>Esse é um estudo de React Native com Styled Components.</Text>
      <Button
        title="Acesse meu Github"
        icon={'logo-github'}
        onPress={() => openURL('https://github.com/EwertonMendes')}
      />
    </Container>
  );
}
