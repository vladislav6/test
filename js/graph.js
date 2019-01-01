var array = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13]; // Исходный массив
var lines = [];  // Массив со всеми линиями
var point_style_left = []; // Массив для позиций линий относиельно левого края
var point_style_height = []; // Массив для высоты линий

for(var i = 1; i <= array.length; i++){
	// Берём все линии и присваиваем их в массив
	lines[lines.length] = document.getElementById("line" + i);
}

function graph(arr){
	for(var  i = 0; i < arr.length; i++){
		// Массивы со стилями 
		point_style_left[point_style_left.length] = getComputedStyle(lines[i]).left.replace(/\D+/g, '');
		point_style_height[point_style_height.length] = getComputedStyle(lines[i]).height.replace(/\D+/g, '');

		point_style_left[i] = 30 * i; // ширина
		point_style_height[i] = arr[i] * point_style_height[i];  //высота
		
		// Присваивание высоты и позиции блоков относительно левого края.
		lines[i].style.left = point_style_left[i] + "px";
		lines[i].style.height = point_style_height[i] + "px"; 
	}
}

graph(array); // Вызов функции.