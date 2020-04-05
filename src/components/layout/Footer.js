import React from 'react'

function Footer() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="footer text-center app-dark text-light">
                        Developed using  React JS and Redux JS and integrated with external movies data API&nbsp;
                        <a href="http://www.omdbapi.com/" target="_blank">
                            OMDB
                        </a>
                        <div className="footer text-center app-dark text-light">
                            Created by -&nbsp;
                        <span className="text-warning font-weight-normal">
                            Akash Nivrutti Yede
                        </span>
                        </div>
                    </div> 
                </div> 
            </div>
        </div>
    )
}

export default Footer
