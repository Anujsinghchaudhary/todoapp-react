import React from 'react'
import {Todo} from './components/Todo'
export const App = () => {
  return (
    <div className='bg-stone-950 grid py-4 min-h-screen'>
      <Todo/>
    </div>
  )
}
export default App;