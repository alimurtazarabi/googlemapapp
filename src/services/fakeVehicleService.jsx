const vehicles = [
  {
    "vin": "WDD1760121J522347",
    "plate": "B-GO5649",
    "geoCoordinate": {
      "latitude": 53.63382777,
      "longitude": 10.0071494
    },
    "fuelLevel": 100,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471838397
  },
  {
    "vin": "WDC1569431J428747",
    "plate": "B-GO1607",
    "geoCoordinate": {
      "latitude": 53.61753486,
      "longitude": 10.02711549
    },
    "fuelLevel": 60,
    "address": "Alsterdorfer Str. 511, 22337 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471824827
  },
  {
    "vin": "WDD1760421J673678",
    "plate": "B-GO5110",
    "geoCoordinate": {
      "latitude": 53.55013777,
      "longitude": 10.00291193
    },
    "fuelLevel": 98,
    "address": "Steinstraße 10-12, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471826185
  },
  {
    "vin": "WDD1760121J510763",
    "plate": "B-GO8553",
    "geoCoordinate": {
      "latitude": 53.60197102,
      "longitude": 9.97300987
    },
    "fuelLevel": 44,
    "address": "Nedderfeld 85, 22529 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471898616
  },
  {
    "vin": "WDD1760121J522016",
    "plate": "B-GO5559",
    "geoCoordinate": {
      "latitude": 53.57915162,
      "longitude": 10.12186589
    },
    "fuelLevel": 84,
    "address": "Kuehnstraße 75a, 22045 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471935122
  },
  {
    "vin": "WME4533421K149351",
    "plate": "B-GO1126",
    "geoCoordinate": {
      "latitude": 53.54380143,
      "longitude": 10.00766868
    },
    "fuelLevel": 53,
    "address": "Stockmeyerstraße 43, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471856028
  },
  {
    "vin": "WDD1173421N478967",
    "plate": "B-GO8794",
    "geoCoordinate": {
      "latitude": 53.61288489,
      "longitude": 9.95106332
    },
    "fuelLevel": 98,
    "address": "Mercedes Benz Kollaustraße",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2928-1869-0000001e9ac4",
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471876305
  },
  {
    "vin": "WDD1760421J641398",
    "plate": "B-GO3053",
    "geoCoordinate": {
      "latitude": 53.55459143,
      "longitude": 10.02361492
    },
    "fuelLevel": 36,
    "address": "Berliner Tor 41, 20099 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825430
  },
  {
    "vin": "WME4533421K149617",
    "plate": "B-GO1125",
    "geoCoordinate": {
      "latitude": 53.65528719,
      "longitude": 10.0977418
    },
    "fuelLevel": 46,
    "address": "Langenstücken 40, 22393 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471609970
  },
  {
    "vin": "WDD1760421J640804",
    "plate": "B-GO3040",
    "geoCoordinate": {
      "latitude": 53.5791028,
      "longitude": 10.1217965
    },
    "fuelLevel": 90,
    "address": "Kuehnstraße 75a, 22045 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471376898
  },
  {
    "vin": "WDC1569431J301681",
    "plate": "B-GO5708",
    "geoCoordinate": {
      "latitude": 53.48834892,
      "longitude": 10.21550425
    },
    "fuelLevel": 86,
    "address": "Chrysanderstraße 6-18, 21029 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471824995
  },
  {
    "vin": "WDD1760431J522656",
    "plate": "B-GO5689",
    "geoCoordinate": {
      "latitude": 53.63459613,
      "longitude": 10.00796509
    },
    "fuelLevel": 32,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825275
  },
  {
    "vin": "WME4533421K072864",
    "plate": "B-GO4821",
    "geoCoordinate": {
      "latitude": 53.51335583,
      "longitude": 9.98710278
    },
    "fuelLevel": 68,
    "address": "Veringstraße 50, 21107 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471928014
  },
  {
    "vin": "WDC1569421J405212",
    "plate": "B-GO1070",
    "geoCoordinate": {
      "latitude": 53.5886155,
      "longitude": 10.0329643
    },
    "fuelLevel": 98,
    "address": "switchh Saarlandstraße",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-2775-0000001e9ac4",
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471826421
  },
  {
    "vin": "WDD1760121J522960",
    "plate": "B-GO5639",
    "geoCoordinate": {
      "latitude": 53.54472281,
      "longitude": 9.93753821
    },
    "fuelLevel": 44,
    "address": "Große Elbstraße 244-254, 22767 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471826954
  },
  {
    "vin": "WME4533421K148939",
    "plate": "B-GO8684",
    "geoCoordinate": {
      "latitude": 53.49037663,
      "longitude": 10.21900121
    },
    "fuelLevel": 68,
    "address": "Reinbeker Weg 38C, 21029 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471279029
  },
  {
    "vin": "WME4533421K147469",
    "plate": "B-GO8679",
    "geoCoordinate": {
      "latitude": 53.53953861,
      "longitude": 9.99350788
    },
    "fuelLevel": 68,
    "address": "Am Strandkai 3, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471928520
  },
  {
    "vin": "WME4533421K149171",
    "plate": "B-GO8704",
    "geoCoordinate": {
      "latitude": 53.61258141,
      "longitude": 10.02390221
    },
    "fuelLevel": 100,
    "address": "Alsterdorfer Markt 10, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471796973
  },
  {
    "vin": "WDD1760421J670946",
    "plate": "B-GO5079",
    "geoCoordinate": {
      "latitude": 53.50131092,
      "longitude": 9.99412312
    },
    "fuelLevel": 64,
    "address": "Reinstorfweg 15, 21107 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471826556
  },
  {
    "vin": "WDC1569431J292449",
    "plate": "B-GO5616",
    "geoCoordinate": {
      "latitude": 53.55395127,
      "longitude": 10.00501221
    },
    "fuelLevel": 70,
    "address": "switchh Hauptbahnhof",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2919-1357-0000001e9ac4",
    "buildSeries": "X156",
    "fuelType": "Gasoline",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471823779
  },
  {
    "vin": "WDD1760431J521443",
    "plate": "B-GO5583",
    "geoCoordinate": {
      "latitude": 53.54424718,
      "longitude": 10.02881059
    },
    "fuelLevel": 38,
    "address": "Friesenstraße 4-15, 20097 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471830958
  },
  {
    "vin": "WME4533421K150055",
    "plate": "B-GO1147",
    "geoCoordinate": {
      "latitude": 53.46106324,
      "longitude": 9.98384794
    },
    "fuelLevel": 56,
    "address": "Großer Schippsee 20, 21073 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825599
  },
  {
    "vin": "WDD1760431J514679",
    "plate": "B-GO5463",
    "geoCoordinate": {
      "latitude": 53.5479677,
      "longitude": 9.86384648
    },
    "fuelLevel": 32,
    "address": "Lünkenberg 1, 22609 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471922833
  },
  {
    "vin": "WME4533421K038354",
    "plate": "B-GO3691",
    "geoCoordinate": {
      "latitude": 53.54811778,
      "longitude": 9.99702944
    },
    "fuelLevel": 90,
    "address": "Brandstwiete 1, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471936318
  },
  {
    "vin": "WME4533421K149478",
    "plate": "B-GO8685",
    "geoCoordinate": {
      "latitude": 53.53963484,
      "longitude": 9.99347252
    },
    "fuelLevel": 68,
    "address": "Unilever",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7948-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471792603
  },
  {
    "vin": "WME4533421K088121",
    "plate": "B-GO8133",
    "geoCoordinate": {
      "latitude": 53.54654472,
      "longitude": 9.91672083
    },
    "fuelLevel": 15,
    "address": "Philosophenweg 2, 22763 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471887633
  },
  {
    "vin": "WDC1569421J406384",
    "plate": "B-GO1044",
    "geoCoordinate": {
      "latitude": 53.61449434,
      "longitude": 10.04724904
    },
    "fuelLevel": 74,
    "address": "Edwin-Scharff-Ring 52, 22309 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471827955
  },
  {
    "vin": "WDD1760421J671530",
    "plate": "B-GO5101",
    "geoCoordinate": {
      "latitude": 53.59748202,
      "longitude": 10.04252766
    },
    "fuelLevel": 84,
    "address": "Fuhlsbüttler Str. 250, 22307 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471914011
  },
  {
    "vin": "WDD1760431J524356",
    "plate": "B-GO5685",
    "geoCoordinate": {
      "latitude": 53.55296968,
      "longitude": 10.02393659
    },
    "fuelLevel": 80,
    "address": "switchh Berliner Tor",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2928-4974-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471794586
  },
  {
    "vin": "WDD1760421J670658",
    "plate": "B-GO5073",
    "geoCoordinate": {
      "latitude": 53.57417615,
      "longitude": 10.08075814
    },
    "fuelLevel": 78,
    "address": "Neumann-Reichardt-Straße 27-33, 22041 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471557390
  },
  {
    "vin": "WDD1173421N478602",
    "plate": "B-GO8813",
    "geoCoordinate": {
      "latitude": 53.55288409,
      "longitude": 10.00174282
    },
    "fuelLevel": 76,
    "address": "Lilienstraße 30, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471688731
  },
  {
    "vin": "WDD1760121J515185",
    "plate": "B-GO5453",
    "geoCoordinate": {
      "latitude": 53.58128303,
      "longitude": 9.9422044
    },
    "fuelLevel": 80,
    "address": "Hartwig-Hesse-Straße 30, 20257 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471840347
  },
  {
    "vin": "WDD1760421J668440",
    "plate": "B-GO5041",
    "geoCoordinate": {
      "latitude": 53.55702172,
      "longitude": 9.99285193
    },
    "fuelLevel": 76,
    "address": "Neuer Jungfernstieg 25, 20354 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471406789
  },
  {
    "vin": "WME4533421K150204",
    "plate": "B-GO8743",
    "geoCoordinate": {
      "latitude": 53.60322889,
      "longitude": 10.02432056
    },
    "fuelLevel": 84,
    "address": "Überseering 17, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471939002
  },
  {
    "vin": "WDD1760421J670431",
    "plate": "B-GO5046",
    "geoCoordinate": {
      "latitude": 53.58863123,
      "longitude": 10.03301052
    },
    "fuelLevel": 70,
    "address": "switchh Saarlandstraße",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-2775-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471909265
  },
  {
    "vin": "WDD1760121J522729",
    "plate": "B-GO5656",
    "geoCoordinate": {
      "latitude": 53.545097,
      "longitude": 9.98667752
    },
    "fuelLevel": 40,
    "address": "Deichstraße 50, 20459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471915485
  },
  {
    "vin": "WDD1760431J516872",
    "plate": "B-GO5497",
    "geoCoordinate": {
      "latitude": 53.45986287,
      "longitude": 9.95107779
    },
    "fuelLevel": 82,
    "address": "Asklepios Harburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-2014-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471913893
  },
  {
    "vin": "WDD1760121J523161",
    "plate": "B-GO5657",
    "geoCoordinate": {
      "latitude": 53.54775491,
      "longitude": 9.98029249
    },
    "fuelLevel": 32,
    "address": "Wincklerstraße 2, 20459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471853486
  },
  {
    "vin": "WME4533421K149552",
    "plate": "B-GO4016",
    "geoCoordinate": {
      "latitude": 53.53859126,
      "longitude": 10.10388254
    },
    "fuelLevel": 65,
    "address": "Geesthang 5-8, 22111 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471923662
  },
  {
    "vin": "WDD1173521N587391",
    "plate": "B-GO6774",
    "geoCoordinate": {
      "latitude": 53.57647628,
      "longitude": 10.04017274
    },
    "fuelLevel": 56,
    "address": "Volksdorfer Str. 6-16, 22081 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "AMG1",
    "fuelType": "SUPER_PLUS",
    "primaryColor": "696U",
    "secondaryColor": "696O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471829948
  },
  {
    "vin": "WME4533421K072270",
    "plate": "B-GO4766",
    "geoCoordinate": {
      "latitude": 53.54907167,
      "longitude": 9.99798056
    },
    "fuelLevel": 56,
    "address": "Buceriusstraße 1, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471853767
  },
  {
    "vin": "WDC1569421J413368",
    "plate": "B-GO3067",
    "geoCoordinate": {
      "latitude": 53.58371186,
      "longitude": 9.95028701
    },
    "fuelLevel": 80,
    "address": "Julius-Vosseler-Straße 126, 22527 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471847041
  },
  {
    "vin": "WDD1760431J671744",
    "plate": "B-GO1351",
    "geoCoordinate": {
      "latitude": 53.60892207,
      "longitude": 10.02223393
    },
    "fuelLevel": 76,
    "address": "Halifaxweg, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825040
  },
  {
    "vin": "WME4533421K147292",
    "plate": "B-GO8691",
    "geoCoordinate": {
      "latitude": 53.57777314,
      "longitude": 10.0080297
    },
    "fuelLevel": 100,
    "address": "Bellevue 21, 22301 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471928647
  },
  {
    "vin": "WDD1173421N478605",
    "plate": "B-GO8810",
    "geoCoordinate": {
      "latitude": 53.57359238,
      "longitude": 9.92879718
    },
    "fuelLevel": 30,
    "address": "Marlowring 14-22, 22525 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471400389
  },
  {
    "vin": "WDD1760421J641601",
    "plate": "B-GO3055",
    "geoCoordinate": {
      "latitude": 53.48475234,
      "longitude": 10.21889638
    },
    "fuelLevel": 96,
    "address": "Holtenklinker Str. 11, 21029 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471881972
  },
  {
    "vin": "WDD1760121J520819",
    "plate": "B-GO5561",
    "geoCoordinate": {
      "latitude": 53.62127224,
      "longitude": 10.08276036
    },
    "fuelLevel": 98,
    "address": "Bramfelder Chaussee 364, 22175 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471852261
  },
  {
    "vin": "WME4533421K149636",
    "plate": "B-GO8699",
    "geoCoordinate": {
      "latitude": 53.57949485,
      "longitude": 10.11851706
    },
    "fuelLevel": 93,
    "address": "Albert-Schweitzer-Ring 13-15, 22045 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828618
  },
  {
    "vin": "WDD1173421N478594",
    "plate": "B-GO8817",
    "geoCoordinate": {
      "latitude": 53.5904897,
      "longitude": 10.11943924
    },
    "fuelLevel": 56,
    "address": "Tonndorfer Strand 45, 22045 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471895770
  },
  {
    "vin": "WDC1569431J432790",
    "plate": "B-GO1616",
    "geoCoordinate": {
      "latitude": 53.51334826,
      "longitude": 9.98926458
    },
    "fuelLevel": 18,
    "address": "Eckermannstraße 3, 21107 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471646431
  },
  {
    "vin": "WDD1760421J673810",
    "plate": "B-GO5150",
    "geoCoordinate": {
      "latitude": 53.63459335,
      "longitude": 10.00813374
    },
    "fuelLevel": 60,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471904966
  },
  {
    "vin": "WDC1569121J301762",
    "plate": "B-GO5617",
    "geoCoordinate": {
      "latitude": 53.55590776,
      "longitude": 9.98426416
    },
    "fuelLevel": 96,
    "address": "Caffamacherreihe 14, 20355 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "DIESEL",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471676685
  },
  {
    "vin": "WME4533421K149680",
    "plate": "B-GO8722",
    "geoCoordinate": {
      "latitude": 53.63458607,
      "longitude": 10.0080501
    },
    "fuelLevel": 100,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471497604
  },
  {
    "vin": "WDC1569431J424412",
    "plate": "B-GO1617",
    "geoCoordinate": {
      "latitude": 53.54896357,
      "longitude": 9.99529302
    },
    "fuelLevel": 70,
    "address": "Domstraße 14, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471820255
  },
  {
    "vin": "WDC1569421J442369",
    "plate": "B-GO1629",
    "geoCoordinate": {
      "latitude": 53.59792731,
      "longitude": 10.05064793
    },
    "fuelLevel": 62,
    "address": "Steilshooper Str. 205, 22307 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471920722
  },
  {
    "vin": "WDC1569431J292058",
    "plate": "B-GO5609",
    "geoCoordinate": {
      "latitude": 53.59086517,
      "longitude": 10.10636506
    },
    "fuelLevel": 64,
    "address": "Friedrich-Ebert-Damm 210, 22047 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "Gasoline",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471824606
  },
  {
    "vin": "WME4533421K087609",
    "plate": "B-GO8193",
    "geoCoordinate": {
      "latitude": 53.56127639,
      "longitude": 9.79859861
    },
    "fuelLevel": 100,
    "address": "Richard-Dehmel-Straße 23-25, 22587 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471939837
  },
  {
    "vin": "WDC1569431J302803",
    "plate": "B-GO5696",
    "geoCoordinate": {
      "latitude": 53.60026916,
      "longitude": 10.07071981
    },
    "fuelLevel": 90,
    "address": "Werner-Otto-Straße 7, 22179 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825461
  },
  {
    "vin": "WDD1760421J637843",
    "plate": "B-GO3063",
    "geoCoordinate": {
      "latitude": 53.63460477,
      "longitude": 10.0078995
    },
    "fuelLevel": 66,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471835085
  },
  {
    "vin": "WDD1760121J523930",
    "plate": "B-GO5653",
    "geoCoordinate": {
      "latitude": 53.6544794,
      "longitude": 10.09353542
    },
    "fuelLevel": 80,
    "address": "Heegbarg 24A, 22391 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471928935
  },
  {
    "vin": "WDD1760431J521607",
    "plate": "B-GO5586",
    "geoCoordinate": {
      "latitude": 53.55522264,
      "longitude": 9.97945018
    },
    "fuelLevel": 72,
    "address": "Holstenwall 5, 20355 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471879394
  },
  {
    "vin": "WDD1760121J516124",
    "plate": "B-GO5454",
    "geoCoordinate": {
      "latitude": 53.65128371,
      "longitude": 10.09661743
    },
    "fuelLevel": 64,
    "address": "Frahmredder 5A, 22393 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471867716
  },
  {
    "vin": "WDD1760431J516811",
    "plate": "B-GO5516",
    "geoCoordinate": {
      "latitude": 53.54503892,
      "longitude": 10.08672369
    },
    "fuelLevel": 24,
    "address": "Letzter Heller 4, 22111 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471528158
  },
  {
    "vin": "WDD1760121J521510",
    "plate": "B-GO5547",
    "geoCoordinate": {
      "latitude": 53.55932903,
      "longitude": 9.79211405
    },
    "fuelLevel": 62,
    "address": "Strandweg 96, 22587 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471878853
  },
  {
    "vin": "WDD1760431J675516",
    "plate": "B-GO1362",
    "geoCoordinate": {
      "latitude": 53.55311893,
      "longitude": 10.02403062
    },
    "fuelLevel": 78,
    "address": "switchh Berliner Tor",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2928-4974-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471918635
  },
  {
    "vin": "WDD1760121J524228",
    "plate": "B-GO5652",
    "geoCoordinate": {
      "latitude": 53.63461297,
      "longitude": 10.00787615
    },
    "fuelLevel": 68,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471784811
  },
  {
    "vin": "WDD1760421J671514",
    "plate": "B-GO5074",
    "geoCoordinate": {
      "latitude": 53.46238817,
      "longitude": 9.98581808
    },
    "fuelLevel": 32,
    "address": "Karnapp 32, 21079 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471826908
  },
  {
    "vin": "WDD1760421J638207",
    "plate": "B-GO3062",
    "geoCoordinate": {
      "latitude": 53.59881218,
      "longitude": 9.92497194
    },
    "fuelLevel": 88,
    "address": "Flamingoweg 3A, 22527 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471859339
  },
  {
    "vin": "WME4533421K149223",
    "plate": "B-GO8698",
    "geoCoordinate": {
      "latitude": 53.54871617,
      "longitude": 10.00235823
    },
    "fuelLevel": 34,
    "address": "Burchardstraße 14, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471823645
  },
  {
    "vin": "WDD1173421N559089",
    "plate": "B-GO3079",
    "geoCoordinate": {
      "latitude": 53.54733188,
      "longitude": 9.96779673
    },
    "fuelLevel": 50,
    "address": "Seewartenstraße 9, 20459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471922598
  },
  {
    "vin": "WDD1760421J668755",
    "plate": "B-GO5070",
    "geoCoordinate": {
      "latitude": 53.57340647,
      "longitude": 10.0302039
    },
    "fuelLevel": 12,
    "address": "Bostelreihe 2A, 22083 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471875779
  },
  {
    "vin": "WDC1569121J301101",
    "plate": "B-GO5540",
    "geoCoordinate": {
      "latitude": 53.67681764,
      "longitude": 10.00091761
    },
    "fuelLevel": 40,
    "address": "Langenhorner Chaussee 625, 22419 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "DIESEL",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471483729
  },
  {
    "vin": "WME4533421K036762",
    "plate": "B-GO3559",
    "geoCoordinate": {
      "latitude": 53.55696306,
      "longitude": 9.99281139
    },
    "fuelLevel": 62,
    "address": "Neuer Jungfernstieg 25, 20354 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471827663
  },
  {
    "vin": "WME4533421K085524",
    "plate": "B-GO8074",
    "geoCoordinate": {
      "latitude": 53.56835583,
      "longitude": 10.02018
    },
    "fuelLevel": 12,
    "address": "Erlenkamp 22A, 22087 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471930050
  },
  {
    "vin": "WME4533421K073163",
    "plate": "B-GO4839",
    "geoCoordinate": {
      "latitude": 53.58418694,
      "longitude": 10.08415639
    },
    "fuelLevel": 12,
    "address": "Dernauer Str. 40-44, 22047 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471936146
  },
  {
    "vin": "WDD1760431J671386",
    "plate": "B-GO1360",
    "geoCoordinate": {
      "latitude": 53.55437048,
      "longitude": 10.00268433
    },
    "fuelLevel": 98,
    "address": "Glockengießerwall 16-17, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471820762
  },
  {
    "vin": "WME4533421K087053",
    "plate": "B-GO8084",
    "geoCoordinate": {
      "latitude": 53.54694696,
      "longitude": 9.99823773
    },
    "fuelLevel": 100,
    "address": "Dovenfleet, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828639
  },
  {
    "vin": "WME4533421K146910",
    "plate": "B-GO1097",
    "geoCoordinate": {
      "latitude": 53.5639381,
      "longitude": 9.98887081
    },
    "fuelLevel": 93,
    "address": "Moorweidenstraße 22-24, 20146 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471924062
  },
  {
    "vin": "WDD1173421N559710",
    "plate": "B-GO3078",
    "geoCoordinate": {
      "latitude": 53.57137669,
      "longitude": 9.92280532
    },
    "fuelLevel": 70,
    "address": "Ruhrstraße 148, 22761 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471826627
  },
  {
    "vin": "WDD1760121J524067",
    "plate": "B-GO5648",
    "geoCoordinate": {
      "latitude": 53.60141813,
      "longitude": 10.01416547
    },
    "fuelLevel": 82,
    "address": "Wesselyring 51, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471862802
  },
  {
    "vin": "WME4533421K150179",
    "plate": "B-GO8727",
    "geoCoordinate": {
      "latitude": 53.59577418,
      "longitude": 9.94686268
    },
    "fuelLevel": 100,
    "address": "Parkspot_NDR_Lokstedt",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471835620
  },
  {
    "vin": "WDC1569121J300409",
    "plate": "B-GO5538",
    "geoCoordinate": {
      "latitude": 53.54997655,
      "longitude": 9.93487549
    },
    "fuelLevel": 100,
    "address": "Museumstraße 29, 22765 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "DIESEL",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471927534
  },
  {
    "vin": "WDD1760121J520057",
    "plate": "B-GO5560",
    "geoCoordinate": {
      "latitude": 53.65238988,
      "longitude": 10.01814323
    },
    "fuelLevel": 52,
    "address": "Tangstedter Landstraße 83, 22415 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471821783
  },
  {
    "vin": "WME4533421K148687",
    "plate": "B-GO6728",
    "geoCoordinate": {
      "latitude": 53.63422825,
      "longitude": 10.00709017
    },
    "fuelLevel": 65,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471549615
  },
  {
    "vin": "WDD1173421N478632",
    "plate": "B-GO8809",
    "geoCoordinate": {
      "latitude": 53.65237291,
      "longitude": 10.01819081
    },
    "fuelLevel": 98,
    "address": "Tangstedter Landstraße 83, 22415 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471824862
  },
  {
    "vin": "WDC1569121J303647",
    "plate": "B-GO5716",
    "geoCoordinate": {
      "latitude": 53.58004344,
      "longitude": 10.00336815
    },
    "fuelLevel": 44,
    "address": "Bellevue 40-46, 22301 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "Diesel",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471927708
  },
  {
    "vin": "WME4533421K065826",
    "plate": "B-GO4331",
    "geoCoordinate": {
      "latitude": 53.58489361,
      "longitude": 10.02793806
    },
    "fuelLevel": 78,
    "address": "Kaemmererufer 23, 22303 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471897260
  },
  {
    "vin": "WDC1569121J303199",
    "plate": "B-GO5619",
    "geoCoordinate": {
      "latitude": 53.59013809,
      "longitude": 9.93052573
    },
    "fuelLevel": 100,
    "address": "Kieler Str. 383, 22525 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "DIESEL",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471817364
  },
  {
    "vin": "WDC1569421J403282",
    "plate": "B-GO1077",
    "geoCoordinate": {
      "latitude": 53.54410378,
      "longitude": 9.98804137
    },
    "fuelLevel": 88,
    "address": "Kehrwieder 6, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471821300
  },
  {
    "vin": "WDD1760421J641418",
    "plate": "B-GO3029",
    "geoCoordinate": {
      "latitude": 53.55632233,
      "longitude": 9.98245573
    },
    "fuelLevel": 56,
    "address": "Dammtorwall 15-19, 20355 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471937805
  },
  {
    "vin": "WME4533421K040268",
    "plate": "B-GO1074",
    "geoCoordinate": {
      "latitude": 53.54637861,
      "longitude": 10.03930667
    },
    "fuelLevel": 100,
    "address": "Ausschläger Weg 73, 20537 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471880330
  },
  {
    "vin": "WDD1760121J523425",
    "plate": "B-GO5650",
    "geoCoordinate": {
      "latitude": 53.54202355,
      "longitude": 10.0895941
    },
    "fuelLevel": 100,
    "address": "Kolumbusstraße 8, 22113 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471885484
  },
  {
    "vin": "WDD1760431J513541",
    "plate": "B-GO5486",
    "geoCoordinate": {
      "latitude": 53.55323042,
      "longitude": 10.0002229
    },
    "fuelLevel": 76,
    "address": "Raboisen 28, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471566292
  },
  {
    "vin": "WDD1760431J523412",
    "plate": "B-GO5688",
    "geoCoordinate": {
      "latitude": 53.57911894,
      "longitude": 10.12188089
    },
    "fuelLevel": 66,
    "address": "Kuehnstraße 75a, 22045 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471916383
  },
  {
    "vin": "WDD1760431J514350",
    "plate": "B-GO5492",
    "geoCoordinate": {
      "latitude": 53.5718603,
      "longitude": 10.07729787
    },
    "fuelLevel": 18,
    "address": "Moojerstraße 2, 22041 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471875339
  },
  {
    "vin": "WDD1173421N557814",
    "plate": "B-GO3071",
    "geoCoordinate": {
      "latitude": 53.53962017,
      "longitude": 9.99339262
    },
    "fuelLevel": 68,
    "address": "Unilever",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7948-0000001e9ac4",
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471826033
  },
  {
    "vin": "WDD1760431J514710",
    "plate": "B-GO5502",
    "geoCoordinate": {
      "latitude": 53.57404347,
      "longitude": 10.02294008
    },
    "fuelLevel": 62,
    "address": "Shell-Station, Winterhuder Weg 72, 22085 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2919-1477-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471926559
  },
  {
    "vin": "WDC1569431J300494",
    "plate": "B-GO5591",
    "geoCoordinate": {
      "latitude": 53.58144805,
      "longitude": 9.9492774
    },
    "fuelLevel": 62,
    "address": "Lutterothstraße 62, 20255 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471863698
  },
  {
    "vin": "WDC1569431J301800",
    "plate": "B-GO5715",
    "geoCoordinate": {
      "latitude": 53.54922267,
      "longitude": 10.01440216
    },
    "fuelLevel": 60,
    "address": "Rosenallee 24-26, 20097 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471931237
  },
  {
    "vin": "WME4533421K040117",
    "plate": "B-GO1065",
    "geoCoordinate": {
      "latitude": 53.55036056,
      "longitude": 9.98205111
    },
    "fuelLevel": 28,
    "address": "Alter Steinweg 11, 20459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471822749
  },
  {
    "vin": "WDD1760431J515808",
    "plate": "B-GO5511",
    "geoCoordinate": {
      "latitude": 53.62347219,
      "longitude": 10.01316597
    },
    "fuelLevel": 88,
    "address": "Röntgenstraße 5, 22335 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825425
  },
  {
    "vin": "WDD1760431J515702",
    "plate": "B-GO5501",
    "geoCoordinate": {
      "latitude": 53.54437027,
      "longitude": 9.92311061
    },
    "fuelLevel": 100,
    "address": "Neumühlen 13-15, 22763 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471865634
  },
  {
    "vin": "WME4533421K149341",
    "plate": "B-GO8750",
    "geoCoordinate": {
      "latitude": 53.55016281,
      "longitude": 10.00317857
    },
    "fuelLevel": 84,
    "address": "Steinstraße 10, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471897752
  },
  {
    "vin": "WDD1760431J671152",
    "plate": "B-GO1355",
    "geoCoordinate": {
      "latitude": 53.55639724,
      "longitude": 9.98261674
    },
    "fuelLevel": 98,
    "address": "Dammtorwall 15-19, 20355 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471779285
  },
  {
    "vin": "WDC1569431J292439",
    "plate": "B-GO5614",
    "geoCoordinate": {
      "latitude": 53.49001279,
      "longitude": 10.20517054
    },
    "fuelLevel": 58,
    "address": "switchh Bergedorf",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-0473-0000001e9ac4",
    "buildSeries": "X156",
    "fuelType": "Gasoline",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471821219
  },
  {
    "vin": "WDC1569121J301628",
    "plate": "B-GO5621",
    "geoCoordinate": {
      "latitude": 53.56646435,
      "longitude": 9.9183531
    },
    "fuelLevel": 100,
    "address": "Bornkampsweg 29, 22761 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "DIESEL",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471931123
  },
  {
    "vin": "WDD1760421J667056",
    "plate": "B-GO5198",
    "geoCoordinate": {
      "latitude": 53.56010772,
      "longitude": 9.9915775
    },
    "fuelLevel": 60,
    "address": "Alsterglacis 1, 20354 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471820458
  },
  {
    "vin": "WDD1760431J672392",
    "plate": "B-GO1358",
    "geoCoordinate": {
      "latitude": 53.49002492,
      "longitude": 10.20526579
    },
    "fuelLevel": 30,
    "address": "switchh Bergedorf",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-0473-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825086
  },
  {
    "vin": "WDD1173421N558534",
    "plate": "B-GO3072",
    "geoCoordinate": {
      "latitude": 53.49005237,
      "longitude": 10.20528017
    },
    "fuelLevel": 66,
    "address": "switchh Bergedorf",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-0473-0000001e9ac4",
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471785305
  },
  {
    "vin": "WDD1173421N478704",
    "plate": "B-GO8782",
    "geoCoordinate": {
      "latitude": 53.54490769,
      "longitude": 9.99042019
    },
    "fuelLevel": 40,
    "address": "Bei den Mühren 5, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471879346
  },
  {
    "vin": "WDD1760431J522220",
    "plate": "B-GO5682",
    "geoCoordinate": {
      "latitude": 53.63454226,
      "longitude": 10.00760602
    },
    "fuelLevel": 56,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471826874
  },
  {
    "vin": "WDD1173521N588317",
    "plate": "B-GO6771",
    "geoCoordinate": {
      "latitude": 53.58394716,
      "longitude": 10.07147161
    },
    "fuelLevel": 100,
    "address": "Oberschlesische Str. 57, 22049 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "AMG1",
    "fuelType": "SUPER_PLUS",
    "primaryColor": "696U",
    "secondaryColor": "696O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828683
  },
  {
    "vin": "WME4533421K150102",
    "plate": "B-GO3926",
    "geoCoordinate": {
      "latitude": 53.57338867,
      "longitude": 9.92829132
    },
    "fuelLevel": 81,
    "address": "Marlowring 23, 22525 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471292403
  },
  {
    "vin": "WDD1173521N587253",
    "plate": "B-GO6770",
    "geoCoordinate": {
      "latitude": 53.56827485,
      "longitude": 9.86542082
    },
    "fuelLevel": 100,
    "address": "Oelsnerring 151, 22609 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "AMG1",
    "fuelType": "SUPER_PLUS",
    "primaryColor": "696U",
    "secondaryColor": "696O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471745540
  },
  {
    "vin": "WDC1569431J439599",
    "plate": "B-GO6827",
    "geoCoordinate": {
      "latitude": 53.55199396,
      "longitude": 9.98698871
    },
    "fuelLevel": 98,
    "address": "Parkhaus Bleichenhof, Parkdeck R",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2918-9885-0000001e9ac4",
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471918918
  },
  {
    "vin": "WME4533421K150409",
    "plate": "B-GO8712",
    "geoCoordinate": {
      "latitude": 53.60024757,
      "longitude": 10.07072426
    },
    "fuelLevel": 100,
    "address": "Otto",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7901-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825293
  },
  {
    "vin": "WDD1760121J521274",
    "plate": "B-GO5563",
    "geoCoordinate": {
      "latitude": 53.50084774,
      "longitude": 9.99381374
    },
    "fuelLevel": 60,
    "address": "Reinstorfweg 12, 21107 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471611090
  },
  {
    "vin": "WDC1569421J405356",
    "plate": "B-GO1071",
    "geoCoordinate": {
      "latitude": 53.60744028,
      "longitude": 10.03900601
    },
    "fuelLevel": 60,
    "address": "Fuhlsbüttler Str. 482, 22309 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471866689
  },
  {
    "vin": "WME4533421K070915",
    "plate": "B-GO4751",
    "geoCoordinate": {
      "latitude": 53.54880972,
      "longitude": 9.99524667
    },
    "fuelLevel": 34,
    "address": "Domstraße 18, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471912299
  },
  {
    "vin": "WME4533421K040362",
    "plate": "B-GO1084",
    "geoCoordinate": {
      "latitude": 53.561685,
      "longitude": 10.01624917
    },
    "fuelLevel": 100,
    "address": "Schweimlerstraße 1, 22087 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471857448
  },
  {
    "vin": "WDD1760421J670134",
    "plate": "B-GO5095",
    "geoCoordinate": {
      "latitude": 53.54459519,
      "longitude": 9.9298715
    },
    "fuelLevel": 60,
    "address": "Große Elbstraße 149-273, 22767 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471939098
  },
  {
    "vin": "WDD1760431J521436",
    "plate": "B-GO5584",
    "geoCoordinate": {
      "latitude": 53.46500257,
      "longitude": 9.97907013
    },
    "fuelLevel": 52,
    "address": "Seehafenbrücke, 21079 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825632
  },
  {
    "vin": "WDC1569431J301745",
    "plate": "B-GO5714",
    "geoCoordinate": {
      "latitude": 53.49011051,
      "longitude": 10.20525263
    },
    "fuelLevel": 96,
    "address": "switchh Bergedorf",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-0473-0000001e9ac4",
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471845124
  },
  {
    "vin": "WDC1569121J296267",
    "plate": "B-GO5525",
    "geoCoordinate": {
      "latitude": 53.54194715,
      "longitude": 10.00197441
    },
    "fuelLevel": 98,
    "address": "Hongkongstraße 19, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "DIESEL",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471903984
  },
  {
    "vin": "WDD1760431J517425",
    "plate": "B-GO5529",
    "geoCoordinate": {
      "latitude": 53.60685552,
      "longitude": 9.98133377
    },
    "fuelLevel": 82,
    "address": "Woltersstraße 6-10, 22453 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471847864
  },
  {
    "vin": "WDC1569421J404669",
    "plate": "B-GO1012",
    "geoCoordinate": {
      "latitude": 53.62700317,
      "longitude": 10.01498619
    },
    "fuelLevel": 82,
    "address": "Ratsmühlendamm 69, 22335 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471925442
  },
  {
    "vin": "WME4533421K149331",
    "plate": "B-GO8686",
    "geoCoordinate": {
      "latitude": 53.54840765,
      "longitude": 9.99948395
    },
    "fuelLevel": 84,
    "address": "Kattrepelsbrücke 1, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471824571
  },
  {
    "vin": "WDD1760421J667175",
    "plate": "B-GO5186",
    "geoCoordinate": {
      "latitude": 53.55532157,
      "longitude": 9.92356685
    },
    "fuelLevel": 78,
    "address": "Friedensallee 39, 22765 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471871421
  },
  {
    "vin": "WDD1760421J668906",
    "plate": "B-GO5044",
    "geoCoordinate": {
      "latitude": 53.55245777,
      "longitude": 10.0089364
    },
    "fuelLevel": 82,
    "address": "Steintorpl. 1, 20099 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471891883
  },
  {
    "vin": "WDD1760421J641592",
    "plate": "B-GO3047",
    "geoCoordinate": {
      "latitude": 53.6226895,
      "longitude": 9.94248678
    },
    "fuelLevel": 84,
    "address": "Bindfeldweg 6, 22459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471911058
  },
  {
    "vin": "WME4533421K037428",
    "plate": "B-GO3688",
    "geoCoordinate": {
      "latitude": 53.54523389,
      "longitude": 10.00205111
    },
    "fuelLevel": 81,
    "address": "Brooktorkai 22, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471927924
  },
  {
    "vin": "WDD1760421J667840",
    "plate": "B-GO6807",
    "geoCoordinate": {
      "latitude": 53.65494602,
      "longitude": 10.09472192
    },
    "fuelLevel": 58,
    "address": "car2go AEZ temp",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-1462-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828682
  },
  {
    "vin": "WME4533421K149177",
    "plate": "B-GO8732",
    "geoCoordinate": {
      "latitude": 53.55675491,
      "longitude": 10.0149427
    },
    "fuelLevel": 18,
    "address": "Rostocker Str. 28-36, 20099 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471932527
  },
  {
    "vin": "WDD1760121J522054",
    "plate": "B-GO5554",
    "geoCoordinate": {
      "latitude": 53.61561859,
      "longitude": 10.06189374
    },
    "fuelLevel": 26,
    "address": "Erich-Ziegel-Ring 35-37, 22309 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471841789
  },
  {
    "vin": "WDD1760431J640749",
    "plate": "B-GO3018",
    "geoCoordinate": {
      "latitude": 53.59517019,
      "longitude": 10.05819635
    },
    "fuelLevel": 84,
    "address": "Heinrich-Helbing-Straße 21-23, 22177 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471907386
  },
  {
    "vin": "WME4533421K037124",
    "plate": "B-GO3669",
    "geoCoordinate": {
      "latitude": 53.54928028,
      "longitude": 9.982265
    },
    "fuelLevel": 53,
    "address": "Michaelisstraße 20, 20459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471873640
  },
  {
    "vin": "WDD1760421J669752",
    "plate": "B-GO5067",
    "geoCoordinate": {
      "latitude": 53.56078802,
      "longitude": 9.98886264
    },
    "fuelLevel": 64,
    "address": "Dag-Hammarskjöld-Platz 15, 20354 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471916859
  },
  {
    "vin": "WDD1760431J520353",
    "plate": "B-GO5590",
    "geoCoordinate": {
      "latitude": 53.55319442,
      "longitude": 10.02381151
    },
    "fuelLevel": 56,
    "address": "switchh Berliner Tor",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2928-4974-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471936682
  },
  {
    "vin": "WDD1760421J674627",
    "plate": "B-GO5158",
    "geoCoordinate": {
      "latitude": 53.49005391,
      "longitude": 10.20531823
    },
    "fuelLevel": 30,
    "address": "switchh Bergedorf",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-0473-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828221
  },
  {
    "vin": "WDC1569421J436952",
    "plate": "B-GO1642",
    "geoCoordinate": {
      "latitude": 53.57556949,
      "longitude": 10.07582758
    },
    "fuelLevel": 44,
    "address": "Wandsbeker Zollstraße 44, 22041 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471868743
  },
  {
    "vin": "WME4533421K149245",
    "plate": "B-GO1143",
    "geoCoordinate": {
      "latitude": 53.54596224,
      "longitude": 9.98503604
    },
    "fuelLevel": 12,
    "address": "Rödingsmarkt 43, 20459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471775426
  },
  {
    "vin": "WME4533421K071795",
    "plate": "B-GO4635",
    "geoCoordinate": {
      "latitude": 53.46258056,
      "longitude": 9.98477194
    },
    "fuelLevel": 87,
    "address": "Buxtehuder Str. 5, 21073 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471906881
  },
  {
    "vin": "WME4533421K036333",
    "plate": "B-GO3593",
    "geoCoordinate": {
      "latitude": 53.57394667,
      "longitude": 10.10411611
    },
    "fuelLevel": 93,
    "address": "Holstenhofweg 46, 22043 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471771668
  },
  {
    "vin": "WME4533421K075822",
    "plate": "B-GO4965",
    "geoCoordinate": {
      "latitude": 53.47202472,
      "longitude": 9.92128444
    },
    "fuelLevel": 87,
    "address": "Am Radeland 124, 21079 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471917584
  },
  {
    "vin": "WDD1173421N478866",
    "plate": "B-GO8806",
    "geoCoordinate": {
      "latitude": 53.62719729,
      "longitude": 10.08724772
    },
    "fuelLevel": 76,
    "address": "Maisredder 9, 22175 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471080411
  },
  {
    "vin": "WDD1760121J523119",
    "plate": "B-GO5633",
    "geoCoordinate": {
      "latitude": 53.65492576,
      "longitude": 10.09470283
    },
    "fuelLevel": 36,
    "address": "car2go AEZ temp",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-1462-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471617520
  },
  {
    "vin": "WDD1760121J523535",
    "plate": "B-GO5663",
    "geoCoordinate": {
      "latitude": 53.54486521,
      "longitude": 9.93191692
    },
    "fuelLevel": 56,
    "address": "Elbberg 9, 22767 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471846619
  },
  {
    "vin": "WDC1569431J301829",
    "plate": "B-GO5694",
    "geoCoordinate": {
      "latitude": 53.5445748,
      "longitude": 10.09281065
    },
    "fuelLevel": 96,
    "address": "Weddestraße 77-81, 22111 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "650",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471891161
  },
  {
    "vin": "WDD1760421J671134",
    "plate": "B-GO5082",
    "geoCoordinate": {
      "latitude": 53.55656497,
      "longitude": 9.99236346
    },
    "fuelLevel": 44,
    "address": "Neuer Jungfernstieg 19, 20354 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825329
  },
  {
    "vin": "WDC1569421J442016",
    "plate": "B-GO1627",
    "geoCoordinate": {
      "latitude": 53.57187853,
      "longitude": 9.95205508
    },
    "fuelLevel": 98,
    "address": "Fruchtallee 110, 20259 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471869529
  },
  {
    "vin": "WME4533421K149409",
    "plate": "B-GO3741",
    "geoCoordinate": {
      "latitude": 53.63404655,
      "longitude": 10.00711832
    },
    "fuelLevel": 68,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471910242
  },
  {
    "vin": "WME4533421K035861",
    "plate": "B-GO3464",
    "geoCoordinate": {
      "latitude": 53.62493806,
      "longitude": 10.03173833
    },
    "fuelLevel": 50,
    "address": "Im Grünen Grunde 20A, 22337 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471824028
  },
  {
    "vin": "WDC1569421J442784",
    "plate": "B-GO1637",
    "geoCoordinate": {
      "latitude": 53.60070694,
      "longitude": 9.99489469
    },
    "fuelLevel": 92,
    "address": "switchh Lattenkamp",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2919-0886-0000001e9ac4",
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471841105
  },
  {
    "vin": "WDD1173421N478625",
    "plate": "B-GO8789",
    "geoCoordinate": {
      "latitude": 53.55934543,
      "longitude": 9.98026281
    },
    "fuelLevel": 76,
    "address": "Bei den Kirchhöfen, 20355 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471866930
  },
  {
    "vin": "WDD1760421J668586",
    "plate": "B-GO5043",
    "geoCoordinate": {
      "latitude": 53.54317229,
      "longitude": 10.02969883
    },
    "fuelLevel": 90,
    "address": "Friesenstraße 3, 20097 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471812230
  },
  {
    "vin": "WME4533421K069522",
    "plate": "B-GO4550",
    "geoCoordinate": {
      "latitude": 53.55484,
      "longitude": 9.92865167
    },
    "fuelLevel": 100,
    "address": "Bahrenfelder Str. 182-186, 22765 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471915174
  },
  {
    "vin": "WME4533421K149712",
    "plate": "B-GO1129",
    "geoCoordinate": {
      "latitude": 53.5483815,
      "longitude": 9.99943493
    },
    "fuelLevel": 100,
    "address": "Kattrepelsbrücke 1, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471826032
  },
  {
    "vin": "WDD1760431J670806",
    "plate": "B-GO1350",
    "geoCoordinate": {
      "latitude": 53.60748252,
      "longitude": 10.07370164
    },
    "fuelLevel": 46,
    "address": "Hornungweg 17, 22179 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471901796
  },
  {
    "vin": "WME4533421K150379",
    "plate": "B-GO1093",
    "geoCoordinate": {
      "latitude": 53.56934871,
      "longitude": 10.07880571
    },
    "fuelLevel": 78,
    "address": "Marienring 6, 22043 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471897738
  },
  {
    "vin": "WDD1173421N558275",
    "plate": "B-GO3075",
    "geoCoordinate": {
      "latitude": 53.54864775,
      "longitude": 10.00169878
    },
    "fuelLevel": 68,
    "address": "Fischertwiete 2, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471733526
  },
  {
    "vin": "WME4533421K087429",
    "plate": "B-GO8222",
    "geoCoordinate": {
      "latitude": 53.54714,
      "longitude": 9.96407583
    },
    "fuelLevel": 81,
    "address": "Bernhard-Nocht-Straße 99, 20359 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471921691
  },
  {
    "vin": "WDC1569121J303483",
    "plate": "B-GO5626",
    "geoCoordinate": {
      "latitude": 53.57098999,
      "longitude": 9.92159272
    },
    "fuelLevel": 92,
    "address": "Holstenkamp 56A, 22525 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "DIESEL",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471826938
  },
  {
    "vin": "WME4533421K069583",
    "plate": "B-GO4769",
    "geoCoordinate": {
      "latitude": 53.58594028,
      "longitude": 9.99339417
    },
    "fuelLevel": 84,
    "address": "Geffckenstraße 4, 20249 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828379
  },
  {
    "vin": "WDD1760431J673047",
    "plate": "B-GO1357",
    "geoCoordinate": {
      "latitude": 53.58898053,
      "longitude": 9.9630737
    },
    "fuelLevel": 64,
    "address": "Veilchenweg 29, 22529 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471933602
  },
  {
    "vin": "WDD1173421N478873",
    "plate": "B-GO8781",
    "geoCoordinate": {
      "latitude": 53.5698126,
      "longitude": 10.1058916
    },
    "fuelLevel": 54,
    "address": "Holstenhofweg 85, 22043 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471754669
  },
  {
    "vin": "WDC1569431J302504",
    "plate": "B-GO5707",
    "geoCoordinate": {
      "latitude": 53.53502402,
      "longitude": 10.03946856
    },
    "fuelLevel": 64,
    "address": "Lindleystraße 18, 20539 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471719704
  },
  {
    "vin": "WDC1569421J403106",
    "plate": "B-GO1082",
    "geoCoordinate": {
      "latitude": 53.57092737,
      "longitude": 10.09784716
    },
    "fuelLevel": 86,
    "address": "Schimmelmannstraße 45, 22043 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471904971
  },
  {
    "vin": "WME4533421K072544",
    "plate": "B-GO4672",
    "geoCoordinate": {
      "latitude": 53.56375611,
      "longitude": 9.97961111
    },
    "fuelLevel": 71,
    "address": "Tiergartenstraße, 20355 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471906245
  },
  {
    "vin": "WDD1173421N478309",
    "plate": "B-GO8812",
    "geoCoordinate": {
      "latitude": 53.55100245,
      "longitude": 10.04269876
    },
    "fuelLevel": 98,
    "address": "Wendenstraße 309, 20537 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471939289
  },
  {
    "vin": "WDC1569431J294730",
    "plate": "B-GO5523",
    "geoCoordinate": {
      "latitude": 53.61299912,
      "longitude": 10.02071407
    },
    "fuelLevel": 52,
    "address": "Sengelmannstraße 53, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471835226
  },
  {
    "vin": "WDD1173421N558581",
    "plate": "B-GO3077",
    "geoCoordinate": {
      "latitude": 53.55610006,
      "longitude": 9.98405803
    },
    "fuelLevel": 80,
    "address": "Caffamacherreihe 14, 20355 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825094
  },
  {
    "vin": "WDD1760431J640461",
    "plate": "B-GO3024",
    "geoCoordinate": {
      "latitude": 53.56174928,
      "longitude": 9.7921404
    },
    "fuelLevel": 96,
    "address": "Falkentaler Weg 12, 22587 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471658975
  },
  {
    "vin": "WDC1569431J424571",
    "plate": "B-GO1623",
    "geoCoordinate": {
      "latitude": 53.54312631,
      "longitude": 9.98911234
    },
    "fuelLevel": 74,
    "address": "Am Sandtorkai 32-33, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471922382
  },
  {
    "vin": "WDC1569421J407161",
    "plate": "B-GO1054",
    "geoCoordinate": {
      "latitude": 53.53964528,
      "longitude": 9.99334276
    },
    "fuelLevel": 74,
    "address": "Am Strandkai 3, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471896994
  },
  {
    "vin": "WDC1569431J427675",
    "plate": "B-GO1609",
    "geoCoordinate": {
      "latitude": 53.50171278,
      "longitude": 9.99399609
    },
    "fuelLevel": 64,
    "address": "Reinstorfweg 3, 21107 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 470572476
  },
  {
    "vin": "WDD1760431J675062",
    "plate": "B-GO1356",
    "geoCoordinate": {
      "latitude": 53.55401934,
      "longitude": 10.00485922
    },
    "fuelLevel": 74,
    "address": "switchh Hauptbahnhof",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2919-1357-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471928649
  },
  {
    "vin": "WDD1173421N478855",
    "plate": "B-GO8780",
    "geoCoordinate": {
      "latitude": 53.61287822,
      "longitude": 9.95103248
    },
    "fuelLevel": 100,
    "address": "Mercedes Benz Kollaustraße",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2928-1869-0000001e9ac4",
    "buildSeries": "C117",
    "fuelType": "UNKNOWN",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825669
  },
  {
    "vin": "WDD1760431J639772",
    "plate": "B-GO3019",
    "geoCoordinate": {
      "latitude": 53.54758172,
      "longitude": 10.01043525
    },
    "fuelLevel": 56,
    "address": "Högerdamm 3, 20097 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471598063
  },
  {
    "vin": "WDC1569421J443010",
    "plate": "B-GO1636",
    "geoCoordinate": {
      "latitude": 53.65488022,
      "longitude": 10.09468971
    },
    "fuelLevel": 80,
    "address": "car2go AEZ temp",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-1462-0000001e9ac4",
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471821144
  },
  {
    "vin": "WME4533421K149539",
    "plate": "B-GO8768",
    "geoCoordinate": {
      "latitude": 53.55716235,
      "longitude": 9.99285256
    },
    "fuelLevel": 56,
    "address": "Neuer Jungfernstieg 21, 20354 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471826776
  },
  {
    "vin": "WME4533421K147165",
    "plate": "B-GO8719",
    "geoCoordinate": {
      "latitude": 53.58404236,
      "longitude": 10.1259108
    },
    "fuelLevel": 100,
    "address": "Studio Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471867246
  },
  {
    "vin": "WDD1760431J523405",
    "plate": "B-GO5691",
    "geoCoordinate": {
      "latitude": 53.57941429,
      "longitude": 9.95076383
    },
    "fuelLevel": 58,
    "address": "Schwenckestraße 89-91, 20255 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471878935
  },
  {
    "vin": "WME4533421K070008",
    "plate": "B-GO4655",
    "geoCoordinate": {
      "latitude": 53.5484825,
      "longitude": 9.99884
    },
    "fuelLevel": 100,
    "address": "Hopfensack 22, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471749325
  },
  {
    "vin": "WDD1760431J516634",
    "plate": "B-GO5535",
    "geoCoordinate": {
      "latitude": 53.58207968,
      "longitude": 10.10859524
    },
    "fuelLevel": 98,
    "address": "L82 156-158, 22045 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471929151
  },
  {
    "vin": "WDC1569421J406385",
    "plate": "B-GO1052",
    "geoCoordinate": {
      "latitude": 53.5341343,
      "longitude": 10.03392433
    },
    "fuelLevel": 36,
    "address": "Billwerder Neuer Deich 40, 20539 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471660231
  },
  {
    "vin": "WME4533421K072522",
    "plate": "B-GO4547",
    "geoCoordinate": {
      "latitude": 53.49011111,
      "longitude": 10.20976
    },
    "fuelLevel": 93,
    "address": "Ernst-Mantius-Straße 4, 21029 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471862855
  },
  {
    "vin": "WME4533421K149609",
    "plate": "B-GO8736",
    "geoCoordinate": {
      "latitude": 53.56835786,
      "longitude": 9.96199237
    },
    "fuelLevel": 59,
    "address": "Fettstraße 38, 20357 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471922946
  },
  {
    "vin": "WDC1569431J301551",
    "plate": "B-GO5702",
    "geoCoordinate": {
      "latitude": 53.55393452,
      "longitude": 10.00496123
    },
    "fuelLevel": 34,
    "address": "switchh Hauptbahnhof",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2919-1357-0000001e9ac4",
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471767705
  },
  {
    "vin": "WDD1760421J673347",
    "plate": "B-GO5165",
    "geoCoordinate": {
      "latitude": 53.5928074,
      "longitude": 9.93822358
    },
    "fuelLevel": 54,
    "address": "Koppelstraße 24-26, 22527 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471822168
  },
  {
    "vin": "WDD1760421J668085",
    "plate": "B-GO5042",
    "geoCoordinate": {
      "latitude": 53.59736468,
      "longitude": 10.0700052
    },
    "fuelLevel": 98,
    "address": "Haldesdorfer Str. 30A, 22179 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471907101
  },
  {
    "vin": "WDC1569431J301989",
    "plate": "B-GO5713",
    "geoCoordinate": {
      "latitude": 53.5671797,
      "longitude": 9.8975275
    },
    "fuelLevel": 80,
    "address": "Theodorstraße 11, 22761 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471900216
  },
  {
    "vin": "WDD1760121J524563",
    "plate": "B-GO5662",
    "geoCoordinate": {
      "latitude": 53.54522208,
      "longitude": 10.00219806
    },
    "fuelLevel": 100,
    "address": "Brooktorkai 22, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471453998
  },
  {
    "vin": "WDC1569431J302479",
    "plate": "B-GO5704",
    "geoCoordinate": {
      "latitude": 53.65238439,
      "longitude": 10.01796034
    },
    "fuelLevel": 30,
    "address": "Tangstedter Landstraße 85, 22415 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "761",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471887242
  },
  {
    "vin": "WDD1760421J641381",
    "plate": "B-GO3034",
    "geoCoordinate": {
      "latitude": 53.5172461,
      "longitude": 9.98344767
    },
    "fuelLevel": 60,
    "address": "Rudolfstraße 9, 21107 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471722483
  },
  {
    "vin": "WDD1173421N478424",
    "plate": "B-GO8799",
    "geoCoordinate": {
      "latitude": 53.60455262,
      "longitude": 10.0188628
    },
    "fuelLevel": 74,
    "address": "Überseering 35, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471746128
  },
  {
    "vin": "WDC1569431J302173",
    "plate": "B-GO5706",
    "geoCoordinate": {
      "latitude": 53.49006327,
      "longitude": 10.20491993
    },
    "fuelLevel": 80,
    "address": "switchh Bergedorf",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-0473-0000001e9ac4",
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "761",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471251474
  },
  {
    "vin": "WDD1760421J644422",
    "plate": "B-GO3052",
    "geoCoordinate": {
      "latitude": 53.54827444,
      "longitude": 10.00058437
    },
    "fuelLevel": 96,
    "address": "Depenau 2, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471796568
  },
  {
    "vin": "WDC1569431J425042",
    "plate": "B-GO9165",
    "geoCoordinate": {
      "latitude": 53.5429771,
      "longitude": 9.98881043
    },
    "fuelLevel": 64,
    "address": "Am Sandtorkai 64-66, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471909992
  },
  {
    "vin": "WDC1569421J436509",
    "plate": "B-GO1644",
    "geoCoordinate": {
      "latitude": 53.55921473,
      "longitude": 10.01373316
    },
    "fuelLevel": 62,
    "address": "Lange Reihe 105, 20099 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471870975
  },
  {
    "vin": "WDD1760421J639495",
    "plate": "B-GO3059",
    "geoCoordinate": {
      "latitude": 53.48639555,
      "longitude": 10.21305157
    },
    "fuelLevel": 70,
    "address": "Bergedorfer Str. 138, 21029 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 470747904
  },
  {
    "vin": "WDD1760431J639000",
    "plate": "B-GO3022",
    "geoCoordinate": {
      "latitude": 53.65166765,
      "longitude": 10.01843903
    },
    "fuelLevel": 62,
    "address": "Tangstedter Landstraße 79, 22415 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471474712
  },
  {
    "vin": "WDC1569421J440199",
    "plate": "B-GO1643",
    "geoCoordinate": {
      "latitude": 53.61343886,
      "longitude": 10.02525991
    },
    "fuelLevel": 18,
    "address": "Elisabeth-Flügge-Straße 1a, 22337 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471824691
  },
  {
    "vin": "WDD1760121J524010",
    "plate": "B-GO5664",
    "geoCoordinate": {
      "latitude": 53.601483,
      "longitude": 10.01435369
    },
    "fuelLevel": 58,
    "address": "Wesselyring 51, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471425701
  },
  {
    "vin": "WDC1569431J428705",
    "plate": "B-GO1605",
    "geoCoordinate": {
      "latitude": 53.65033343,
      "longitude": 10.09736943
    },
    "fuelLevel": 94,
    "address": "Stadtbahnstraße 84, 22393 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471107722
  },
  {
    "vin": "WDD1173421N478633",
    "plate": "B-GO8790",
    "geoCoordinate": {
      "latitude": 53.61290603,
      "longitude": 9.95113995
    },
    "fuelLevel": 48,
    "address": "Mercedes Benz Kollaustraße",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2928-1869-0000001e9ac4",
    "buildSeries": "C117",
    "fuelType": "UNKNOWN",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471783460
  },
  {
    "vin": "WME4533421K148042",
    "plate": "B-GO8729",
    "geoCoordinate": {
      "latitude": 53.56656452,
      "longitude": 9.87805384
    },
    "fuelLevel": 28,
    "address": "Groß Flottbeker Str. 58B, 22607 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471886770
  },
  {
    "vin": "WME4533421K086439",
    "plate": "B-GO8216",
    "geoCoordinate": {
      "latitude": 53.60022876,
      "longitude": 10.0707657
    },
    "fuelLevel": 75,
    "address": "Otto",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7901-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471827693
  },
  {
    "vin": "WDD1760421J671388",
    "plate": "B-GO5062",
    "geoCoordinate": {
      "latitude": 53.59111612,
      "longitude": 10.10686832
    },
    "fuelLevel": 74,
    "address": "Friedrich-Ebert-Damm 210, 22047 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471725441
  },
  {
    "vin": "WME4533421K149517",
    "plate": "B-GO8702",
    "geoCoordinate": {
      "latitude": 53.67509919,
      "longitude": 9.99835941
    },
    "fuelLevel": 59,
    "address": "Essener Str. 93-97, 22419 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471821242
  },
  {
    "vin": "WME4533421K149708",
    "plate": "B-GO8720",
    "geoCoordinate": {
      "latitude": 53.54534897,
      "longitude": 10.00227876
    },
    "fuelLevel": 100,
    "address": "Brooktorkai 22, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471906848
  },
  {
    "vin": "WME4533421K073233",
    "plate": "B-GO4808",
    "geoCoordinate": {
      "latitude": 53.63463583,
      "longitude": 10.00762278
    },
    "fuelLevel": 31,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471827922
  },
  {
    "vin": "WDD1173521N588243",
    "plate": "B-GO6772",
    "geoCoordinate": {
      "latitude": 53.55785656,
      "longitude": 9.92097271
    },
    "fuelLevel": 100,
    "address": "Daimlerstraße 19-21, 22763 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "AMG1",
    "fuelType": "SUPER_PLUS",
    "primaryColor": "696U",
    "secondaryColor": "696O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471826570
  },
  {
    "vin": "WDD1760431J514734",
    "plate": "B-GO5491",
    "geoCoordinate": {
      "latitude": 53.57353599,
      "longitude": 9.92506956
    },
    "fuelLevel": 70,
    "address": "Rondenbarg 6, 22525 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828572
  },
  {
    "vin": "WME4533421K072917",
    "plate": "B-GO4804",
    "geoCoordinate": {
      "latitude": 53.55079417,
      "longitude": 10.00643861
    },
    "fuelLevel": 56,
    "address": "metronom Servicecenter, Steintorwall 15, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471892913
  },
  {
    "vin": "WME4533421K147628",
    "plate": "B-GO8740",
    "geoCoordinate": {
      "latitude": 53.54442268,
      "longitude": 9.99634942
    },
    "fuelLevel": 100,
    "address": "St. Annenufer 3-4, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471803066
  },
  {
    "vin": "WDC1569421J406424",
    "plate": "B-GO1018",
    "geoCoordinate": {
      "latitude": 53.48810323,
      "longitude": 10.21597356
    },
    "fuelLevel": 98,
    "address": "Reinbeker Weg 8-10, 21029 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471836525
  },
  {
    "vin": "WDC1569431J291094",
    "plate": "B-GO5612",
    "geoCoordinate": {
      "latitude": 53.65112682,
      "longitude": 10.09100479
    },
    "fuelLevel": 24,
    "address": "Grotenbleken 3, 22391 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "Gasoline",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471824556
  },
  {
    "vin": "WME4533421K149652",
    "plate": "B-GO1149",
    "geoCoordinate": {
      "latitude": 53.54439979,
      "longitude": 9.99648481
    },
    "fuelLevel": 75,
    "address": "St. Annenufer 3, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471744065
  },
  {
    "vin": "WME4533421K149760",
    "plate": "B-GO1023",
    "geoCoordinate": {
      "latitude": 53.60663374,
      "longitude": 10.01948674
    },
    "fuelLevel": 100,
    "address": "Überseering 33, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471779754
  },
  {
    "vin": "WME4533421K085391",
    "plate": "B-GO8076",
    "geoCoordinate": {
      "latitude": 53.57821333,
      "longitude": 10.09565361
    },
    "fuelLevel": 100,
    "address": "Mellmannweg 14, 22041 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471866477
  },
  {
    "vin": "WME4533421K150288",
    "plate": "B-GO8677",
    "geoCoordinate": {
      "latitude": 53.57147483,
      "longitude": 9.95339755
    },
    "fuelLevel": 25,
    "address": "Fruchtallee 82, 20259 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471934598
  },
  {
    "vin": "WME4533421K147382",
    "plate": "B-GO8697",
    "geoCoordinate": {
      "latitude": 53.63422388,
      "longitude": 10.00699085
    },
    "fuelLevel": 68,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471822395
  },
  {
    "vin": "WME4533421K088924",
    "plate": "B-GO8113",
    "geoCoordinate": {
      "latitude": 53.59975778,
      "longitude": 10.07722
    },
    "fuelLevel": 34,
    "address": "Otto Hermes",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2918-9556-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471886917
  },
  {
    "vin": "WDD1760121J519777",
    "plate": "B-GO5544",
    "geoCoordinate": {
      "latitude": 53.5502788,
      "longitude": 10.00749483
    },
    "fuelLevel": 82,
    "address": "Altmannbrücke, Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825179
  },
  {
    "vin": "WDD1760421J677971",
    "plate": "B-GO5173",
    "geoCoordinate": {
      "latitude": 53.54670233,
      "longitude": 10.00565346
    },
    "fuelLevel": 66,
    "address": "Deichtorstraße 2, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471911077
  },
  {
    "vin": "WME4533421K149511",
    "plate": "B-GO8769",
    "geoCoordinate": {
      "latitude": 53.60161315,
      "longitude": 10.04114697
    },
    "fuelLevel": 71,
    "address": "Hartzloh 32, 22307 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471916013
  },
  {
    "vin": "WME4533421K071370",
    "plate": "B-GO4753",
    "geoCoordinate": {
      "latitude": 53.61285652,
      "longitude": 9.95104576
    },
    "fuelLevel": 71,
    "address": "Mercedes Benz Kollaustraße",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2928-1869-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471910915
  },
  {
    "vin": "WDD1760121J521224",
    "plate": "B-GO5548",
    "geoCoordinate": {
      "latitude": 53.57104429,
      "longitude": 9.86467391
    },
    "fuelLevel": 88,
    "address": "Heinrich-Plett-Straße 4, 22609 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471887423
  },
  {
    "vin": "WDD1760421J672461",
    "plate": "B-GO5093",
    "geoCoordinate": {
      "latitude": 53.46233464,
      "longitude": 9.97905396
    },
    "fuelLevel": 80,
    "address": "Am Soldatenfriedhof 3, 21073 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471255290
  },
  {
    "vin": "WDD1760421J670059",
    "plate": "B-GO5056",
    "geoCoordinate": {
      "latitude": 53.55892506,
      "longitude": 9.81278298
    },
    "fuelLevel": 54,
    "address": "Elbchaussee 578, 22587 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471824962
  },
  {
    "vin": "WDD1760431J522869",
    "plate": "B-GO5680",
    "geoCoordinate": {
      "latitude": 53.50133031,
      "longitude": 9.9942506
    },
    "fuelLevel": 38,
    "address": "Reinstorfweg 15, 21107 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471821913
  },
  {
    "vin": "WDC1569421J442233",
    "plate": "B-GO1633",
    "geoCoordinate": {
      "latitude": 53.54912647,
      "longitude": 9.99570748
    },
    "fuelLevel": 12,
    "address": "Domstraße 14, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471792460
  },
  {
    "vin": "WDD1760431J517491",
    "plate": "B-GO5534",
    "geoCoordinate": {
      "latitude": 53.54593109,
      "longitude": 9.99867647
    },
    "fuelLevel": 88,
    "address": "Alter Wandrahm 16, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828065
  },
  {
    "vin": "WME4533421K036583",
    "plate": "B-GO3598",
    "geoCoordinate": {
      "latitude": 53.57080444,
      "longitude": 10.07098528
    },
    "fuelLevel": 25,
    "address": "Am Alten Posthaus 6, 22041 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471836705
  },
  {
    "vin": "WDD1760431J670864",
    "plate": "B-GO1346",
    "geoCoordinate": {
      "latitude": 53.58434202,
      "longitude": 9.98341013
    },
    "fuelLevel": 38,
    "address": "Eppendorfer Baum 30, 20249 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471923480
  },
  {
    "vin": "WDD1760421J678010",
    "plate": "B-GO5172",
    "geoCoordinate": {
      "latitude": 53.49001218,
      "longitude": 10.20520261
    },
    "fuelLevel": 98,
    "address": "switchh Bergedorf",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-0473-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471744447
  },
  {
    "vin": "WME4533421K070811",
    "plate": "B-GO4746",
    "geoCoordinate": {
      "latitude": 53.61814944,
      "longitude": 10.0147475
    },
    "fuelLevel": 59,
    "address": "Sengelmannstraße 103, 22335 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471907627
  },
  {
    "vin": "WME4533421K071093",
    "plate": "B-GO4780",
    "geoCoordinate": {
      "latitude": 53.45540444,
      "longitude": 9.99501583
    },
    "fuelLevel": 100,
    "address": "Harburger Poststraße 1, 21079 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471822728
  },
  {
    "vin": "WDD1760421J666539",
    "plate": "B-GO5028",
    "geoCoordinate": {
      "latitude": 53.54895459,
      "longitude": 9.89758237
    },
    "fuelLevel": 86,
    "address": "Corinthstraße 24-26, 22605 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471850091
  },
  {
    "vin": "WDC1569431J294036",
    "plate": "B-GO5524",
    "geoCoordinate": {
      "latitude": 53.5469641,
      "longitude": 9.98542452
    },
    "fuelLevel": 28,
    "address": "Steintwiete 1, 20459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471824957
  },
  {
    "vin": "WME4533421K150237",
    "plate": "B-GO8693",
    "geoCoordinate": {
      "latitude": 53.56135614,
      "longitude": 9.99054445
    },
    "fuelLevel": 84,
    "address": "switchh Dammtor",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2918-9385-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471927341
  },
  {
    "vin": "WME4533421K039975",
    "plate": "B-GO1020",
    "geoCoordinate": {
      "latitude": 53.55392528,
      "longitude": 10.00063194
    },
    "fuelLevel": 100,
    "address": "Raboisen 18, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471926059
  },
  {
    "vin": "WDD1173421N478489",
    "plate": "B-GO8793",
    "geoCoordinate": {
      "latitude": 53.54626082,
      "longitude": 10.0012161
    },
    "fuelLevel": 66,
    "address": "Alter Wandrahm 5-6, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471824954
  },
  {
    "vin": "WDD1760431J517012",
    "plate": "B-GO5505",
    "geoCoordinate": {
      "latitude": 53.54626835,
      "longitude": 9.98540639
    },
    "fuelLevel": 58,
    "address": "Steintwietenhof 2, 20459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471826342
  },
  {
    "vin": "WDD1760421J640140",
    "plate": "B-GO3057",
    "geoCoordinate": {
      "latitude": 53.54796553,
      "longitude": 9.97261843
    },
    "fuelLevel": 22,
    "address": "Am Elbpavillon, 20459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471823089
  },
  {
    "vin": "WDD1760421J675410",
    "plate": "B-GO5090",
    "geoCoordinate": {
      "latitude": 53.55401329,
      "longitude": 10.00488609
    },
    "fuelLevel": 42,
    "address": "switchh Hauptbahnhof",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2919-1357-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828245
  },
  {
    "vin": "WME4533421K070703",
    "plate": "B-GO4619",
    "geoCoordinate": {
      "latitude": 53.55633139,
      "longitude": 9.9916625
    },
    "fuelLevel": 28,
    "address": "Neuer Jungfernstieg 17A, 20354 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471905655
  },
  {
    "vin": "WDD1760421J640978",
    "plate": "B-GO3032",
    "geoCoordinate": {
      "latitude": 53.55336069,
      "longitude": 10.00824776
    },
    "fuelLevel": 72,
    "address": "Kirchenallee 50, 20099 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471929909
  },
  {
    "vin": "WDD1760421J676640",
    "plate": "B-GO5152",
    "geoCoordinate": {
      "latitude": 53.63462053,
      "longitude": 10.00735504
    },
    "fuelLevel": 80,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828306
  },
  {
    "vin": "WDC1569431J424730",
    "plate": "B-GO1618",
    "geoCoordinate": {
      "latitude": 53.65032831,
      "longitude": 10.09743585
    },
    "fuelLevel": 52,
    "address": "Stadtbahnstraße 84, 22393 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471249633
  },
  {
    "vin": "WDD1173421N478623",
    "plate": "B-GO8801",
    "geoCoordinate": {
      "latitude": 53.54830059,
      "longitude": 9.99464143
    },
    "fuelLevel": 98,
    "address": "Domstraße 17, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828897
  },
  {
    "vin": "WDD1760121J522227",
    "plate": "B-GO5632",
    "geoCoordinate": {
      "latitude": 53.65486698,
      "longitude": 10.09468653
    },
    "fuelLevel": 36,
    "address": "car2go AEZ temp",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-1462-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471816000
  },
  {
    "vin": "WDD1173421N557532",
    "plate": "B-GO3070",
    "geoCoordinate": {
      "latitude": 53.58994665,
      "longitude": 10.08333584
    },
    "fuelLevel": 38,
    "address": "Stephanstraße 96, 22047 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C117",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471823912
  },
  {
    "vin": "WME4533421K088402",
    "plate": "B-GO8096",
    "geoCoordinate": {
      "latitude": 53.57908056,
      "longitude": 10.12179139
    },
    "fuelLevel": 78,
    "address": "Jenfelder Tannenweg 316, 22045 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471217280
  },
  {
    "vin": "WDD1760121J523692",
    "plate": "B-GO5660",
    "geoCoordinate": {
      "latitude": 53.54584825,
      "longitude": 10.01710685
    },
    "fuelLevel": 64,
    "address": "Am Mittelkanal, 20097 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471922395
  },
  {
    "vin": "WME4533421K073964",
    "plate": "B-GO4975",
    "geoCoordinate": {
      "latitude": 53.54328278,
      "longitude": 10.00704694
    },
    "fuelLevel": 100,
    "address": "Stockmeyerstraße 43, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471823012
  },
  {
    "vin": "WDD1173521N588207",
    "plate": "B-GO6773",
    "geoCoordinate": {
      "latitude": 53.4900723,
      "longitude": 10.20531441
    },
    "fuelLevel": 62,
    "address": "switchh Bergedorf",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-0473-0000001e9ac4",
    "buildSeries": "AMG1",
    "fuelType": "SUPER_PLUS",
    "primaryColor": "696U",
    "secondaryColor": "696O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471823825
  },
  {
    "vin": "WME4533421K086499",
    "plate": "B-GO8182",
    "geoCoordinate": {
      "latitude": 53.54673556,
      "longitude": 9.99865583
    },
    "fuelLevel": 78,
    "address": "Dovenfleet 5, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471829969
  },
  {
    "vin": "WME4533421K063139",
    "plate": "B-GO4279",
    "geoCoordinate": {
      "latitude": 53.54610917,
      "longitude": 10.09108917
    },
    "fuelLevel": 100,
    "address": "Vierbergen 1, 22111 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471887521
  },
  {
    "vin": "WDC1569421J412826",
    "plate": "B-GO3065",
    "geoCoordinate": {
      "latitude": 53.65238479,
      "longitude": 10.01814385
    },
    "fuelLevel": 80,
    "address": "Tangstedter Landstraße 83, 22415 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471827187
  },
  {
    "vin": "WME4533421K064894",
    "plate": "B-GO4250",
    "geoCoordinate": {
      "latitude": 53.56594028,
      "longitude": 10.06860083
    },
    "fuelLevel": 25,
    "address": "Trauns Allee 4-6, 22043 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471918956
  },
  {
    "vin": "WME4533421K035483",
    "plate": "B-GO3129",
    "geoCoordinate": {
      "latitude": 53.50869778,
      "longitude": 9.99454944
    },
    "fuelLevel": 21,
    "address": "Grotestraße 31, 21107 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471927125
  },
  {
    "vin": "WME4533421K035447",
    "plate": "B-GO3532",
    "geoCoordinate": {
      "latitude": 53.55106278,
      "longitude": 9.9456625
    },
    "fuelLevel": 100,
    "address": "Jessenstraße 3, 22767 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471921506
  },
  {
    "vin": "WDD1760431J670213",
    "plate": "B-GO1344",
    "geoCoordinate": {
      "latitude": 53.62654519,
      "longitude": 10.02170679
    },
    "fuelLevel": 14,
    "address": "Ratsmühlendamm 39, 22335 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471890315
  },
  {
    "vin": "WDD1760121J523097",
    "plate": "B-GO5640",
    "geoCoordinate": {
      "latitude": 53.62236675,
      "longitude": 9.94440751
    },
    "fuelLevel": 52,
    "address": "Ordulfstraße 19-21, 22459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471939199
  },
  {
    "vin": "WDD1760431J517235",
    "plate": "B-GO5532",
    "geoCoordinate": {
      "latitude": 53.54172815,
      "longitude": 10.09411818
    },
    "fuelLevel": 62,
    "address": "Am Schiffbeker Berg 5, 22111 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471913737
  },
  {
    "vin": "WDD1760421J642400",
    "plate": "B-GO3042",
    "geoCoordinate": {
      "latitude": 53.4907936,
      "longitude": 10.20478247
    },
    "fuelLevel": 100,
    "address": "Johann-Meyer-Straße 39-41, 21031 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471827189
  },
  {
    "vin": "WDD1760431J515884",
    "plate": "B-GO5499",
    "geoCoordinate": {
      "latitude": 53.56037753,
      "longitude": 9.99159449
    },
    "fuelLevel": 98,
    "address": "Alsterglacis 1, 20354 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471689204
  },
  {
    "vin": "WDC1569421J442403",
    "plate": "B-GO1631",
    "geoCoordinate": {
      "latitude": 53.54465903,
      "longitude": 9.93252528
    },
    "fuelLevel": 46,
    "address": "Große Elbstraße 266, 22767 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471936860
  },
  {
    "vin": "WME4533421K147552",
    "plate": "B-GO8674",
    "geoCoordinate": {
      "latitude": 53.56050296,
      "longitude": 9.79531744
    },
    "fuelLevel": 68,
    "address": "Krumdals Weg 8-17, 22587 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471938129
  },
  {
    "vin": "WME4533421K069709",
    "plate": "B-GO4736",
    "geoCoordinate": {
      "latitude": 53.59989806,
      "longitude": 10.06768056
    },
    "fuelLevel": 65,
    "address": "Bramfelder Chaussee 102, 22177 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471891158
  },
  {
    "vin": "WME4533421K035523",
    "plate": "B-GO3465",
    "geoCoordinate": {
      "latitude": 53.54475417,
      "longitude": 9.93160083
    },
    "fuelLevel": 100,
    "address": "Große Elbstraße 266, 22767 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471876437
  },
  {
    "vin": "WME4533421K086962",
    "plate": "B-GO8219",
    "geoCoordinate": {
      "latitude": 53.60328306,
      "longitude": 10.04060694
    },
    "fuelLevel": 18,
    "address": "Fuhlsbüttler Str. 414, 22309 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471937754
  },
  {
    "vin": "WME4533421K149183",
    "plate": "B-GO6731",
    "geoCoordinate": {
      "latitude": 53.63413069,
      "longitude": 10.00710042
    },
    "fuelLevel": 56,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471148036
  },
  {
    "vin": "WDD1760431J517254",
    "plate": "B-GO5513",
    "geoCoordinate": {
      "latitude": 53.54600704,
      "longitude": 9.97688383
    },
    "fuelLevel": 38,
    "address": "Brauerknechtgraben 18, 20459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471885983
  },
  {
    "vin": "WDD1760421J643283",
    "plate": "B-GO3049",
    "geoCoordinate": {
      "latitude": 53.59097748,
      "longitude": 10.10921841
    },
    "fuelLevel": 36,
    "address": "Walddörferstraße 389B, 22047 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471824740
  },
  {
    "vin": "WDD1760121J522503",
    "plate": "B-GO5635",
    "geoCoordinate": {
      "latitude": 53.70605443,
      "longitude": 9.98331506
    },
    "fuelLevel": 82,
    "address": "Friedrichsgaber Weg 339-347, 22846 Norderstedt",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471826501
  },
  {
    "vin": "WDD1760421J640599",
    "plate": "B-GO3044",
    "geoCoordinate": {
      "latitude": 53.55106394,
      "longitude": 10.01081124
    },
    "fuelLevel": 98,
    "address": "Kurt-Schumacher-Allee, 20097 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825963
  },
  {
    "vin": "WME4533421K147499",
    "plate": "B-GO8696",
    "geoCoordinate": {
      "latitude": 53.57909727,
      "longitude": 10.12192135
    },
    "fuelLevel": 100,
    "address": "Kuehnstraße 75a, 22045 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471855248
  },
  {
    "vin": "WME4533421K072558",
    "plate": "B-GO4795",
    "geoCoordinate": {
      "latitude": 53.60135111,
      "longitude": 10.03950694
    },
    "fuelLevel": 34,
    "address": "Hartzloh 14, 22307 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471933798
  },
  {
    "vin": "WME4533421K040080",
    "plate": "B-GO1053",
    "geoCoordinate": {
      "latitude": 53.58513778,
      "longitude": 10.025005
    },
    "fuelLevel": 93,
    "address": "Hölderlinsallee 2, 22303 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471900270
  },
  {
    "vin": "WME4533421K070082",
    "plate": "B-GO4683",
    "geoCoordinate": {
      "latitude": 53.58616,
      "longitude": 9.98795361
    },
    "fuelLevel": 56,
    "address": "Loogestieg 21, 20249 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471914171
  },
  {
    "vin": "WME4533421K088128",
    "plate": "B-GO8223",
    "geoCoordinate": {
      "latitude": 53.54363194,
      "longitude": 10.00733139
    },
    "fuelLevel": 93,
    "address": "Stockmeyerstraße 43, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471905641
  },
  {
    "vin": "WME4533421K086749",
    "plate": "B-GO8186",
    "geoCoordinate": {
      "latitude": 53.65495833,
      "longitude": 10.09471333
    },
    "fuelLevel": 46,
    "address": "car2go AEZ temp",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-1462-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471844739
  },
  {
    "vin": "WME4533421K085884",
    "plate": "B-GO8177",
    "geoCoordinate": {
      "latitude": 53.55132889,
      "longitude": 10.02386278
    },
    "fuelLevel": 87,
    "address": "Spaldingstraße 129-137, 20097 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471889586
  },
  {
    "vin": "WME4533421K036793",
    "plate": "B-GO3575",
    "geoCoordinate": {
      "latitude": 53.60945194,
      "longitude": 10.05838472
    },
    "fuelLevel": 100,
    "address": "Cesar-Klein-Ring 10-12, 22309 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471841381
  },
  {
    "vin": "WME4533421K074352",
    "plate": "B-GO4823",
    "geoCoordinate": {
      "latitude": 53.54642,
      "longitude": 10.00090222
    },
    "fuelLevel": 28,
    "address": "Neuer Wandrahm, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2",
    "secondaryColor": "EDA",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828793
  },
  {
    "vin": "WDD1760421J670764",
    "plate": "B-GO5084",
    "geoCoordinate": {
      "latitude": 53.54330713,
      "longitude": 10.10933854
    },
    "fuelLevel": 74,
    "address": "Ruhmkoppel 9, 22119 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471931727
  },
  {
    "vin": "WDC1569431J424504",
    "plate": "B-GO1619",
    "geoCoordinate": {
      "latitude": 53.57415053,
      "longitude": 9.92833998
    },
    "fuelLevel": 80,
    "address": "Marlowring 8A, 22525 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471824599
  },
  {
    "vin": "WDC1569431J424739",
    "plate": "B-GO9159",
    "geoCoordinate": {
      "latitude": 53.55572964,
      "longitude": 9.98488005
    },
    "fuelLevel": 78,
    "address": "Valentinskamp 88, 20355 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471230883
  },
  {
    "vin": "WDD1760431J521937",
    "plate": "B-GO5585",
    "geoCoordinate": {
      "latitude": 53.56961172,
      "longitude": 9.95939984
    },
    "fuelLevel": 26,
    "address": "Fruchtallee 28, 20259 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471920649
  },
  {
    "vin": "WDD1760431J516476",
    "plate": "B-GO5506",
    "geoCoordinate": {
      "latitude": 53.54577698,
      "longitude": 10.00302566
    },
    "fuelLevel": 56,
    "address": "Ericusspitze 1, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825991
  },
  {
    "vin": "WDC1569121J297860",
    "plate": "B-GO5520",
    "geoCoordinate": {
      "latitude": 53.59018464,
      "longitude": 10.11871053
    },
    "fuelLevel": 38,
    "address": "Tonndorfer Strand 36A, 22045 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "DIESEL",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471713830
  },
  {
    "vin": "WDC1569431J303078",
    "plate": "B-GO5705",
    "geoCoordinate": {
      "latitude": 53.54798285,
      "longitude": 9.86387881
    },
    "fuelLevel": 12,
    "address": "Lünkenberg 1, 22609 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471889482
  },
  {
    "vin": "WME4533421K073455",
    "plate": "B-GO4810",
    "geoCoordinate": {
      "latitude": 53.47208528,
      "longitude": 9.92132722
    },
    "fuelLevel": 46,
    "address": "Am Radeland 124, 21079 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471785979
  },
  {
    "vin": "WME4533421K071999",
    "plate": "B-GO4790",
    "geoCoordinate": {
      "latitude": 53.63406,
      "longitude": 10.00702889
    },
    "fuelLevel": 100,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471935102
  },
  {
    "vin": "WME4533421K037576",
    "plate": "B-GO3549",
    "geoCoordinate": {
      "latitude": 53.63380917,
      "longitude": 10.00718028
    },
    "fuelLevel": 53,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471829984
  },
  {
    "vin": "WDD1760431J514936",
    "plate": "B-GO5472",
    "geoCoordinate": {
      "latitude": 53.5418753,
      "longitude": 10.09718106
    },
    "fuelLevel": 64,
    "address": "Billstedter Hauptstraße 12, 22111 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471821779
  },
  {
    "vin": "WME4533421K076352",
    "plate": "B-GO4837",
    "geoCoordinate": {
      "latitude": 53.63409111,
      "longitude": 10.00704083
    },
    "fuelLevel": 53,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471829177
  },
  {
    "vin": "WME4533421K149501",
    "plate": "B-GO3242",
    "geoCoordinate": {
      "latitude": 53.48880654,
      "longitude": 10.21936524
    },
    "fuelLevel": 93,
    "address": "Sichter 9-17, 21029 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471798501
  },
  {
    "vin": "WME4533421K150399",
    "plate": "B-GO1131",
    "geoCoordinate": {
      "latitude": 53.60753058,
      "longitude": 9.99212599
    },
    "fuelLevel": 56,
    "address": "Alsterkrugchaussee 184, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471868781
  },
  {
    "vin": "WDD1760421J667681",
    "plate": "B-GO5188",
    "geoCoordinate": {
      "latitude": 53.60432824,
      "longitude": 10.02544825
    },
    "fuelLevel": 26,
    "address": "Überseering 8, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471555140
  },
  {
    "vin": "WDD1760431J670697",
    "plate": "B-GO1345",
    "geoCoordinate": {
      "latitude": 53.55650308,
      "longitude": 9.98297904
    },
    "fuelLevel": 98,
    "address": "Dammtorwall 15-19, 20355 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828762
  },
  {
    "vin": "WME4533421K088491",
    "plate": "B-GO8168",
    "geoCoordinate": {
      "latitude": 53.60448528,
      "longitude": 9.96092083
    },
    "fuelLevel": 68,
    "address": "Kollaustraße 67, 22529 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471855756
  },
  {
    "vin": "WDD1760421J674638",
    "plate": "B-GO5125",
    "geoCoordinate": {
      "latitude": 53.58113362,
      "longitude": 9.96308142
    },
    "fuelLevel": 26,
    "address": "Heckscherstraße 18, 20253 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471909868
  },
  {
    "vin": "WDD1760121J522044",
    "plate": "B-GO5562",
    "geoCoordinate": {
      "latitude": 53.50045757,
      "longitude": 9.99371737
    },
    "fuelLevel": 54,
    "address": "Reinstorfweg 12, 21107 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471706704
  },
  {
    "vin": "WME4533421K071652",
    "plate": "B-GO4784",
    "geoCoordinate": {
      "latitude": 53.47213778,
      "longitude": 9.92194028
    },
    "fuelLevel": 71,
    "address": "Moorstieg 2, 21079 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471911956
  },
  {
    "vin": "WDC1569431J291449",
    "plate": "B-GO5615",
    "geoCoordinate": {
      "latitude": 53.65395591,
      "longitude": 10.09686007
    },
    "fuelLevel": 16,
    "address": "Langenstücken 27, 22393 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "Gasoline",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471889172
  },
  {
    "vin": "WME4533421K065800",
    "plate": "B-GO4260",
    "geoCoordinate": {
      "latitude": 53.55808944,
      "longitude": 9.9915
    },
    "fuelLevel": 25,
    "address": "Ring 1 39-40, 20354 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471870250
  },
  {
    "vin": "WME4533421K072489",
    "plate": "B-GO4546",
    "geoCoordinate": {
      "latitude": 53.60665583,
      "longitude": 10.01847639
    },
    "fuelLevel": 100,
    "address": "Überseering 24, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471896732
  },
  {
    "vin": "WDC1569431J438881",
    "plate": "B-GO1645",
    "geoCoordinate": {
      "latitude": 53.55408872,
      "longitude": 9.9998757
    },
    "fuelLevel": 76,
    "address": "Ferdinandstraße 24-28, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471899657
  },
  {
    "vin": "WME4533421K085437",
    "plate": "B-GO8207",
    "geoCoordinate": {
      "latitude": 53.63429139,
      "longitude": 10.00715417
    },
    "fuelLevel": 93,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471829050
  },
  {
    "vin": "WDD1760421J642807",
    "plate": "B-GO3037",
    "geoCoordinate": {
      "latitude": 53.58471587,
      "longitude": 10.04034644
    },
    "fuelLevel": 40,
    "address": "Osterbekstraße 109-110, 22083 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471826964
  },
  {
    "vin": "WDC1569431J294576",
    "plate": "B-GO5521",
    "geoCoordinate": {
      "latitude": 53.54979243,
      "longitude": 9.98047011
    },
    "fuelLevel": 24,
    "address": "Erste Brunnenstraße 12, 20459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471572047
  },
  {
    "vin": "WME4533421K069945",
    "plate": "B-GO4732",
    "geoCoordinate": {
      "latitude": 53.61796722,
      "longitude": 9.95129194
    },
    "fuelLevel": 21,
    "address": "Garstedter Weg 1, 22453 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471892917
  },
  {
    "vin": "WME4533421K149083",
    "plate": "B-GO8763",
    "geoCoordinate": {
      "latitude": 53.55675943,
      "longitude": 9.97547535
    },
    "fuelLevel": 68,
    "address": "Tschaikowskypl. 2, 20355 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471939022
  },
  {
    "vin": "WDD1760421J641993",
    "plate": "B-GO3027",
    "geoCoordinate": {
      "latitude": 53.5695843,
      "longitude": 10.10573907
    },
    "fuelLevel": 88,
    "address": "Holstenhofweg 85, 22043 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471939581
  },
  {
    "vin": "WME4533421K072962",
    "plate": "B-GO4970",
    "geoCoordinate": {
      "latitude": 53.54937194,
      "longitude": 9.9447075
    },
    "fuelLevel": 59,
    "address": "Elmenhorststraße 6, 22767 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2",
    "secondaryColor": "EDA",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471929617
  },
  {
    "vin": "WME4533421K150345",
    "plate": "B-GO8757",
    "geoCoordinate": {
      "latitude": 53.55737823,
      "longitude": 9.98298456
    },
    "fuelLevel": 90,
    "address": "Gorch-Fock-Wall 11, 20355 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471522482
  },
  {
    "vin": "WME4533421K149424",
    "plate": "B-GO8771",
    "geoCoordinate": {
      "latitude": 53.5865552,
      "longitude": 10.12233066
    },
    "fuelLevel": 100,
    "address": "Stein-Hardenberg-Straße 60, 22045 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471791892
  },
  {
    "vin": "WME4533421K070195",
    "plate": "B-GO4776",
    "geoCoordinate": {
      "latitude": 53.59577556,
      "longitude": 9.94716528
    },
    "fuelLevel": 87,
    "address": "Parkspot_NDR_Lokstedt",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471786047
  },
  {
    "vin": "WDD1760121J520274",
    "plate": "B-GO5546",
    "geoCoordinate": {
      "latitude": 53.57363657,
      "longitude": 10.07509916
    },
    "fuelLevel": 84,
    "address": "Rüterstraße 75, 22041 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825438
  },
  {
    "vin": "WME4533421K087301",
    "plate": "B-GO8132",
    "geoCoordinate": {
      "latitude": 53.56776056,
      "longitude": 10.04669806
    },
    "fuelLevel": 81,
    "address": "Wandsbeker Chaussee 151, 22089 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471913645
  },
  {
    "vin": "WME4533421K087998",
    "plate": "B-GO7124",
    "geoCoordinate": {
      "latitude": 53.56226722,
      "longitude": 9.97608944
    },
    "fuelLevel": 37,
    "address": "Karolinenstraße 45, 20357 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471930779
  },
  {
    "vin": "WME4533421K036986",
    "plate": "B-GO3672",
    "geoCoordinate": {
      "latitude": 53.54735167,
      "longitude": 9.99527833
    },
    "fuelLevel": 28,
    "address": "Willy-Brandt-Straße 51, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471823258
  },
  {
    "vin": "WDD1760431J522374",
    "plate": "B-GO5686",
    "geoCoordinate": {
      "latitude": 53.55445558,
      "longitude": 9.99896049
    },
    "fuelLevel": 62,
    "address": "Ballindamm 13-15, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471852235
  },
  {
    "vin": "WME4533421K148650",
    "plate": "B-GO8744",
    "geoCoordinate": {
      "latitude": 53.59322887,
      "longitude": 9.98715847
    },
    "fuelLevel": 84,
    "address": "Erikastraße 45, 20251 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828222
  },
  {
    "vin": "WME4533421K150353",
    "plate": "B-GO8713",
    "geoCoordinate": {
      "latitude": 53.55988742,
      "longitude": 10.01110842
    },
    "fuelLevel": 96,
    "address": "An der Alster 28, 20099 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825581
  },
  {
    "vin": "WME4533421K086743",
    "plate": "B-GO8126",
    "geoCoordinate": {
      "latitude": 53.46368083,
      "longitude": 9.982845
    },
    "fuelLevel": 96,
    "address": "Karnapp 12, 21079 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471163444
  },
  {
    "vin": "WME4533421K086286",
    "plate": "B-GO8185",
    "geoCoordinate": {
      "latitude": 53.58180028,
      "longitude": 9.93545389
    },
    "fuelLevel": 75,
    "address": "Thusneldastraße 11-13, 22525 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471841645
  },
  {
    "vin": "WME4533421K035705",
    "plate": "B-GO3631",
    "geoCoordinate": {
      "latitude": 53.65012528,
      "longitude": 10.09700278
    },
    "fuelLevel": 100,
    "address": "Stadtbahnstraße 84, 22393 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471827868
  },
  {
    "vin": "WME4533421K087991",
    "plate": "B-GO8201",
    "geoCoordinate": {
      "latitude": 53.58068,
      "longitude": 10.05511389
    },
    "fuelLevel": 50,
    "address": "Pinelsweg 11, 22081 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471939860
  },
  {
    "vin": "WME4533421K146978",
    "plate": "B-GO8731",
    "geoCoordinate": {
      "latitude": 53.55664982,
      "longitude": 9.99246759
    },
    "fuelLevel": 100,
    "address": "Neuer Jungfernstieg 19, 20354 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471867865
  },
  {
    "vin": "WDD1760121J523038",
    "plate": "B-GO5631",
    "geoCoordinate": {
      "latitude": 53.49001413,
      "longitude": 10.20476928
    },
    "fuelLevel": 52,
    "address": "switchh Bergedorf",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-0473-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471826910
  },
  {
    "vin": "WDC1569431J291175",
    "plate": "B-GO5607",
    "geoCoordinate": {
      "latitude": 53.55764492,
      "longitude": 9.92475415
    },
    "fuelLevel": 84,
    "address": "Bunsenstraße 4, 22765 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471903754
  },
  {
    "vin": "WDD1760421J666073",
    "plate": "B-GO5190",
    "geoCoordinate": {
      "latitude": 53.65050652,
      "longitude": 10.09271732
    },
    "fuelLevel": 82,
    "address": "Tennigkeitweg 6, 22391 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825490
  },
  {
    "vin": "WME4533421K035808",
    "plate": "B-GO3614",
    "geoCoordinate": {
      "latitude": 53.48764083,
      "longitude": 10.21565389
    },
    "fuelLevel": 53,
    "address": "Reinbeker Weg 1, 21029 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471827875
  },
  {
    "vin": "WDD1760421J671438",
    "plate": "B-GO5096",
    "geoCoordinate": {
      "latitude": 53.55805345,
      "longitude": 9.92231604
    },
    "fuelLevel": 36,
    "address": "Helmholtzstraße 16, 22765 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471919784
  },
  {
    "vin": "WME4533421K086582",
    "plate": "B-GO8122",
    "geoCoordinate": {
      "latitude": 53.60733139,
      "longitude": 10.02410722
    },
    "fuelLevel": 100,
    "address": "Überseering 14, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471426794
  },
  {
    "vin": "WME4533421K036095",
    "plate": "B-GO3562",
    "geoCoordinate": {
      "latitude": 53.55755583,
      "longitude": 9.99219583
    },
    "fuelLevel": 100,
    "address": "Esplanade 6-7A, 20354 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471827829
  },
  {
    "vin": "WME4533421K086717",
    "plate": "B-GO8220",
    "geoCoordinate": {
      "latitude": 53.49013778,
      "longitude": 10.21815167
    },
    "fuelLevel": 93,
    "address": "Reinbeker Weg 36, 21029 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471827729
  },
  {
    "vin": "WME4533421K147653",
    "plate": "B-GO8745",
    "geoCoordinate": {
      "latitude": 53.55105536,
      "longitude": 10.00640786
    },
    "fuelLevel": 87,
    "address": "metronom Servicecenter, Steintorwall 15, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471932053
  },
  {
    "vin": "WME4533421K037034",
    "plate": "B-GO3554",
    "geoCoordinate": {
      "latitude": 53.58658667,
      "longitude": 10.12216694
    },
    "fuelLevel": 46,
    "address": "Stein-Hardenberg-Straße 42-58, 22045 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471827600
  },
  {
    "vin": "WME4533421K072411",
    "plate": "B-GO4639",
    "geoCoordinate": {
      "latitude": 53.56447194,
      "longitude": 9.89001361
    },
    "fuelLevel": 87,
    "address": "Holbeinstraße 25, 22607 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471928474
  },
  {
    "vin": "WME4533421K070579",
    "plate": "B-GO4651",
    "geoCoordinate": {
      "latitude": 53.63465111,
      "longitude": 10.00771583
    },
    "fuelLevel": 81,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471829794
  },
  {
    "vin": "WDD1760421J676044",
    "plate": "B-GO5176",
    "geoCoordinate": {
      "latitude": 53.48980987,
      "longitude": 10.2048718
    },
    "fuelLevel": 74,
    "address": "switchh Bergedorf",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-0473-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471838164
  },
  {
    "vin": "WME4533421K089066",
    "plate": "B-GO8203",
    "geoCoordinate": {
      "latitude": 53.576985,
      "longitude": 10.08538083
    },
    "fuelLevel": 84,
    "address": "Puvogelstraße 2, 22041 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471876977
  },
  {
    "vin": "WME4533421K086772",
    "plate": "B-GO8125",
    "geoCoordinate": {
      "latitude": 53.53965167,
      "longitude": 9.99348472
    },
    "fuelLevel": 75,
    "address": "Unilever",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7948-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471829468
  },
  {
    "vin": "WME4533421K036485",
    "plate": "B-GO3138",
    "geoCoordinate": {
      "latitude": 53.57910444,
      "longitude": 10.12178972
    },
    "fuelLevel": 100,
    "address": "Kuehnstraße 75a, 22045 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471835673
  },
  {
    "vin": "WME4533421K073569",
    "plate": "B-GO4847",
    "geoCoordinate": {
      "latitude": 53.49006528,
      "longitude": 10.20520028
    },
    "fuelLevel": 56,
    "address": "switchh Bergedorf",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-0473-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471791978
  },
  {
    "vin": "WME4533421K035554",
    "plate": "B-GO3134",
    "geoCoordinate": {
      "latitude": 53.55118444,
      "longitude": 9.97919167
    },
    "fuelLevel": 53,
    "address": "Markusstraße 13, 20355 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471883156
  },
  {
    "vin": "WME4533421K150193",
    "plate": "B-GO8728",
    "geoCoordinate": {
      "latitude": 53.55444815,
      "longitude": 9.94037825
    },
    "fuelLevel": 65,
    "address": "Max-Brauer-Allee 77, 22765 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471930536
  },
  {
    "vin": "WME4533421K040313",
    "plate": "B-GO1079",
    "geoCoordinate": {
      "latitude": 53.61909611,
      "longitude": 9.94967611
    },
    "fuelLevel": 100,
    "address": "Bei St. Ansgar 8, 22459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471846036
  },
  {
    "vin": "WME4533421K075712",
    "plate": "B-GO4833",
    "geoCoordinate": {
      "latitude": 53.60015583,
      "longitude": 10.06809361
    },
    "fuelLevel": 43,
    "address": "Bramfelder Chaussee 106, 22177 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471910874
  },
  {
    "vin": "WME4533421K036540",
    "plate": "B-GO3543",
    "geoCoordinate": {
      "latitude": 53.63462889,
      "longitude": 10.00748694
    },
    "fuelLevel": 100,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471832726
  },
  {
    "vin": "WDC1569421J443000",
    "plate": "B-GO1638",
    "geoCoordinate": {
      "latitude": 53.57613097,
      "longitude": 10.08011758
    },
    "fuelLevel": 62,
    "address": "Wandsbeker Zollstraße 104, 22041 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471556558
  },
  {
    "vin": "WME4533421K069938",
    "plate": "B-GO4733",
    "geoCoordinate": {
      "latitude": 53.57203639,
      "longitude": 9.87226444
    },
    "fuelLevel": 81,
    "address": "Stiller Weg 14-16, 22607 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471857636
  },
  {
    "vin": "WME4533421K147632",
    "plate": "B-GO3445",
    "geoCoordinate": {
      "latitude": 53.59399092,
      "longitude": 9.98723587
    },
    "fuelLevel": 59,
    "address": "Erikastraße 55A, 20251 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471920908
  },
  {
    "vin": "WME4533421K072429",
    "plate": "B-GO4793",
    "geoCoordinate": {
      "latitude": 53.63450222,
      "longitude": 10.00713861
    },
    "fuelLevel": 50,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471830262
  },
  {
    "vin": "WME4533421K036545",
    "plate": "B-GO3643",
    "geoCoordinate": {
      "latitude": 53.54839111,
      "longitude": 9.99953361
    },
    "fuelLevel": 34,
    "address": "Kattrepelsbrücke 1, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471824449
  },
  {
    "vin": "WME4533421K150370",
    "plate": "B-GO1134",
    "geoCoordinate": {
      "latitude": 53.62731644,
      "longitude": 10.08587736
    },
    "fuelLevel": 12,
    "address": "Maisredder 7, 22175 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471820659
  },
  {
    "vin": "WME4533421K070310",
    "plate": "B-GO4772",
    "geoCoordinate": {
      "latitude": 53.56249639,
      "longitude": 9.9199875
    },
    "fuelLevel": 100,
    "address": "Daimlerstraße 71-73, 22761 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471927132
  },
  {
    "vin": "WME4533421K150037",
    "plate": "B-GO8690",
    "geoCoordinate": {
      "latitude": 53.63383667,
      "longitude": 10.0072428
    },
    "fuelLevel": 100,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471424778
  },
  {
    "vin": "WME4533421K040010",
    "plate": "B-GO1029",
    "geoCoordinate": {
      "latitude": 53.57734028,
      "longitude": 10.0907625
    },
    "fuelLevel": 71,
    "address": "Birtstraße 8-10, 22041 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471928004
  },
  {
    "vin": "WME4533421K149141",
    "plate": "B-GO1144",
    "geoCoordinate": {
      "latitude": 53.54554261,
      "longitude": 9.98944543
    },
    "fuelLevel": 12,
    "address": "Mattentwiete 1-5, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471903600
  },
  {
    "vin": "WME4533421K089053",
    "plate": "B-GO8171",
    "geoCoordinate": {
      "latitude": 53.57253361,
      "longitude": 9.89826944
    },
    "fuelLevel": 68,
    "address": "August-Kirch-Straße 16, 22525 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471893660
  },
  {
    "vin": "WME4533421K038030",
    "plate": "B-GO3719",
    "geoCoordinate": {
      "latitude": 53.55241194,
      "longitude": 9.975665
    },
    "fuelLevel": 34,
    "address": "Holstenwall 14-17, 20355 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471900301
  },
  {
    "vin": "WME4533421K085553",
    "plate": "B-GO8205",
    "geoCoordinate": {
      "latitude": 53.62420917,
      "longitude": 10.02971333
    },
    "fuelLevel": 18,
    "address": "Justus-Strandes-Weg 9B, 22337 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471827719
  },
  {
    "vin": "WME4533421K038242",
    "plate": "B-GO3710",
    "geoCoordinate": {
      "latitude": 53.61990083,
      "longitude": 9.95292306
    },
    "fuelLevel": 90,
    "address": "Garstedter Weg 9A, 22453 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471935145
  },
  {
    "vin": "WME4533421K072775",
    "plate": "B-GO4842",
    "geoCoordinate": {
      "latitude": 53.55727389,
      "longitude": 9.92257167
    },
    "fuelLevel": 71,
    "address": "Helmholtzstraße 6, 22765 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471915495
  },
  {
    "vin": "WME4533421K150416",
    "plate": "B-GO8741",
    "geoCoordinate": {
      "latitude": 53.51926663,
      "longitude": 9.98377615
    },
    "fuelLevel": 59,
    "address": "Kunertweg 1, 21107 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471825972
  },
  {
    "vin": "WME4533421K037243",
    "plate": "B-GO3533",
    "geoCoordinate": {
      "latitude": 53.55097111,
      "longitude": 10.04509417
    },
    "fuelLevel": 71,
    "address": "Wendenstraße 341-349, 20537 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471919312
  },
  {
    "vin": "WME4533421K149380",
    "plate": "B-GO1146",
    "geoCoordinate": {
      "latitude": 53.46147347,
      "longitude": 9.98731691
    },
    "fuelLevel": 100,
    "address": "Karnapp 37, 21079 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471820373
  },
  {
    "vin": "WME4533421K147558",
    "plate": "B-GO6723",
    "geoCoordinate": {
      "latitude": 53.56875147,
      "longitude": 9.93099135
    },
    "fuelLevel": 50,
    "address": "Am Diebsteich 13, 22761 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471920093
  },
  {
    "vin": "WME4533421K085581",
    "plate": "B-GO8173",
    "geoCoordinate": {
      "latitude": 53.56036056,
      "longitude": 9.79572028
    },
    "fuelLevel": 59,
    "address": "Krumdals Weg 8-17, 22587 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828329
  },
  {
    "vin": "WME4533421K074741",
    "plate": "B-GO4818",
    "geoCoordinate": {
      "latitude": 53.54877167,
      "longitude": 9.99918472
    },
    "fuelLevel": 21,
    "address": "Schopenstehl 15, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471890619
  },
  {
    "vin": "WDC1569121J303227",
    "plate": "B-GO5718",
    "geoCoordinate": {
      "latitude": 53.55200252,
      "longitude": 9.98705457
    },
    "fuelLevel": 98,
    "address": "Parkhaus Bleichenhof, Parkdeck R",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2918-9885-0000001e9ac4",
    "buildSeries": "X156",
    "fuelType": "Diesel",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471793481
  },
  {
    "vin": "WDD1760431J638771",
    "plate": "B-GO1120",
    "geoCoordinate": {
      "latitude": 53.55650555,
      "longitude": 10.01917724
    },
    "fuelLevel": 68,
    "address": "Steindamm 100, 20099 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471826519
  },
  {
    "vin": "WME4533421K086777",
    "plate": "B-GO8217",
    "geoCoordinate": {
      "latitude": 53.58408694,
      "longitude": 10.12592306
    },
    "fuelLevel": 46,
    "address": "Studio Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471827935
  },
  {
    "vin": "WDD1760421J638889",
    "plate": "B-GO3061",
    "geoCoordinate": {
      "latitude": 53.57633307,
      "longitude": 10.08087034
    },
    "fuelLevel": 36,
    "address": "Wandsbeker Zollstraße 96, 22041 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471841992
  },
  {
    "vin": "WME4533421K037047",
    "plate": "B-GO3123",
    "geoCoordinate": {
      "latitude": 53.60779806,
      "longitude": 10.02162306
    },
    "fuelLevel": 68,
    "address": "Halifaxweg, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471824204
  },
  {
    "vin": "WME4533421K147802",
    "plate": "B-GO8716",
    "geoCoordinate": {
      "latitude": 53.60317562,
      "longitude": 10.01945952
    },
    "fuelLevel": 100,
    "address": "New-York-Ring 13, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828565
  },
  {
    "vin": "WME4533421K150059",
    "plate": "B-GO1091",
    "geoCoordinate": {
      "latitude": 53.57047298,
      "longitude": 9.98282071
    },
    "fuelLevel": 62,
    "address": "Dillstraße 21, 20146 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471932185
  },
  {
    "vin": "WDD1760421J675082",
    "plate": "B-GO5111",
    "geoCoordinate": {
      "latitude": 53.70375647,
      "longitude": 9.99019339
    },
    "fuelLevel": 26,
    "address": "Heidbergstraße 47, 22846 Norderstedt",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 469369516
  },
  {
    "vin": "WME4533421K069745",
    "plate": "B-GO4679",
    "geoCoordinate": {
      "latitude": 53.65237861,
      "longitude": 10.01796222
    },
    "fuelLevel": 31,
    "address": "Tangstedter Landstraße 81, 22415 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471822780
  },
  {
    "vin": "WME4533421K087863",
    "plate": "B-GO8112",
    "geoCoordinate": {
      "latitude": 53.54686528,
      "longitude": 10.03630056
    },
    "fuelLevel": 100,
    "address": "Süderstraße 120, 20537 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471926135
  },
  {
    "vin": "WME4533421K070933",
    "plate": "B-GO4779",
    "geoCoordinate": {
      "latitude": 53.60074944,
      "longitude": 9.98231778
    },
    "fuelLevel": 59,
    "address": "Im Winkel 19, 20251 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471927527
  },
  {
    "vin": "WME4533421K036281",
    "plate": "B-GO3654",
    "geoCoordinate": {
      "latitude": 53.63434944,
      "longitude": 10.00701333
    },
    "fuelLevel": 100,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471161735
  },
  {
    "vin": "WME4533421K149925",
    "plate": "B-GO8738",
    "geoCoordinate": {
      "latitude": 53.54837544,
      "longitude": 9.99915643
    },
    "fuelLevel": 43,
    "address": "Hopfensack 22, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471876831
  },
  {
    "vin": "WME4533421K071581",
    "plate": "B-GO4693",
    "geoCoordinate": {
      "latitude": 53.54688667,
      "longitude": 9.98591611
    },
    "fuelLevel": 31,
    "address": "Rödingsmarkt 29, 20459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471827891
  },
  {
    "vin": "WME4533421K063639",
    "plate": "B-GO4313",
    "geoCoordinate": {
      "latitude": 53.56391139,
      "longitude": 9.98907167
    },
    "fuelLevel": 28,
    "address": "Moorweidenstraße 22-24, 20146 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471868109
  },
  {
    "vin": "WME4533421K087716",
    "plate": "B-GO8139",
    "geoCoordinate": {
      "latitude": 53.55813806,
      "longitude": 9.90136056
    },
    "fuelLevel": 78,
    "address": "Jürgen-Töpfer-Straße 2, 22763 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471913429
  },
  {
    "vin": "WME4533421K073596",
    "plate": "B-GO4814",
    "geoCoordinate": {
      "latitude": 53.54937167,
      "longitude": 10.00233806
    },
    "fuelLevel": 87,
    "address": "Altstädter Twiete 2, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471644721
  },
  {
    "vin": "WME4533421K038756",
    "plate": "B-GO3685",
    "geoCoordinate": {
      "latitude": 53.67610722,
      "longitude": 9.99585861
    },
    "fuelLevel": 50,
    "address": "Essener Bogen 10, 22419 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471896531
  },
  {
    "vin": "WME4533421K040103",
    "plate": "B-GO1059",
    "geoCoordinate": {
      "latitude": 53.49066083,
      "longitude": 10.20501556
    },
    "fuelLevel": 68,
    "address": "Johann-Meyer-Straße 43-45, 21031 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471861844
  },
  {
    "vin": "WME4533421K073716",
    "plate": "B-GO4819",
    "geoCoordinate": {
      "latitude": 53.67577389,
      "longitude": 9.99571333
    },
    "fuelLevel": 59,
    "address": "Essener Bogen 10, 22419 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471885264
  },
  {
    "vin": "WME4533421K149249",
    "plate": "B-GO8749",
    "geoCoordinate": {
      "latitude": 53.60195686,
      "longitude": 10.017455
    },
    "fuelLevel": 100,
    "address": "Überseering 45, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471896598
  },
  {
    "vin": "WDD1760431J640043",
    "plate": "B-GO1123",
    "geoCoordinate": {
      "latitude": 53.65110074,
      "longitude": 10.0894087
    },
    "fuelLevel": 42,
    "address": "Grotenbleken 11, 22391 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471791708
  },
  {
    "vin": "WDC1569421J442434",
    "plate": "B-GO9120",
    "geoCoordinate": {
      "latitude": 53.55625258,
      "longitude": 9.98416593
    },
    "fuelLevel": 16,
    "address": "Caffamacherreihe 14, 20355 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471371480
  },
  {
    "vin": "WME4533421K040122",
    "plate": "B-GO1066",
    "geoCoordinate": {
      "latitude": 53.54580222,
      "longitude": 9.97803167
    },
    "fuelLevel": 68,
    "address": "Neustädter Neuer Weg 2, 20459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471910550
  },
  {
    "vin": "WME4533421K035378",
    "plate": "B-GO3581",
    "geoCoordinate": {
      "latitude": 53.56472972,
      "longitude": 9.98688444
    },
    "fuelLevel": 100,
    "address": "Schlüterstraße 10, 20146 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471918234
  },
  {
    "vin": "WME4533421K071319",
    "plate": "B-GO4719",
    "geoCoordinate": {
      "latitude": 53.57321639,
      "longitude": 9.98033417
    },
    "fuelLevel": 100,
    "address": "Hallerstraße 5C, 20146 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471896572
  },
  {
    "vin": "WME4533421K088584",
    "plate": "B-GO8165",
    "geoCoordinate": {
      "latitude": 53.55807861,
      "longitude": 9.79873556
    },
    "fuelLevel": 15,
    "address": "Rutsch 4, 22587 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471934686
  },
  {
    "vin": "WDD1760121J523411",
    "plate": "B-GO5645",
    "geoCoordinate": {
      "latitude": 53.54830092,
      "longitude": 9.94978777
    },
    "fuelLevel": 68,
    "address": "Kirchenstraße 15, 22767 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471829583
  },
  {
    "vin": "WME4533421K087708",
    "plate": "B-GO8098",
    "geoCoordinate": {
      "latitude": 53.54819583,
      "longitude": 10.00013333
    },
    "fuelLevel": 100,
    "address": "Hopfensack 2, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471784832
  },
  {
    "vin": "WDD1760431J521659",
    "plate": "B-GO5569",
    "geoCoordinate": {
      "latitude": 53.54648761,
      "longitude": 9.89313539
    },
    "fuelLevel": 98,
    "address": "Elbchaussee 205-209, 22605 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471792400
  },
  {
    "vin": "WME4533421K149819",
    "plate": "B-GO8688",
    "geoCoordinate": {
      "latitude": 53.57727975,
      "longitude": 9.96412213
    },
    "fuelLevel": 100,
    "address": "Goebenstraße 34, 20253 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471933537
  },
  {
    "vin": "WME4533421K150223",
    "plate": "B-GO3362",
    "geoCoordinate": {
      "latitude": 53.6102537,
      "longitude": 10.00065874
    },
    "fuelLevel": 84,
    "address": "Rathenaustraße 14, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471831102
  },
  {
    "vin": "WME4533421K075090",
    "plate": "B-GO4828",
    "geoCoordinate": {
      "latitude": 53.58848056,
      "longitude": 10.02817167
    },
    "fuelLevel": 62,
    "address": "Wiesendamm 97, 22303 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471827688
  },
  {
    "vin": "WDC1569421J401145",
    "plate": "B-GO1009",
    "geoCoordinate": {
      "latitude": 53.70736052,
      "longitude": 9.98973245
    },
    "fuelLevel": 76,
    "address": "Rathausallee 37, 22846 Norderstedt",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471339879
  },
  {
    "vin": "WME4533421K071081",
    "plate": "B-GO4750",
    "geoCoordinate": {
      "latitude": 53.63461389,
      "longitude": 10.00768
    },
    "fuelLevel": 71,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471247167
  },
  {
    "vin": "WME4533421K085587",
    "plate": "B-GO8120",
    "geoCoordinate": {
      "latitude": 53.54605806,
      "longitude": 10.00853194
    },
    "fuelLevel": 81,
    "address": "Banksstraße 1, 20097 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471909219
  },
  {
    "vin": "WME4533421K069952",
    "plate": "B-GO4644",
    "geoCoordinate": {
      "latitude": 53.54588028,
      "longitude": 9.97258972
    },
    "fuelLevel": 100,
    "address": "Hafentor 3, 20459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471881543
  },
  {
    "vin": "WME4533421K040051",
    "plate": "B-GO1042",
    "geoCoordinate": {
      "latitude": 53.60846444,
      "longitude": 10.07846972
    },
    "fuelLevel": 100,
    "address": "Steilshooper Allee 450A, 22179 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471863156
  },
  {
    "vin": "WDD1760431J514622",
    "plate": "B-GO5507",
    "geoCoordinate": {
      "latitude": 53.54545128,
      "longitude": 9.90210705
    },
    "fuelLevel": 86,
    "address": "Elbchaussee 187A, 22605 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471861253
  },
  {
    "vin": "WME4533421K040024",
    "plate": "B-GO1037",
    "geoCoordinate": {
      "latitude": 53.55657111,
      "longitude": 9.92614722
    },
    "fuelLevel": 59,
    "address": "Borselstraße 16B, 22765 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471917224
  },
  {
    "vin": "WME4533421K146988",
    "plate": "B-GO1135",
    "geoCoordinate": {
      "latitude": 53.60716309,
      "longitude": 9.97881571
    },
    "fuelLevel": 46,
    "address": "Borsteler Chaussee 120, 22453 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471890863
  },
  {
    "vin": "WME4533421K072404",
    "plate": "B-GO4729",
    "geoCoordinate": {
      "latitude": 53.55318917,
      "longitude": 9.99709583
    },
    "fuelLevel": 100,
    "address": "Ballindamm 25-26, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471928784
  },
  {
    "vin": "WME4533421K064676",
    "plate": "B-GO4288",
    "geoCoordinate": {
      "latitude": 53.54749139,
      "longitude": 9.87361194
    },
    "fuelLevel": 100,
    "address": "Holztwiete 25, 22605 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471831312
  },
  {
    "vin": "WME4533421K088319",
    "plate": "B-GO8071",
    "geoCoordinate": {
      "latitude": 53.61291389,
      "longitude": 9.96629583
    },
    "fuelLevel": 65,
    "address": "Papenreye 33, 22453 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471900072
  },
  {
    "vin": "WME4533421K149952",
    "plate": "B-GO3324",
    "geoCoordinate": {
      "latitude": 53.70769753,
      "longitude": 9.98829157
    },
    "fuelLevel": 96,
    "address": "Rathausallee 94, 22846 Norderstedt",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471848559
  },
  {
    "vin": "WME4533421K071126",
    "plate": "B-GO4717",
    "geoCoordinate": {
      "latitude": 53.65065611,
      "longitude": 10.09763417
    },
    "fuelLevel": 59,
    "address": "Frahmredder 11A, 22393 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471437814
  },
  {
    "vin": "WME4533421K037269",
    "plate": "B-GO3610",
    "geoCoordinate": {
      "latitude": 53.55938222,
      "longitude": 9.80382444
    },
    "fuelLevel": 34,
    "address": "Hans-Lange-Straße 1, 22587 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471827717
  },
  {
    "vin": "WME4533421K071746",
    "plate": "B-GO4669",
    "geoCoordinate": {
      "latitude": 53.58608222,
      "longitude": 9.97297389
    },
    "fuelLevel": 68,
    "address": "Breitenfelder Str. 33, 20251 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471938958
  },
  {
    "vin": "WDC1569431J292154",
    "plate": "B-GO5610",
    "geoCoordinate": {
      "latitude": 53.51503862,
      "longitude": 9.98731146
    },
    "fuelLevel": 34,
    "address": "Veringstraße 38-40, 21107 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471826451
  },
  {
    "vin": "WME4533421K063293",
    "plate": "B-GO4276",
    "geoCoordinate": {
      "latitude": 53.59227583,
      "longitude": 10.04683611
    },
    "fuelLevel": 87,
    "address": "Schwalbenstraße 63, 22305 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471937973
  },
  {
    "vin": "WME4533421K076007",
    "plate": "B-GO4834",
    "geoCoordinate": {
      "latitude": 53.5548275,
      "longitude": 9.99957639
    },
    "fuelLevel": 100,
    "address": "Ballindamm 7, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471934276
  },
  {
    "vin": "WME4533421K037355",
    "plate": "B-GO3661",
    "geoCoordinate": {
      "latitude": 53.54567167,
      "longitude": 9.93108056
    },
    "fuelLevel": 100,
    "address": "Rainvilleterrasse 4, 22765 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471932862
  },
  {
    "vin": "WME4533421K063007",
    "plate": "B-GO4336",
    "geoCoordinate": {
      "latitude": 53.49013556,
      "longitude": 10.20514667
    },
    "fuelLevel": 40,
    "address": "switchh Bergedorf",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-0473-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471829383
  },
  {
    "vin": "WDD1760431J637832",
    "plate": "B-GO1133",
    "geoCoordinate": {
      "latitude": 53.67692266,
      "longitude": 9.99961008
    },
    "fuelLevel": 22,
    "address": "Essener Bogen 17, 22419 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471830467
  },
  {
    "vin": "WME4533421K040109",
    "plate": "B-GO1063",
    "geoCoordinate": {
      "latitude": 53.54443167,
      "longitude": 9.99635167
    },
    "fuelLevel": 37,
    "address": "St. Annenufer 3-4, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471923382
  },
  {
    "vin": "WME4533421K087295",
    "plate": "B-GO6788",
    "geoCoordinate": {
      "latitude": 53.58987806,
      "longitude": 9.97806917
    },
    "fuelLevel": 15,
    "address": "Martinistraße 51, 20251 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471938988
  },
  {
    "vin": "WDD1760121J523836",
    "plate": "B-GO5651",
    "geoCoordinate": {
      "latitude": 53.54838383,
      "longitude": 9.99941607
    },
    "fuelLevel": 16,
    "address": "Kattrepelsbrücke 1, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828381
  },
  {
    "vin": "WME4533421K148857",
    "plate": "B-GO8723",
    "geoCoordinate": {
      "latitude": 53.5445124,
      "longitude": 9.99627163
    },
    "fuelLevel": 100,
    "address": "St. Annenufer 3-4, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471738848
  },
  {
    "vin": "WME4533421K072078",
    "plate": "B-GO4667",
    "geoCoordinate": {
      "latitude": 53.63392,
      "longitude": 10.00714972
    },
    "fuelLevel": 100,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471936197
  },
  {
    "vin": "WME4533421K147872",
    "plate": "B-GO1106",
    "geoCoordinate": {
      "latitude": 53.606858,
      "longitude": 10.0227594
    },
    "fuelLevel": 93,
    "address": "Überseering 12, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471827352
  },
  {
    "vin": "WDD1760431J638277",
    "plate": "B-GO1087",
    "geoCoordinate": {
      "latitude": 53.54823217,
      "longitude": 9.99469936
    },
    "fuelLevel": 60,
    "address": "Domstraße 17, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471439187
  },
  {
    "vin": "WME4533421K147776",
    "plate": "B-GO8739",
    "geoCoordinate": {
      "latitude": 53.63414879,
      "longitude": 10.00695378
    },
    "fuelLevel": 40,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471820593
  },
  {
    "vin": "WME4533421K087273",
    "plate": "B-GO8191",
    "geoCoordinate": {
      "latitude": 53.55240944,
      "longitude": 9.95818444
    },
    "fuelLevel": 28,
    "address": "Große Freiheit 70-82, 22767 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471937049
  },
  {
    "vin": "WDC1569431J302231",
    "plate": "B-GO5710",
    "geoCoordinate": {
      "latitude": 53.55827547,
      "longitude": 10.01245967
    },
    "fuelLevel": 50,
    "address": "Lange Reihe 79, 20099 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "787",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471920015
  },
  {
    "vin": "WME4533421K147979",
    "plate": "B-GO8714",
    "geoCoordinate": {
      "latitude": 53.54447004,
      "longitude": 10.03615474
    },
    "fuelLevel": 50,
    "address": "Bullerdeich 14, 20537 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471823178
  },
  {
    "vin": "WME4533421K037054",
    "plate": "B-GO3590",
    "geoCoordinate": {
      "latitude": 53.63458278,
      "longitude": 10.00747583
    },
    "fuelLevel": 65,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471893930
  },
  {
    "vin": "WME4533421K036429",
    "plate": "B-GO3501",
    "geoCoordinate": {
      "latitude": 53.55106722,
      "longitude": 10.01100528
    },
    "fuelLevel": 100,
    "address": "Kurt-Schumacher-Allee, 20097 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828405
  },
  {
    "vin": "WME4533421K087220",
    "plate": "B-GO8131",
    "geoCoordinate": {
      "latitude": 53.54600944,
      "longitude": 9.98498306
    },
    "fuelLevel": 21,
    "address": "Rödingsmarkt 39-43, 20459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471864745
  },
  {
    "vin": "WME4533421K087468",
    "plate": "B-GO8092",
    "geoCoordinate": {
      "latitude": 53.5415675,
      "longitude": 9.98751167
    },
    "fuelLevel": 87,
    "address": "Kaiserkai 67, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471922545
  },
  {
    "vin": "WME4533421K073027",
    "plate": "B-GO4841",
    "geoCoordinate": {
      "latitude": 53.65360528,
      "longitude": 10.09241833
    },
    "fuelLevel": 40,
    "address": "Heegbarg 12, 22391 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471823832
  },
  {
    "vin": "WME4533421K073656",
    "plate": "B-GO4845",
    "geoCoordinate": {
      "latitude": 53.57403111,
      "longitude": 10.08073778
    },
    "fuelLevel": 59,
    "address": "Neumann-Reichardt-Straße 27-33, 22041 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2",
    "secondaryColor": "EDA",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471888174
  },
  {
    "vin": "WME4533421K035653",
    "plate": "B-GO3682",
    "geoCoordinate": {
      "latitude": 53.48566667,
      "longitude": 10.21675389
    },
    "fuelLevel": 59,
    "address": "B5 5, 21029 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471817149
  },
  {
    "vin": "WME4533421K040061",
    "plate": "B-GO1045",
    "geoCoordinate": {
      "latitude": 53.65133556,
      "longitude": 10.09201417
    },
    "fuelLevel": 84,
    "address": "Wentzelpl. 3A, 22391 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471886735
  },
  {
    "vin": "WME4533421K071299",
    "plate": "B-GO4664",
    "geoCoordinate": {
      "latitude": 53.54885417,
      "longitude": 9.99921389
    },
    "fuelLevel": 90,
    "address": "Kattrepel 10, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471835202
  },
  {
    "vin": "WME4533421K149796",
    "plate": "B-GO8770",
    "geoCoordinate": {
      "latitude": 53.55080483,
      "longitude": 9.88831871
    },
    "fuelLevel": 46,
    "address": "Stindeweg 2, 22605 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471816098
  },
  {
    "vin": "WME4533421K072351",
    "plate": "B-GO4674",
    "geoCoordinate": {
      "latitude": 53.58866306,
      "longitude": 9.98272972
    },
    "fuelLevel": 100,
    "address": "Lenhartzstraße 22, 20249 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471902822
  },
  {
    "vin": "WME4533421K040188",
    "plate": "B-GO1073",
    "geoCoordinate": {
      "latitude": 53.54584722,
      "longitude": 10.0388025
    },
    "fuelLevel": 100,
    "address": "Brackdamm 18, 20537 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828049
  },
  {
    "vin": "WDD1760431J515805",
    "plate": "B-GO5508",
    "geoCoordinate": {
      "latitude": 53.54790086,
      "longitude": 9.98359539
    },
    "fuelLevel": 64,
    "address": "Pulverturmsbrücke, 20459 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471521757
  },
  {
    "vin": "WME4533421K035384",
    "plate": "B-GO3518",
    "geoCoordinate": {
      "latitude": 53.55785861,
      "longitude": 9.99228222
    },
    "fuelLevel": 78,
    "address": "Esplanade 40-41, 20354 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471916754
  },
  {
    "vin": "WME4533421K037416",
    "plate": "B-GO3550",
    "geoCoordinate": {
      "latitude": 53.55152472,
      "longitude": 10.08556694
    },
    "fuelLevel": 65,
    "address": "Sandkamp 5, 22111 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471859696
  },
  {
    "vin": "WME4533421K072643",
    "plate": "B-GO4763",
    "geoCoordinate": {
      "latitude": 53.5458,
      "longitude": 10.0030675
    },
    "fuelLevel": 50,
    "address": "Ericusspitze 1, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471823379
  },
  {
    "vin": "WME4533421K071467",
    "plate": "B-GO4754",
    "geoCoordinate": {
      "latitude": 53.70288972,
      "longitude": 9.98984972
    },
    "fuelLevel": 46,
    "address": "Heidbergstraße 29, 22846 Norderstedt",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828479
  },
  {
    "vin": "WDD1760421J666342",
    "plate": "B-GO5030",
    "geoCoordinate": {
      "latitude": 53.63398726,
      "longitude": 10.00716599
    },
    "fuelLevel": 98,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471824923
  },
  {
    "vin": "WME4533421K072499",
    "plate": "B-GO4673",
    "geoCoordinate": {
      "latitude": 53.54767111,
      "longitude": 9.99443417
    },
    "fuelLevel": 65,
    "address": "Domstraße 21, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471581090
  },
  {
    "vin": "WDD1760431J524263",
    "plate": "B-GO5683",
    "geoCoordinate": {
      "latitude": 53.55369427,
      "longitude": 10.00081418
    },
    "fuelLevel": 52,
    "address": "Raboisen 24, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471933277
  },
  {
    "vin": "WME4533421K149155",
    "plate": "B-GO8717",
    "geoCoordinate": {
      "latitude": 53.5543273,
      "longitude": 10.02372514
    },
    "fuelLevel": 46,
    "address": "Berliner Tor 49, 20099 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471809689
  },
  {
    "vin": "WDD1760121J521826",
    "plate": "B-GO5566",
    "geoCoordinate": {
      "latitude": 53.6347144,
      "longitude": 10.00789555
    },
    "fuelLevel": 84,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "DIESEL",
    "primaryColor": "787U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471415022
  },
  {
    "vin": "WME4533421K149461",
    "plate": "B-GO8752",
    "geoCoordinate": {
      "latitude": 53.594865,
      "longitude": 9.98715504
    },
    "fuelLevel": 25,
    "address": "Erikastraße 69, 20251 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471892817
  },
  {
    "vin": "WDD1760431J517564",
    "plate": "B-GO5530",
    "geoCoordinate": {
      "latitude": 53.60661222,
      "longitude": 10.01794427
    },
    "fuelLevel": 82,
    "address": "Djakartaweg, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471799884
  },
  {
    "vin": "WME4533421K088278",
    "plate": "B-GO8103",
    "geoCoordinate": {
      "latitude": 53.5496,
      "longitude": 9.99305417
    },
    "fuelLevel": 65,
    "address": "Große Johannisstraße 9, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471931062
  },
  {
    "vin": "WDC1569421J406397",
    "plate": "B-GO1050",
    "geoCoordinate": {
      "latitude": 53.55633759,
      "longitude": 9.98259218
    },
    "fuelLevel": 54,
    "address": "Valentinskamp 65, 20355 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "secondaryColor": "761O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471397065
  },
  {
    "vin": "WDD1760431J639431",
    "plate": "B-GO3023",
    "geoCoordinate": {
      "latitude": 53.58133783,
      "longitude": 10.02689964
    },
    "fuelLevel": 64,
    "address": "Weidestraße 120B, 22083 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "787U",
    "secondaryColor": "787O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471921019
  },
  {
    "vin": "WME4533421K149731",
    "plate": "B-GO8694",
    "geoCoordinate": {
      "latitude": 53.58738177,
      "longitude": 10.02531575
    },
    "fuelLevel": 100,
    "address": "Stammannstraße 24, 22303 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471832363
  },
  {
    "vin": "WDD1760431J517159",
    "plate": "B-GO5531",
    "geoCoordinate": {
      "latitude": 53.55574132,
      "longitude": 9.98357018
    },
    "fuelLevel": 42,
    "address": "Valentinskamp 35, 20354 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "761U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471324372
  },
  {
    "vin": "WDC1569431J438475",
    "plate": "B-GO1646",
    "geoCoordinate": {
      "latitude": 53.65498926,
      "longitude": 10.0946718
    },
    "fuelLevel": 26,
    "address": "car2go AEZ temp",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-1462-0000001e9ac4",
    "buildSeries": "X156",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "secondaryColor": "650O",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471820453
  },
  {
    "vin": "WME4533421K063299",
    "plate": "B-GO4334",
    "geoCoordinate": {
      "latitude": 53.56555861,
      "longitude": 9.87341111
    },
    "fuelLevel": 100,
    "address": "Windmühlenweg 5, 22607 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471887355
  },
  {
    "vin": "WME4533421K147288",
    "plate": "B-GO4009",
    "geoCoordinate": {
      "latitude": 53.58041402,
      "longitude": 10.01020391
    },
    "fuelLevel": 53,
    "address": "Dorotheenstraße 12-14, 22301 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471911643
  },
  {
    "vin": "WME4533421K073087",
    "plate": "B-GO4843",
    "geoCoordinate": {
      "latitude": 53.49015833,
      "longitude": 10.20515639
    },
    "fuelLevel": 28,
    "address": "switchh Bergedorf",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-0473-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471812031
  },
  {
    "vin": "WME4533421K036657",
    "plate": "B-GO3659",
    "geoCoordinate": {
      "latitude": 53.54865833,
      "longitude": 9.99953333
    },
    "fuelLevel": 65,
    "address": "Kattrepelsbrücke 1, 20095 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471928918
  },
  {
    "vin": "WME4533421K071538",
    "plate": "B-GO4756",
    "geoCoordinate": {
      "latitude": 53.46321417,
      "longitude": 9.98461583
    },
    "fuelLevel": 81,
    "address": "Karnapp 18-19, 21079 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471829792
  },
  {
    "vin": "WME4533421K070524",
    "plate": "B-GO4743",
    "geoCoordinate": {
      "latitude": 53.54486944,
      "longitude": 10.00005611
    },
    "fuelLevel": 100,
    "address": "Brooktorkai 6, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471875118
  },
  {
    "vin": "WME4533421K147183",
    "plate": "B-GO1139",
    "geoCoordinate": {
      "latitude": 53.50943348,
      "longitude": 9.99507742
    },
    "fuelLevel": 87,
    "address": "Zeidlerstraße 52A, 21107 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471821939
  },
  {
    "vin": "WME4533421K150304",
    "plate": "B-GO8742",
    "geoCoordinate": {
      "latitude": 53.58936051,
      "longitude": 10.10113742
    },
    "fuelLevel": 25,
    "address": "Friedrich-Ebert-Damm 168-178, 22047 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471929146
  },
  {
    "vin": "WME4533421K086259",
    "plate": "B-GO8121",
    "geoCoordinate": {
      "latitude": 53.5457075,
      "longitude": 9.93109389
    },
    "fuelLevel": 46,
    "address": "Rainvilleterrasse 4, 22765 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471899753
  },
  {
    "vin": "WME4533421K040017",
    "plate": "B-GO1036",
    "geoCoordinate": {
      "latitude": 53.53854056,
      "longitude": 10.03348917
    },
    "fuelLevel": 15,
    "address": "Billhorner Kanalstraße 17, 20539 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471827899
  },
  {
    "vin": "WME4533421K088025",
    "plate": "B-GO8196",
    "geoCoordinate": {
      "latitude": 53.55328528,
      "longitude": 10.02375361
    },
    "fuelLevel": 59,
    "address": "switchh Berliner Tor",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2928-4974-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471916051
  },
  {
    "vin": "WME4533421K073194",
    "plate": "B-GO4844",
    "geoCoordinate": {
      "latitude": 53.63460056,
      "longitude": 10.00755556
    },
    "fuelLevel": 46,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2",
    "secondaryColor": "EDA",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471219271
  },
  {
    "vin": "WME4533421K040144",
    "plate": "B-GO1069",
    "geoCoordinate": {
      "latitude": 53.57539861,
      "longitude": 10.08815167
    },
    "fuelLevel": 25,
    "address": "Kedenburgstraße 53, 22041 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471874860
  },
  {
    "vin": "WDD1760431J514632",
    "plate": "B-GO5469",
    "geoCoordinate": {
      "latitude": 53.63381604,
      "longitude": 10.00851734
    },
    "fuelLevel": 98,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "W176",
    "fuelType": "GASOLINE",
    "primaryColor": "650U",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471788973
  },
  {
    "vin": "WME4533421K071886",
    "plate": "B-GO4759",
    "geoCoordinate": {
      "latitude": 53.4719825,
      "longitude": 9.92063778
    },
    "fuelLevel": 53,
    "address": "Am Radeland 151, 21079 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471337986
  },
  {
    "vin": "WME4533421K148723",
    "plate": "B-GO8730",
    "geoCoordinate": {
      "latitude": 53.54471663,
      "longitude": 9.93764851
    },
    "fuelLevel": 96,
    "address": "Große Elbstraße 244-254, 22767 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471813346
  },
  {
    "vin": "WME4533421K085547",
    "plate": "B-GO8208",
    "geoCoordinate": {
      "latitude": 53.61959333,
      "longitude": 10.03385861
    },
    "fuelLevel": 34,
    "address": "Fuhlsbüttler Str. 741-745, 22337 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471842106
  },
  {
    "vin": "WME4533421K075132",
    "plate": "B-GO4830",
    "geoCoordinate": {
      "latitude": 53.48569417,
      "longitude": 10.21754889
    },
    "fuelLevel": 53,
    "address": "Am Brink 14, 21029 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471930521
  },
  {
    "vin": "WME4533421K075777",
    "plate": "B-GO4968",
    "geoCoordinate": {
      "latitude": 53.57506028,
      "longitude": 10.01982444
    },
    "fuelLevel": 71,
    "address": "Zimmerstraße 55, 22085 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471916988
  },
  {
    "vin": "WME4533421K071027",
    "plate": "B-GO4501",
    "geoCoordinate": {
      "latitude": 53.63467583,
      "longitude": 10.00776083
    },
    "fuelLevel": 78,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471842580
  },
  {
    "vin": "WME4533421K036787",
    "plate": "B-GO3568",
    "geoCoordinate": {
      "latitude": 53.65126222,
      "longitude": 10.08989167
    },
    "fuelLevel": 100,
    "address": "Grotenbleken 12, 22391 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471766348
  },
  {
    "vin": "WME4533421K084970",
    "plate": "B-GO8077",
    "geoCoordinate": {
      "latitude": 53.64720722,
      "longitude": 10.09013139
    },
    "fuelLevel": 12,
    "address": "Stadtbahnstraße 114-116, 22391 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471915837
  },
  {
    "vin": "WME4533421K087268",
    "plate": "B-GO8094",
    "geoCoordinate": {
      "latitude": 53.48981861,
      "longitude": 10.20481806
    },
    "fuelLevel": 71,
    "address": "switchh Bergedorf",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2930-0473-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471792109
  },
  {
    "vin": "WME4533421K072231",
    "plate": "B-GO4548",
    "geoCoordinate": {
      "latitude": 53.4895825,
      "longitude": 10.22012306
    },
    "fuelLevel": 75,
    "address": "Lamprechtstraße 6, 21029 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 470697365
  },
  {
    "vin": "WME4533421K148563",
    "plate": "B-GO8681",
    "geoCoordinate": {
      "latitude": 53.56519593,
      "longitude": 9.90841325
    },
    "fuelLevel": 53,
    "address": "Von-Sauer-Straße 15, 22761 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471905384
  },
  {
    "vin": "WME4533421K088755",
    "plate": "B-GO8202",
    "geoCoordinate": {
      "latitude": 53.60293583,
      "longitude": 10.01953556
    },
    "fuelLevel": 100,
    "address": "New-York-Ring 13, 22297 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471710120
  },
  {
    "vin": "WME4533421K040308",
    "plate": "B-GO1076",
    "geoCoordinate": {
      "latitude": 53.545145,
      "longitude": 10.00154306
    },
    "fuelLevel": 100,
    "address": "Brooktorkai 20, 20457 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471829807
  },
  {
    "vin": "WME4533421K086574",
    "plate": "B-GO8082",
    "geoCoordinate": {
      "latitude": 53.57405417,
      "longitude": 10.0890225
    },
    "fuelLevel": 84,
    "address": "Am Neumarkt 30, 22041 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471849161
  },
  {
    "vin": "WME4533421K036309",
    "plate": "B-GO3572",
    "geoCoordinate": {
      "latitude": 53.54402917,
      "longitude": 9.93891111
    },
    "fuelLevel": 100,
    "address": "Van-der-Smissen-Straße 3, 22767 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828918
  },
  {
    "vin": "WME4533421K039950",
    "plate": "B-GO1004",
    "geoCoordinate": {
      "latitude": 53.599385,
      "longitude": 9.94421361
    },
    "fuelLevel": 56,
    "address": "Gazellenkamp 84, 22529 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3",
    "secondaryColor": "EAZ",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471915818
  },
  {
    "vin": "WME4533421K088382",
    "plate": "B-GO8140",
    "geoCoordinate": {
      "latitude": 53.57148944,
      "longitude": 9.93527556
    },
    "fuelLevel": 100,
    "address": "Haferweg 15, 22769 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471844164
  },
  {
    "vin": "WME4533421K070586",
    "plate": "B-GO4708",
    "geoCoordinate": {
      "latitude": 53.62724083,
      "longitude": 10.08719167
    },
    "fuelLevel": 31,
    "address": "Maisredder 7-9, 22175 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EDAO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471822864
  },
  {
    "vin": "WME4533421K072607",
    "plate": "B-GO4545",
    "geoCoordinate": {
      "latitude": 53.63448,
      "longitude": 10.00731167
    },
    "fuelLevel": 78,
    "address": "HH Flughafen P2 Bereich B",
    "locationAlias": "hamburg",
    "locationId": 3,
    "parkingId": "20160926-1123-2929-7376-0000001e9ac4",
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471829597
  },
  {
    "vin": "WME4533421K088101",
    "plate": "B-GO8135",
    "geoCoordinate": {
      "latitude": 53.5475425,
      "longitude": 9.87362444
    },
    "fuelLevel": 59,
    "address": "Holztwiete 25, 22605 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN3U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471619311
  },
  {
    "vin": "WME4533421K065109",
    "plate": "B-GO4284",
    "geoCoordinate": {
      "latitude": 53.47195778,
      "longitude": 9.92125389
    },
    "fuelLevel": 100,
    "address": "Am Radeland 124, 21079 Hamburg",
    "locationAlias": "hamburg",
    "locationId": 3,
    "buildSeries": "C453",
    "fuelType": "GASOLINE",
    "primaryColor": "EN2U",
    "secondaryColor": "EAZO",
    "charging": false,
    "freeForRental": true,
    "hardwareVersion": "HW3",
    "globalVersion": 471828135
  }
];

export function getVehicles() {
  return vehicles;
}