import React, { PureComponent } from 'react';
import Draggable from 'react-draggable';
import onClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';

import NodeInputList from './NodeInputList';
import NodeOuputList from './NodeOutputList';

class Node extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  handleDragStart(event, ui) {
    this.props.onNodeStart(this.props.nid, ui);
  }

  handleDragStop(event, ui) {
    this.props.onNodeStop(this.props.nid, ui.position);
  }

  handleDrag(event, ui) {
    this.props.onNodeMove(this.props.index, ui.position);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.selected !== nextState.selected;
  }

  onStartConnector(index) {
    this.props.onStartConnector(this.props.nid, index);
  }

  onCompleteConnector(index) {
    this.props.onCompleteConnector(this.props.nid, index);
  }

  handleClick(e) {
    this.setState({ selected: true });
    if (this.props.onNodeSelect) {
      this.props.onNodeSelect(this.props.nid);
    }
  }

  handleClickOutside() {
    let { selected } = this.state;
    if (this.props.onNodeDeselect && selected) {
      this.props.onNodeDeselect(this.props.nid);
    }
    this.setState({ selected: false });
  }

  render() {
    let { selected } = this.state;

    let nodeClass = 'node' + (selected ? ' selected' : '');

    return (
      <div
        onDoubleClick={e => {
          this.handleClick(e);
        }}>
        <Draggable
          defaultPosition={this.props.pos}
          handle=".node-header"
          onStart={(event, ui) => this.handleDragStart(event, ui)}
          onStop={(event, ui) => this.handleDragStop(event, ui)}
          onDrag={(event, ui) => this.handleDrag(event, ui)}>
          <section className={nodeClass} style={{ zIndex: 10000 }}>
            <header className="node-header">
              <span className="node-title">{this.props.title}</span>
            </header>
            <div className="node-content">
              <NodeInputList
                items={this.props.inputs}
                onCompleteConnector={index => this.onCompleteConnector(index)}
              />
              <NodeOuputList
                items={this.props.outputs}
                onStartConnector={index => this.onStartConnector(index)}
              />
            </div>
          </section>
        </Draggable>
      </div>
    );
  }
}

export default onClickOutside(Node);
