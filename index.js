// [1]  get min => 1   newStack = [1]
// [1,2]  get min => 1 newStack = [1]
// [1,2,3]  get min => 1 newStack = [1]
// [1,2,3,0]  get min => 0  newStack = [1,0]
// [1,2,3,0,10]  get min => 0 newStack = [1,0]
// [1,2,3,0,10,-1]  get min => -1  newStack = [1,0,-1]
// [1,2,3,0,10,]  get min => 0  newStack = [1,0]
// [1,2,3]  get min => 1 newStack = [1]

// [1,2,3]  get min => 1

class Stack {
  constructor() {
    this.mainStack = [];
    this.minSaverStack = [];
  }

  getMin = () => {
    if (this.minSaverStack.length > 0) {
      const min = this.minSaverStack.pop();
      this.minSaverStack.push(min);
      return min;
    } else {
      return null;
    }
  };

  push = (number) => {
    const arrLength = this.mainStack.length;

    this.mainStack[arrLength] = number;
    const currentMin = this.getMin();
    if (number < currentMin) {
      this.minSaverStack.push(number);
    }
  };
}
