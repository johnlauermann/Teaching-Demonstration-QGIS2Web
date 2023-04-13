ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2263").setExtent([916892.674849, 117367.323316, 1132512.874307, 277155.614109]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PopulationDensity2019_1 = new ol.format.GeoJSON();
var features_PopulationDensity2019_1 = format_PopulationDensity2019_1.readFeatures(json_PopulationDensity2019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2263'});
var jsonSource_PopulationDensity2019_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationDensity2019_1.addFeatures(features_PopulationDensity2019_1);
var lyr_PopulationDensity2019_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PopulationDensity2019_1, 
                style: style_PopulationDensity2019_1,
                interactive: true,
    title: 'PopulationDensity2019<br />\
    <img src="styles/legend/PopulationDensity2019_1_0.png" /> 0 - 49914 <br />\
    <img src="styles/legend/PopulationDensity2019_1_1.png" /> 49914 - 99828 <br />\
    <img src="styles/legend/PopulationDensity2019_1_2.png" /> 99828 - 149742 <br />\
    <img src="styles/legend/PopulationDensity2019_1_3.png" /> 149742 - 199656 <br />\
    <img src="styles/legend/PopulationDensity2019_1_4.png" /> 199656 - 249571 <br />'
        });
var format_ResidentialZoning_2 = new ol.format.GeoJSON();
var features_ResidentialZoning_2 = format_ResidentialZoning_2.readFeatures(json_ResidentialZoning_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2263'});
var jsonSource_ResidentialZoning_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidentialZoning_2.addFeatures(features_ResidentialZoning_2);
var lyr_ResidentialZoning_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ResidentialZoning_2, 
                style: style_ResidentialZoning_2,
                interactive: true,
                title: '<img src="styles/legend/ResidentialZoning_2.png" /> ResidentialZoning'
            });
var format_CommercialZoning_3 = new ol.format.GeoJSON();
var features_CommercialZoning_3 = format_CommercialZoning_3.readFeatures(json_CommercialZoning_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2263'});
var jsonSource_CommercialZoning_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommercialZoning_3.addFeatures(features_CommercialZoning_3);
var lyr_CommercialZoning_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CommercialZoning_3, 
                style: style_CommercialZoning_3,
                interactive: true,
                title: '<img src="styles/legend/CommercialZoning_3.png" /> CommercialZoning'
            });
var format_MixedZoning_4 = new ol.format.GeoJSON();
var features_MixedZoning_4 = format_MixedZoning_4.readFeatures(json_MixedZoning_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2263'});
var jsonSource_MixedZoning_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MixedZoning_4.addFeatures(features_MixedZoning_4);
var lyr_MixedZoning_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MixedZoning_4, 
                style: style_MixedZoning_4,
                interactive: true,
                title: '<img src="styles/legend/MixedZoning_4.png" /> MixedZoning'
            });
var format_Potentialemittingfacilities_5 = new ol.format.GeoJSON();
var features_Potentialemittingfacilities_5 = format_Potentialemittingfacilities_5.readFeatures(json_Potentialemittingfacilities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2263'});
var jsonSource_Potentialemittingfacilities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potentialemittingfacilities_5.addFeatures(features_Potentialemittingfacilities_5);
var lyr_Potentialemittingfacilities_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Potentialemittingfacilities_5, 
                style: style_Potentialemittingfacilities_5,
                interactive: true,
                title: '<img src="styles/legend/Potentialemittingfacilities_5.png" /> Potential emitting facilities'
            });
var format_Roadtrafficcarsday_6 = new ol.format.GeoJSON();
var features_Roadtrafficcarsday_6 = format_Roadtrafficcarsday_6.readFeatures(json_Roadtrafficcarsday_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2263'});
var jsonSource_Roadtrafficcarsday_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadtrafficcarsday_6.addFeatures(features_Roadtrafficcarsday_6);
var lyr_Roadtrafficcarsday_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roadtrafficcarsday_6, 
                style: style_Roadtrafficcarsday_6,
                interactive: true,
    title: 'Road traffic (cars/day)<br />\
    <img src="styles/legend/Roadtrafficcarsday_6_0.png" /> 0 - 55295 <br />\
    <img src="styles/legend/Roadtrafficcarsday_6_1.png" /> 55295 - 110590 <br />\
    <img src="styles/legend/Roadtrafficcarsday_6_2.png" /> 110590 - 165886 <br />\
    <img src="styles/legend/Roadtrafficcarsday_6_3.png" /> 165886 - 221181 <br />\
    <img src="styles/legend/Roadtrafficcarsday_6_4.png" /> 221181 - 276476 <br />'
        });
