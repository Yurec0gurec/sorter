class Sorter {

    constructor(element, index, indices) {
        this.element = element;
        this.index = index;
        this.indices = indices;
        this.metod = 1;
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
            
        indices.sort();
        if (this.metod) {

            for (var k = 0; k < this.array.length; k++) {

                for (var i = 0; i < indices.length - 1; i++) {

                    if (this.array[indices[i]] > this.array[indices[i + 1]]) {
                        var swaps = this.array[indices[i]];
                        this.array[indices[i]] = this.array[indices[i + 1]];
                        this.array[indices[i + 1]] = swaps;
                    }
                }
            }
        } else {
             var helpArr = [];
            for (var i = 0; i < indices.length; i++) {
                helpArr[helpArr.length] = this.array[indices[i]];
            }
            helpArr.sort(this.comparator);
            for (var i = 0; i < indices.length; i++) {
                this.array[indices[i]] = helpArr[i];
            }
        }

    }

    setComparator(compareFunction) {

        this.comparator = compareFunction;
        this.metod = 0;
        // your implementation
    }

}
    module.exports = Sorter;
