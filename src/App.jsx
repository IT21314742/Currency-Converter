import React from 'react'

const App = () => {
  return (
    <div className='currency-converter'>
      <h2 className='converter-title'>Currency Converter</h2>
    <form className="converter-form">
      <div className='form-group'>
        <label className="form-label">Enter Amount</label>
        <input type="number" className="form-input" required/>
      </div>

      <div className="form-group">
        <div className="form-section">
          <label className="form-label">Form</label>
          <div className="currency-select">
            <img src="" alt="" />
            <select name="" id=""></select>
          </div>
        </div>
      </div>
    </form>
    </div>
  )
}

export default App