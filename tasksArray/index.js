// Вам даны два целочисленных массива nums1 и nums2, отсортированных в неубывающем порядке , и два целых числа mи n, представляющие количество элементов в nums1и nums2соответственно.
// Объединить в один массив, отсортированный в nums1 неубывающем порядке .nums2
// Окончательный отсортированный массив не должен возвращаться функцией, а должен храниться внутри массива nums1 . Чтобы учесть это, nums1имеет длину m + n, где первые mэлементы обозначают элементы, которые должны быть объединены, а последние nэлементы установлены в 0и должны игнорироваться. nums2 имеет длину n.
const merge = function(nums1, m, nums2, n) {
	nums1.splice(m,n,...nums2);
	nums1.sort((a,b) => a - b);
};

