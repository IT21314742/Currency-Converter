import React from 'react'

const App = () => {
  return (
    <div className='currency-converter'>
      <h2 className='converter-title'>Currency Converter</h2>
    <form className="converter-form">
      <div className='form-group'>
        <label className="form-label">Enter Amount</label>
        <input type="number" />
      </div>
    </form>
    </div>
  )
}

export default App