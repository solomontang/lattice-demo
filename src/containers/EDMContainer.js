import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllTypes } from '../actions/edm';

import { Grid } from 'semantic-ui-react';
import TableContainer from './TableContainer';
import TreeContainer from './TreeContainer';

class EDMContainer extends Component {

  componentDidMount() {
    const { fetchAllTypes } = this.props.actions;
    fetchAllTypes();
  }

  render() {
    return (
      <Grid padded style={{
        height: 'calc(100vh - 82px)'
      }}>
        <Grid.Row stretched>
          <Grid.Column width={8}>
            <TableContainer />
          </Grid.Column>
          <Grid.Column width={8}>
            <TreeContainer/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({
      fetchAllTypes
    }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(EDMContainer);