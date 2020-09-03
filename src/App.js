import React, { Component } from "react"; // loads everything we need related to React
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// js function that returns the block of html
// this function is imported in index.js as import App from './App'
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    // Tried_writing_class_methods - following required to set bind 'this' in onChangeHandler method
    // this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      }) //this returns new promise with response converted to json
      .then((users) => {
        this.setState({ monsters: users });
      });
  }

  /* Tried_writing_class_methods
  This way 'this' is not set to class object
  onChangeHandler(e) {
    this.setState({
      ...this.state,
      searchField: e.target.value,
    });
  }*/

  //Tried_writing_class_methods - this way (arrow function) 'this' is set to class object
  // context of this is set to whatever that declared the arrow function
  onChangeHandler = (e) => {
    this.setState({
      ...this.state,
      searchField: e.target.value,
    });
  };

  render() {
    // Tried_authors_solution -
    // render() is called everytime setState is called and state is changed
    // hence, monsters and searchField is always updated
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((m) =>
      // Tried_includes_with_string
      m.name.toLowerCase().includes(searchField.toLowerCase())
    );
    /* Tried_you_should_not_write_handler_function_here_coz_render_gets_called_multipletime
    // Write them in class
    const onChangeHandler = (e) =>
      this.setState({
        ...this.state,
        searchField: e.target.value,
      });*/
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/* Tried_separate_search_box */}
        <SearchBox
          handleChange={this.onChangeHandler}
          placeHolder="search monsters"
        />
        <CardList
          monsters={filteredMonsters}
          // term={this.state.searchField}
        ></CardList>
      </div>
    );
  }
}

export default App;
