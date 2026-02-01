import React from 'react';

const Profile = () => {
    return (
        <div className="container" style={{ marginTop: '40px', maxWidth: '800px' }}>
            <div style={{ background: 'white', border: '1px solid #eaeaec', padding: '40px', textAlign: 'center' }}>
                <div style={{ width: '100px', height: '100px', background: '#eaeaec', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', color: '#535766' }}>
                    U
                </div>
                <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>User Profile</h2>
                <p style={{ color: '#535766', marginBottom: '30px' }}>user@example.com</p>

                <div style={{ textAlign: 'left', borderTop: '1px solid #eaeaec', paddingTop: '30px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px' }}>Account Details</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '12px', color: '#878b94', marginBottom: '4px' }}>Full Name</label>
                            <div style={{ fontSize: '16px' }}>Demouser</div>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '12px', color: '#878b94', marginBottom: '4px' }}>Mobile Number</label>
                            <div style={{ fontSize: '16px' }}>+91 9876543210</div>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '12px', color: '#878b94', marginBottom: '4px' }}>Gender</label>
                            <div style={{ fontSize: '16px' }}>Male</div>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '12px', color: '#878b94', marginBottom: '4px' }}>Location</label>
                            <div style={{ fontSize: '16px' }}>Bangalore, India</div>
                        </div>
                    </div>

                    <div style={{ marginTop: '40px' }}>
                        <button className="btn btn-outline" style={{ width: '100%', color: '#ff3e6c', borderColor: '#ff3e6c' }}>EDIT PROFILE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
