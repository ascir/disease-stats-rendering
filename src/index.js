import React from 'react';
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table,
} from 'semantic-ui-react';

import ReactDOM from 'react-dom';
import MapComponent from './components/MapComponent'
import FilterByCountry from './components/DropDown/FilterByCountry'
import FilterByDisease from './components/DropDown/FilterByDisease'
// import { Container, Row, Col} from 'react-bootstrap'

class Application extends React.Component {
    
    constructor(props) {
        super(props);
       
    }

    componentDidMount() {
        
    }
    
    render() {
        // var geoData;
        return (
          <div>
          <div>
             <Grid columns={2} stackable>
      <Grid.Column>
        <Segment><FilterByCountry /></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment><FilterByDisease /></Segment>
      </Grid.Column>
      </Grid>
      </div>
      <div>
      <Grid celled padded style={{height: '100vh'}} centered>
    <Grid.Column width = {15}>
    <MapComponent />
    </Grid.Column>
      </Grid>
      </div>
   
          {/* <Container>
            <Row>
              <Col><FilterByCountry /></Col>
              <Col><FilterByDisease /></Col></Row>
              </Container>
            <Container><MapComponent />
          </Container> */}
          </div>
        )
    }
}
  
ReactDOM.render(

  <Application />

, document.getElementById('app'));