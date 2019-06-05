var data = "";
var data2 = "";

    d3.json("/datas/neighborhoods.json").then((jsonData) => {
            console.log(jsonData)
            data = jsonData
        })
        
        .then(function() {
        
        var width = 960;
        var height = 580;
        
        // //set var for legend
        // let color = d3.scaleLinear()
        //     .range(["rgb(213,222,217)","rgb(69,173,168)","rgb(84,36,55)","rgb(217,91,67)"]);

        // //let legendText = ["Cities Lived", "States Lived", "States Visited", "Nada"];
        
        var svg = d3.select( "body" )
        .append( "svg" )
        .attr( "width", width )
        .attr( "height", height );

        var g = svg.append( "g" );

        var albersProjection = d3.geoAlbers()
            .scale( 190000 ) //19000
            .rotate( [122.3321,0] ) //replace longitude
            .center( [0, 47.608013] ) //and lat with seattle
            .translate( [width/2,height/2] );

        var geoPath = d3.geoPath()
            .projection( albersProjection );

        g.selectAll( "path" )
        //save this array first to access
            .data( data.features )
            .enter()
            .append( "path" )
            .attr( "fill", "#ccc" )
            .attr( "stroke", "#333")
            .attr( "d", geoPath );
        
        //where is this loading?
        var listings = svg.append( "g" );

            d3.json("/datas/neighborhood_data.json").then((jsonNData) => {
                console.log(jsonNData)
                data2 = jsonNData
            })
        
            .then(function(){

            listings.selectAll( "path" )
                .data( data2.features )
                .enter()
                .append( "path" )
                .attr( "fill", "#900" )
                .attr( "stroke", "#999" )
                .attr( "d", geoPath );
                console.log(listings)
            })  
    }

            
);
