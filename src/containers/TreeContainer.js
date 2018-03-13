import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Tree from 'react-tree-graph';
import { Segment } from 'semantic-ui-react';
import '../css/tree.css';

class TreeContainer extends Component {
  constructor(props) {
    super(props);
    this.state ={
      height: 300,
      width: 500
    }
  }
  componentDidMount() {
    //get height of current dom node for D3 Tree
    const node = ReactDOM.findDOMNode(this);
    this.setState({
      height: node.clientHeight - 40, //adjust for padding
      width: node.clientWidth - 28
    })
  }

  createTreeData = () => {
    const { associationTypes, propertyTypes, entityTypes, currentModel } = this.props;
    const treeData = {};
    
    if (currentModel) {
      const association = associationTypes.associationTypes[associationTypes.byId[currentModel]];
      treeData.name = association.entityType.type.namespace + '.' + association.entityType.type.name;
      treeData.children = [
        {
          name: "Sources",
          //key: `source-${association.entityType.id}`
          children: this.getChildrenNames(association.src)
        },
        {
          name: "Destinations",
          //key: `destination-${association.entityType.id}`
          children: this.getChildrenNames(association.dst)
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
      }
    })
    return childrenNames;
  }

  render() {
    const { currentModel } = this.props;
    return (
      
        <Segment color='violet' className="treeContainer">
          {
            currentModel 
            ? <Tree
            data={this.createTreeData()}
            height={this.state.height}
            width={this.state.width}
            // margins={{ bottom : 0, left : 0, right : 150, top : 0 }}
            //animated      // React warning about unique keys during animation
            //keyProp="key" // even when keyProp is set to entity id hash inside treeData
            />
            : <div className="emptyTree">Select a model</div>
          }
        </Segment>
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