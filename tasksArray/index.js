// Вам даны два целочисленных массива nums1 и nums2, отсортированных в неубывающем порядке , и два целых числа mи n, представляющие количество элементов в nums1и nums2соответственно.
// Объединить в один массив, отсортированный в nums1 неубывающем порядке .nums2
// Окончательный отсортированный массив не должен возвращаться функцией, а должен храниться внутри массива nums1 . Чтобы учесть это, nums1имеет длину m + n, где первые mэлементы обозначают элементы, которые должны быть объединены, а последние nэлементы установлены в 0и должны игнорироваться. nums2 имеет длину n.
const merge = function(nums1, m, nums2, n) {
	nums1.splice(m,n,...nums2);
	nums1.sort((a,b) => a - b);
};
//nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 //[1,2,2,3,5,6]
//nums1 = [1], m = 1, nums2 = [], n = 0 //[1]
//nums1 = [0], m = 0, nums2 = [1], n = 1 //[1]

// Дан массив целых чисел nums и целое число val, удалить все вхождения val в nums in-place . Порядок элементов может быть изменен. Затем вернуть количество элементов, в nums которых не равны val.
// Рассмотрим число элементов, в nums котором не равны val быть k, чтобы быть принятым, вам необходимо сделать следующие вещи:
// Измените массив nums так, чтобы первые k элементы nums содержали элементы, которые не равны val. Остальные элементы nums не важны, как и размер nums.
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

// Дан целочисленный массив nums, отсортированный в неубывающем порядке , удалить некоторые дубликаты на месте так,
// чтобы каждый уникальный элемент встречался не более двух раз . Относительный порядок элементов должен оставаться прежним. Вернуть количество элементов массива

const removeDuplicates2 = function(nums) {
	if (nums <= 2) {
		return nums.length;
	}

	let count = 1;
	let index = 1;

	for(let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i-1]) {
			count++;
		} else {
			count = 1;
		}

		if (count <= 2) {
			nums[index] = nums[i];
			index++
		}
	}

	nums.length = index;
}

const removeDuplicates3 = (nums) => {
	if (nums <= 2) {
		return nums.length;
	}

	let k = 2;

	for (let i = 2; i < nums.length; i++) {
		if (nums[i] !== nums[k - 2]) {
		nums[k++] = nums[i];
		}
	}

	nums.length = k;
	return nums.length;
};
//nums = [1,1,1,2,2,3]
//nums = [0,0,1,1,1,1,2,3,3]


// Для заданного массива nums размера n вернуть элемент большинства.
// Элемент большинства — это элемент, который появляется больше ⌊n / 2⌋раз. Вы можете предположить, что элемент большинства всегда существует в массиве.

const majorityElement = function(nums) {
	const newObj = {}; //буду складывать сколько раз какое число встречается в массиве, ключ это будет значение, а значение - сколько раз это число встречатеся

	for (const el of nums) {
		newObj[el] = newObj[el] ? newObj[el] + 1 : 1;
	}

	const countMajorityEl = Object.values(newObj).sort((a,b) =>
		b - a) [0]

	const expectedVal = Object.keys(newObj).find(el => {
		return newObj[el] === countMajorityEl;
	})

	return Number(expectedVal)
}

// nums = [3,2,3] //3
//nums = [2,2,1,1,1,2,2] //2

