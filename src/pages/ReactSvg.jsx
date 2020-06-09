import React from 'react'

export default class ReactSvg extends React.Component{
    render () {
        return (
            <div>
                <svg width="100%" height="100%" version="1.1"
                xmlns="http://www.w3.org/2000/svg">

                <circle cx="100" cy="50" r="40" stroke="black"
                stroke-width="2" fill="red"/>

                </svg>
                <embed src="rect.svg" width="300" height="100" 
                    type="image/svg+xml"
                    pluginspage="http://www.adobe.com/svg/viewer/install/" />

                <svg width="100%" height="100%" version="1.1"
                xmlns="http://www.w3.org/2000/svg">

                <rect width="300" height="100"
                />

                </svg>
            </div>
        )
    }
}

/**
 * 
 */