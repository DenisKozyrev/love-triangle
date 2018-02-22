/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = getLoveTrianglesCount = function(preferences = []) {
    function isClosedChain(n = 0, anglesCount = 3) {
        const chain = [];

        let currentIndex = n;

        while (!chain.includes(preferences[currentIndex] - 1)) {
            chain.push(preferences[currentIndex] - 1);
            currentIndex = preferences[currentIndex] - 1;
        }

        return chain.length === anglesCount && chain[chain.length - 1] === n;
    }

    let trianglesCount = 0;
    const anglesCount = 3;

    for (let i = 0; i < preferences.length; i++) {
        if (isClosedChain(i, anglesCount)) {
            trianglesCount++;
        }
    }

    return trianglesCount / anglesCount;
};