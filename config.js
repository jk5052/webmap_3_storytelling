var config = {
    style: 'mapbox://styles/jaycek/cmc2c2l8700bj01sogdsk2ldu',
    accessToken: 'pk.eyJ1IjoiamF5Y2VrIiwiYSI6ImNtYzB0N2RsdzA2MXgya3IzbGM1OTg0bTMifQ.2iyCIDuQTc7gkqtgG6f3Ew',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'NYC Climate Resilience',
    subtitle: 'Flooding and Green Roof Strategies',
    byline: 'By Jayce',
    footer: 'Data Source: NYC Open Data',
    chapters: [
        {
            id: 'global-intro',
            alignment: 'center',
            hidden: false,
            title: 'Global Climate Crisis',
            image: './img/global_overview.jpg',
            description: 'Sea-level rise and climate extremes pose threats worldwide. Cities around the globe are developing strategies to combat rising waters and extreme weather events.',
            location: { 
                center: [-74.0, 40.7], 
                zoom: 3, 
                pitch: 0, 
                bearing: 0 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'geo-export-7g8024-2e3qxf',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'greenroofdata2016-20180917-4qmirf',
                    opacity: 0,
                    duration: 3000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'sandy-flood-zone',
            alignment: 'left',
            hidden: false,
            title: 'Impact of Hurricane Sandy',
            image: './img/sandy_impact_nyc.jpg',
            description: 'Hurricane Sandy devastated New York City in 2012, flooding large areas and highlighting the city\'s vulnerability to storm surge. These areas shown were severely impacted and remain at high risk.',
            location: { 
                center: [-74.0, 40.72], 
                zoom: 11, 
                pitch: 45, 
                bearing: -10 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'geo-export-7g8024-2e3qxf',
                    opacity: 0.6,
                    duration: 3000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'nyc-green-roofs',
            alignment: 'right',
            hidden: false,
            title: 'NYC Green Roof Initiatives',
            image: './img/nyc_green_roofs.jpg',
            description: 'Green roofs provide natural resilience against flooding by absorbing rainwater and reducing stormwater runoff. NYC has been promoting green roof installations as part of its climate adaptation strategy.',
            location: { 
                center: [-73.95, 40.75], 
                zoom: 12, 
                pitch: 45, 
                bearing: 20 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'greenroofdata2016-20180917-4qmirf',
                    opacity: 0.8,
                    duration: 3000
                },
                {
                    layer: 'geo-export-7g8024-2e3qxf',
                    opacity: 0.3,
                    duration: 3000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'conclusion',
            alignment: 'center',
            hidden: false,
            title: 'Building Resilient Cities',
            description: 'Through strategic planning and green infrastructure, cities like NYC are working to protect their communities from climate impacts while creating more sustainable urban environments.',
            location: { 
                center: [-74.0, 40.7], 
                zoom: 10, 
                pitch: 0, 
                bearing: 0 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'geo-export-7g8024-2e3qxf',
                    opacity: 0.4,
                    duration: 3000
                },
                {
                    layer: 'greenroofdata2016-20180917-4qmirf',
                    opacity: 0.6,
                    duration: 3000
                }
            ],
            onChapterExit: []
        }
    ]
};




  
