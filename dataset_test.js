var scale = 2.5;

var nodesDataset = [
	// Central
	{id: 1, x : 1000 * scale, y : 1000 * scale, label: '1', color: '#7BE141', widthConstraint: { minimum: 200 }},

	// Main circle
	{id: 2, x : 1000 * scale, y : 100 * scale, label: '2', color: 'rgba(255,0,0,0.20)', widthConstraint: { minimum: 200 }},
	{id: 3, x : 100 * scale, y : 1000 * scale, label: '3', color: 'rgba(255,0,0,0.20)', widthConstraint: { minimum: 200 }},
	{id: 4, x : 1000 * scale, y : 1900 * scale, label: '4', color: 'rgba(255,0,0,0.20)', widthConstraint: { minimum: 200 }},
	{id: 5, x : 1900 * scale, y : 1000 * scale, label: '5', color: 'rgba(255,0,0,0.20)', widthConstraint: { minimum: 200 }},

	// Main sqare
	{id: 6, x : 363.604 * scale, y : 363.604 * scale, label: '6', color: 'rgba(0,0,255,0.20)', widthConstraint: { minimum: 200 }},
	{id: 7, x : 363.604 * scale, y : 1636.396 * scale, label: '7', color: 'rgba(0,0,255,0.20)', widthConstraint: { minimum: 200 }},
	{id: 8, x : 1636.396 * scale, y : 1636.396 * scale, label: '8', color: 'rgba(0,0,255,0.20)', widthConstraint: { minimum: 200 }},
	{id: 9, x : 1636.396 * scale, y : 363.604 * scale, label: '9', color: 'rgba(0,0,255,0.20)', widthConstraint: { minimum: 200 }},

	// Main circle - main sqare
	{id: 10, x : 1000 * scale, y : 363.604 * scale, label: '10', color: 'rgba(0,0,255,0.20)', widthConstraint: { minimum: 200 }},
	{id: 11, x : 363.604 * scale, y : 1000 * scale, label: '11', color: 'rgba(0,0,255,0.20)', widthConstraint: { minimum: 200 }},

	{id: 12, x : 1000 * scale, y : 1636.396 * scale, label: '12', color: 'rgba(0,0,255,0.20)', widthConstraint: { minimum: 200 }},
	{id: 13, x : 1636.396 * scale, y : 1000 * scale, label: '13', color: 'rgba(0,0,255,0.20)', widthConstraint: { minimum: 200 }},
];

