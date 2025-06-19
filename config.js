var config = {
  style: 'mapbox://styles/jaycek/cmc2c2l8700bj01sogdsk2ldu',
  accessToken: 'pk.eyJ1IjoiamF5Y2VrIiwiYSI6ImNtYzB0N2RsdzA2MXgya3IzbGM1OTg0bTMifQ.2iyCIDuQTc7gkqtgG6f3Ew',
  showMarkers: false,
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
      title: 'Global Climate Crisis',
      image: './image/global_overview.jpg',
      description: 'Sea-level rise and climate extremes pose threats worldwide.',
      location: {
        center: [-74.0, 40.7],
        zoom: 3,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'sandy-flood-zone',
      alignment: 'left',
      title: 'Impact of Hurricane Sandy',
      image: './image/sandy_impact_nyc.jpg',
      description: 'Areas of New York City inundated during Hurricane Sandy.',
      location: {
        center: [-74.0, 40.72],
        zoom: 11,
        pitch: 45,
        bearing: -10
      },
      onChapterEnter: [
        { layer: 'geo-export-7g8024', opacity: 0.6 }
      ],
      onChapterExit: [
        { layer: 'geo-export-7g8024', opacity: 0 }
      ]
    },
    {
      id: 'nyc-green-roofs',
      alignment: 'right',
      title: 'NYC Green Roof Initiatives',
      image: './image/nyc_green_roofs.jpg',
      description: 'Green roofs have become vital for urban resilience, reducing runoff and cooling the city.',
      location: {
        center: [-73.95, 40.75],
        zoom: 12,
        pitch: 45,
        bearing: 20
      },
      onChapterEnter: [
        { layer: 'greenroofdata2016-20180917-4qmirf', opacity: 0.8 }
      ],
      onChapterExit: [
        { layer: 'greenroofdata2016-20180917-4qmirf', opacity: 0 }
      ]
    },
    {
      id: 'conclusion',
      alignment: 'center',
      title: 'Building Climate Resilience',
      image: './image/Building Climate Resilience.jpg',
      description: 'New York’s initiatives demonstrate how cities worldwide can prepare for climate change.',
      location: {
        center: [-74.0, 40.73],
        zoom: 11,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: []
    }
  ]
};




  
