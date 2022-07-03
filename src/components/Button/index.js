import { Button, Text } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AppButton({ title, icon, onPress = () => {} }) {
  return (
    <Button onPress={onPress}>
      {icon && <Ionicons name={icon} size={20} color="#fff" />}
      <Text>{title}</Text>
    </Button>
  );
}
