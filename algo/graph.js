// Graph Algorithms:

//krushkal's algo
//dilkstra's algo
//bellman fors algo
// floyed washball algo
// topolical sort algo
// foodfill algo 
// lee algo
// Dijkstra's Algorithm: It finds the shortest path between nodes in a weighted graph.


{
  // Dijkstra's Algorithm:
  class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Map();
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  addEdge(v, w, weight) {
    this.adjList.get(v).push({ node: w, weight });
    this.adjList.get(w).push({ node: v, weight });
  }

  dijkstra(startingNode) {
    const distances = new Map();
    const visited = new Map();
    const previous = new Map();
    const queue = new PriorityQueue();

    for (let vertex of this.vertices) {
      if (vertex === startingNode) {
        distances.set(vertex, 0);
        queue.enqueue(vertex, 0);
      } else {
        distances.set(vertex, Infinity);
        queue.enqueue(vertex, Infinity);
      }
      previous.set(vertex, null);
      visited.set(vertex, false);
    }

    while (!queue.isEmpty()) {
      const minVertex = queue.dequeue().data;
      visited.set(minVertex, true);

      const neighbors = this.adjList.get(minVertex);
      for (let neighbor of neighbors) {
        if (!visited.get(neighbor.node)) {
          const currentDistance = distances.get(neighbor.node);
          const newDistance = distances.get(minVertex) + neighbor.weight;

          if (newDistance < currentDistance) {
            distances.set(neighbor.node, newDistance);
            previous.set(neighbor.node, minVertex);
            queue.enqueue(neighbor.node, newDistance);
          }
        }
      }
    }

    return { distances, previous };
  }

  getShortestPath(startingNode, targetNode) {
    const { distances, previous } = this.dijkstra(startingNode);
    const path = [];
    let current = targetNode;

    while (current !== null) {
      path.unshift(current);
      current = previous.get(current);
    }

    return { distance: distances.get(targetNode), path };
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(data, priority) {
    const queueElement = { data, priority };
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(queueElement);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let graph = new Graph();
let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let vertex of vertices) {
  graph.addVertex(vertex);
}

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'D', 1);
graph.addEdge('D', 'B', 2);
graph.addEdge('D', 'C', 4);
graph.addEdge('B', 'E', 4);
graph.addEdge('C', 'E', 2);
graph.addEdge('C', 'F', 3);
graph.addEdge('E', 'F', 1);

console.log(graph.getShortestPath('A', 'F'));
// Output: { distance: 6, path: [ 'A', 'D', 'C', 'F' ] }

}


{

}
