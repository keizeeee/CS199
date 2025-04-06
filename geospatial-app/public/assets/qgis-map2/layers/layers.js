var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 0.706000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_StudentInternetAccess_1 = new ol.format.GeoJSON();
var features_StudentInternetAccess_1 = format_StudentInternetAccess_1.readFeatures(json_StudentInternetAccess_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StudentInternetAccess_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StudentInternetAccess_1.addFeatures(features_StudentInternetAccess_1);
var lyr_StudentInternetAccess_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StudentInternetAccess_1, 
                style: style_StudentInternetAccess_1,
                popuplayertitle: 'Student Internet Access',
                interactive: true,
    title: 'Student Internet Access<br />\
    <img src="styles/legend/StudentInternetAccess_1_0.png" /> 0 - 60<br />\
    <img src="styles/legend/StudentInternetAccess_1_1.png" /> 60 - 940<br />\
    <img src="styles/legend/StudentInternetAccess_1_2.png" /> 940 - 2500<br />\
    <img src="styles/legend/StudentInternetAccess_1_3.png" /> 2500 - 6468<br />\
    <img src="styles/legend/StudentInternetAccess_1_4.png" /> 6468 - 20623<br />' });
var format_StaffInternetAccess_2 = new ol.format.GeoJSON();
var features_StaffInternetAccess_2 = format_StaffInternetAccess_2.readFeatures(json_StaffInternetAccess_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StaffInternetAccess_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StaffInternetAccess_2.addFeatures(features_StaffInternetAccess_2);
var lyr_StaffInternetAccess_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StaffInternetAccess_2, 
                style: style_StaffInternetAccess_2,
                popuplayertitle: 'Staff Internet Access',
                interactive: true,
    title: 'Staff Internet Access<br />\
    <img src="styles/legend/StaffInternetAccess_2_0.png" /> 0 - 58<br />\
    <img src="styles/legend/StaffInternetAccess_2_1.png" /> 58 - 125<br />\
    <img src="styles/legend/StaffInternetAccess_2_2.png" /> 125 - 300<br />\
    <img src="styles/legend/StaffInternetAccess_2_3.png" /> 300 - 800<br />\
    <img src="styles/legend/StaffInternetAccess_2_4.png" /> 800 - 26572<br />' });
var format_EmailProvider_3 = new ol.format.GeoJSON();
var features_EmailProvider_3 = format_EmailProvider_3.readFeatures(json_EmailProvider_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmailProvider_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmailProvider_3.addFeatures(features_EmailProvider_3);
var lyr_EmailProvider_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmailProvider_3, 
                style: style_EmailProvider_3,
                popuplayertitle: 'Email Provider',
                interactive: true,
    title: 'Email Provider<br />\
    <img src="styles/legend/EmailProvider_3_0.png" /> Google Workspace for Education<br />\
    <img src="styles/legend/EmailProvider_3_1.png" /> Microsoft 365 for Education<br />\
    <img src="styles/legend/EmailProvider_3_2.png" /> none<br />\
    <img src="styles/legend/EmailProvider_3_3.png" /> <br />' });
var format_Eduroam_4 = new ol.format.GeoJSON();
var features_Eduroam_4 = format_Eduroam_4.readFeatures(json_Eduroam_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eduroam_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eduroam_4.addFeatures(features_Eduroam_4);
var lyr_Eduroam_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eduroam_4, 
                style: style_Eduroam_4,
                popuplayertitle: 'Eduroam',
                interactive: true,
    title: 'Eduroam<br />\
    <img src="styles/legend/Eduroam_4_0.png" /> No<br />\
    <img src="styles/legend/Eduroam_4_1.png" /> Yes<br />\
    <img src="styles/legend/Eduroam_4_2.png" /> <br />' });
var format_PREGINET_5 = new ol.format.GeoJSON();
var features_PREGINET_5 = format_PREGINET_5.readFeatures(json_PREGINET_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PREGINET_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PREGINET_5.addFeatures(features_PREGINET_5);
var lyr_PREGINET_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PREGINET_5, 
                style: style_PREGINET_5,
                popuplayertitle: 'PREGINET',
                interactive: true,
    title: 'PREGINET<br />\
    <img src="styles/legend/PREGINET_5_0.png" /> No<br />\
    <img src="styles/legend/PREGINET_5_1.png" /> Yes<br />\
    <img src="styles/legend/PREGINET_5_2.png" /> <br />' });
var format_AggregateBandwidth_6 = new ol.format.GeoJSON();
var features_AggregateBandwidth_6 = format_AggregateBandwidth_6.readFeatures(json_AggregateBandwidth_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AggregateBandwidth_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AggregateBandwidth_6.addFeatures(features_AggregateBandwidth_6);
var lyr_AggregateBandwidth_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AggregateBandwidth_6, 
                style: style_AggregateBandwidth_6,
                popuplayertitle: 'Aggregate Bandwidth',
                interactive: true,
    title: 'Aggregate Bandwidth<br />\
    <img src="styles/legend/AggregateBandwidth_6_0.png" /> 20 - 200<br />\
    <img src="styles/legend/AggregateBandwidth_6_1.png" /> 200 - 500<br />\
    <img src="styles/legend/AggregateBandwidth_6_2.png" /> 500 - 668<br />\
    <img src="styles/legend/AggregateBandwidth_6_3.png" /> 668 - 1400<br />\
    <img src="styles/legend/AggregateBandwidth_6_4.png" /> 1400 - 15000<br />' });
