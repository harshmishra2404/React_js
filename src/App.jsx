import React from 'react'

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <h3>Hello</h3>
    </div>
  )
};

const App2 = () => {
  return (
    <>    
      <div id="papa">
        <div>Son</div>
        <div>Daughter</div>
      </div>
      <div id="chachaJi">
        <div>nice</div>
      </div>
    </>

  );
}
export { App2 }
export default App


// use empty tags(fragments) for multiple div 