import React, { Component } from "react";
import classes from "./App.css";
import List from "../components/List";
import Modal from "../components/Modal";
import Aux from "../HOC/Auxilliary";
import Li from "../components/RowComponent";
import Activity from "../components/Activity";
import Backdrop from "../components/Backdrop";
import Cal from "../containers/Cal";
import axios from "axios";
class App extends Component {
  constructor() {
    super();
    this.state = {
      postsPerPage: 10,
      currentPage: 1,
      show: false,
      selectedId: "",
      modal: false,
      members: [],
      filtered: []
    };
  }

  componentDidMount() {
    axios
      .get("https://testapi.io/api/Sriharan/members")
      .then(res => {
        this.setState({ members: res.data });
      })
      .catch(err => console.log(err));
  }

  OnSearchHandler = text => {
    let currentList = [];
    let newList = [];
    if (text !== "") {
      currentList = this.state.members;
      newList = currentList.filter(item => {
        const lc = item.real_name.toLowerCase();
        const filter = text.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.state.members;
    }
    this.setState({
      filtered: newList
    });
  };

  paginate = pageNumber => this.setState({ currentPage: pageNumber });
  OnUserClickHandler = id => {
    this.setState({ selectedId: id, modal: true, show: true });
  };
  OncloseBackdrop = () => {
    this.setState({ modal: false, show: false });
  };
  render() {
    let detail = "";
    let list = "";
    let lists = {};
    if (this.state.filtered.length === 0) {
      lists = this.state.members;
    } else {
      lists = this.state.filtered;
    }
    if (lists.length > 0) {
      const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
      const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
      const currentPosts = lists.slice(indexOfFirstPost, indexOfLastPost);
      const divstyle = {
        color: "whitesmoke"
      };
      list = currentPosts.map(user => {
        let nm = "";
        let profile = user.real_name.split(" ");
        for (let i = 0; i < profile.length; i++) {
          nm = nm + profile[i].charAt(0);
        }
        return (
          <Li
            key={user.id}
            id={user.id}
            name={user.real_name}
            disable={false}
            click={id => this.OnUserClickHandler(id)}
            style={divstyle}
          />
        );
      });

      if (this.state.modal) {
        detail = (
          <Aux>
            <Backdrop click={this.OncloseBackdrop} show={this.state.show} />
            <Modal>
              <div className={classes.modal_flex}>
                <Activity data={currentPosts} id={this.state.selectedId}>
                  <Cal data={currentPosts} id={this.state.selectedId} />
                </Activity>
              </div>
            </Modal>
          </Aux>
        );
      }
    }
    return (
      <div>
        {detail}
        <List
          postsPerPage={this.state.postsPerPage}
          totalPosts={lists.length}
          paginate={this.paginate}
          change={this.OnSearchHandler}
        >
          {list}
        </List>
      </div>
    );
  }
}

export default App;