var format_ISP2_7 = new ol.format.GeoJSON();
var features_ISP2_7 = format_ISP2_7.readFeatures(json_ISP2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISP2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISP2_7.addFeatures(features_ISP2_7);
var lyr_ISP2_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ISP2_7, 
                style: style_ISP2_7,
                popuplayertitle: 'ISP 2',
                interactive: true,
    title: 'ISP 2<br />\
    <img src="styles/legend/ISP2_7_0.png" /> Converge ICT<br />\
    <img src="styles/legend/ISP2_7_1.png" /> DCTECH Micro Service Inc.<br />\
    <img src="styles/legend/ISP2_7_2.png" /> Globe<br />\
    <img src="styles/legend/ISP2_7_3.png" /> Globe / Innove<br />\
    <img src="styles/legend/ISP2_7_4.png" /> Philcom<br />\
    <img src="styles/legend/ISP2_7_5.png" /> PLDT<br />\
    <img src="styles/legend/ISP2_7_6.png" /> PLDT I-GATE<br />\
    <img src="styles/legend/ISP2_7_7.png" /> PREGINET<br />\
    <img src="styles/legend/ISP2_7_8.png" /> Santo Tomas E-Service Providers<br />\
    <img src="styles/legend/ISP2_7_9.png" /> Starlink<br />\
    <img src="styles/legend/ISP2_7_10.png" /> <br />\
    <img src="styles/legend/ISP2_7_11.png" /> DCTV<br />\
    <img src="styles/legend/ISP2_7_12.png" /> DICT GovNet<br />\
    <img src="styles/legend/ISP2_7_13.png" /> SouceTelecom<br />\
    <img src="styles/legend/ISP2_7_14.png" /> Weavetech<br />\
    <img src="styles/legend/ISP2_7_15.png" /> Data Connect<br />' });
var format_ISP1_8 = new ol.format.GeoJSON();
var features_ISP1_8 = format_ISP1_8.readFeatures(json_ISP1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISP1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISP1_8.addFeatures(features_ISP1_8);
var lyr_ISP1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ISP1_8, 
                style: style_ISP1_8,
                popuplayertitle: 'ISP 1',
                interactive: true,
    title: 'ISP 1<br />\
    <img src="styles/legend/ISP1_8_0.png" /> Converge ICT<br />\
    <img src="styles/legend/ISP1_8_1.png" /> DCTECH Micro Service Inc.<br />\
    <img src="styles/legend/ISP1_8_2.png" /> Globe<br />\
    <img src="styles/legend/ISP1_8_3.png" /> Globe / Innove<br />\
    <img src="styles/legend/ISP1_8_4.png" /> Philcom<br />\
    <img src="styles/legend/ISP1_8_5.png" /> PLDT<br />\
    <img src="styles/legend/ISP1_8_6.png" /> PLDT I-GATE<br />\
    <img src="styles/legend/ISP1_8_7.png" /> PREGINET<br />\
    <img src="styles/legend/ISP1_8_8.png" /> Santo Tomas E-Service Providers<br />\
    <img src="styles/legend/ISP1_8_9.png" /> Starlink<br />\
    <img src="styles/legend/ISP1_8_10.png" /> <br />\
    <img src="styles/legend/ISP1_8_11.png" /> DCTV<br />\
    <img src="styles/legend/ISP1_8_12.png" /> DICT GovNet<br />\
    <img src="styles/legend/ISP1_8_13.png" /> SouceTelecom<br />\
    <img src="styles/legend/ISP1_8_14.png" /> Weavetech<br />' });
var format_MainISPbw_9 = new ol.format.GeoJSON();
var features_MainISPbw_9 = format_MainISPbw_9.readFeatures(json_MainISPbw_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainISPbw_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainISPbw_9.addFeatures(features_MainISPbw_9);
var lyr_MainISPbw_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MainISPbw_9, 
                style: style_MainISPbw_9,
                popuplayertitle: 'Main ISP bw',
                interactive: true,
    title: 'Main ISP bw<br />\
    <img src="styles/legend/MainISPbw_9_0.png" /> 10 - 200<br />\
    <img src="styles/legend/MainISPbw_9_1.png" /> 200 - 368<br />\
    <img src="styles/legend/MainISPbw_9_2.png" /> 368 - 500<br />\
    <img src="styles/legend/MainISPbw_9_3.png" /> 500 - 1000<br />\
    <img src="styles/legend/MainISPbw_9_4.png" /> 1000 - 10000<br />' });
