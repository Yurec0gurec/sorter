class Sorter {

    constructor(element, index, indices) {
        this.element = element;
        this.index = index;
        this.indices = indices;
        this.array = [];

    }

    add(element) {

        this.array.push(element);

        // your implementation
    }


    at(index) {
        return this.array[index];

        // your implementation
    }

    get length() {
        return this.array.length;
        // your implementation
    }

    toArray() {

        return this.array;
        // your implementation
    }

    sort(indices) {


        for (var k = 0; k < this.array.length; k++) {
            var wasSwap = false;
            for (var i = 0; i < indices.length - 1; i++) {

                if (this.array[indices[i]] > this.array[indices[i + 1]]) {
                    var swaps = this.array[indices[i]];
                    this.array[indices[i]] = this.array[indices[i + 1]];
                    this.array[indices[i + 1]] = swaps;
                    wasSwap = true;


                }

            }
            if (!wasSwap) break;
        }





    }
    setComparator(compareFunction) {

        // your implementation
    }
}

module.exports = Sorter;
