var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_modgaged_1 = new ol.format.GeoJSON();
var features_modgaged_1 = format_modgaged_1.readFeatures(json_modgaged_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_modgaged_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_modgaged_1.addFeatures(features_modgaged_1);
var lyr_modgaged_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_modgaged_1, 
                style: style_modgaged_1,
                popuplayertitle: 'modgaged',
                interactive: true,
                title: '<img src="styles/legend/modgaged_1.png" /> modgaged'
            });
var format_newlayer_2 = new ol.format.GeoJSON();
var features_newlayer_2 = format_newlayer_2.readFeatures(json_newlayer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_newlayer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_newlayer_2.addFeatures(features_newlayer_2);
var lyr_newlayer_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_newlayer_2, 
                style: style_newlayer_2,
                popuplayertitle: 'new layer',
                interactive: true,
                title: '<img src="styles/legend/newlayer_2.png" /> new layer'
            });
var format_registered_3 = new ol.format.GeoJSON();
var features_registered_3 = format_registered_3.readFeatures(json_registered_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_registered_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_registered_3.addFeatures(features_registered_3);
var lyr_registered_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_registered_3, 
                style: style_registered_3,
                popuplayertitle: 'registered',
                interactive: true,
                title: '<img src="styles/legend/registered_3.png" /> registered'
            });
var format_notregistered_4 = new ol.format.GeoJSON();
var features_notregistered_4 = format_notregistered_4.readFeatures(json_notregistered_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_notregistered_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_notregistered_4.addFeatures(features_notregistered_4);
var lyr_notregistered_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_notregistered_4, 
                style: style_notregistered_4,
                popuplayertitle: 'not registered',
                interactive: true,
                title: '<img src="styles/legend/notregistered_4.png" /> not registered'
            });
var format_booked_5 = new ol.format.GeoJSON();
var features_booked_5 = format_booked_5.readFeatures(json_booked_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_booked_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_booked_5.addFeatures(features_booked_5);
var lyr_booked_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_booked_5, 
                style: style_booked_5,
                popuplayertitle: 'booked',
                interactive: true,
                title: '<img src="styles/legend/booked_5.png" /> booked'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_modgaged_1.setVisible(true);lyr_newlayer_2.setVisible(true);lyr_registered_3.setVisible(true);lyr_notregistered_4.setVisible(true);lyr_booked_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_modgaged_1,lyr_newlayer_2,lyr_registered_3,lyr_notregistered_4,lyr_booked_5];
lyr_modgaged_1.set('fieldAliases', {'id': 'id', 'area': 'area', });
lyr_newlayer_2.set('fieldAliases', {'id': 'id', 'area': 'area', });
lyr_registered_3.set('fieldAliases', {'id': 'id', 'area': 'area', });
lyr_notregistered_4.set('fieldAliases', {'id': 'id', });
lyr_booked_5.set('fieldAliases', {'id': 'id', 'area': 'area', });
lyr_modgaged_1.set('fieldImages', {'id': '', 'area': '', });
lyr_newlayer_2.set('fieldImages', {'id': '', 'area': '', });
lyr_registered_3.set('fieldImages', {'id': '', 'area': '', });
lyr_notregistered_4.set('fieldImages', {'id': '', });
lyr_booked_5.set('fieldImages', {'id': '', 'area': '', });
lyr_modgaged_1.set('fieldLabels', {'id': 'no label', 'area': 'no label', });
lyr_newlayer_2.set('fieldLabels', {'id': 'no label', 'area': 'no label', });
lyr_registered_3.set('fieldLabels', {'id': 'no label', 'area': 'no label', });
lyr_notregistered_4.set('fieldLabels', {'id': 'no label', });
lyr_booked_5.set('fieldLabels', {'id': 'no label', 'area': 'no label', });
lyr_booked_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});