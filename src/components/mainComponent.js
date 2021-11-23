import React, { Component } from 'react'; 


class Main extends React.Component {
    render() { 
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col col-sm-6' id='checklist'>
                        <h1>DME Checklist</h1>
                    </div>
                    <div className='col col-sm-6'>
                        <h1>Submitable Form</h1>
                    </div>
                </div>
            </div>
        ); 
    };
}
 
export default Main;