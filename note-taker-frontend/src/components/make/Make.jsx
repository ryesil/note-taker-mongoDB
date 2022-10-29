import React from 'react'

function Make() {
  return (
    <div className="container">
<div className="form-group pt-3 w-50">
<input className="form-control" placeholder='title'/>
</div>
<div className="form-group pt-3">
<textarea className="form-control" placeholder='content'>content</textarea>
</div>
<br/>
<button className="btn btn-primary">Submit</button>
    </div>
  )
}

export default Make