var format_MainISP_10 = new ol.format.GeoJSON();
var features_MainISP_10 = format_MainISP_10.readFeatures(json_MainISP_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainISP_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainISP_10.addFeatures(features_MainISP_10);
var lyr_MainISP_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MainISP_10, 
                style: style_MainISP_10,
                popuplayertitle: 'Main ISP',
                interactive: true,
    title: 'Main ISP<br />\
    <img src="styles/legend/MainISP_10_0.png" /> Converge ICT<br />\
    <img src="styles/legend/MainISP_10_1.png" /> DCTECH Micro Service Inc.<br />\
    <img src="styles/legend/MainISP_10_2.png" /> Globe<br />\
    <img src="styles/legend/MainISP_10_3.png" /> Globe / Innove<br />\
    <img src="styles/legend/MainISP_10_4.png" /> Philcom<br />\
    <img src="styles/legend/MainISP_10_5.png" /> PLDT<br />\
    <img src="styles/legend/MainISP_10_6.png" /> PLDT I-GATE<br />\
    <img src="styles/legend/MainISP_10_7.png" /> PREGINET<br />\
    <img src="styles/legend/MainISP_10_8.png" /> Santo Tomas E-Service Providers<br />\
    <img src="styles/legend/MainISP_10_9.png" /> Starlink<br />\
    <img src="styles/legend/MainISP_10_10.png" /> <br />\
    <img src="styles/legend/MainISP_10_11.png" /> DCTV<br />\
    <img src="styles/legend/MainISP_10_12.png" /> DICT GovNet<br />\
    <img src="styles/legend/MainISP_10_13.png" /> SouceTelecom<br />\
    <img src="styles/legend/MainISP_10_14.png" /> Weavetech<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_StudentInternetAccess_1.setVisible(false);lyr_StaffInternetAccess_2.setVisible(false);lyr_EmailProvider_3.setVisible(false);lyr_Eduroam_4.setVisible(false);lyr_PREGINET_5.setVisible(false);lyr_AggregateBandwidth_6.setVisible(false);lyr_ISP2_7.setVisible(false);lyr_ISP1_8.setVisible(false);lyr_MainISPbw_9.setVisible(false);lyr_MainISP_10.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_StudentInternetAccess_1,lyr_StaffInternetAccess_2,lyr_EmailProvider_3,lyr_Eduroam_4,lyr_PREGINET_5,lyr_AggregateBandwidth_6,lyr_ISP2_7,lyr_ISP1_8,lyr_MainISPbw_9,lyr_MainISP_10];
lyr_StudentInternetAccess_1.set('fieldAliases', {'Name': 'Name', 'LocationLatitude': 'LocationLatitude', 'LocationLongitude': 'LocationLongitude', 'Postal Code': 'Postal Code', 'City': 'City', 'Main ISP': 'Main ISP', 'Main ISP BW': 'Main ISP BW', 'ISP 1': 'ISP 1', 'ISP 1 Bandwidth': 'ISP 1 Bandwidth', 'ISP 1 Active': 'ISP 1 Active', 'ISP 2': 'ISP 2', 'ISP 2 Bandwidth': 'ISP 2 Bandwidth', 'ISP 2 Active': 'ISP 2 Active', 'PREGINET': 'PREGINET', 'PREGINET Bandwidth': 'PREGINET Bandwidth', 'Aggregate Bandwidth': 'Aggregate Bandwidth', 'Internet: Staff Access': 'Internet: Staff Access', 'Internet: Student Access': 'Internet: Student Access', 'Email: Staff Access': 'Email: Staff Access', 'Email: Student Access': 'Email: Student Access', 'Email Provider': 'Email Provider', 'Eduroam Access': 'Eduroam Access', });
lyr_StaffInternetAccess_2.set('fieldAliases', {'Name': 'Name', 'LocationLatitude': 'LocationLatitude', 'LocationLongitude': 'LocationLongitude', 'Postal Code': 'Postal Code', 'City': 'City', 'Main ISP': 'Main ISP', 'Main ISP BW': 'Main ISP BW', 'ISP 1': 'ISP 1', 'ISP 1 Bandwidth': 'ISP 1 Bandwidth', 'ISP 1 Active': 'ISP 1 Active', 'ISP 2': 'ISP 2', 'ISP 2 Bandwidth': 'ISP 2 Bandwidth', 'ISP 2 Active': 'ISP 2 Active', 'PREGINET': 'PREGINET', 'PREGINET Bandwidth': 'PREGINET Bandwidth', 'Aggregate Bandwidth': 'Aggregate Bandwidth', 'Internet: Staff Access': 'Internet: Staff Access', 'Internet: Student Access': 'Internet: Student Access', 'Email: Staff Access': 'Email: Staff Access', 'Email: Student Access': 'Email: Student Access', 'Email Provider': 'Email Provider', 'Eduroam Access': 'Eduroam Access', });
lyr_EmailProvider_3.set('fieldAliases', {'Name': 'Name', 'LocationLatitude': 'LocationLatitude', 'LocationLongitude': 'LocationLongitude', 'Postal Code': 'Postal Code', 'City': 'City', 'Main ISP': 'Main ISP', 'Main ISP BW': 'Main ISP BW', 'ISP 1': 'ISP 1', 'ISP 1 Bandwidth': 'ISP 1 Bandwidth', 'ISP 1 Active': 'ISP 1 Active', 'ISP 2': 'ISP 2', 'ISP 2 Bandwidth': 'ISP 2 Bandwidth', 'ISP 2 Active': 'ISP 2 Active', 'PREGINET': 'PREGINET', 'PREGINET Bandwidth': 'PREGINET Bandwidth', 'Aggregate Bandwidth': 'Aggregate Bandwidth', 'Internet: Staff Access': 'Internet: Staff Access', 'Internet: Student Access': 'Internet: Student Access', 'Email: Staff Access': 'Email: Staff Access', 'Email: Student Access': 'Email: Student Access', 'Email Provider': 'Email Provider', 'Eduroam Access': 'Eduroam Access', });
lyr_Eduroam_4.set('fieldAliases', {'Name': 'Name', 'LocationLatitude': 'LocationLatitude', 'LocationLongitude': 'LocationLongitude', 'Postal Code': 'Postal Code', 'City': 'City', 'Main ISP': 'Main ISP', 'Main ISP BW': 'Main ISP BW', 'ISP 1': 'ISP 1', 'ISP 1 Bandwidth': 'ISP 1 Bandwidth', 'ISP 1 Active': 'ISP 1 Active', 'ISP 2': 'ISP 2', 'ISP 2 Bandwidth': 'ISP 2 Bandwidth', 'ISP 2 Active': 'ISP 2 Active', 'PREGINET': 'PREGINET', 'PREGINET Bandwidth': 'PREGINET Bandwidth', 'Aggregate Bandwidth': 'Aggregate Bandwidth', 'Internet: Staff Access': 'Internet: Staff Access', 'Internet: Student Access': 'Internet: Student Access', 'Email: Staff Access': 'Email: Staff Access', 'Email: Student Access': 'Email: Student Access', 'Email Provider': 'Email Provider', 'Eduroam Access': 'Eduroam Access', });
lyr_PREGINET_5.set('fieldAliases', {'Name': 'Name', 'LocationLatitude': 'LocationLatitude', 'LocationLongitude': 'LocationLongitude', 'Postal Code': 'Postal Code', 'City': 'City', 'Main ISP': 'Main ISP', 'Main ISP BW': 'Main ISP BW', 'ISP 1': 'ISP 1', 'ISP 1 Bandwidth': 'ISP 1 Bandwidth', 'ISP 1 Active': 'ISP 1 Active', 'ISP 2': 'ISP 2', 'ISP 2 Bandwidth': 'ISP 2 Bandwidth', 'ISP 2 Active': 'ISP 2 Active', 'PREGINET': 'PREGINET', 'PREGINET Bandwidth': 'PREGINET Bandwidth', 'Aggregate Bandwidth': 'Aggregate Bandwidth', 'Internet: Staff Access': 'Internet: Staff Access', 'Internet: Student Access': 'Internet: Student Access', 'Email: Staff Access': 'Email: Staff Access', 'Email: Student Access': 'Email: Student Access', 'Email Provider': 'Email Provider', 'Eduroam Access': 'Eduroam Access', });
lyr_AggregateBandwidth_6.set('fieldAliases', {'Name': 'Name', 'LocationLatitude': 'LocationLatitude', 'LocationLongitude': 'LocationLongitude', 'Postal Code': 'Postal Code', 'City': 'City', 'Main ISP': 'Main ISP', 'Main ISP BW': 'Main ISP BW', 'ISP 1': 'ISP 1', 'ISP 1 Bandwidth': 'ISP 1 Bandwidth', 'ISP 1 Active': 'ISP 1 Active', 'ISP 2': 'ISP 2', 'ISP 2 Bandwidth': 'ISP 2 Bandwidth', 'ISP 2 Active': 'ISP 2 Active', 'PREGINET': 'PREGINET', 'PREGINET Bandwidth': 'PREGINET Bandwidth', 'Aggregate Bandwidth': 'Aggregate Bandwidth', 'Internet: Staff Access': 'Internet: Staff Access', 'Internet: Student Access': 'Internet: Student Access', 'Email: Staff Access': 'Email: Staff Access', 'Email: Student Access': 'Email: Student Access', 'Email Provider': 'Email Provider', 'Eduroam Access': 'Eduroam Access', });
lyr_ISP2_7.set('fieldAliases', {'Name': 'Name', 'LocationLatitude': 'LocationLatitude', 'LocationLongitude': 'LocationLongitude', 'Postal Code': 'Postal Code', 'City': 'City', 'Main ISP': 'Main ISP', 'Main ISP BW': 'Main ISP BW', 'ISP 1': 'ISP 1', 'ISP 1 Bandwidth': 'ISP 1 Bandwidth', 'ISP 1 Active': 'ISP 1 Active', 'ISP 2': 'ISP 2', 'ISP 2 Bandwidth': 'ISP 2 Bandwidth', 'ISP 2 Active': 'ISP 2 Active', 'PREGINET': 'PREGINET', 'PREGINET Bandwidth': 'PREGINET Bandwidth', 'Aggregate Bandwidth': 'Aggregate Bandwidth', 'Internet: Staff Access': 'Internet: Staff Access', 'Internet: Student Access': 'Internet: Student Access', 'Email: Staff Access': 'Email: Staff Access', 'Email: Student Access': 'Email: Student Access', 'Email Provider': 'Email Provider', 'Eduroam Access': 'Eduroam Access', });
lyr_ISP1_8.set('fieldAliases', {'Name': 'Name', 'LocationLatitude': 'LocationLatitude', 'LocationLongitude': 'LocationLongitude', 'Postal Code': 'Postal Code', 'City': 'City', 'Main ISP': 'Main ISP', 'Main ISP BW': 'Main ISP BW', 'ISP 1': 'ISP 1', 'ISP 1 Bandwidth': 'ISP 1 Bandwidth', 'ISP 1 Active': 'ISP 1 Active', 'ISP 2': 'ISP 2', 'ISP 2 Bandwidth': 'ISP 2 Bandwidth', 'ISP 2 Active': 'ISP 2 Active', 'PREGINET': 'PREGINET', 'PREGINET Bandwidth': 'PREGINET Bandwidth', 'Aggregate Bandwidth': 'Aggregate Bandwidth', 'Internet: Staff Access': 'Internet: Staff Access', 'Internet: Student Access': 'Internet: Student Access', 'Email: Staff Access': 'Email: Staff Access', 'Email: Student Access': 'Email: Student Access', 'Email Provider': 'Email Provider', 'Eduroam Access': 'Eduroam Access', });
lyr_MainISPbw_9.set('fieldAliases', {'Name': 'Name', 'LocationLatitude': 'LocationLatitude', 'LocationLongitude': 'LocationLongitude', 'Postal Code': 'Postal Code', 'City': 'City', 'Main ISP': 'Main ISP', 'Main ISP BW': 'Main ISP BW', 'ISP 1': 'ISP 1', 'ISP 1 Bandwidth': 'ISP 1 Bandwidth', 'ISP 1 Active': 'ISP 1 Active', 'ISP 2': 'ISP 2', 'ISP 2 Bandwidth': 'ISP 2 Bandwidth', 'ISP 2 Active': 'ISP 2 Active', 'PREGINET': 'PREGINET', 'PREGINET Bandwidth': 'PREGINET Bandwidth', 'Aggregate Bandwidth': 'Aggregate Bandwidth', 'Internet: Staff Access': 'Internet: Staff Access', 'Internet: Student Access': 'Internet: Student Access', 'Email: Staff Access': 'Email: Staff Access', 'Email: Student Access': 'Email: Student Access', 'Email Provider': 'Email Provider', 'Eduroam Access': 'Eduroam Access', });
lyr_MainISP_10.set('fieldAliases', {'Name': 'Name', 'LocationLatitude': 'LocationLatitude', 'LocationLongitude': 'LocationLongitude', 'Postal Code': 'Postal Code', 'City': 'City', 'Main ISP': 'Main ISP', 'Main ISP BW': 'Main ISP BW', 'ISP 1': 'ISP 1', 'ISP 1 Bandwidth': 'ISP 1 Bandwidth', 'ISP 1 Active': 'ISP 1 Active', 'ISP 2': 'ISP 2', 'ISP 2 Bandwidth': 'ISP 2 Bandwidth', 'ISP 2 Active': 'ISP 2 Active', 'PREGINET': 'PREGINET', 'PREGINET Bandwidth': 'PREGINET Bandwidth', 'Aggregate Bandwidth': 'Aggregate Bandwidth', 'Internet: Staff Access': 'Internet: Staff Access', 'Internet: Student Access': 'Internet: Student Access', 'Email: Staff Access': 'Email: Staff Access', 'Email: Student Access': 'Email: Student Access', 'Email Provider': 'Email Provider', 'Eduroam Access': 'Eduroam Access', });
lyr_StudentInternetAccess_1.set('fieldImages', {'Name': 'TextEdit', 'LocationLatitude': 'TextEdit', 'LocationLongitude': 'TextEdit', 'Postal Code': 'Range', 'City': 'TextEdit', 'Main ISP': 'TextEdit', 'Main ISP BW': 'TextEdit', 'ISP 1': 'TextEdit', 'ISP 1 Bandwidth': 'Range', 'ISP 1 Active': 'TextEdit', 'ISP 2': 'TextEdit', 'ISP 2 Bandwidth': 'Range', 'ISP 2 Active': 'TextEdit', 'PREGINET': 'TextEdit', 'PREGINET Bandwidth': 'Range', 'Aggregate Bandwidth': 'TextEdit', 'Internet: Staff Access': 'Range', 'Internet: Student Access': 'Range', 'Email: Staff Access': 'Range', 'Email: Student Access': 'Range', 'Email Provider': 'TextEdit', 'Eduroam Access': 'TextEdit', });
lyr_StaffInternetAccess_2.set('fieldImages', {'Name': 'TextEdit', 'LocationLatitude': 'TextEdit', 'LocationLongitude': 'TextEdit', 'Postal Code': 'Range', 'City': 'TextEdit', 'Main ISP': 'TextEdit', 'Main ISP BW': 'TextEdit', 'ISP 1': 'TextEdit', 'ISP 1 Bandwidth': 'Range', 'ISP 1 Active': 'TextEdit', 'ISP 2': 'TextEdit', 'ISP 2 Bandwidth': 'Range', 'ISP 2 Active': 'TextEdit', 'PREGINET': 'TextEdit', 'PREGINET Bandwidth': 'Range', 'Aggregate Bandwidth': 'TextEdit', 'Internet: Staff Access': 'Range', 'Internet: Student Access': 'Range', 'Email: Staff Access': 'Range', 'Email: Student Access': 'Range', 'Email Provider': 'TextEdit', 'Eduroam Access': 'TextEdit', });
lyr_EmailProvider_3.set('fieldImages', {'Name': 'TextEdit', 'LocationLatitude': 'TextEdit', 'LocationLongitude': 'TextEdit', 'Postal Code': 'Range', 'City': 'TextEdit', 'Main ISP': 'TextEdit', 'Main ISP BW': 'TextEdit', 'ISP 1': 'TextEdit', 'ISP 1 Bandwidth': 'Range', 'ISP 1 Active': 'TextEdit', 'ISP 2': 'TextEdit', 'ISP 2 Bandwidth': 'Range', 'ISP 2 Active': 'TextEdit', 'PREGINET': 'TextEdit', 'PREGINET Bandwidth': 'Range', 'Aggregate Bandwidth': 'TextEdit', 'Internet: Staff Access': 'Range', 'Internet: Student Access': 'Range', 'Email: Staff Access': 'Range', 'Email: Student Access': 'Range', 'Email Provider': 'TextEdit', 'Eduroam Access': 'TextEdit', });
lyr_Eduroam_4.set('fieldImages', {'Name': 'TextEdit', 'LocationLatitude': 'TextEdit', 'LocationLongitude': 'TextEdit', 'Postal Code': 'Range', 'City': 'TextEdit', 'Main ISP': 'TextEdit', 'Main ISP BW': 'TextEdit', 'ISP 1': 'TextEdit', 'ISP 1 Bandwidth': 'Range', 'ISP 1 Active': 'TextEdit', 'ISP 2': 'TextEdit', 'ISP 2 Bandwidth': 'Range', 'ISP 2 Active': 'TextEdit', 'PREGINET': 'TextEdit', 'PREGINET Bandwidth': 'Range', 'Aggregate Bandwidth': 'TextEdit', 'Internet: Staff Access': 'Range', 'Internet: Student Access': 'Range', 'Email: Staff Access': 'Range', 'Email: Student Access': 'Range', 'Email Provider': 'TextEdit', 'Eduroam Access': 'TextEdit', });
lyr_PREGINET_5.set('fieldImages', {'Name': 'TextEdit', 'LocationLatitude': 'TextEdit', 'LocationLongitude': 'TextEdit', 'Postal Code': 'Range', 'City': 'TextEdit', 'Main ISP': 'TextEdit', 'Main ISP BW': 'TextEdit', 'ISP 1': 'TextEdit', 'ISP 1 Bandwidth': 'Range', 'ISP 1 Active': 'TextEdit', 'ISP 2': 'TextEdit', 'ISP 2 Bandwidth': 'Range', 'ISP 2 Active': 'TextEdit', 'PREGINET': 'TextEdit', 'PREGINET Bandwidth': 'Range', 'Aggregate Bandwidth': 'TextEdit', 'Internet: Staff Access': 'Range', 'Internet: Student Access': 'Range', 'Email: Staff Access': 'Range', 'Email: Student Access': 'Range', 'Email Provider': 'TextEdit', 'Eduroam Access': 'TextEdit', });
lyr_AggregateBandwidth_6.set('fieldImages', {'Name': 'TextEdit', 'LocationLatitude': 'TextEdit', 'LocationLongitude': 'TextEdit', 'Postal Code': 'Range', 'City': 'TextEdit', 'Main ISP': 'TextEdit', 'Main ISP BW': 'TextEdit', 'ISP 1': 'TextEdit', 'ISP 1 Bandwidth': 'Range', 'ISP 1 Active': 'TextEdit', 'ISP 2': 'TextEdit', 'ISP 2 Bandwidth': 'Range', 'ISP 2 Active': 'TextEdit', 'PREGINET': 'CheckBox', 'PREGINET Bandwidth': 'Range', 'Aggregate Bandwidth': 'TextEdit', 'Internet: Staff Access': 'Range', 'Internet: Student Access': 'Range', 'Email: Staff Access': 'Range', 'Email: Student Access': 'Range', 'Email Provider': 'TextEdit', 'Eduroam Access': 'CheckBox', });
lyr_ISP2_7.set('fieldImages', {'Name': 'TextEdit', 'LocationLatitude': 'TextEdit', 'LocationLongitude': 'TextEdit', 'Postal Code': 'Range', 'City': 'TextEdit', 'Main ISP': 'TextEdit', 'Main ISP BW': 'TextEdit', 'ISP 1': 'TextEdit', 'ISP 1 Bandwidth': 'Range', 'ISP 1 Active': 'TextEdit', 'ISP 2': 'TextEdit', 'ISP 2 Bandwidth': 'Range', 'ISP 2 Active': 'TextEdit', 'PREGINET': 'CheckBox', 'PREGINET Bandwidth': 'Range', 'Aggregate Bandwidth': 'TextEdit', 'Internet: Staff Access': 'Range', 'Internet: Student Access': 'Range', 'Email: Staff Access': 'Range', 'Email: Student Access': 'Range', 'Email Provider': 'TextEdit', 'Eduroam Access': 'CheckBox', });
lyr_ISP1_8.set('fieldImages', {'Name': 'TextEdit', 'LocationLatitude': 'TextEdit', 'LocationLongitude': 'TextEdit', 'Postal Code': 'Range', 'City': 'TextEdit', 'Main ISP': 'TextEdit', 'Main ISP BW': 'TextEdit', 'ISP 1': 'TextEdit', 'ISP 1 Bandwidth': 'Range', 'ISP 1 Active': 'TextEdit', 'ISP 2': 'TextEdit', 'ISP 2 Bandwidth': 'Range', 'ISP 2 Active': 'TextEdit', 'PREGINET': 'CheckBox', 'PREGINET Bandwidth': 'Range', 'Aggregate Bandwidth': 'TextEdit', 'Internet: Staff Access': 'Range', 'Internet: Student Access': 'Range', 'Email: Staff Access': 'Range', 'Email: Student Access': 'Range', 'Email Provider': 'TextEdit', 'Eduroam Access': 'CheckBox', });
lyr_MainISPbw_9.set('fieldImages', {'Name': 'TextEdit', 'LocationLatitude': 'TextEdit', 'LocationLongitude': 'TextEdit', 'Postal Code': 'Range', 'City': 'TextEdit', 'Main ISP': 'TextEdit', 'Main ISP BW': 'TextEdit', 'ISP 1': 'TextEdit', 'ISP 1 Bandwidth': 'Range', 'ISP 1 Active': 'TextEdit', 'ISP 2': 'TextEdit', 'ISP 2 Bandwidth': 'Range', 'ISP 2 Active': 'TextEdit', 'PREGINET': 'CheckBox', 'PREGINET Bandwidth': 'Range', 'Aggregate Bandwidth': 'TextEdit', 'Internet: Staff Access': 'Range', 'Internet: Student Access': 'Range', 'Email: Staff Access': 'Range', 'Email: Student Access': 'Range', 'Email Provider': 'TextEdit', 'Eduroam Access': 'CheckBox', });
lyr_MainISP_10.set('fieldImages', {'Name': 'TextEdit', 'LocationLatitude': 'TextEdit', 'LocationLongitude': 'TextEdit', 'Postal Code': 'Range', 'City': 'TextEdit', 'Main ISP': 'TextEdit', 'Main ISP BW': 'TextEdit', 'ISP 1': 'TextEdit', 'ISP 1 Bandwidth': 'Range', 'ISP 1 Active': 'TextEdit', 'ISP 2': 'TextEdit', 'ISP 2 Bandwidth': 'Range', 'ISP 2 Active': 'TextEdit', 'PREGINET': 'CheckBox', 'PREGINET Bandwidth': 'Range', 'Aggregate Bandwidth': 'TextEdit', 'Internet: Staff Access': 'Range', 'Internet: Student Access': 'Range', 'Email: Staff Access': 'Range', 'Email: Student Access': 'Range', 'Email Provider': 'TextEdit', 'Eduroam Access': 'CheckBox', });
lyr_StudentInternetAccess_1.set('fieldLabels', {'Name': 'inline label - visible with data', 'LocationLatitude': 'hidden field', 'LocationLongitude': 'hidden field', 'Postal Code': 'hidden field', 'City': 'hidden field', 'Main ISP': 'hidden field', 'Main ISP BW': 'hidden field', 'ISP 1': 'hidden field', 'ISP 1 Bandwidth': 'hidden field', 'ISP 1 Active': 'hidden field', 'ISP 2': 'hidden field', 'ISP 2 Bandwidth': 'hidden field', 'ISP 2 Active': 'hidden field', 'PREGINET': 'hidden field', 'PREGINET Bandwidth': 'hidden field', 'Aggregate Bandwidth': 'hidden field', 'Internet: Staff Access': 'hidden field', 'Internet: Student Access': 'inline label - visible with data', 'Email: Staff Access': 'hidden field', 'Email: Student Access': 'hidden field', 'Email Provider': 'hidden field', 'Eduroam Access': 'hidden field', });
lyr_StaffInternetAccess_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'LocationLatitude': 'hidden field', 'LocationLongitude': 'hidden field', 'Postal Code': 'hidden field', 'City': 'hidden field', 'Main ISP': 'hidden field', 'Main ISP BW': 'hidden field', 'ISP 1': 'hidden field', 'ISP 1 Bandwidth': 'hidden field', 'ISP 1 Active': 'hidden field', 'ISP 2': 'hidden field', 'ISP 2 Bandwidth': 'hidden field', 'ISP 2 Active': 'hidden field', 'PREGINET': 'hidden field', 'PREGINET Bandwidth': 'hidden field', 'Aggregate Bandwidth': 'hidden field', 'Internet: Staff Access': 'inline label - visible with data', 'Internet: Student Access': 'hidden field', 'Email: Staff Access': 'hidden field', 'Email: Student Access': 'hidden field', 'Email Provider': 'hidden field', 'Eduroam Access': 'hidden field', });
lyr_EmailProvider_3.set('fieldLabels', {'Name': 'inline label - visible with data', 'LocationLatitude': 'hidden field', 'LocationLongitude': 'hidden field', 'Postal Code': 'hidden field', 'City': 'hidden field', 'Main ISP': 'hidden field', 'Main ISP BW': 'hidden field', 'ISP 1': 'hidden field', 'ISP 1 Bandwidth': 'hidden field', 'ISP 1 Active': 'hidden field', 'ISP 2': 'hidden field', 'ISP 2 Bandwidth': 'hidden field', 'ISP 2 Active': 'hidden field', 'PREGINET': 'hidden field', 'PREGINET Bandwidth': 'hidden field', 'Aggregate Bandwidth': 'hidden field', 'Internet: Staff Access': 'hidden field', 'Internet: Student Access': 'hidden field', 'Email: Staff Access': 'hidden field', 'Email: Student Access': 'hidden field', 'Email Provider': 'inline label - visible with data', 'Eduroam Access': 'hidden field', });
lyr_Eduroam_4.set('fieldLabels', {'Name': 'inline label - visible with data', 'LocationLatitude': 'hidden field', 'LocationLongitude': 'hidden field', 'Postal Code': 'hidden field', 'City': 'hidden field', 'Main ISP': 'hidden field', 'Main ISP BW': 'hidden field', 'ISP 1': 'hidden field', 'ISP 1 Bandwidth': 'hidden field', 'ISP 1 Active': 'hidden field', 'ISP 2': 'hidden field', 'ISP 2 Bandwidth': 'hidden field', 'ISP 2 Active': 'hidden field', 'PREGINET': 'hidden field', 'PREGINET Bandwidth': 'hidden field', 'Aggregate Bandwidth': 'hidden field', 'Internet: Staff Access': 'hidden field', 'Internet: Student Access': 'hidden field', 'Email: Staff Access': 'hidden field', 'Email: Student Access': 'hidden field', 'Email Provider': 'hidden field', 'Eduroam Access': 'inline label - visible with data', });
lyr_PREGINET_5.set('fieldLabels', {'Name': 'inline label - visible with data', 'LocationLatitude': 'hidden field', 'LocationLongitude': 'hidden field', 'Postal Code': 'hidden field', 'City': 'hidden field', 'Main ISP': 'hidden field', 'Main ISP BW': 'hidden field', 'ISP 1': 'hidden field', 'ISP 1 Bandwidth': 'hidden field', 'ISP 1 Active': 'hidden field', 'ISP 2': 'hidden field', 'ISP 2 Bandwidth': 'hidden field', 'ISP 2 Active': 'hidden field', 'PREGINET': 'inline label - visible with data', 'PREGINET Bandwidth': 'hidden field', 'Aggregate Bandwidth': 'hidden field', 'Internet: Staff Access': 'hidden field', 'Internet: Student Access': 'hidden field', 'Email: Staff Access': 'hidden field', 'Email: Student Access': 'hidden field', 'Email Provider': 'hidden field', 'Eduroam Access': 'hidden field', });
lyr_AggregateBandwidth_6.set('fieldLabels', {'Name': 'inline label - visible with data', 'LocationLatitude': 'hidden field', 'LocationLongitude': 'hidden field', 'Postal Code': 'hidden field', 'City': 'hidden field', 'Main ISP': 'hidden field', 'Main ISP BW': 'hidden field', 'ISP 1': 'hidden field', 'ISP 1 Bandwidth': 'hidden field', 'ISP 1 Active': 'hidden field', 'ISP 2': 'hidden field', 'ISP 2 Bandwidth': 'hidden field', 'ISP 2 Active': 'hidden field', 'PREGINET': 'hidden field', 'PREGINET Bandwidth': 'hidden field', 'Aggregate Bandwidth': 'inline label - visible with data', 'Internet: Staff Access': 'hidden field', 'Internet: Student Access': 'hidden field', 'Email: Staff Access': 'hidden field', 'Email: Student Access': 'hidden field', 'Email Provider': 'hidden field', 'Eduroam Access': 'hidden field', });
lyr_ISP2_7.set('fieldLabels', {'Name': 'inline label - visible with data', 'LocationLatitude': 'hidden field', 'LocationLongitude': 'hidden field', 'Postal Code': 'hidden field', 'City': 'hidden field', 'Main ISP': 'hidden field', 'Main ISP BW': 'hidden field', 'ISP 1': 'hidden field', 'ISP 1 Bandwidth': 'hidden field', 'ISP 1 Active': 'hidden field', 'ISP 2': 'inline label - visible with data', 'ISP 2 Bandwidth': 'hidden field', 'ISP 2 Active': 'hidden field', 'PREGINET': 'hidden field', 'PREGINET Bandwidth': 'hidden field', 'Aggregate Bandwidth': 'hidden field', 'Internet: Staff Access': 'hidden field', 'Internet: Student Access': 'hidden field', 'Email: Staff Access': 'hidden field', 'Email: Student Access': 'hidden field', 'Email Provider': 'hidden field', 'Eduroam Access': 'hidden field', });
lyr_ISP1_8.set('fieldLabels', {'Name': 'inline label - visible with data', 'LocationLatitude': 'hidden field', 'LocationLongitude': 'hidden field', 'Postal Code': 'hidden field', 'City': 'hidden field', 'Main ISP': 'hidden field', 'Main ISP BW': 'hidden field', 'ISP 1': 'inline label - visible with data', 'ISP 1 Bandwidth': 'hidden field', 'ISP 1 Active': 'hidden field', 'ISP 2': 'hidden field', 'ISP 2 Bandwidth': 'hidden field', 'ISP 2 Active': 'hidden field', 'PREGINET': 'hidden field', 'PREGINET Bandwidth': 'hidden field', 'Aggregate Bandwidth': 'hidden field', 'Internet: Staff Access': 'hidden field', 'Internet: Student Access': 'hidden field', 'Email: Staff Access': 'hidden field', 'Email: Student Access': 'hidden field', 'Email Provider': 'hidden field', 'Eduroam Access': 'hidden field', });
lyr_MainISPbw_9.set('fieldLabels', {'Name': 'inline label - visible with data', 'LocationLatitude': 'hidden field', 'LocationLongitude': 'hidden field', 'Postal Code': 'hidden field', 'City': 'hidden field', 'Main ISP': 'hidden field', 'Main ISP BW': 'inline label - visible with data', 'ISP 1': 'hidden field', 'ISP 1 Bandwidth': 'hidden field', 'ISP 1 Active': 'hidden field', 'ISP 2': 'hidden field', 'ISP 2 Bandwidth': 'hidden field', 'ISP 2 Active': 'hidden field', 'PREGINET': 'hidden field', 'PREGINET Bandwidth': 'hidden field', 'Aggregate Bandwidth': 'hidden field', 'Internet: Staff Access': 'hidden field', 'Internet: Student Access': 'hidden field', 'Email: Staff Access': 'hidden field', 'Email: Student Access': 'hidden field', 'Email Provider': 'hidden field', 'Eduroam Access': 'hidden field', });
lyr_MainISP_10.set('fieldLabels', {'Name': 'inline label - visible with data', 'LocationLatitude': 'hidden field', 'LocationLongitude': 'hidden field', 'Postal Code': 'hidden field', 'City': 'hidden field', 'Main ISP': 'inline label - visible with data', 'Main ISP BW': 'hidden field', 'ISP 1': 'hidden field', 'ISP 1 Bandwidth': 'hidden field', 'ISP 1 Active': 'hidden field', 'ISP 2': 'hidden field', 'ISP 2 Bandwidth': 'hidden field', 'ISP 2 Active': 'hidden field', 'PREGINET': 'hidden field', 'PREGINET Bandwidth': 'hidden field', 'Aggregate Bandwidth': 'hidden field', 'Internet: Staff Access': 'hidden field', 'Internet: Student Access': 'hidden field', 'Email: Staff Access': 'hidden field', 'Email: Student Access': 'hidden field', 'Email Provider': 'hidden field', 'Eduroam Access': 'hidden field', });
lyr_MainISP_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});