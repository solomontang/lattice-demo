import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Tree from 'react-tree-graph';
// import {Tree as Tree2} from 'react-d3-tree';
// import 'react-tree-graph/dist/style.css'
import '../css/tree.css';

class TreeContainer extends Component {

  createTree = () => {
    const { associationTypes, propertyTypes, entityTypes, currentModel } = this.props;
    const treeData = {};
    
    if (currentModel) {
      const association = associationTypes.associationTypes[associationTypes.byId[currentModel]];
      treeData.name = association.entityType.type.namespace + '.' + association.entityType.type.name;
      treeData.children = [
        {
          "name": "Sources",
          "children": this.getChildrenNames(association.src)
        },
        {
          "name": "Destinations",
          "children": this.getChildrenNames(association.dst)
        }
      ]
    }
    return treeData;
  }

  getChildrenNames = (hashes) => {
    const { entityTypes } = this.props;
    const childrenNames = hashes.map( hash => {
      const entity = entityTypes.entityTypes[entityTypes.byId[hash]];
      return {
        name: entity.type.namespace + '.' + entity.type.name,
        id: entity.id
      }
    })
    return childrenNames;
  }

  render() {
    const { currentModel } = this.props;
    return (
      <div>
        {currentModel && <Tree
          data={this.createTree()}
          height={400}
          width={400}
          //animated //React complains about non-unique keys
        />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ currentModel, associationTypes, entityTypes, propertyTypes }) => ({
  currentModel,
  associationTypes,
  entityTypes,
  propertyTypes
})

export default connect(mapStateToProps, null)(TreeContainer);