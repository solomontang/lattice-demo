import React, { Component } from 'react';
import Tree from 'react-tree-graph';
// import {Tree as Tree2} from 'react-d3-tree';
// import 'react-tree-graph/dist/style.css'
import '../css/tree.css';

let data = {
  "name": "Eve",
  "attributes": [
    {"something": "something"}
  ],
  "children": [
    {
      "name": "Cain"
    },
    {
      "name": "Seth",
      "children": [
        {
          "name": "Enos"
        },
        {
          "name": "Noam"
        }
      ]
    },
    {
      "name": "Abel"
    },
    {
      "name": "Awan",
      "children": [
        {
          "name": "Enoch"
        }
      ]
    },
    {
      "name": "Azura",
      "attributes": "female"
    }
  ]
}

class TreeContainer extends Component {
  render() {
    return (
      <div>
        <Tree 
          data={data}
          height={200}
          width={400}
          animated
        />
      </div>
    )
  }
}

export default TreeContainer;