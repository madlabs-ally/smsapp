import * as React from 'react';
import { List, Button  } from 'react-native-paper';

const LandingPage = ({data}) => (
  <>
  <List.Item
    title="Mwiza Ed' Simbeye"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
  /> 
  </>
  
);

export default LandingPage;