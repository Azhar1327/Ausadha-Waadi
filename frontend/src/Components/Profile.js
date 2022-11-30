import React from 'react'
// import '../CSS/Profile.css'

function Profile() {
  return (
    <>
    <div class="container">
      <div class="main">
        <div class="topbar">
          <a href="">Logout</a>
          <a href="">User Dshboard</a>
          <a href="">Home</a>
        </div>
        <div class="row">
          <div class="col-md-4 mt-1">
            <div class="card text-center sidebar">
              <div class="card-body">
                <img src="image.png" class="rounded-circle" width="150"/>
              </div>
            </div>
          </div>
          <div class="col-md-8 mt-1">
            <div class="card mb-3 content">
              <h1 class="n-3 pt-3">About</h1>
            <div class="card-body">
              <div class="row">
                <div class="col-md-3">
                <h5>Full Name</h5></div>
              <div class="col-md-9 text-secondary">
                Aman Swastik Rath
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-md-3">
                <h5>Email</h5>
              </div>
              <div class="col-md-9 text-secondary">
                amanrath66@gmail.com
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-md-3">
                <h5>Phone</h5>
              </div>
              <div class="col-md-9 text-secondary">
                9937800632
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-md-3">
                <h5>Address</h5>
              </div>
              <div class="col-md-9 text-secondary">
                xxxxx
              </div>
            </div>
            <div class="upload">
            <button type = "button" class = "btn-warning">
            <i class = "fa fa-upload"></i> Upload File
            <input type="file"/>
          </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Profile