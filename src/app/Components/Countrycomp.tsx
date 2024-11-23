import React from 'react'
function CountryDetails(props: {Country_details : string}) {
    const data = {
        Pakistan:{
            Name: "Pakistan",
            Population: "4,343,434",
            Capital: "Islamabad" },

            Australia:{
                Name: "Australia", 
                Population:  "26 million",
                Capital: "Canberra" ,
            },
        
            IceLand:{
                Name: "Ice Land",
                Population:"376,000",
                Capital:"  Reykjavik"
            },
        
            SaudiArabia:{
                Name: "Saudi Arabia",
                Population:"36000000",
                Capital:"Riyadh"
            },
        
            NewZeland:{
                Name: "New Zeland",
                Population:"5.2 million",
                Capital:"Wellington"
            },        
    }
    if (props.Country_details == "Pakistan") {
        return (
            <div className='mydiv'>
            <h2><hr /><hr />  Name: {props.Country_details}</h2><hr /><hr />  
            <hr /><h2><hr /> Population: {data.Pakistan.Population}</h2><hr /> <hr /> 
            <hr /><h2><hr /> Capital: {data.Pakistan.Capital}</h2><hr /><hr />  
            </div>
          )
    }
    else if (props.Country_details == "Australia") {
        return (
            <div className='mydiv'>
            <h2><hr /><hr /> Name: {props.Country_details} <hr /><hr /> </h2>
            <h2><hr /><hr />  Population: {data.Australia.Population}<hr /><hr /> </h2>
            <h2><hr /><hr /> Capital: {data.Australia.Capital}<hr /><hr /> </h2>
            </div>
          )
    }
    if (props.Country_details == "IceLand") {
        return (
            <div className='mydiv'>
            <h2><hr /><hr />  Name: {props.Country_details} <hr /><hr />  </h2>
            <h2><hr /><hr />  Population: {data.IceLand.Population} <hr /><hr />  </h2>
            <h2> <hr /><hr />  Capital: {data.IceLand.Capital}<hr /><hr />  </h2>
            </div>
          )
    }
    if (props.Country_details == "SaudiArabia") {
        return (
            <div className='mydiv'>
            <h2><hr /><hr />  Name: {props.Country_details} <hr /><hr />  </h2>
            <h2><hr /><hr />  Population: {data.SaudiArabia.Population}<hr /><hr />  </h2>
            <h2><hr /><hr />  Capital: {data.SaudiArabia.Capital}<hr /><hr />  </h2>
            </div>
          )
    }
    if (props.Country_details == "NewZeland") {
        return (
            <div className='mydiv'>
            <h2><hr /><hr />  Name: {props.Country_details}<hr /> <hr /> </h2>
            <h2><hr /><hr />  Population: {data.NewZeland.Population}<hr /> <hr /> </h2>
            <h2><hr /><hr />  Capital: {data.NewZeland.Capital}<hr /><hr />  </h2>
            </div>
          )
    }

    else{
        <h1>This page is not found ❌</h1>
    }
}

export default CountryDetails