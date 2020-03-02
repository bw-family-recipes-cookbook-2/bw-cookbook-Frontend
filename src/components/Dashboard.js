import React from "react";
import { connect } from "react-redux";
import { updateTitle } from "../actions/actions";

class Dashboard extends React.Component {
  state = {
    newTitleText: ""
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateTitle = (e) => {
    e.preventDefault();
    this.props.updateTitle(this.state.newTitleText)
  }
  render() {
    
    return (
      
      <div>
        <h1>{this.props.title}</h1>
        <input
          type="text"
          name="newTitleText"
          value={this.state.newTitleText}
          onChange={this.handleChanges}
        />
       
        <button onClick={this.updateTitle}>Update title</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title
  };
};

export default connect(mapStateToProps, { updateTitle })(Dashboard);
