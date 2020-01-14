import React from 'react';
import {connect} from 'react-redux';

import './todoList.css';

const TodoList = () => {
  return (
    <div className='todoList'>
      <form>
        <input type="text"/>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: [],
  }
};

const mapDispatchToProps = dispatch => {
  return {
    postNewTask: () => dispatch(postNewTask()),
  }
};

export default connect(mapStateToProps)(TodoList);