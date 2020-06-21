import React from 'react';

const Form = () => {

const handleChange = e => {
    console.log(e.target.value)
}

return (
<div className="container col-12">
<div className="input-group mb-3 mt-4">
  <input onChange={handleChange} type="text" className="form-control" placeholder="Employee Name" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search
    </button>
  </div>
</div>
</div>
    )
} 

export default Form;
