import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../css/scrollable.css';
import { Segment, Header, Table } from 'semantic-ui-react';
import { selectModel } from '../actions/edm';

class TableContainer extends Component {

  componentDidMount() {
    const { title } = this.props.modelType;
    this.setState({
      title
    })
  }

  headerRow = [
    'Type',
    'Title'
  ];

  renderBodyRow = ( model ) => {
    const { id, type, title } = model.entityType || model;
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
    const { associationTypes, entityTypes, isFetching, modelType } = this.props;
    const data = modelType === 'entityTypes'
      ? entityTypes.entityTypes
      : associationTypes.associationTypes;

    return (
      <Segment.Group >
        <Segment className='tableHeader' size='large' color='violet'>{modelType}</Segment>
        <Segment loading={isFetching}>
          <Table className='scrollable'
            headerRow={headerRow}
            renderBodyRow={renderBodyRow}
            tableData={data}
            selectable
            unstackable
            sortable
          />
        </Segment>
      </Segment.Group>
    )
  }
}

const mapStateToProps = ({ associationTypes, entityTypes, currentModel, isFetching }) => ({
  associationTypes,
  entityTypes,
  currentModel,
  isFetching
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    selectModel
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);