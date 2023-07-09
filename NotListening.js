import * as React from 'react';
import { List, Button  } from 'react-native-paper';

const NotListening = () => (
  <>
  <Button mode="contained" onPress={() => console.log('Pressed')}>
    Start
  </Button>
  <Button mode="contained" onPress={() => console.log('Pressed')}>
    Stop
  </Button>
  <List.Item
    title="Mwiza Ed' Simbeye"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
  <List.Item
    title="William Last KRM"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
  <List.Item
    title="Mwelwa Nkuta"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
  <List.Item
    title="Reece M'hango"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
  <List.Item
    title="Captain Mwaba"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
  <List.Item
    title="Baba Flex"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
  <List.Item
    title="Mibs"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
  <List.Item
    title="Taizya Simwanza"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
  <List.Item
    title="Monica Siatwinda"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
  
  </>
  
);

export default NotListening;