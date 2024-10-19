import React from 'react'
import { missionVission } from '../../assets/data/fakedata'

export default function Mission_Vission() {
  return (
    <div className='mission-section'>
        <div className="flex justify-between">
            <div className="image-site">
                <span>
                    <img src={''} alt={missionVission.image.alt} />
                </span>
            </div>
            <div className="text-site">
                <div className="mision">
                  <span>
                      <h3>{missionVission.mission.title}</h3>
                  </span>
                  <p>{missionVission.mission.text}</p>
                </div>
                <div className="vission">
                  <span>
                      <h3>{missionVission.vission.title}</h3>
                  </span>
                  <p>{missionVission.vission.text}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
