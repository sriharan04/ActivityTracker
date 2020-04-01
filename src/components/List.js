import React from "react";
import classes from "./List.css";
import logo from "../assets/list-32.png";
import Pagination from "./Pagination";
import users from "../assets/multiuser.png";
const List = props => {
  const OnChangesearch = e => {
    props.change(e.target.value);
  };
  return (
    <div className={classes.main_header}>
      <div className={classes.main_header_h}>
        <div className={classes.main_header_h_flex}>
          <span className={classes.main_icon}>
            <img src={logo} alt="logo" />
          </span>
          <h1 className={classes.main_header_text}>Analytics</h1>
        </div>
      </div>
      <div className={classes.main_header_search}>
        <input
          type="text"
          name="search"
          className={classes.search_input}
          onChange={e => OnChangesearch(e)}
          placeholder="Search User..."
        ></input>
      </div>
      <section className={classes.main_section_head}>
        <div className={classes.section_header}>
          <img src={users} alt="Users_logo" className={classes.users}></img>
          <h3>Users</h3>
        </div>
      </section>
      <section className={classes.main_section}>
        <div className={classes.main_section_content}>
          <ul className={classes.main_section_list}>{props.children}</ul>
        </div>
      </section>
      <div className={classes.pagination}>
        <Pagination
          postsPerPage={props.postsPerPage}
          totalPosts={props.totalPosts}
          paginate={props.paginate}
        />
      </div>
    </div>
  );
};

export default List;
