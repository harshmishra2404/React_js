import { createRoot } from 'react-dom/client'
import './index.css'
import App, { App2 } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
      <App />
      <App2 />
  </>
)

// Note:- Only One root render is allowed
// for multiple Render use Fragment(<></>)
// export { App2 } → named export
// export default App → default export
