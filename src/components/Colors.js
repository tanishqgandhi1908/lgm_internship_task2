import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import './Colors.css'
const Colors = ({ data, loading}) => {
    return (
        <>
            <div className="team-card-container">

                {loading ? 
                    data && data.map((d) => {
                        
                        return (


                            <div className="team-card" key={d.id}>
                                <div className="card-image">
                                    <img src={d.avatar} alt="Jane" />
                                </div>
                                <div className="team-container-inside">
                                    <h2>{d.first_name} {d.last_name}</h2>
                                    <p className="card-title">{d.email}</p>
                                </div>
                            </div>
                        )
                    }): <>
                    <Spinner animation="border" variant="primary" />
                  </>
                }
            </div>

        </>
    )
}

export default Colors;