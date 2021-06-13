import React from 'react'
import './styles/Stream.css'

const Stream = () => {
    return (
        <div className="stream">
            <div className="stream__container">
                <div className="stream__status">
                    <div className="stream__statusContainer">
                        <div className="stream__statusContainerTop">
                            <div className="stream__statusIndicator">OFFLINE</div>
                            <h2>Check out the below streams from Imran Mohamed</h2>
                        </div>
                        <div className="stream__statusInfo">
                            <i className="fas fa-bell"></i>
                            <p>You will be notified when Imran Mohamed is live</p>
                        </div>
                    </div>
                </div>
                <div className="stream__videoEmbed">

                    <iframe
                        width="500"
                        height="295"
                        src="https://www.youtube.com/embed/x0cs-5t84zU"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>

                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Stream