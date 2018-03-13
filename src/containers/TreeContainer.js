import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Tree from 'react-tree-graph';
import { Segment } from 'semantic-ui-react';
import '../css/tree.css';
import cuid from 'cuid';

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

  //maybe move these getters to redux actions for bigger app?
  getAssociationTypeModelById = (hash) => {
    const { associationTypes } = this.props;
    return associationTypes.associationTypes[associationTypes.byId[hash]];
  }

  getEntityTypeModelById = (hash) => {
    const { entityTypes } = this.props;
    return entityTypes.entityTypes[entityTypes.byId[hash]];
  }

  getPropertyTypeModelById = (hash) => {
    const { propertyTypes } = this.props;
    return propertyTypes.propertyTypes[propertyTypes.byId[hash]];
  }

  createTreeData = () => {
    const { currentModel, modelType } = this.props;
    const { getAssociationTypeModelById, getEntityTypeModelById } = this;
    let rootModel = null
    let rootEntity = null
    let modelPath = []
    let modelSrc = null
    let modelDst = null;

    if (modelType === 'entityTypes') {
      rootModel = getEntityTypeModelById(currentModel);
      rootEntity = rootModel;
      modelPath = ['Key', 'Properties'];
      modelSrc = rootModel.key;
      modelDst = rootModel.properties;
    } else {
      rootModel = getAssociationTypeModelById(currentModel);
      rootEntity = rootModel.entityType;
      modelPath = ['Sources', 'Destinations'];
      modelSrc = rootModel.src;
      modelDst = rootModel.dst;
    }

    const treeData = {};
    
    if (currentModel) {
      treeData.name = rootEntity.type.namespace + '.' + rootEntity.type.name;
      treeData.reactKey = cuid();
      treeData.children = [
        {
          name: modelPath[0],
          reactKey: cuid(),
          children: this.getChildrenNames(modelSrc)
        },
        {
          name: modelPath[1],
          reactKey: cuid(),
          children: this.getChildrenNames(modelDst)
        }
      ]
    }
    return treeData;
  }

  getChildrenNames = (hashes) => {
    const { modelType } = this.props;
    const { getPropertyTypeModelById, getEntityTypeModelById } = this;

    const getModelById = modelType === 'entityTypes'
      ? getPropertyTypeModelById
      : getEntityTypeModelById;

    const childrenNames = hashes.map( hash => {
      const child = getModelById(hash);
      return {
        name: child.type.namespace + '.' + child.type.name,
        reactKey: cuid()
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
            keyProp='reactKey'
            animated
            // steps={30} //animation steps
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