import React from 'react'

const Card = () => {
    return (
        <div className='Cards'>
            <div style={{ backgroundColor: 'gray', color: 'white', padding: '20px', margin: '20px' }}>
                <iframe
                    src="https://www.youtube.com/embed/VWn3semGCKs"
                    width="500"
                    height="300">
                </iframe>
            </div>
            <div>
                <a href="https://www.youtube.com/embed/VWn3semGCKs" target='_blank'>
                    <h1>
                        Watch React Video
                    </h1>
                </a>
            </div>
            <div>
                <button style={{borderRadius:'30px'}} onClick={() => window.open("https://www.youtube.com/embed/VWn3semGCKs", "_blank")}>
                    Open Video
                </button>
            </div>
        </div>
    )
}

export default Card