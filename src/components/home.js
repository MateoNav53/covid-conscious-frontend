import React from 'react';

function Home () {
    return(
        <div className="home-container">
            <h1 className="home-item"><strong>Covid Conscious</strong></h1>
            <h3 className="home-item">Keep a track of places been and people seen</h3>
            <div class="bingwidget offset-xl-6 offset-lg-5 offset-md-4 offset-sm-1" data-type="covid19_stats_map" data-market="en-us" data-language="en-us" data-app="bingwidget"></div>
        </div>
        
        
    )
}

export default Home;