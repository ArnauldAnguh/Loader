import React from 'react';
import Loader from 'react-loader-spinner';
import Todos from './Todos';
class App extends React.Component {
  state = {
    todos: [],
    errorMsg: '',
    showLoader: false
  };

  componentDidMount = () => {
    this.setState({ showLoader: true }, async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const json = await res.json();
        this.setState({
          showLoader: false,
          todos: json
        });
      } catch (e) {
        return this.setState({
          showLoader: false,
          errorMsg: `Oopss!! Connection Issues`
        });
      }
    });
  };

  render() {
    return this.state.showLoader ? (
      <div
        className='ui container'
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Loader type='ThreeDots' color='#2BAD60' height={100} width={100} />
      </div>
    ) : (
      <div>
        <div className='ui container'>
          <button
            className='ui button green'
            style={{ margin: '10px auto 5px' }}
          >
            Todos
          </button>
          <hr />
          <div className='ui segment'>
            <div className='ui grid' style={{ margin: '.9em' }}>
              <Todos todos={this.state.todos} errorMsg={this.state.errorMsg} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
