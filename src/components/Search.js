import React, { Component } from "react";

class Search extends Component {
  // Setting the component's initial state
  state = {
    topic: "",
    startYear: "",
    endYear: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    // this.setState({
    //   firstName: "",
    //   lastName: ""
    // });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
    	<div>
	      <div className="panel panel-primary" style={{"text-align": "center"}}>
	      	<div className="panel-heading">
	      		<h3>
	      			Search
	      		</h3>
	      	</div>
	      	<div className="panel-body">
		        <form className="form">
		        	<p>Topic</p>
		          <input
		            value={this.state.topic}
		            name="topic"
		            onChange={this.handleInputChange}
		            type="text"
		            style={{"width": "100%"}}
		          />
		          <p>Start Year</p>
		          <input
		            value={this.state.start}
		            name="startYear"
		            onChange={this.handleInputChange}
		            type="text"
		            style={{"width": "100%"}}
		          />
		          <p>End Year</p>
		          <input
		            value={this.state.end}
		            name="endYear"
		            onChange={this.handleInputChange}
		            type="text"
		            style={{"width": "100%"}}
		          />
		          <button onClick={this.handleFormSubmit} style={{"margin": "10px"}}>Submit</button>
		        </form>
		       </div>
	      </div>

	      <div className="panel panel-primary" style={{"text-align": "center"}}>
	      	<div className="panel-heading">
	      		<h3>
	      			Results
	      		</h3>
	      	</div>
	      	<div className="panel-body">
		      	
		       </div>
	      </div>
	     </div>
    );
  }
}

export default Search;