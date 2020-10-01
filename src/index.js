
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || !Array.isArray(matrix) || matrix.length === 0)
        return [];
    let result = [];
    matrix.forEach((array, index) => {
        let localArr = (index % 2 === 0) ? array : array.reverse();

        result = result.concat(localArr);
    });

    return result;
}
