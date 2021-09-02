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
    if (this.minSaverStack.length > 0) {
      const currentMin = this.getMin();
      if (number < currentMin) {
        this.minSaverStack.push(number);
      }
    } else {
      this.minSaverStack.push(number);
    }
  };

  pop = () => {
    const arrLength = this.mainStack.length;
    if (arrLength > 0) {
      const last = this.mainStack.pop();
      const minSaverStackLength = this.minSaverStack.length;
      if (this.minSaverStack[minSaverStackLength - 1] === last) {
        this.minSaverStack.pop();
      }
      return last;
    }
  };
}

const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(0);
stack1.push(10);
stack1.push(-1);
console.log(stack1.getMin());
stack1.pop();
stack1.pop();
console.log(stack1.getMin());
