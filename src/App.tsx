import './App.css'
import memoTsLogo from 'assets/MR_TypeScript.svg'

function App() {
  return (
    <>
      <h1 className='logo-title'>
        <img
          src={memoTsLogo}
          className='logo'
          alt='Memo Ramirez Development logo'
        />{' '}
        Memo Ramirez
      </h1>
      <h3>Development Site & Portfolio</h3>
      <p className='read-the-docs'>Coming Soon</p>
    </>
  )
}

export default App
