import logo from './logo.svg';
import './App.css';
import {Responsive} from '@instructure/ui-responsive'

function App() {
  return (
    <div className="App">
      <Responsive
        match="media"
        query={{
          mobile: {maxWidth: '767px'},
          tablet: {minWidth: '768px'},
          desktop: {minWidth: '1024px'}
        }}
        props={{
          mobile: {
            info: 'Mobile'
          },
          tablet: {
            info: 'Tablet'
          },
          desktop: {
            info: 'Desktop'
          }
        }}
        render={props => <div>Hello World {props.info}</div>}
      />
    </div>
  );
}

export default App;
