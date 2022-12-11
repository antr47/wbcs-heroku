import React, { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // if we are using arrow function binding is not required
    //  this.onImageChange = this.onImageChange.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div class="container-fluid py-5 mt-5">
        <div class="container">
          <div class="row gx-5">
            <div class="col-lg-5 mb-5 mb-lg-0">
              <div class="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded fit-cover"
                  src="assets/img/about.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="mb-4">
                <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">
                  About Us
                </h5>
                <h1 class="display-4">
                  Best Medical Care For Yourself and Your Family
                </h1>
              </div>

              <div class="row g-3 pt-3">
                <div class="col-sm-3 col-6">
                  <div class="bg-light text-center rounded-circle py-4">
                    <i class="fa fa-3x fa-user-md text-primary mb-3"></i>
                    <h6 class="mb-0">
                      Qualified
                      <small class="d-block text-primary">Doctors</small>
                    </h6>
                  </div>
                </div>
                <div class="col-sm-3 col-6">
                  <div class="bg-light text-center rounded-circle py-4">
                    <i class="fa fa-3x fa-procedures text-primary mb-3"></i>
                    <h6 class="mb-0">
                      Emergency
                      <small class="d-block text-primary">Services</small>
                    </h6>
                  </div>
                </div>
                <div class="col-sm-3 col-6">
                  <div class="bg-light text-center rounded-circle py-4">
                    <i class="fa fa-3x fa-microscope text-primary mb-3"></i>
                    <h6 class="mb-0">
                      Accurate
                      <small class="d-block text-primary">Testing</small>
                    </h6>
                  </div>
                </div>
                <div class="col-sm-3 col-6">
                  <div class="bg-light text-center rounded-circle py-4">
                    <i class="fa fa-3x fa-ambulance text-primary mb-3"></i>
                    <h6 class="mb-0">
                      Free<small class="d-block text-primary">Ambulance</small>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
