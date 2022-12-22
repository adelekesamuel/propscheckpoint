import React from 'react'
import { handleName } from 
'../App'

import PropTypes from 'prop-types'

const Profile = ({ fullName, src, profession, bio }) => {
    return (
        <div style={{ display: 'flex', justifyContent:'center'}}>

            <div style={{ border:'5px solid brown', marginTop: '30px', borderRadius: '20px', width: '50%', textAlign: 'center' }}>

                <div className="full-name">
                    <h1>{fullName}</h1>
                </div>

                <div className="image">
                    <img src={src} alt="profile image" style={{ borderRadius: '5px', width: '50%', border: '1px solid brown', marginTop: '5px' }}/>
                </div>

                <div className="profession">
                    <div><strong style={{ color: 'black' }}>{profession}</strong></div>
                </div>

                <div className="bio">
                    <h5 style={{ margin: '0' }}><strong style={{ color: 'black'}}> {bio} </strong></h5>
                </div>

                <div className="button">
                    <button style={{color:'white', border: '2px solid brown', borderRadius: '5px', backgroundColor: 'brown', padding: '1px 5px', marginBottom: '5px',marginTop: '5px', cursor: 'pointer'}} onClick={handleName}> Show name</button>
                </div>

            </div>
        </div>
    )

}

Profile.defaultProps = {
    fullName:'Samuel'
}

Profile.defaultProps = {
    bio: 'Engineer'
}

Profile.defaultProps = {
    profession: 'Software'
}

Profile.propTypes = {
    fullName: PropTypes.string,
    Bio: PropTypes.string,
    profession: PropTypes.string,

}

export default Profile