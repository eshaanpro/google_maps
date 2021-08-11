function initMap(){
    var options = {
    zoom:8,
    center:{lat:20.5937,lng:78.9629}
    }
    
    var map = new google.maps.Map(document.getElementById('map'),options)
    var markers = [
    {
    coords: {lat: 23.4241, lng: 53.8478},
    content: '<h1>United Arab Emirates</h1>'
    },
    {
    coords: {lat: 36.2048, lng: 138.2529},
    content: '<h1>Japan</h1>'
    },
    {
    coords: {lat: 42.5063, lng: 1.5218},
    content: '<h1>Andorra</h1>'
    }
    ]
    
    for(var i=0; i<markers.length;i++){
    addMarker(markers[i])
    }
    
    function addMarker(props){
    var marker = new google.maps.Marker({
    position: props.coords,
    map: map,
    
    })
    
    if(props.content){
    var infowindow = new google.maps.InfoWindow({
    content:props.content
    })
    
    marker.addListener('click',function(){
    infowindow.open(map,marker)
    })
    }
    }
    }