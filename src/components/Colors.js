import React from 'react';
import './Colors.css'
const Colors = ({ data }) => {
    return (
        <>
            <div class="team-card-container">

                {
                    data && data.map((d) => {
                        return (


                            <div class="team-card" key={d.id}>
                                <div class="card-image">
                                    <img src={d.avatar} alt="Jane" />
                                </div>
                                <div class="team-container-inside">
                                    <h2>{d.first_name} {d.last_name}</h2>
                                    <p class="card-title">{d.email}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Colors;