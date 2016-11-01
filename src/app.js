var React = require('react');
var ReactDom = require('react-dom');

require('./scss/index.scss');

var App = React.createClass({
  render: function() {
    return <h1>Hello World!</h1>;
  }
});

ReactDom.render(<App/>, document.getElementById('react-root'));