var format_Within100mofBCsource_7 = new ol.format.GeoJSON();
var features_Within100mofBCsource_7 = format_Within100mofBCsource_7.readFeatures(json_Within100mofBCsource_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2263'});
var jsonSource_Within100mofBCsource_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Within100mofBCsource_7.addFeatures(features_Within100mofBCsource_7);
var lyr_Within100mofBCsource_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Within100mofBCsource_7, 
                style: style_Within100mofBCsource_7,
                interactive: true,
                title: '<img src="styles/legend/Within100mofBCsource_7.png" /> Within 100m of BC source'
            });
var format_Within50mofBCsource_8 = new ol.format.GeoJSON();
var features_Within50mofBCsource_8 = format_Within50mofBCsource_8.readFeatures(json_Within50mofBCsource_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2263'});
var jsonSource_Within50mofBCsource_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Within50mofBCsource_8.addFeatures(features_Within50mofBCsource_8);
var lyr_Within50mofBCsource_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Within50mofBCsource_8, 
                style: style_Within50mofBCsource_8,
                interactive: true,
                title: '<img src="styles/legend/Within50mofBCsource_8.png" /> Within 50m of BC source'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PopulationDensity2019_1.setVisible(true);lyr_ResidentialZoning_2.setVisible(true);lyr_CommercialZoning_3.setVisible(true);lyr_MixedZoning_4.setVisible(true);lyr_Potentialemittingfacilities_5.setVisible(true);lyr_Roadtrafficcarsday_6.setVisible(true);lyr_Within100mofBCsource_7.setVisible(true);lyr_Within50mofBCsource_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PopulationDensity2019_1,lyr_ResidentialZoning_2,lyr_CommercialZoning_3,lyr_MixedZoning_4,lyr_Potentialemittingfacilities_5,lyr_Roadtrafficcarsday_6,lyr_Within100mofBCsource_7,lyr_Within50mofBCsource_8];
