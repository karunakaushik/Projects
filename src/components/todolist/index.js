import React, {Component} from 'react'
// import ReactDOM from 'react-dom';
import styles from '../todolist/home.module.css'
// import './script'
export default class Project extends Component{
        state = {
          tasks: [],
          term: '' 
        };
      
        handleSubmit = task => {
          this.setState({tasks: [...this.state.tasks, task]});
        }
        
        handleDelete = (index) => {
          const newArr = [...this.state.tasks];
          newArr.splice(index, 1);
          this.setState({tasks: newArr});
        }

        handleOnSubmit = (e) => {
            e.preventDefault();
            if(this.state.term === '') return;
            this.handleSubmit(this.state.term);
            this.setState({ term: '' });
          }
      
        render() {
          return(
            <div className={styles.box}>
              <div className={styles.innerbox}>
                  you have {this.state.tasks.length} work/Task :
              <form onSubmit={this.handleOnSubmit}>
              <input 
                type='text'
                className='input'
                placeholder='Enter Item'
                value={this.state.term}
                onChange={(e) => this.setState({term: e.target.value})}
              />
              <button className='button'> + </button>
            </form>
            <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />

              </div>
            </div>
          );
        } 
      }
           
      const TodoList = (props) => {
        const todos = props.tasks.map((todo, index) => {
          return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
        })
        return( 
          <div className={styles.list}>
            {todos}
          </div>
        );
      }
      
      const Todo = (props) => {
        return(
          <div className={styles.listitem}>
            {props.content} 
            <button className={styles.button_div} onClick={() => {props.onDelete(props.id)}}> X </button>
          </div>
        );
      }
    
        


  