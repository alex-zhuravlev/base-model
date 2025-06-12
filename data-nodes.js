const g_dataNodes = Object.freeze([
	// Central
	{id: 1, x : 1000, y : 1000, label: '1', color: '#7BE141'},

	// Main circle
	{id: 2, x : 1000, y : 100, label: '2', color: 'rgba(255,0,0,0.20)'},
	{id: 3, x : 100, y : 1000, label: '3', color: 'rgba(255,0,0,0.20)'},
	{id: 4, x : 1000, y : 1900, label: '4', color: 'rgba(255,0,0,0.20)'},
	{id: 5, x : 1900, y : 1000, label: '5', color: 'rgba(255,0,0,0.20)'},

	// Main sqare
	{id: 6, x : 363.604, y : 363.604, label: '6', color: 'rgba(0,0,255,0.20)'},
	{id: 7, x : 363.604, y : 1636.396, label: '7', color: 'rgba(0,0,255,0.20)'},
	{id: 8, x : 1636.396, y : 1636.396, label: '8', color: 'rgba(0,0,255,0.20)'},
	{id: 9, x : 1636.396, y : 363.604, label: '9', color: 'rgba(0,0,255,0.20)'},

	// Main circle - main sqare
	{id: 10, x : 1000, y : 363.604, label: '10', color: 'rgba(0,0,255,0.20)'},
	{id: 11, x : 363.604, y : 1000, label: '11', color: 'rgba(0,0,255,0.20)'},

	{id: 12, x : 1000, y : 1636.396, label: '12', color: 'rgba(0,0,255,0.20)'},
	{id: 13, x : 1636.396, y : 1000, label: '13', color: 'rgba(0,0,255,0.20)'},

	// New (left)
	{id: 14, x : 575.736, y : 787.868, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 15, x : 618.162, y : 872.72, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 16, x : 681.802, y : 1000, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 17, x : 618.162, y : 1127.28, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 18, x : 575.736, y : 1212.132, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},

	// New (right)
	{id: 19, x : 1424.264, y : 787.868, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 20, x : 1381.838, y : 872.72, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 21, x : 1318.198, y : 1000, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 22, x : 1381.838, y : 1127.28, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 23, x : 1424.264, y : 1212.132, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},

	// New (top)
	{id: 24, x : 787.868, y : 575.736, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 25, x : 872.721, y : 618.162, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 26, x : 1000, y : 681.802, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 27, x : 1127.279, y : 618.162, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 28, x : 1212.132, y : 575.736, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},

	// New (bottom)
	{id: 29, x : 787.868, y : 1424.264, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 30, x : 872.721, y : 1381.838, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 31, x : 1000, y : 1318.198, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 32, x : 1127.279, y : 1381.838, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 33, x : 1212.132, y : 1424.264, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},

	// Left-top
	{id: 34, x : 681.802, y : 681.802, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 35, x : 787.868, y : 787.868, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},

	// Right-bottom
	{id: 36, x : 1318.198, y : 1318.198, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 37, x : 1212.132, y : 1212.132, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},

	// Right-top
	{id: 38, x : 1212.132, y : 787.868, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 39, x : 1318.198, y : 681.802, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},

	// Left-bottom
	{id: 40, x : 787.868, y : 1212.132, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 41, x : 681.802, y : 1318.198, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},


	// Yellow
	/*
	{id: 42, x : 1000, y : 1120, label: '42', color: 'rgba(255,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 43, x : 1000, y : 880, label: '43', color: 'rgba(255,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 44, x : 1120, y : 1000, label: '44', color: 'rgba(255,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 45, x : 880, y : 1000, label: '45', color: 'rgba(255,255,0,0.20)', widthConstraint: { minimum: 10 }},

	{id: 46, x : 915.147, y : 915.147, label: '46', color: 'rgba(255,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 47, x : 915.147, y : 1084.853, label: '47', color: 'rgba(255,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 48, x : 1084.853, y : 915.147, label: '48', color: 'rgba(255,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 49, x : 1084.853, y : 1084.853, label: '49', color: 'rgba(255,255,0,0.20)', widthConstraint: { minimum: 10 }},

	{id: 50, x : 1000, y : 1000, label: '50', color: 'rgba(255,255,0,0.20)', widthConstraint: { minimum: 10 }},
	*/

	// External square
	{id: 51, x : 100, y : 100, label: '51', color: 'rgba(63,224,208,0.20)'},
	{id: 52, x : 100, y : 1900, label: '52', color: 'rgba(63,224,208,0.20)'},
	{id: 53, x : 1900, y : 1900, label: '53', color: 'rgba(63,224,208,0.20)'},
	{id: 54, x : 1900, y : 100, label: '54', color: 'rgba(63,224,208,0.20)'},

	// External green square
	{id: 55, x : 550, y : 550, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 56, x : 550, y : 1450, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 57, x : 1450, y : 1450, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 58, x : 1450, y : 550, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 59, x : 550, y : 736.4, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 60, x : 550, y : 1263.6, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 61, x : 736.4, y : 1450, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 62, x : 1263.6, y : 1450, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 63, x : 1450, y : 1263.6, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 64, x : 1450, y : 736.4, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 65, x : 1263.6, y : 550, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 66, x : 736.4, y : 550, label: '  ', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},

	// External smoke circle
	{id: 70, x : -272.792, y : 1000, label: '70', color: 'rgba(201,208,210,0.20)'},
	{id: 71, x : 2272.792, y : 1000, label: '71', color: 'rgba(201,208,210,0.20)'},
	{id: 72, x : 1000, y : -272.792, label: '72', color: 'rgba(201,208,210,0.20)'},
	{id: 73, x : 1000, y : 2272.792, label: '73', color: 'rgba(201,208,210,0.20)'},
]);