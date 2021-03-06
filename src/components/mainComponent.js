import React, { Component } from "react";

import { FormGroup } from "reactstrap";

class Main extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            dmeProviderName: '',
            dmePhoneNumber: '',
            dmeAddress:'',
            dmeFax:'',

        };

        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
            [name]: value
        });
    }


    handleSubmit(event) {
        console.log("Completed Form: " + JSON.stringify(this.state));
        alert("Completed Form:" + JSON.stringify(this.state));
      event.preventDefault();
    }
    

  render() {
    return (
     <div className="col">
      <form onSubmit={this.handleSubmit}>
        <div id="orderForm" className="container">
            <div className="row">
                <div className="col-sm-6">
                    <h4> DME Provider Information</h4>
                    
                        <label>DME Provider Name</label>
                            <input
                            value={this.state.dmeProviderName}
                            onChange={this.handleInputChange}
                            name="dmeProviderName"
                            type="text"
                            placeholder="DME Provider Name"
                            className="form-control"
                            id="dmeProviderName"
                            />
                        
                        <label>Phone Number</label>
                            <input
                             value={this.state.dmePhoneNumber}
                             onChange={this.handleInputChange}
                            name="dmePhoneNumber"
                            placeholder="Phone Number"
                            type="text"
                            className="form-control"
                            id="dmePhoneNumber"
                            />
                        
                        <label>Address</label>
                            <input
                            value={this.state.dmeAddress}
                            onChange={this.handleInputChange}
                            name="dmeAddress"
                            placeholder="Address"
                            type="text"
                            className="form-control"
                            id="dmeAddress"
                            />
                        
                        <label>Fax</label>
                            <input
                            value={this.state.dmeFax}
                            onChange={this.handleInputChange}
                            name="dmeFax"
                            placeholder="Fax"
                            type="text"
                            className="form-control"
                            id="dmeFax"
                            />
                </div>

                <div className="col">
                    {" "}
                    <h4> Patient Demographics </h4>
                    
                    <div className="form-group">
                        <input
                        placeholder="Name"
                        type="text"
                        className="form-control"
                        id="patientName"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        placeholder="DOB dd/mm/yyyy"
                        type="text"
                        className="form-control"
                        id="patientDob"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        placeholder="Height - inches"
                        type="text"
                        className="form-control"
                        id="patientHeight"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        placeholder="Weight - lbs"
                        type="text"
                        className="form-control"
                        id="patientWeight"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        placeholder="Exam Date"
                        type="text"
                        className="form-control"
                        id="examDate"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        placeholder="Length of Need - Months"
                        type="text"
                        className="form-control"
                        id="lengthNeed"
                        />
                        <small id="needInstruct" className="form-text text-muted">
                        Lifetime = "99+".
                        </small>
                    </div>
                    <div id="genderBox">
                        <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="genderM"
                            value="option1"
                            checked
                        />
                        <label className="form-check-label" for="exampleRadios1">
                            Female
                        </label>
                        </div>
                        <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="genderF"
                            value="option2"
                        />
                        <label className="form-check-label" for="exampleRadios2">
                            Male
                        </label>
                        </div>
                        <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="genderNon"
                            value="option2"
                        />
                        <label className="form-check-label" for="exampleRadios2">
                            Non-Binary
                        </label>
                        </div>
                    </div>
                   
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    {" "}
                    <h4>Discharge Date</h4>
                    
                    <div className="form-group">
                        <input
                        placeholder="dd/mm/yyyy"
                        type="date"
                        className="form-control"
                        id="dischargeDate"
                        />
                    </div>
                    
                </div>
                <div className="col">
                    {" "}
                    <h4>Discharge Location</h4>
                   
                    <div className="form-group">
                        <input
                        placeholder="Address"
                        type="text"
                        className="form-control"
                        id="dischargeAd"
                        />
                    </div>
                    
                </div>
            </div>

            <div className="row">
                <div className="col">
                    {" "}
                    <h4>Medical Diagnosis Information </h4>
                    <div className="form-group">
                        <div className="form-group">
                        <input
                            placeholder="ICD 10 Code + Written Dx"
                            type="text"
                            className="form-control"
                            id="examDate"
                        />
                        </div>
                        <div className="form-group">
                        <input
                            placeholder="ICD 10 Code + Written Dx"
                            type="text"
                            className="form-control"
                            id="examDate"
                        />
                        </div>
                        <div className="form-group">
                        <input
                            placeholder="ICD 10 Code + Written Dx"
                            type="text"
                            className="form-control"
                            id="examDate"
                        />
                        </div>
                        <div className="form-group">
                        <input
                            placeholder="ICD 10 Code + Written Dx"
                            type="text"
                            className="form-control"
                            id="examDate"
                        />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">
                        Face-to-Face Encounter Documentation
                        </label>
                        <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Note must indicate medical necessity for item ordered and must be signed by an MD or DO"
                        ></textarea>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <h4>Equipment Needed</h4>
                    
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                        />
                        <label className="form-check-label" for="defaultCheck1">
                        Wheelchair
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                        />
                        <label className="form-check-label" for="defaultCheck1">
                        Wheelchair Cushion
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                        />
                        <label className="form-check-label" for="defaultCheck1">
                        Wheelchair Back
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                        />
                        <label className="form-check-label" for="defaultCheck1">
                        Foot Rests
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                        />
                        <label className="form-check-label" for="defaultCheck1">
                        Anti-Tippers
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                        />
                        <label className="form-check-label" for="defaultCheck1">
                        Elevating Leg Rests
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                        />
                        <label className="form-check-label" for="defaultCheck1">
                        Articulating Leg Rests
                        </label>
                    </div>
                </div>
                <div className="col">
                    {" "}
                    <h4>Specifics</h4>
                    
                    <h6>Wheelchair Seat Size</h6>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                        />
                        <label className="form-check-label" for="inlineCheckbox1">
                        16x16
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                        />
                        <label className="form-check-label" for="inlineCheckbox2">
                        18x16
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        value="option3"
                        />
                        <label className="form-check-label" for="inlineCheckbox3">
                        20x16
                        </label>
                    </div>
                    <h6>Wheelchair Type</h6>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                        />
                        <label className="form-check-label" for="inlineCheckbox1">
                        Standard / Hemi
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                        />
                        <label className="form-check-label" for="inlineCheckbox2">
                        Lightweight
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        value="option3"
                        />
                        <label className="form-check-label" for="inlineCheckbox3">
                        Wide
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        value="option3"
                        />
                        <label className="form-check-label" for="inlineCheckbox3">
                        Extra Wide
                        </label>
                    </div>
                    <h6>Cushion Type</h6>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                        />
                        <label className="form-check-label" for="inlineCheckbox1">
                        Standard/Wide
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                        />
                        <label className="form-check-label" for="inlineCheckbox2">
                        Skin Protection/Gel
                        </label>
                    </div>
                    <h6>Backrest Type</h6>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                        />
                        <label className="form-check-label" for="inlineCheckbox1">
                        Standard/Wide
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                        />
                        <label className="form-check-label" for="inlineCheckbox2">
                        Skin Protection/Gel
                        </label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div>
                    <h4>Signature and Certification</h4>
                    <p>
                        I, as signed below, hereby attest the information provided above
                        is the result of a face-to-face encounter on today's date.
                        Furthermore I certify that the items selected are medically
                        necessary in order to treat the patient's condition.{" "}
                    </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                    <input
                        placeholder="Provider Name"
                        type="text"
                        className="form-control"
                        id="providerName"
                    />
                    </div>
                    <div className="form-group">
                    <input
                        placeholder="Provider Signature"
                        type="text"
                        className="form-control"
                        id="providerSig"
                    />
                    </div>
                    <div className="form-group"></div>
                    <div className="form-group">
                    <input
                        placeholder="Provider NPI #"
                        type="text"
                        className="form-control"
                        id="providerSig"
                    />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                    <input
                        placeholder="Address"
                        type="text"
                        className="form-control"
                        id="providerName"
                    />
                    </div>
                    <div className="form-group">
                    <input
                        placeholder="Phone #"
                        type="text"
                        className="form-control"
                        id="providerSig"
                    />
                    </div>
                    <div className="form-group"></div>
                    <div className="form-group">
                    <input type="date" className="form-control" id="providerSig" />
                    </div>
                </div>
            </div>
           
        </div>
        <input type="submit" value="Submit" />
      </form>  
      </div>   
    );
  }
}

export default Main;