lyr_PopulationDensity2019_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GISJOIN': 'GISJOIN', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Pop2019': 'Pop2019', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Area_m2': 'Area_m2', 'PopPerSqMi': 'PopPerSqMi', });
lyr_ResidentialZoning_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'shape_leng': 'shape_leng', 'zonedist': 'zonedist', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_CommercialZoning_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'shape_leng': 'shape_leng', 'zonedist': 'zonedist', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_MixedZoning_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'shape_leng': 'shape_leng', 'zonedist': 'zonedist', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Potentialemittingfacilities_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'base_bbl': 'base_bbl', 'bin': 'bin', 'cnstrct_yr': 'cnstrct_yr', 'doitt_id': 'doitt_id', 'feat_code': 'feat_code', 'geomsource': 'geomsource', 'groundelev': 'groundelev', 'heightroof': 'heightroof', 'date_lstmo': 'date_lstmo', 'time_lstmo': 'time_lstmo', 'lststatype': 'lststatype', 'mpluto_bbl': 'mpluto_bbl', 'name': 'name', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Roadtrafficcarsday_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'RC_ID': 'RC_ID', 'LOC_ERROR': 'LOC_ERROR', 'TDV_ROUTE': 'TDV_ROUTE', 'CC_ID': 'CC_ID', 'ROADWAYTYP': 'ROADWAYTYP', 'BEGINDESC': 'BEGINDESC', 'ENDDESC': 'ENDDESC', 'MUNI': 'MUNI', 'AADT': 'AADT', 'AADT_TYPE': 'AADT_TYPE', 'AADT_YEAR': 'AADT_YEAR', 'VOL_TXT': 'VOL_TXT', 'CLASS_TXT': 'CLASS_TXT', 'SPEED_TXT': 'SPEED_TXT', 'DATA_TYPE': 'DATA_TYPE', 'VOL_TDV': 'VOL_TDV', 'CLASS_TDV': 'CLASS_TDV', 'SPEED_TDV': 'SPEED_TDV', 'Shape_Length': 'Shape_Length', });
lyr_Within100mofBCsource_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Within50mofBCsource_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PopulationDensity2019_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'GISJOIN': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'Pop2019': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area_m2': 'TextEdit', 'PopPerSqMi': 'TextEdit', });
lyr_ResidentialZoning_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'shape_leng': 'TextEdit', 'zonedist': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CommercialZoning_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'shape_leng': 'TextEdit', 'zonedist': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MixedZoning_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'shape_leng': 'TextEdit', 'zonedist': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Potentialemittingfacilities_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'base_bbl': 'TextEdit', 'bin': 'TextEdit', 'cnstrct_yr': 'TextEdit', 'doitt_id': 'TextEdit', 'feat_code': 'TextEdit', 'geomsource': 'TextEdit', 'groundelev': 'TextEdit', 'heightroof': 'TextEdit', 'date_lstmo': 'DateTime', 'time_lstmo': 'TextEdit', 'lststatype': 'TextEdit', 'mpluto_bbl': 'TextEdit', 'name': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Roadtrafficcarsday_6.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'RC_ID': '', 'LOC_ERROR': '', 'TDV_ROUTE': '', 'CC_ID': '', 'ROADWAYTYP': '', 'BEGINDESC': '', 'ENDDESC': '', 'MUNI': '', 'AADT': '', 'AADT_TYPE': '', 'AADT_YEAR': '', 'VOL_TXT': '', 'CLASS_TXT': '', 'SPEED_TXT': '', 'DATA_TYPE': '', 'VOL_TDV': '', 'CLASS_TDV': '', 'SPEED_TDV': '', 'Shape_Length': '', });
lyr_Within100mofBCsource_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Within50mofBCsource_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PopulationDensity2019_1.set('fieldLabels', {'OBJECTID': 'no label', 'GISJOIN': 'no label', 'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'GEOID': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'Pop2019': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Area_m2': 'no label', 'PopPerSqMi': 'no label', });
lyr_ResidentialZoning_2.set('fieldLabels', {'OBJECTID': 'no label', 'shape_leng': 'no label', 'zonedist': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_CommercialZoning_3.set('fieldLabels', {'OBJECTID': 'no label', 'shape_leng': 'no label', 'zonedist': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_MixedZoning_4.set('fieldLabels', {'OBJECTID': 'no label', 'shape_leng': 'no label', 'zonedist': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Potentialemittingfacilities_5.set('fieldLabels', {'OBJECTID': 'no label', 'base_bbl': 'no label', 'bin': 'no label', 'cnstrct_yr': 'no label', 'doitt_id': 'no label', 'feat_code': 'no label', 'geomsource': 'no label', 'groundelev': 'no label', 'heightroof': 'no label', 'date_lstmo': 'no label', 'time_lstmo': 'no label', 'lststatype': 'no label', 'mpluto_bbl': 'no label', 'name': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Roadtrafficcarsday_6.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'RC_ID': 'no label', 'LOC_ERROR': 'no label', 'TDV_ROUTE': 'no label', 'CC_ID': 'no label', 'ROADWAYTYP': 'no label', 'BEGINDESC': 'no label', 'ENDDESC': 'no label', 'MUNI': 'no label', 'AADT': 'no label', 'AADT_TYPE': 'no label', 'AADT_YEAR': 'no label', 'VOL_TXT': 'no label', 'CLASS_TXT': 'no label', 'SPEED_TXT': 'no label', 'DATA_TYPE': 'no label', 'VOL_TDV': 'no label', 'CLASS_TDV': 'no label', 'SPEED_TDV': 'no label', 'Shape_Length': 'no label', });
lyr_Within100mofBCsource_7.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Within50mofBCsource_8.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Within50mofBCsource_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});