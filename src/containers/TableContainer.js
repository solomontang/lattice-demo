import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../css/scrollable.css';
import { Segment, Header, Table } from 'semantic-ui-react';

const headerRow = [
  'Type',
  'Title'
];

const renderBodyRow = ({ entityType }) => {
  const { id, type, title } = entityType; 
  return {
    key: id,
    cells: [
      type
        ? { key: 'type', content: type.namespace + '.' + type.title, className: 'truncated' }
        : 'No Type',
      title 
      ? { key: 'title', content: title, className: 'truncated' }
      : 'No Title'
    ]
  }
}

const TableContainer = (props) => (
  <Segment.Group>
    <Segment as={Header} size='large' padded>Association Types</Segment>
    <Segment>
      <Table className='scrollable'
        headerRow={headerRow}
        renderBodyRow={renderBodyRow}
        tableData={props.associationTypes.associationTypes}
        selectable
        unstackable
        sortable
      />
    </Segment>
  </Segment.Group>
)

const mapStateToProps = ({ associationTypes }) => ({
  associationTypes
})

export default connect(mapStateToProps, null)(TableContainer);