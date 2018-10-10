import React from "react";
import "./App.css";
import { DatePicker, message, Carousel, Button } from "antd";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
  }
  handleChange(date) {
    message.info("您选择的日期是: " + date.toString());
    this.setState({ date });
  }
  render() {
    return (
      <div style={{ width: 400, margin: "100px auto" }}>
        <Carousel autoplay>
          <div>
            <h3>one</h3>
          </div>
          <div>
            <h3>two</h3>
          </div>
          <div>
            <h3>three</h3>
          </div>
          <div>
            <h3>four</h3>
          </div>
          <div>
            <h3>five</h3>
          </div>
        </Carousel>
        <div>
          <Button type="primary" style={{ marginTop: "20px" }}>
            Primary
          </Button>
        </div>
        <DatePicker
          onChange={value => this.handleChange(value)}
          style={{ marginTop: "20px" }}
        />
        <div style={{ marginTop: 20 }}>
          当前日期：
          {this.state.date.toString()}
        </div>
      </div>
    );
  }
}

export default App;
