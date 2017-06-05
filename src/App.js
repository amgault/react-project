var destination = document.querySelector("#app-container");

var TodoItems = React.createClass({
  render: function() {
    var todoEntries = this.props.entries;

    function createTasks(item) {
      return (
        <li key={item.key}>{item.text}</li>
      );
    }

    var listItems = todoEntries.map(createTasks);

    return (
      <div>
        <span>To Do List </span>
        <span> ({listItems.length})</span>
        <ul className="theList">
          {listItems}
        </ul>
      </div>
    );
  }
});

var TodoList = React.createClass({
  
  getInitialState: function() {
    return {
      items: []
    };
  },

  
  addItem: function(e) {
    var itemArray = this.state.items;

    itemArray.push(
      {
        text: this._inputElement.value,
        key: Date.now()
      }
    );
     
    this.setState({
      items: itemArray
    });
     
    this._inputElement.value = "";
    e.preventDefault();

  },

  
  render: function() {
      return (
        <div className="todoListMain">
          <div className="row">
            <div id="container" className="col-lg-11 col-lg-offset-1 header"> Welcome to my To Do List React App</div>
          </div>
          <div className="row main">
            <div id="container" className="col-lg-4 col-lg-offset-2 left"> 
              <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a} placeholder="">
                </input>
                <button type="submit">add</button>
              </form>
            </div>
            <div id="container" className="col-lg-4 right"> 
              <TodoItems entries={this.state.items}/>
            </div>   
          </div>
        </div>
        
      );
    }
});


ReactDOM.render(
  <div>
    <TodoList/>
  </div>,
  destination
);
