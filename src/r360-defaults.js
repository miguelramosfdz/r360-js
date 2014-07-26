r360.config = {

    // serviceUrl      : 'http://localhost:8080/api/',
    serviceUrl      : 'http://144.76.246.52/api/',
    nominatimUrl    : 'http://geocode.route360.net/',
    serviceVersion  : 'v1',
    pathSerializer  : 'compact',
    maxRoutingTime  : 3600,
    bikeSpeed       : 15,
    bikeUphill      : 20,
    bikeDownhill    : -10,
    walkSpeed       : 5,
    walkUphill      : 10,
    walkDownhill    : 0,
    travelTimes     : [300, 600, 900, 1200, 1500, 1800],
    travelType      : "walk",

    // options for the travel time slider; colors and lengths etc.
    defaultTravelTimeControlOptions : {
        travelTimes     : [
            { time : 300  , color : "#006837"},
            { time : 600  , color : "#39B54A"},
            { time : 900  , color : "#8CC63F"},
            { time : 1200 , color : "#F7931E"},
            { time : 1500 , color : "#F15A24"},
            { time : 1800 , color : "#C1272D"},
            { time : 5400 , color : "#C1272D"},
            { time : 7200 , color : "#C1272D"}
        ],
        position : 'topright',
        label: 'travel time',
        initValue: 30
    },

    routeTypes  : [
        // berlin
        { routeType : 102  , color : "#006837"},
        { routeType : 400  , color : "#156ab8"},
        { routeType : 900  , color : "red"},
        { routeType : 700  , color : "#A3007C"},
        { routeType : 1000 , color : "blue"},
        { routeType : 109  , color : "#006F35"},
        { routeType : 100  , color : "red"},
        // new york
        { routeType : 1    , color : "red"}
    ],

    defaultPlaceAutoCompleteOptions : {
        serviceUrl : "http://geocode.route360.net/solr/select?",
        position : 'topleft',
        reset : false,
        reverse : false,
        placeholder : 'Select source',
        maxRows : 5,
        width : 300
    },

    defaultRadioOptions: {
       position : 'topright',
    },

    // configuration for the Route360PolygonLayer
    defaultPolygonLayerOptions:{
        opacity : 0.4,
        strokeWidth: 15
    },

    i18n : {

        language            : 'de',
        departure           : { en : 'Departure',       de : 'Abfahrt' },
        line                : { en : 'Line',            de : 'Linie' },
        arrival             : { en : 'Arrival',         de : 'Ankunft' },
        from                : { en : 'From',            de : 'Von' },
        to                  : { en : 'To',              de : 'Nach' },
        travelTime          : { en : 'Travel time',     de : 'Reisezeit' },
        totalTime           : { en : 'Total time',      de : 'Gesamtzeit' },
        distance            : { en : 'Distance',        de : 'Distanz' },
        wait                : { en : 'Please wait!',    de : 'Bitte warten!' },
        elevation           : { en : 'Elevation',       de : 'Höhenunterschied' },
        timeFormat          : { en : 'a.m.',            de : 'Uhr' },
        reset               : { en : 'Reset input',     de : 'Eingeben löschen' },
        reverse             : { en : 'Switch source and target',   de : 'Start und Ziel tauschen' },
        noRouteFound        : { en : 'No route found!', de : 'Keine Route gefunden!' },
        monthNames          : { de : ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'] },
        dayNames            : { de : ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag','Samstag'] },
        dayNamesMin         : { de : ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'] },
        get : function(key){

            var translation;
            _.each(_.keys(r360.config.i18n), function(aKey){
                if ( key == aKey ) translation = r360.config.i18n[key][r360.config.i18n.language];
            })

            return translation;
        }
    }
}