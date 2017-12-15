var nodesDataset = [
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
	{id: 14, x : 575.736, y : 787.868, label: '14', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 15, x : 618.162, y : 872.72, label: '15', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 16, x : 681.802, y : 1000, label: '16', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 17, x : 618.162, y : 1127.28, label: '17', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 18, x : 575.736, y : 1212.132, label: '18', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},

	// New (right)
	{id: 19, x : 1424.264, y : 787.868, label: '19', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 20, x : 1381.838, y : 872.72, label: '20', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 21, x : 1318.198, y : 1000, label: '21', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 22, x : 1381.838, y : 1127.28, label: '22', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 23, x : 1424.264, y : 1212.132, label: '23', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},

	// New (top)
	{id: 24, x : 787.868, y : 575.736, label: '24', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 25, x : 872.721, y : 618.162, label: '25', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 26, x : 1000, y : 681.802, label: '26', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 27, x : 1127.279, y : 618.162, label: '27', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 28, x : 1212.132, y : 575.736, label: '28', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},

	// New (bottom)
	{id: 29, x : 787.868, y : 1424.264, label: '29', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 30, x : 872.721, y : 1381.838, label: '30', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 31, x : 1000, y : 1318.198, label: '31', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 32, x : 1127.279, y : 1381.838, label: '32', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 33, x : 1212.132, y : 1424.264, label: '33', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},

	// Left-top
	{id: 34, x : 681.802, y : 681.802, label: '34', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 35, x : 787.868, y : 787.868, label: '35', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},

	// Right-bottom
	{id: 36, x : 1318.198, y : 1318.198, label: '36', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 37, x : 1212.132, y : 1212.132, label: '37', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},

	// Right-top
	{id: 38, x : 1212.132, y : 787.868, label: '38', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 39, x : 1318.198, y : 681.802, label: '39', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},

	// Left-bottom
	{id: 40, x : 787.868, y : 1212.132, label: '40', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 41, x : 681.802, y : 1318.198, label: '41', color: 'rgba(0,255,0,0.20)', widthConstraint: { minimum: 10 }},


	// Yellow
	{id: 42, x : 1000, y : 1120, label: '42', color: 'rgba(255,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 43, x : 1000, y : 880, label: '43', color: 'rgba(255,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 44, x : 1120, y : 1000, label: '44', color: 'rgba(255,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 45, x : 880, y : 1000, label: '45', color: 'rgba(255,255,0,0.20)', widthConstraint: { minimum: 10 }},

	{id: 46, x : 915.147, y : 915.147, label: '46', color: 'rgba(255,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 47, x : 915.147, y : 1084.853, label: '47', color: 'rgba(255,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 48, x : 1084.853, y : 915.147, label: '48', color: 'rgba(255,255,0,0.20)', widthConstraint: { minimum: 10 }},
	{id: 49, x : 1084.853, y : 1084.853, label: '49', color: 'rgba(255,255,0,0.20)', widthConstraint: { minimum: 10 }},

	{id: 50, x : 1000, y : 1000, label: '50', color: 'rgba(255,255,0,0.20)', widthConstraint: { minimum: 10 }},
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

	// 14
	{from: 14, to: 6, label: ''},
	{from: 14, to: 10, label: ''},
	{from: 14, to: 11, label: ''},
	{from: 14, to: 12, label: ''},

	// 15
	{from: 15, to: 6, label: ''},
	{from: 15, to: 9, label: ''},
	{from: 15, to: 11, label: ''},
	{from: 15, to: 12, label: ''},

	// 16
	{from: 16, to: 6, label: ''},
	{from: 16, to: 7, label: ''},
	{from: 16, to: 10, label: ''},
	{from: 16, to: 11, label: ''},
	{from: 16, to: 12, label: ''},
	{from: 16, to: 13, label: ''},

	// 17
	{from: 17, to: 7, label: ''},
	{from: 17, to: 8, label: ''},
	{from: 17, to: 10, label: ''},
	{from: 17, to: 11, label: ''},

	// 18
	{from: 18, to: 7, label: ''},
	{from: 18, to: 10, label: ''},
	{from: 18, to: 11, label: ''},
	{from: 18, to: 12, label: ''},

	// 19
	{from: 19, to: 9, label: ''},
	{from: 19, to: 10, label: ''},
	{from: 19, to: 12, label: ''},
	{from: 19, to: 13, label: ''},

	// 20
	{from: 20, to: 6, label: ''},
	{from: 20, to: 9, label: ''},
	{from: 20, to: 12, label: ''},
	{from: 20, to: 13, label: ''},

	// 21
	{from: 21, to: 8, label: ''},
	{from: 21, to: 9, label: ''},
	{from: 21, to: 10, label: ''},
	{from: 21, to: 11, label: ''},
	{from: 21, to: 12, label: ''},
	{from: 21, to: 13, label: ''},

	// 22
	{from: 22, to: 7, label: ''},
	{from: 22, to: 8, label: ''},
	{from: 22, to: 10, label: ''},
	{from: 22, to: 13, label: ''},

	// 23
	{from: 23, to: 8, label: ''},
	{from: 23, to: 10, label: ''},
	{from: 23, to: 12, label: ''},
	{from: 23, to: 13, label: ''},

	// 24
	{from: 24, to: 6, label: ''},
	{from: 24, to: 10, label: ''},
	{from: 24, to: 11, label: ''},
	{from: 24, to: 13, label: ''},

	// 25
	{from: 25, to: 6, label: ''},
	{from: 25, to: 7, label: ''},
	{from: 25, to: 10, label: ''},
	{from: 25, to: 13, label: ''},

	// 26
	{from: 26, to: 6, label: ''},
	{from: 26, to: 9, label: ''},
	{from: 26, to: 10, label: ''},
	{from: 26, to: 11, label: ''},
	{from: 26, to: 12, label: ''},
	{from: 26, to: 13, label: ''},

	// 27
	{from: 27, to: 8, label: ''},
	{from: 27, to: 9, label: ''},
	{from: 27, to: 10, label: ''},
	{from: 27, to: 11, label: ''},

	// 28
	{from: 28, to: 9, label: ''},
	{from: 28, to: 10, label: ''},
	{from: 28, to: 11, label: ''},
	{from: 28, to: 13, label: ''},

	// 29
	{from: 29, to: 7, label: ''},
	{from: 29, to: 11, label: ''},
	{from: 29, to: 12, label: ''},
	{from: 29, to: 13, label: ''},

	// 30
	{from: 30, to: 6, label: ''},
	{from: 30, to: 7, label: ''},
	{from: 30, to: 12, label: ''},
	{from: 30, to: 13, label: ''},

	// 31
	{from: 31, to: 7, label: ''},
	{from: 31, to: 8, label: ''},
	{from: 31, to: 10, label: ''},
	{from: 31, to: 11, label: ''},
	{from: 31, to: 12, label: ''},
	{from: 31, to: 13, label: ''},

	// 32
	{from: 32, to: 8, label: ''},
	{from: 32, to: 9, label: ''},
	{from: 32, to: 11, label: ''},
	{from: 32, to: 12, label: ''},

	// 33
	{from: 33, to: 8, label: ''},
	{from: 33, to: 11, label: ''},
	{from: 33, to: 12, label: ''},
	{from: 33, to: 13, label: ''},

	// 34
	{from: 34, to: 6, label: ''},
	{from: 34, to: 8, label: ''},
	{from: 34, to: 10, label: ''},
	{from: 34, to: 11, label: ''},

	// 35
	{from: 35, to: 6, label: ''},
	{from: 35, to: 7, label: ''},
	{from: 35, to: 8, label: ''},
	{from: 35, to: 9, label: ''},
	{from: 35, to: 11, label: ''},
	{from: 35, to: 10, label: ''},

	// 36
	{from: 36, to: 6, label: ''},
	{from: 36, to: 8, label: ''},
	{from: 36, to: 12, label: ''},
	{from: 36, to: 13, label: ''},

	// 37
	{from: 37, to: 6, label: ''},
	{from: 37, to: 7, label: ''},
	{from: 37, to: 8, label: ''},
	{from: 37, to: 9, label: ''},
	{from: 37, to: 12, label: ''},
	{from: 37, to: 13, label: ''},

	// 38
	{from: 38, to: 6, label: ''},
	{from: 38, to: 7, label: ''},
	{from: 38, to: 8, label: ''},
	{from: 38, to: 9, label: ''},
	{from: 38, to: 10, label: ''},
	{from: 38, to: 13, label: ''},

	// 39
	{from: 39, to: 7, label: ''},
	{from: 39, to: 9, label: ''},
	{from: 39, to: 10, label: ''},
	{from: 39, to: 13, label: ''},

	// 40
	{from: 40, to: 6, label: ''},
	{from: 40, to: 7, label: ''},
	{from: 40, to: 8, label: ''},
	{from: 40, to: 9, label: ''},
	{from: 40, to: 11, label: ''},
	{from: 40, to: 12, label: ''},

	// 41
	{from: 41, to: 7, label: ''},
	{from: 41, to: 9, label: ''},
	{from: 41, to: 11, label: ''},
	{from: 41, to: 12, label: ''},
];