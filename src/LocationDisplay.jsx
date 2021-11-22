import React from 'react'
import './LocationDisplay.css'

const getLocationSeason = (lat, month) => {
    if(month > 2 && month < 9) {//Europe
        return lat > 0 ? 'summer' : 'winter';
    } else {// Africa
        return lat > 0 ? 'winter' : 'summer';
    }
}

const seasonSettings = {
    summer: {
        text: "It's summer, let's go to the beach.",
        iconName: "sun"
    },
    winter: {
        text: "It's too cold, let's get some fire!",
        iconName: "snowflake"
    }
}

const LocationDisplay = (props) => {
    const lat = props.lat;

    const month = new Date().getMonth();

     //line below returns either summer or winter
     const locationSeason = getLocationSeason(lat, month);

     //display winter text with blue bg or
     //summer text with yellow background
     const {text, iconName} = seasonSettings[locationSeason];

    return (
        <div className={`season-display ${locationSeason}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default LocationDisplay
