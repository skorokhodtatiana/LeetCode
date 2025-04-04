// Вам даны два целочисленных массива nums1 и nums2, отсортированных в неубывающем порядке , и два целых числа mи n, представляющие количество элементов в nums1и nums2соответственно.
// Объединить в один массив, отсортированный в nums1 неубывающем порядке .nums2
// Окончательный отсортированный массив не должен возвращаться функцией, а должен храниться внутри массива nums1 . Чтобы учесть это, nums1имеет длину m + n, где первые mэлементы обозначают элементы, которые должны быть объединены, а последние nэлементы установлены в 0и должны игнорироваться. nums2 имеет длину n.
const merge = function(nums1, m, nums2, n) {
	nums1.splice(m,n,...nums2);
	nums1.sort((a,b) => a - b);
};
//nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//nums1 = [1], m = 1, nums2 = [], n = 0
//nums1 = [0], m = 0, nums2 = [1], n = 1

// Дан массив целых чисел numsи целое число val, удалить все вхождения valв nums in-place . Порядок элементов может быть изменен. Затем вернуть количество элементов, в numsкоторых не равныval .
// Рассмотрим число элементов, в numsкотором не равны valбыть k, чтобы быть принятым, вам необходимо сделать следующие вещи:
// Измените массив nums так, чтобы первые k элементы numsсодержали элементы, которые не равны val. Остальные элементы numsне важны, как и размер nums.
// Возвращаться k.

const removeElement = function(nums, val) {
	for(let i = nums.length -1; i >= 0; i--) {
		if(nums[i] === val) {
				nums.splice(i,1);
			}
	}
	return nums.length;
}

//nums = [3,2,2,3], val = 3
//nums = [0,1,2,2,3,0,4,2], val = 2


// Дан целочисленный массив nums, отсортированный в неубывающем порядке, удалить дубликаты на месте так, чтобы каждый уникальный элемент появлялся только один раз.
// Относительный порядок элементов должен оставаться прежним. Затем вернуть количество уникальных элементов в nums.

const removeDuplicates = function(nums) {
	for(let i = nums.length - 1; i >= 0; i--) {
		if(i !== nums.indexOf(nums[i])) {
			nums.splice(i, 1);
		}
	}
	return nums.length;
};

// nums = [1,1,2]
//nums = [0,0,1,1,1,2,2,3,3,4]


