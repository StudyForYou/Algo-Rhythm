// https://school.programmers.co.kr/learn/courses/30/lessons/42626

function solution(scoville, K) {
  const heap = new MinHeap(scoville);
  let count = 0;

  while (heap.peek() < K) {
    if (heap.size() < 2) {
      return -1;
    }

    const first = heap.poll();
    const second = heap.poll();
    const newScoville = first + second * 2;

    heap.offer(newScoville);
    count++;
  }

  return count;
}

class MinHeap {
  constructor(arr) {
    this.heap = [];
    arr.forEach((val) => this.offer(val));
  }

  offer(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  poll() {
    if (this.heap.length === 0) {
      return null;
    }

    const root = this.heap[0];
    if (this.heap.length > 1) {
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
    } else {
      this.heap.pop();
    }

    return root;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  heapifyUp(idx) {
    const parentIdx = Math.floor((idx - 1) / 2);
    if (parentIdx < 0 || this.heap[parentIdx] <= this.heap[idx]) {
      return;
    }

    [this.heap[parentIdx], this.heap[idx]] = [
      this.heap[idx],
      this.heap[parentIdx],
    ];
    this.heapifyUp(parentIdx);
  }

  heapifyDown(idx) {
    const leftIdx = idx * 2 + 1;
    const rightIdx = idx * 2 + 2;
    const smallest = this.findSmallestChild(idx, leftIdx, rightIdx);

    if (smallest === idx) {
      return;
    }

    [this.heap[idx], this.heap[smallest]] = [
      this.heap[smallest],
      this.heap[idx],
    ];
    this.heapifyDown(smallest);
  }

  findSmallestChild(parentIdx, leftIdx, rightIdx) {
    let smallest = parentIdx;
    const length = this.heap.length;

    if (leftIdx < length && this.heap[leftIdx] < this.heap[smallest]) {
      smallest = leftIdx;
    }

    if (rightIdx < length && this.heap[rightIdx] < this.heap[smallest]) {
      smallest = rightIdx;
    }

    return smallest;
  }
}
