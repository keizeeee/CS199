var wms_layers = [];

var format_AdditionalISP1_0 = new ol.format.GeoJSON();
var features_AdditionalISP1_0 = format_AdditionalISP1_0.readFeatures(json_AdditionalISP1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdditionalISP1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdditionalISP1_0.addFeatures(features_AdditionalISP1_0);
var lyr_AdditionalISP1_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdditionalISP1_0, 
                style: style_AdditionalISP1_0,
                popuplayertitle: 'Additional ISP 1',
                interactive: true,
    title: 'Additional ISP 1<br />\
    <img src="styles/legend/AdditionalISP1_0_0.png" /> Converge ICT<br />\
    <img src="styles/legend/AdditionalISP1_0_1.png" /> DCTV<br />\
    <img src="styles/legend/AdditionalISP1_0_2.png" /> DICT iGovNet<br />\
    <img src="styles/legend/AdditionalISP1_0_3.png" /> Globe Telecom<br />\
    <img src="styles/legend/AdditionalISP1_0_4.png" /> PLDT<br />\
    <img src="styles/legend/AdditionalISP1_0_5.png" /> PREGINET<br />\
    <img src="styles/legend/AdditionalISP1_0_6.png" /> SouceTelecom<br />\
    <img src="styles/legend/AdditionalISP1_0_7.png" /> Weavetech<br />' });
var format_ISPmain_1 = new ol.format.GeoJSON();
var features_ISPmain_1 = format_ISPmain_1.readFeatures(json_ISPmain_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISPmain_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISPmain_1.addFeatures(features_ISPmain_1);
var lyr_ISPmain_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ISPmain_1, 
                style: style_ISPmain_1,
                popuplayertitle: 'ISP main',
                interactive: true,
    title: 'ISP main<br />\
    <img src="styles/legend/ISPmain_1_0.png" /> Converge ICT<br />\
    <img src="styles/legend/ISPmain_1_1.png" /> Dctech Micro Service Inc.<br />\
    <img src="styles/legend/ISPmain_1_2.png" /> Globe Telecom<br />\
    <img src="styles/legend/ISPmain_1_3.png" /> Philcom<br />\
    <img src="styles/legend/ISPmain_1_4.png" /> PLDT<br />\
    <img src="styles/legend/ISPmain_1_5.png" /> PREGINET<br />\
    <img src="styles/legend/ISPmain_1_6.png" /> Starlink<br />' });
var format_Bandwidthmainisp_2 = new ol.format.GeoJSON();
var features_Bandwidthmainisp_2 = format_Bandwidthmainisp_2.readFeatures(json_Bandwidthmainisp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bandwidthmainisp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bandwidthmainisp_2.addFeatures(features_Bandwidthmainisp_2);
var lyr_Bandwidthmainisp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bandwidthmainisp_2, 
                style: style_Bandwidthmainisp_2,
                popuplayertitle: 'Bandwidth main isp',
                interactive: true,
    title: 'Bandwidth main isp<br />\
    <img src="styles/legend/Bandwidthmainisp_2_0.png" /> 0 - 216<br />\
    <img src="styles/legend/Bandwidthmainisp_2_1.png" /> 216 - 400<br />\
    <img src="styles/legend/Bandwidthmainisp_2_2.png" /> 400 - 500<br />\
    <img src="styles/legend/Bandwidthmainisp_2_3.png" /> 500 - 1000<br />\
    <img src="styles/legend/Bandwidthmainisp_2_4.png" /> 1000 - 10000<br />' });
var format_AggregateBandwidth_3 = new ol.format.GeoJSON();
var features_AggregateBandwidth_3 = format_AggregateBandwidth_3.readFeatures(json_AggregateBandwidth_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AggregateBandwidth_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AggregateBandwidth_3.addFeatures(features_AggregateBandwidth_3);
var lyr_AggregateBandwidth_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AggregateBandwidth_3, 
                style: style_AggregateBandwidth_3,
                popuplayertitle: 'Aggregate Bandwidth',
                interactive: true,
    title: 'Aggregate Bandwidth<br />\
    <img src="styles/legend/AggregateBandwidth_3_0.png" /> 0 - 361<br />\
    <img src="styles/legend/AggregateBandwidth_3_1.png" /> 361 - 512<br />\
    <img src="styles/legend/AggregateBandwidth_3_2.png" /> 512 - 880<br />\
    <img src="styles/legend/AggregateBandwidth_3_3.png" /> 880 - 1420<br />\
    <img src="styles/legend/AggregateBandwidth_3_4.png" /> 1420 - 15000<br />' });

        var lyr_OpenStreetMap_4 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 0.508000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

