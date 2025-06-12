const g_dataEdges = Object.freeze([
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

	// 51
	{from: 51, to: 1, label: ''},
	{from: 51, to: 2, label: ''},
	{from: 51, to: 3, label: ''},
	{from: 51, to: 6, label: ''},
	{from: 51, to: 8, label: ''},
	{from: 51, to: 34, label: ''},
	{from: 51, to: 35, label: ''},
	{from: 51, to: 36, label: ''},
	{from: 51, to: 37, label: ''},
	{from: 51, to: 52, label: ''},
	{from: 51, to: 53, label: ''},
	{from: 51, to: 54, label: ''},

	// 52
	{from: 52, to: 1, label: ''},
	{from: 52, to: 3, label: ''},
	{from: 52, to: 4, label: ''},
	{from: 52, to: 7, label: ''},
	{from: 52, to: 9, label: ''},
	{from: 52, to: 38, label: ''},
	{from: 52, to: 39, label: ''},
	{from: 52, to: 40, label: ''},
	{from: 52, to: 41, label: ''},
	{from: 52, to: 53, label: ''},
	{from: 52, to: 54, label: ''},

	// 53
	{from: 53, to: 1, label: ''},
	{from: 53, to: 4, label: ''},
	{from: 53, to: 5, label: ''},
	{from: 53, to: 6, label: ''},
	{from: 53, to: 8, label: ''},
	{from: 53, to: 34, label: ''},
	{from: 53, to: 35, label: ''},
	{from: 53, to: 36, label: ''},
	{from: 53, to: 37, label: ''},
	{from: 53, to: 54, label: ''},

	// 54
	{from: 54, to: 1, label: ''},
	{from: 54, to: 2, label: ''},
	{from: 54, to: 5, label: ''},
	{from: 54, to: 7, label: ''},
	{from: 54, to: 9, label: ''},
	{from: 54, to: 38, label: ''},
	{from: 54, to: 39, label: ''},
	{from: 54, to: 40, label: ''},
	{from: 54, to: 41, label: ''},

	// 55
	{from: 55, to: 2, label: ''},
	{from: 55, to: 3, label: ''},
	{from: 55, to: 6, label: ''},
	{from: 55, to: 8, label: ''},
	{from: 55, to: 51, label: ''},
	{from: 55, to: 53, label: ''},

	// 56
	{from: 56, to: 3, label: ''},
	{from: 56, to: 4, label: ''},
	{from: 56, to: 7, label: ''},
	{from: 56, to: 9, label: ''},
	{from: 56, to: 52, label: ''},
	{from: 56, to: 54, label: ''},

	// 57
	{from: 57, to: 4, label: ''},
	{from: 57, to: 5, label: ''},
	{from: 57, to: 6, label: ''},
	{from: 57, to: 8, label: ''},
	{from: 57, to: 51, label: ''},
	{from: 57, to: 53, label: ''},

	// 58
	{from: 58, to: 2, label: ''},
	{from: 58, to: 5, label: ''},
	{from: 58, to: 7, label: ''},
	{from: 58, to: 9, label: ''},
	{from: 58, to: 52, label: ''},
	{from: 58, to: 54, label: ''},

	// 59
	{from: 59, to: 2, label: ''},
	{from: 59, to: 6, label: ''},
	{from: 59, to: 11, label: ''},
	{from: 59, to: 12, label: ''},

	// 60
	{from: 60, to: 4, label: ''},
	{from: 60, to: 7, label: ''},
	{from: 60, to: 10, label: ''},
	{from: 60, to: 11, label: ''},

	// 61
	{from: 61, to: 3, label: ''},
	{from: 61, to: 7, label: ''},
	{from: 61, to: 12, label: ''},
	{from: 61, to: 13, label: ''},

	// 62
	{from: 62, to: 5, label: ''},
	{from: 62, to: 8, label: ''},
	{from: 62, to: 11, label: ''},
	{from: 62, to: 12, label: ''},

	// 63
	{from: 63, to: 4, label: ''},
	{from: 63, to: 8, label: ''},
	{from: 63, to: 10, label: ''},
	{from: 63, to: 13, label: ''},

	// 64
	{from: 64, to: 2, label: ''},
	{from: 64, to: 9, label: ''},
	{from: 64, to: 12, label: ''},
	{from: 64, to: 13, label: ''},

	// 65
	{from: 65, to: 5, label: ''},
	{from: 65, to: 9, label: ''},
	{from: 65, to: 10, label: ''},
	{from: 65, to: 11, label: ''},

	// 66
	{from: 66, to: 3, label: ''},
	{from: 66, to: 6, label: ''},
	{from: 66, to: 10, label: ''},
	{from: 66, to: 13, label: ''},

	// 70
	{from: 70, to: 1, label: ''},
	{from: 70, to: 3, label: ''},
	{from: 70, to: 5, label: ''},
	{from: 70, to: 11, label: ''},
	{from: 70, to: 13, label: ''},
	{from: 70, to: 16, label: ''},
	{from: 70, to: 21, label: ''},
	{from: 70, to: 51, label: ''},
	{from: 70, to: 52, label: ''},
	{from: 70, to: 71, label: ''},
	{from: 70, to: 72, label: ''},
	{from: 70, to: 73, label: ''},

	// 71
	{from: 71, to: 1, label: ''},
	{from: 71, to: 3, label: ''},
	{from: 71, to: 5, label: ''},
	{from: 71, to: 11, label: ''},
	{from: 71, to: 13, label: ''},
	{from: 71, to: 16, label: ''},
	{from: 71, to: 21, label: ''},
	{from: 71, to: 53, label: ''},
	{from: 71, to: 54, label: ''},
	{from: 71, to: 70, label: ''},
	{from: 71, to: 72, label: ''},
	{from: 71, to: 73, label: ''},

	// 72
	{from: 72, to: 1, label: ''},
	{from: 72, to: 2, label: ''},
	{from: 72, to: 4, label: ''},
	{from: 72, to: 10, label: ''},
	{from: 72, to: 12, label: ''},
	{from: 72, to: 26, label: ''},
	{from: 72, to: 31, label: ''},
	{from: 72, to: 51, label: ''},
	{from: 72, to: 54, label: ''},
	{from: 72, to: 70, label: ''},
	{from: 72, to: 71, label: ''},
	{from: 72, to: 73, label: ''},

	// 73
	{from: 73, to: 1, label: ''},
	{from: 73, to: 2, label: ''},
	{from: 73, to: 4, label: ''},
	{from: 73, to: 7, label: ''},
	{from: 73, to: 8, label: ''},
	{from: 73, to: 26, label: ''},
	{from: 73, to: 31, label: ''},
	{from: 73, to: 52, label: ''},
	{from: 73, to: 53, label: ''},
	{from: 73, to: 70, label: ''},
	{from: 73, to: 71, label: ''},
	{from: 73, to: 72, label: ''},
]);