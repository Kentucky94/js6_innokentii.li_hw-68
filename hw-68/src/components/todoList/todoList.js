import React from 'react';
import {connect} from 'react-redux';

import './todoList.css';

const TodoList = () => {
  return (
    <div className='todoList'>
      <form className='inputForm'>
        <input type="text"/>
      </form>
      Виноват, не успел закончить :(
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

  }
};

export default connect(mapStateToProps)(TodoList);