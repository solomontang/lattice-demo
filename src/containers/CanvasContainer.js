import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';

const CanvasContainer = () => (
  <Grid padded>
    <Grid.Row>
      <Grid.Column width={8}>
        <Segment>something</Segment>
      </Grid.Column>
      <Grid.Column width={8}>
        <Segment>else</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default connect(null, null)(CanvasContainer);