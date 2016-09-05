import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

/*
  Components
  This is where the actual interface / view comes into play
  Everything is in Title - so we import that one
*/

import Title from './Title';

/*
  Mapping

  This is where the magic of redux comes in.

  We need a way to make
  1. our state (our data)
  2. our 'dispatch' functions 
  available to the <Title /> component.

  We will surface state and functions via props (this.props.whatever)

*/


/*
  Here we specify which state needs to be made avaialble to the component
  our state.xxxxx will be available via this.props.xxxxx
*/

function mapStateToProps(state) {
  return {
    areaChartData: state.areaChartData,
    barChartData: state.barChartData
  };
}

/*
  This will bind our actions to dispatch (make the fire-able)
  and make the actions available via props
*/

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}


/*
  Here we create an <App/> component which is just our <Title/> component with it's props
  populated with our actions and our state

  We're injecting the data at the top level and passing it down, but you can connect() any component to make the actions and the store available to you. 
*/
 
var App = connect(mapStateToProps, mapDispatchToProps)(Title);

export default App;
