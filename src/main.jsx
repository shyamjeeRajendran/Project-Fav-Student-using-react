import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StudentContext from './context/StudentContext.jsx'

let root = ReactDom.createRoot(document.getElementById('root'))

root.render(
  <StudentContext>
    <App/>
  </StudentContext>
  
)