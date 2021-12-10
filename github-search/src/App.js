
import './App.css';

function App() {
  return (
    <div className='app'>
      <form onSubmit={evt=>{
        console.log("onSubmit")
      }} >
      <input className='form__input' type="text" name="query" placeholder="Поиск"/>
      </form>
    </div>
  );
}

export default App;