var nodesDatasetAuxiliary = [
	// Auxiliary
	{id: 51, x : 1000 * scale, y : 627.21 * scale, label: '51', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 52, x : 736.4 * scale, y : 736.4 * scale, label: '52', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 53, x : 472.79 * scale, y : 845.58 * scale, label: '53', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 54, x : 550 * scale, y : 813.6 * scale, label: '54', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 55, x : 529.83 * scale, y : 764.92 * scale, label: '55', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 56, x : 507.77 * scale, y : 711.66 * scale, label: '56', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 57, x : 472.79 * scale, y : 627.21 * scale, label: '57', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 58, x : 627.21 * scale, y : 472.79 * scale, label: '58', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 59, x : 711.66 * scale, y : 507.77 * scale, label: '59', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 60, x : 764.92 * scale, y : 529.83 * scale, label: '60', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 61, x : 813.6 * scale, y : 550 * scale, label: '61', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 62, x : 845.58 * scale, y : 472.79 * scale, label: '62', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 63, x : 627.21 * scale, y : 627.21 * scale, label: '63', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 64, x : 627.21 * scale, y : 1000 * scale, label: '64', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 65, x : 1000 * scale, y : 1372.79 * scale, label: '65', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 66, x : 1372.79 * scale, y : 1000 * scale, label: '66', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 67, x : 1186.4 * scale, y : 550 * scale, label: '67', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 68, x : 813.6 * scale, y : 1450 * scale, label: '68', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 69, x : 1186.4 * scale, y : 1450 * scale, label: '69', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 70, x : 764.92 * scale, y : 1470.17 * scale, label: '70', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 71, x : 1235.08 * scale, y : 529.83 * scale, label: '71', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 72, x : 1235.08 * scale, y : 1470.17 * scale, label: '72', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 73, x : 711.66 * scale, y : 1492.23 * scale, label: '73', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 74, x : 1288.34 * scale, y : 507.77 * scale, label: '74', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 75, x : 1288.34 * scale, y : 1492.23 * scale, label: '75', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 76, x : 627.21 * scale, y : 1527.21 * scale, label: '76', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 77, x : 1372.79 * scale, y : 472.79 * scale, label: '77', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 78, x : 1372.79 * scale, y : 1527.21 * scale, label: '78', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 79, x : 472.79 * scale, y : 1372.79 * scale, label: '79', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 80, x : 1527.21 * scale, y : 627.21 * scale, label: '80', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 81, x : 1527.21 * scale, y : 1372.79 * scale, label: '81', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 82, x : 507.77 * scale, y : 1288.34 * scale, label: '82', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 83, x : 1492.23 * scale, y : 711.66 * scale, label: '83', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 84, x : 1492.23 * scale, y : 1288.34 * scale, label: '84', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 85, x : 529.83 * scale, y : 1235.08 * scale, label: '85', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 86, x : 1470.17 * scale, y : 764.92 * scale, label: '86', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 87, x : 1470.17 * scale, y : 1235.08 * scale, label: '87', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 88, x : 550 * scale, y : 1186.4 * scale, label: '88', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 89, x : 1450 * scale, y : 813.6 * scale, label: '89', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 90, x : 1450 * scale, y : 1186.4 * scale, label: '90', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 91, x : 845.58 * scale, y : 1527.21 * scale, label: '91', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 92, x : 1154.42 * scale, y : 472.79 * scale, label: '92', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 93, x : 1154.42 * scale, y : 1527.21 * scale, label: '93', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 94, x : 472.79 * scale, y : 1154.42 * scale, label: '94', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 95, x : 1527.21 * scale, y : 845.58 * scale, label: '95', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 96, x : 1527.21 * scale, y : 1154.42 * scale, label: '96', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 97, x : 736.4 * scale, y : 1263.6 * scale, label: '97', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 98, x : 1263.6 * scale, y : 736.4 * scale, label: '98', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 99, x : 1263.6 * scale, y : 1263.6 * scale, label: '99', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 100, x : 627.21 * scale, y : 1372.79 * scale, label: '100', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 101, x : 1372.79 * scale, y : 627.21 * scale, label: '101', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
	{id: 102, x : 1372.79 * scale, y : 1372.79 * scale, label: '102', color: 'rgba(80,0,130,1.0)', widthConstraint: { minimum: 70 }, font: {color: 'white'}},
];

var edgesDataset = [
	// Central
	{from: 1, to: 2, label: ''},
	{from: 1, to: 3, label: ''},
	{from: 1, to: 4, label: ''},
	{from: 1, to: 5, label: ''},
	{from: 1, to: 6, label: ''},
	{from: 1, to: 7, label: ''},
	{from: 1, to: 8, label: ''},
	{from: 1, to: 9, label: ''},
	{from: 1, to: 10, label: ''},
	{from: 1, to: 11, label: ''},
	{from: 1, to: 12, label: ''},
	{from: 1, to: 13, label: ''},

	// 2
	{from: 2, to: 3, label: ''},
	{from: 2, to: 4, label: ''},
	{from: 2, to: 5, label: ''},
	{from: 2, to: 6, label: ''},
	{from: 2, to: 7, label: ''},
	{from: 2, to: 8, label: ''},
	{from: 2, to: 9, label: ''},
	{from: 2, to: 10, label: ''},
	{from: 2, to: 11, label: ''},
	{from: 2, to: 12, label: ''},
	{from: 2, to: 13, label: ''},

	// 3
	{from: 3, to: 4, label: ''},
	{from: 3, to: 5, label: ''},
	{from: 3, to: 6, label: ''},
	{from: 3, to: 7, label: ''},
	{from: 3, to: 8, label: ''},
	{from: 3, to: 9, label: ''},
	{from: 3, to: 10, label: ''},
	{from: 3, to: 11, label: ''},
	{from: 3, to: 12, label: ''},
	{from: 3, to: 13, label: ''},

	// 4
	{from: 4, to: 5, label: ''},
	{from: 4, to: 6, label: ''},
	{from: 4, to: 7, label: ''},
	{from: 4, to: 8, label: ''},
	{from: 4, to: 9, label: ''},
	{from: 4, to: 10, label: ''},
	{from: 4, to: 11, label: ''},
	{from: 4, to: 12, label: ''},
	{from: 4, to: 13, label: ''},

	// 5
	{from: 5, to: 6, label: ''},
	{from: 5, to: 7, label: ''},
	{from: 5, to: 8, label: ''},
	{from: 5, to: 9, label: ''},
	{from: 5, to: 10, label: ''},
	{from: 5, to: 11, label: ''},
	{from: 5, to: 12, label: ''},
	{from: 5, to: 13, label: ''},

	// 6
	{from: 6, to: 7, label: ''},
	{from: 6, to: 8, label: ''},
	{from: 6, to: 9, label: ''},
	{from: 6, to: 10, label: ''},
	{from: 6, to: 11, label: ''},
	{from: 6, to: 12, label: ''},
	{from: 6, to: 13, label: ''},

	// 7
	{from: 7, to: 8, label: ''},
	{from: 7, to: 9, label: ''},
	{from: 7, to: 10, label: ''},
	{from: 7, to: 11, label: ''},
	{from: 7, to: 12, label: ''},
	{from: 7, to: 13, label: ''},

	// 8
	{from: 8, to: 9, label: ''},
	{from: 8, to: 10, label: ''},
	{from: 8, to: 11, label: ''},
	{from: 8, to: 12, label: ''},
	{from: 8, to: 13, label: ''},

	// 9
	{from: 9, to: 10, label: ''},
	{from: 9, to: 11, label: ''},
	{from: 9, to: 12, label: ''},
	{from: 9, to: 13, label: ''},

	// 10
	{from: 10, to: 11, label: ''},
	{from: 10, to: 12, label: ''},
	{from: 10, to: 13, label: ''},

	// 11
	{from: 11, to: 12, label: ''},
	{from: 11, to: 13, label: ''},

	// 12
	{from: 12, to: 13, label: ''},

	// 13
	// none
];