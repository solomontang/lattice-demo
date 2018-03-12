import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../css/scrollable.css';
import { Segment, Header, Table } from 'semantic-ui-react';
import { selectModel } from '../actions/edm';

class TableContainer extends Component {

  headerRow = [
    'Type',
    'Title'
  ];

  renderBodyRow = ({ entityType }) => {
    const { id, type, title } = entityType; 
    const { currentModel } = this.props;
    const { selectModel } = this.props.actions;
    return {
      key: id,
      cells: [
        type
          ? { key: 'type', content: type.namespace + '.' + type.name, className: 'truncated' }
          : 'No Type',
        title 
        ? { key: 'title', content: title, className: 'truncated' }
        : 'No Title'
      ],
      active: id === currentModel,
      onClick: () => selectModel(id) //anonymous function causes all rows to re-render. consider avoiding semantic-ui shorthand to optimize
    }
  }


  render() {
    const { renderBodyRow, headerRow } = this;
    const { associationTypes } = this.props;
    return (
      <Segment.Group>
        <Segment as={Header} size='large' padded>Association Types</Segment>
        <Segment>
          <Table className='scrollable'
            headerRow={headerRow}
            renderBodyRow={renderBodyRow}
            tableData={associationTypes.associationTypes}
            selectable
            unstackable
            sortable
          />
        </Segment>
      </Segment.Group>
    )
  }
}

const mapStateToProps = ({ associationTypes, currentModel }) => ({
  associationTypes,
  currentModel
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    selectModel
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);