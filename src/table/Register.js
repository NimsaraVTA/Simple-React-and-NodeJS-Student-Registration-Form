import React from 'react'


const Register = () => {

    return (

        <div className="container">

            <div className="form-panel">

            <h1 className="h1 text-center head">Student Registration Form</h1>
            <hr />

            <form>
                <div className="form-group">
                    <label for="" className="labset">Enter your full name :</label>
                    <input type="text" className="form-control" placeholder="Enter your full name" />
                </div>

                    <br/>

                <div className="form-group">
                    <label for="" className="labset">Enter your name with initials :</label>
                    <input type="text" className="form-control" placeholder="Enter your name with initials" />
                </div>

                    <br />

                <div className="form-group">
                    <label for="" className="labset">Enter your date of birth :</label>
                    <input type="text" className="form-control" placeholder="Enter your date of birth" />
                </div>

                    <br />

                <div className="form-group">
                    <label for="" className="labset">Enter your age :</label>
                    <input type="text" className="form-control" placeholder="Enter your age" />
                </div>

                    <br />

                <div class="form-group">
                        <label for="exampleFormControlSelect1" className="labset">Select Your Sex :</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                            <option>Male</option>
                            <option>Female</option>
                    </select>
                 </div>

                    <br />

                <div className="form-group">
                    <label for="" className="labset">Enter your NIC No :</label>
                    <input type="text" className="form-control" placeholder="Enter your national ID no" />
                </div>

                    <br />

                <div className="form-group">
                     <label for="" className="labset">Enter your MIS No :</label>
                     <input type="text" className="form-control" placeholder="Enter your MIS no" />
                </div>

                    <br />

                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />&nbsp;
                        <label class="form-check-label" for="exampleCheck1">I agree with terms and conditions</label>
                    </div>

                    <br />

                    <input type="submit" className="btn btn-primary submit-but" />
                </form>

                </div>

        </div>
        
        );
};

export default Register