lyr_AdditionalISP1_0.setVisible(true);lyr_ISPmain_1.setVisible(true);lyr_Bandwidthmainisp_2.setVisible(true);lyr_AggregateBandwidth_3.setVisible(true);lyr_OpenStreetMap_4.setVisible(true);
var layersList = [lyr_AdditionalISP1_0,lyr_ISPmain_1,lyr_Bandwidthmainisp_2,lyr_AggregateBandwidth_3,lyr_OpenStreetMap_4];
lyr_AdditionalISP1_0.set('fieldAliases', {'StartDate': 'StartDate', 'EndDate': 'EndDate', 'Status': 'Status', 'IPAddress': 'IPAddress', 'Progress': 'Progress', 'Duration (in seconds)': 'Duration (in seconds)', 'Finished': 'Finished', 'RecordedDate': 'RecordedDate', 'ResponseId': 'ResponseId', 'RecipientLastName': 'RecipientLastName', 'RecipientFirstName': 'RecipientFirstName', 'RecipientEmail': 'RecipientEmail', 'ExternalReference': 'ExternalReference', 'LocationLatitude': 'LocationLatitude', 'LocationLongitude': 'LocationLongitude', 'DistributionChannel': 'DistributionChannel', 'UserLanguage': 'UserLanguage', 'Q19_1': 'Q19_1', 'Q19_2': 'Q19_2', 'Q19_3': 'Q19_3', 'Q23_1': 'Q23_1', 'Q23_2': 'Q23_2', 'Q23_3': 'Q23_3', 'Q23_4': 'Q23_4', 'Q1_1': 'Q1_1', 'Q1_2': 'Q1_2', 'Q2': 'Q2', 'Q4_1': 'Q4_1', 'Q4_2': 'Q4_2', 'Q12': 'Q12', 'Q13': 'Q13', 'Q15_1': 'Q15_1', 'Q15_2': 'Q15_2', 'Q16': 'Q16', 'Q18': 'Q18', 'Q19': 'Q19', 'Q20': 'Q20', 'Q21_1': 'Q21_1', 'Q21_2': 'Q21_2', 'Q21_3': 'Q21_3', 'Q21_4': 'Q21_4', 'Q25': 'Q25', 'Q25_3_TEXT': 'Q25_3_TEXT', 'Q26': 'Q26', });
lyr_ISPmain_1.set('fieldAliases', {'StartDate': 'StartDate', 'EndDate': 'EndDate', 'Status': 'Status', 'IPAddress': 'IPAddress', 'Progress': 'Progress', 'Duration (in seconds)': 'Duration (in seconds)', 'Finished': 'Finished', 'RecordedDate': 'RecordedDate', 'ResponseId': 'ResponseId', 'RecipientLastName': 'RecipientLastName', 'RecipientFirstName': 'RecipientFirstName', 'RecipientEmail': 'RecipientEmail', 'ExternalReference': 'ExternalReference', 'LocationLatitude': 'LocationLatitude', 'LocationLongitude': 'LocationLongitude', 'DistributionChannel': 'DistributionChannel', 'UserLanguage': 'UserLanguage', 'Q19_1': 'Q19_1', 'Q19_2': 'Q19_2', 'Q19_3': 'Q19_3', 'Q23_1': 'Q23_1', 'Q23_2': 'Q23_2', 'Q23_3': 'Q23_3', 'Q23_4': 'Q23_4', 'Q1_1': 'Q1_1', 'Q1_2': 'Q1_2', 'Q2': 'Q2', 'Q4_1': 'Q4_1', 'Q4_2': 'Q4_2', 'Q12': 'Q12', 'Q13': 'Q13', 'Q15_1': 'Q15_1', 'Q15_2': 'Q15_2', 'Q16': 'Q16', 'Q18': 'Q18', 'Q19': 'Q19', 'Q20': 'Q20', 'Q21_1': 'Q21_1', 'Q21_2': 'Q21_2', 'Q21_3': 'Q21_3', 'Q21_4': 'Q21_4', 'Q25': 'Q25', 'Q25_3_TEXT': 'Q25_3_TEXT', 'Q26': 'Q26', });
lyr_Bandwidthmainisp_2.set('fieldAliases', {'StartDate': 'StartDate', 'EndDate': 'EndDate', 'Status': 'Status', 'IPAddress': 'IPAddress', 'Progress': 'Progress', 'Duration (in seconds)': 'Duration (in seconds)', 'Finished': 'Finished', 'RecordedDate': 'RecordedDate', 'ResponseId': 'ResponseId', 'RecipientLastName': 'RecipientLastName', 'RecipientFirstName': 'RecipientFirstName', 'RecipientEmail': 'RecipientEmail', 'ExternalReference': 'ExternalReference', 'LocationLatitude': 'LocationLatitude', 'LocationLongitude': 'LocationLongitude', 'DistributionChannel': 'DistributionChannel', 'UserLanguage': 'UserLanguage', 'Q19_1': 'Q19_1', 'Q19_2': 'Q19_2', 'Q19_3': 'Q19_3', 'Q23_1': 'Q23_1', 'Q23_2': 'Q23_2', 'Q23_3': 'Q23_3', 'Q23_4': 'Q23_4', 'Q1_1': 'Q1_1', 'Q1_2': 'Q1_2', 'Q2': 'Q2', 'Q4_1': 'Q4_1', 'Q4_2': 'Q4_2', 'Q12': 'Q12', 'Q13': 'Q13', 'Q15_1': 'Q15_1', 'Q15_2': 'Q15_2', 'Q16': 'Q16', 'Q18': 'Q18', 'Q19': 'Q19', 'Q20': 'Q20', 'Q21_1': 'Q21_1', 'Q21_2': 'Q21_2', 'Q21_3': 'Q21_3', 'Q21_4': 'Q21_4', 'Q25': 'Q25', 'Q25_3_TEXT': 'Q25_3_TEXT', 'Q26': 'Q26', });
lyr_AggregateBandwidth_3.set('fieldAliases', {'StartDate': 'StartDate', 'EndDate': 'EndDate', 'Status': 'Status', 'IPAddress': 'IPAddress', 'Progress': 'Progress', 'Duration (in seconds)': 'Duration (in seconds)', 'Finished': 'Finished', 'RecordedDate': 'RecordedDate', 'ResponseId': 'ResponseId', 'RecipientLastName': 'RecipientLastName', 'RecipientFirstName': 'RecipientFirstName', 'RecipientEmail': 'RecipientEmail', 'ExternalReference': 'ExternalReference', 'LocationLatitude': 'LocationLatitude', 'LocationLongitude': 'LocationLongitude', 'DistributionChannel': 'DistributionChannel', 'UserLanguage': 'UserLanguage', 'Q19_1': 'Q19_1', 'Q19_2': 'Q19_2', 'Q19_3': 'Q19_3', 'Q23_1': 'Q23_1', 'Q23_2': 'Q23_2', 'Q23_3': 'Q23_3', 'Q23_4': 'Q23_4', 'Q1_1': 'Q1_1', 'Q1_2': 'Q1_2', 'Q2': 'Q2', 'Q4_1': 'Q4_1', 'Q4_2': 'Q4_2', 'Q12': 'Q12', 'Q13': 'Q13', 'Q15_1': 'Q15_1', 'Q15_2': 'Q15_2', 'Q16': 'Q16', 'Q18': 'Q18', 'Q19': 'Q19', 'Q20': 'Q20', 'Q21_1': 'Q21_1', 'Q21_2': 'Q21_2', 'Q21_3': 'Q21_3', 'Q21_4': 'Q21_4', 'Q25': 'Q25', 'Q25_3_TEXT': 'Q25_3_TEXT', 'Q26': 'Q26', });
lyr_AdditionalISP1_0.set('fieldImages', {'StartDate': 'TextEdit', 'EndDate': 'TextEdit', 'Status': 'TextEdit', 'IPAddress': 'TextEdit', 'Progress': 'Range', 'Duration (in seconds)': 'Range', 'Finished': 'CheckBox', 'RecordedDate': 'TextEdit', 'ResponseId': 'TextEdit', 'RecipientLastName': 'TextEdit', 'RecipientFirstName': 'TextEdit', 'RecipientEmail': 'TextEdit', 'ExternalReference': 'TextEdit', 'LocationLatitude': 'TextEdit', 'LocationLongitude': 'TextEdit', 'DistributionChannel': 'TextEdit', 'UserLanguage': 'TextEdit', 'Q19_1': 'TextEdit', 'Q19_2': 'TextEdit', 'Q19_3': 'TextEdit', 'Q23_1': 'TextEdit', 'Q23_2': 'TextEdit', 'Q23_3': 'TextEdit', 'Q23_4': 'Range', 'Q1_1': 'TextEdit', 'Q1_2': 'Range', 'Q2': 'CheckBox', 'Q4_1': 'TextEdit', 'Q4_2': 'Range', 'Q12': 'TextEdit', 'Q13': 'CheckBox', 'Q15_1': 'TextEdit', 'Q15_2': 'Range', 'Q16': 'TextEdit', 'Q18': 'CheckBox', 'Q19': 'Range', 'Q20': 'Range', 'Q21_1': 'Range', 'Q21_2': 'Range', 'Q21_3': 'Range', 'Q21_4': 'Range', 'Q25': 'TextEdit', 'Q25_3_TEXT': 'TextEdit', 'Q26': 'CheckBox', });
lyr_ISPmain_1.set('fieldImages', {'StartDate': 'TextEdit', 'EndDate': 'TextEdit', 'Status': 'TextEdit', 'IPAddress': 'TextEdit', 'Progress': 'Range', 'Duration (in seconds)': 'Range', 'Finished': 'CheckBox', 'RecordedDate': 'TextEdit', 'ResponseId': 'TextEdit', 'RecipientLastName': 'TextEdit', 'RecipientFirstName': 'TextEdit', 'RecipientEmail': 'TextEdit', 'ExternalReference': 'TextEdit', 'LocationLatitude': 'TextEdit', 'LocationLongitude': 'TextEdit', 'DistributionChannel': 'TextEdit', 'UserLanguage': 'TextEdit', 'Q19_1': 'TextEdit', 'Q19_2': 'TextEdit', 'Q19_3': 'TextEdit', 'Q23_1': 'TextEdit', 'Q23_2': 'TextEdit', 'Q23_3': 'TextEdit', 'Q23_4': 'Range', 'Q1_1': 'TextEdit', 'Q1_2': 'Range', 'Q2': 'CheckBox', 'Q4_1': 'TextEdit', 'Q4_2': 'Range', 'Q12': 'TextEdit', 'Q13': 'CheckBox', 'Q15_1': 'TextEdit', 'Q15_2': 'Range', 'Q16': 'TextEdit', 'Q18': 'CheckBox', 'Q19': 'Range', 'Q20': 'Range', 'Q21_1': 'Range', 'Q21_2': 'Range', 'Q21_3': 'Range', 'Q21_4': 'Range', 'Q25': 'TextEdit', 'Q25_3_TEXT': 'TextEdit', 'Q26': 'CheckBox', });
lyr_Bandwidthmainisp_2.set('fieldImages', {'StartDate': 'TextEdit', 'EndDate': 'TextEdit', 'Status': 'TextEdit', 'IPAddress': 'TextEdit', 'Progress': 'Range', 'Duration (in seconds)': 'Range', 'Finished': 'CheckBox', 'RecordedDate': 'TextEdit', 'ResponseId': 'TextEdit', 'RecipientLastName': 'TextEdit', 'RecipientFirstName': 'TextEdit', 'RecipientEmail': 'TextEdit', 'ExternalReference': 'TextEdit', 'LocationLatitude': 'TextEdit', 'LocationLongitude': 'TextEdit', 'DistributionChannel': 'TextEdit', 'UserLanguage': 'TextEdit', 'Q19_1': 'TextEdit', 'Q19_2': 'TextEdit', 'Q19_3': 'TextEdit', 'Q23_1': 'TextEdit', 'Q23_2': 'TextEdit', 'Q23_3': 'TextEdit', 'Q23_4': 'Range', 'Q1_1': 'TextEdit', 'Q1_2': 'Range', 'Q2': 'CheckBox', 'Q4_1': 'TextEdit', 'Q4_2': 'Range', 'Q12': 'TextEdit', 'Q13': 'CheckBox', 'Q15_1': 'TextEdit', 'Q15_2': 'Range', 'Q16': 'TextEdit', 'Q18': 'CheckBox', 'Q19': 'Range', 'Q20': 'Range', 'Q21_1': 'Range', 'Q21_2': 'Range', 'Q21_3': 'Range', 'Q21_4': 'Range', 'Q25': 'TextEdit', 'Q25_3_TEXT': 'TextEdit', 'Q26': 'CheckBox', });
lyr_AggregateBandwidth_3.set('fieldImages', {'StartDate': 'TextEdit', 'EndDate': 'TextEdit', 'Status': 'TextEdit', 'IPAddress': 'TextEdit', 'Progress': 'Range', 'Duration (in seconds)': 'Range', 'Finished': 'CheckBox', 'RecordedDate': 'TextEdit', 'ResponseId': 'TextEdit', 'RecipientLastName': 'TextEdit', 'RecipientFirstName': 'TextEdit', 'RecipientEmail': 'TextEdit', 'ExternalReference': 'TextEdit', 'LocationLatitude': 'TextEdit', 'LocationLongitude': 'TextEdit', 'DistributionChannel': 'TextEdit', 'UserLanguage': 'TextEdit', 'Q19_1': 'TextEdit', 'Q19_2': 'TextEdit', 'Q19_3': 'TextEdit', 'Q23_1': 'TextEdit', 'Q23_2': 'TextEdit', 'Q23_3': 'TextEdit', 'Q23_4': 'Range', 'Q1_1': 'TextEdit', 'Q1_2': 'Range', 'Q2': 'CheckBox', 'Q4_1': 'TextEdit', 'Q4_2': 'Range', 'Q12': 'TextEdit', 'Q13': 'CheckBox', 'Q15_1': 'TextEdit', 'Q15_2': 'Range', 'Q16': 'TextEdit', 'Q18': 'CheckBox', 'Q19': 'Range', 'Q20': 'Range', 'Q21_1': 'Range', 'Q21_2': 'Range', 'Q21_3': 'Range', 'Q21_4': 'Range', 'Q25': 'TextEdit', 'Q25_3_TEXT': 'TextEdit', 'Q26': 'CheckBox', });
lyr_AdditionalISP1_0.set('fieldLabels', {'StartDate': 'hidden field', 'EndDate': 'hidden field', 'Status': 'hidden field', 'IPAddress': 'hidden field', 'Progress': 'hidden field', 'Duration (in seconds)': 'hidden field', 'Finished': 'hidden field', 'RecordedDate': 'hidden field', 'ResponseId': 'hidden field', 'RecipientLastName': 'hidden field', 'RecipientFirstName': 'hidden field', 'RecipientEmail': 'hidden field', 'ExternalReference': 'hidden field', 'LocationLatitude': 'hidden field', 'LocationLongitude': 'hidden field', 'DistributionChannel': 'hidden field', 'UserLanguage': 'hidden field', 'Q19_1': 'hidden field', 'Q19_2': 'hidden field', 'Q19_3': 'hidden field', 'Q23_1': 'hidden field', 'Q23_2': 'hidden field', 'Q23_3': 'hidden field', 'Q23_4': 'hidden field', 'Q1_1': 'hidden field', 'Q1_2': 'hidden field', 'Q2': 'hidden field', 'Q4_1': 'no label', 'Q4_2': 'hidden field', 'Q12': 'hidden field', 'Q13': 'hidden field', 'Q15_1': 'hidden field', 'Q15_2': 'hidden field', 'Q16': 'hidden field', 'Q18': 'hidden field', 'Q19': 'hidden field', 'Q20': 'hidden field', 'Q21_1': 'hidden field', 'Q21_2': 'hidden field', 'Q21_3': 'hidden field', 'Q21_4': 'hidden field', 'Q25': 'hidden field', 'Q25_3_TEXT': 'hidden field', 'Q26': 'hidden field', });
lyr_ISPmain_1.set('fieldLabels', {'StartDate': 'hidden field', 'EndDate': 'hidden field', 'Status': 'hidden field', 'IPAddress': 'hidden field', 'Progress': 'hidden field', 'Duration (in seconds)': 'hidden field', 'Finished': 'hidden field', 'RecordedDate': 'hidden field', 'ResponseId': 'hidden field', 'RecipientLastName': 'hidden field', 'RecipientFirstName': 'hidden field', 'RecipientEmail': 'hidden field', 'ExternalReference': 'hidden field', 'LocationLatitude': 'hidden field', 'LocationLongitude': 'hidden field', 'DistributionChannel': 'hidden field', 'UserLanguage': 'hidden field', 'Q19_1': 'hidden field', 'Q19_2': 'hidden field', 'Q19_3': 'hidden field', 'Q23_1': 'hidden field', 'Q23_2': 'hidden field', 'Q23_3': 'hidden field', 'Q23_4': 'hidden field', 'Q1_1': 'no label', 'Q1_2': 'hidden field', 'Q2': 'hidden field', 'Q4_1': 'hidden field', 'Q4_2': 'hidden field', 'Q12': 'hidden field', 'Q13': 'hidden field', 'Q15_1': 'hidden field', 'Q15_2': 'hidden field', 'Q16': 'hidden field', 'Q18': 'hidden field', 'Q19': 'hidden field', 'Q20': 'hidden field', 'Q21_1': 'hidden field', 'Q21_2': 'hidden field', 'Q21_3': 'hidden field', 'Q21_4': 'hidden field', 'Q25': 'hidden field', 'Q25_3_TEXT': 'hidden field', 'Q26': 'hidden field', });
lyr_Bandwidthmainisp_2.set('fieldLabels', {'StartDate': 'hidden field', 'EndDate': 'hidden field', 'Status': 'hidden field', 'IPAddress': 'hidden field', 'Progress': 'hidden field', 'Duration (in seconds)': 'hidden field', 'Finished': 'hidden field', 'RecordedDate': 'hidden field', 'ResponseId': 'hidden field', 'RecipientLastName': 'hidden field', 'RecipientFirstName': 'hidden field', 'RecipientEmail': 'hidden field', 'ExternalReference': 'hidden field', 'LocationLatitude': 'hidden field', 'LocationLongitude': 'hidden field', 'DistributionChannel': 'hidden field', 'UserLanguage': 'hidden field', 'Q19_1': 'hidden field', 'Q19_2': 'hidden field', 'Q19_3': 'hidden field', 'Q23_1': 'hidden field', 'Q23_2': 'hidden field', 'Q23_3': 'hidden field', 'Q23_4': 'hidden field', 'Q1_1': 'hidden field', 'Q1_2': 'no label', 'Q2': 'hidden field', 'Q4_1': 'hidden field', 'Q4_2': 'hidden field', 'Q12': 'hidden field', 'Q13': 'hidden field', 'Q15_1': 'hidden field', 'Q15_2': 'hidden field', 'Q16': 'hidden field', 'Q18': 'hidden field', 'Q19': 'hidden field', 'Q20': 'hidden field', 'Q21_1': 'hidden field', 'Q21_2': 'hidden field', 'Q21_3': 'hidden field', 'Q21_4': 'hidden field', 'Q25': 'hidden field', 'Q25_3_TEXT': 'hidden field', 'Q26': 'hidden field', });
lyr_AggregateBandwidth_3.set('fieldLabels', {'StartDate': 'hidden field', 'EndDate': 'hidden field', 'Status': 'hidden field', 'IPAddress': 'hidden field', 'Progress': 'hidden field', 'Duration (in seconds)': 'hidden field', 'Finished': 'hidden field', 'RecordedDate': 'hidden field', 'ResponseId': 'hidden field', 'RecipientLastName': 'hidden field', 'RecipientFirstName': 'hidden field', 'RecipientEmail': 'hidden field', 'ExternalReference': 'hidden field', 'LocationLatitude': 'hidden field', 'LocationLongitude': 'hidden field', 'DistributionChannel': 'hidden field', 'UserLanguage': 'hidden field', 'Q19_1': 'hidden field', 'Q19_2': 'hidden field', 'Q19_3': 'hidden field', 'Q23_1': 'hidden field', 'Q23_2': 'hidden field', 'Q23_3': 'hidden field', 'Q23_4': 'hidden field', 'Q1_1': 'hidden field', 'Q1_2': 'hidden field', 'Q2': 'hidden field', 'Q4_1': 'hidden field', 'Q4_2': 'hidden field', 'Q12': 'hidden field', 'Q13': 'hidden field', 'Q15_1': 'hidden field', 'Q15_2': 'hidden field', 'Q16': 'hidden field', 'Q18': 'hidden field', 'Q19': 'hidden field', 'Q20': 'no label', 'Q21_1': 'hidden field', 'Q21_2': 'hidden field', 'Q21_3': 'hidden field', 'Q21_4': 'hidden field', 'Q25': 'hidden field', 'Q25_3_TEXT': 'hidden field', 'Q26': 'hidden field', });
lyr_AggregateBandwidth_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});