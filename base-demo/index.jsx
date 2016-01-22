import ReactDOM from 'react-dom';
import React from 'react';
import { DatePicker } from 'antd';

const App = React.createClass({
  render() {
    return (
      <DatePicker />
    );
  },
});


ReactDOM.render(<App />, document.getElementById('react-content'));