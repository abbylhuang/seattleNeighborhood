var data = "";

    d3.json("data/neighborhoods.json").then((jsonData) => {
            console.log(jsonData)
            data = jsonData
        })
        
        .then(function() {
        
        var width = 700;

        var height = 580;
        
        var svg = d3.select( "body" )

        .append( "svg" )

        .attr( "width", width )

        .attr( "height", height );

    var g = svg.append( "g" );

    var albersProjection = d3.geo.albers()

        .scale( 190000 )

        .rotate( [-122.3321,0] ) //replace long (make oositive)

        .center( [0, 47.608013] ) //and lat with seattle

        .translate( [width/2,height/2] );



    var geoPath = d3.geo.path()

        .projection( albersProjection );



    g.selectAll( "path" )
        //save this array first to access
        .data( data.features )

        .enter()

        .append( "path" )

        .attr( "fill", "#ccc" )

        .attr( "stroke", "#333")

        .attr( "d", geoPath );
        }
    );
