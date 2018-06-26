import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter = 0;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  increment() {
    //this.counter++;
    //this.ngRedux.dispatch({ type: 'INCREMENT', body: '', subject: '' });
    this.ngRedux.dispatch({ type: INCREMENT});
  }
}

/* 
  Flux is the Architecture
  Redux is the Library

  Benefit of redux
  - Predicatable application state
  - Decoupled architecture
  - Testability - easier to unit test
  - Great tooling
  - Undo/redo

  When to Use Redux
  - Independent copies of the same data in multiple places
  - Multiple views that need to work with the same data and be in sync
  - Data can be updated by multiple users
  - Data can be updated by multiple actors

  Redux has store, action and reducers
  - The Store - a single JS object that contains the state of the application
  - The Actions - Plain JS objects that represent something that has happened
    - CQRS 
      - Actions are like Commands. Command is something that should happen like PostMessageCommand
      - Events indicate that something has happen like MessagePostedEvent
  - Reducer - a function that specifies how the state changes in response to an action
    - a reducer does not modify the state. The store will returns the new state
      - Not allowed! state.messages.push(...);
    - a reducer is a pure function
    - Pure function
      - Same input alway return same output
      - No side effects
      - impure functions allows us to mutate arguments, make backend calls
      - Hence given the same input we may not always get the same output
      - ie impure function - function increment (input) { input.count++; } mutate the count variable
      - ie pure function - function increment (input) { return { count: input.count + 1 };} returns a new count variable
      - Easy testability
      - Easy undo/redo
      - Time travel debugging
    - Reducer template
      function reducer(state, action) {
        switch (action.type) {
          case 'INCREMENT':
            return { count: state.count + 1 };
        }
      }

  Data Flow
  - Action -> Store -> Reducer --New State--> Store

*/
