import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../css/scrollable.css';
import { Segment, Header, Table } from 'semantic-ui-react';
import { selectModel } from '../actions/edm';

// const headerRow = [
//   'Type',
//   'Title'
// ];

// const renderBodyRow = ({ entityType }) => {
//   const { id, type, title } = entityType; 
//   return {
//     key: id,
//     id: id,
//     cells: [
//       type
//         ? { key: 'type', content: type.namespace + '.' + type.title, className: 'truncated' }
//         : 'No Type',
//       title 
//       ? { key: 'title', content: title, className: 'truncated' }
//       : 'No Title'
//     ],
//     onClick: () => {
//       console.log(id);
//     }
//   }
// }

class TableContainer extends PureComponent {

  headerRow = [
    'Type',
    'Title'
  ];

  renderBodyRow = ({ entityType }) => {
    const { id, type, title } = entityType; 
    const { selectModel } = this.props.actions;
    return {
      key: id,
      id: id,
      cells: [
        type
          ? { key: 'type', content: type.namespace + '.' + type.title, className: 'truncated' }
          : 'No Type',
        title 
        ? { key: 'title', content: title, className: 'truncated' }
        : 'No Title'
      ],
      onClick: () => {
        selectModel(id);
      }
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

const mapStateToProps = ({ associationTypes }) => ({
  associationTypes
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    selectModel
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);