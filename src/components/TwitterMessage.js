import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet:""
    };
  }

  handleChange = (event)=>{
    this.setState({
      tweet: event.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.tweet}/>
        <p>Characters Remaining: {this.props.maxChars - this.state.tweet.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
