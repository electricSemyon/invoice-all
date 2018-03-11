import React from 'react';

export default class EditableTableCell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      value: props.value
    }
  }

  toggleEditing = isEditing => this.setState({isEditing});

  handleInputChange = ({target: {value}}) => this.setState({value});

  render() {
    const {isEditing, value} = this.state;
    const {onEdit} = this.props;

    return (
      <td>
        {isEditing
          ? <input
            autoFocus
            type="text"
            value={value}
            onChange={this.handleInputChange}
            onBlur={e => (this.toggleEditing(false), onEdit(e.target.value))}
          />
          : <span className="editable-text" onClick={() => this.toggleEditing(true)}>
              {value}
            </span>}
      </td>
    )
  }
}