import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Segment, Header } from 'semantic-ui-react';

const TableContainer = () => (
  <Segment.Group>
    <Segment as={Header} size='huge' padded>Association Types</Segment>
    <Segment>Bottom</Segment>
  </Segment.Group>
)

const mapStateToProps = ({ associationTypes }) => ({
  associationTypes
})

export default connect(null, null)(TableContainer);