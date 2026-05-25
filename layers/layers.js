var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_poligon_1 = new ol.format.GeoJSON();
var features_poligon_1 = format_poligon_1.readFeatures(json_poligon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligon_1.addFeatures(features_poligon_1);
var lyr_poligon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poligon_1, 
                style: style_poligon_1,
                popuplayertitle: 'poligon',
                interactive: true,
                title: '<img src="styles/legend/poligon_1.png" /> poligon'
            });
var format_prabumulih_barat_2 = new ol.format.GeoJSON();
var features_prabumulih_barat_2 = format_prabumulih_barat_2.readFeatures(json_prabumulih_barat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_prabumulih_barat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_prabumulih_barat_2.addFeatures(features_prabumulih_barat_2);
var lyr_prabumulih_barat_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_prabumulih_barat_2, 
                style: style_prabumulih_barat_2,
                popuplayertitle: 'prabumulih_barat',
                interactive: true,
                title: '<img src="styles/legend/prabumulih_barat_2.png" /> prabumulih_barat'
            });
var format_ADMINISTRASIKECAMATAN_AR_50K_3 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_3 = format_ADMINISTRASIKECAMATAN_AR_50K_3.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_3.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_3);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_3, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_3,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_poligon_1.setVisible(true);lyr_prabumulih_barat_2.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_poligon_1,lyr_prabumulih_barat_2,lyr_ADMINISTRASIKECAMATAN_AR_50K_3];
lyr_poligon_1.set('fieldAliases', {'id': 'id', });
lyr_prabumulih_barat_2.set('fieldAliases', {'id': 'id', 'nama_mhs': 'nama_mhs', 'nama_kprsi': 'nama_kprsi', 'kelurahan': 'kelurahan', 'kecamatan': 'kecamatan', 'bujur': 'bujur', 'lintang': 'lintang', 'status': 'status', 'persentase': 'persentase', 'nama_ketua': 'nama_ketua', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_poligon_1.set('fieldImages', {'id': '', });
lyr_prabumulih_barat_2.set('fieldImages', {'id': 'TextEdit', 'nama_mhs': 'TextEdit', 'nama_kprsi': 'TextEdit', 'kelurahan': 'TextEdit', 'kecamatan': 'TextEdit', 'bujur': 'TextEdit', 'lintang': 'TextEdit', 'status': 'TextEdit', 'persentase': 'TextEdit', 'nama_ketua': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_3.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_poligon_1.set('fieldLabels', {'id': 'no label', });
lyr_prabumulih_barat_2.set('fieldLabels', {'id': 'no label', 'nama_mhs': 'no label', 'nama_kprsi': 'no label', 'kelurahan': 'no label', 'kecamatan': 'no label', 'bujur': 'no label', 'lintang': 'no label', 'status': 'no label', 'persentase': 'no label', 'nama_ketua': 'no label', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});