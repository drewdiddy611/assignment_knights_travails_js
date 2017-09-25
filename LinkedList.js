class LinkedList {
	constructor(arr) {
		this.head = this.end = null;
		if (!arr || !Array.isArray(arr) || arr.length === 0) return this;

		let prevNode = null,
			newNode = null;
		for (let i = 0; i < arr.length; i++) {
			if (i === 0) {
				this.head = newNode = new Node(arr[i]);
				continue;
			}
			newNode.prev(prevNode);
			newNode = newNode.next(new Node(arr[i]));
			prevNode = newNode;
			if (i === arr.length - 1) {
				this.end = newNode;
			}
		}
	}

	prepend(node) {
		if (this.head === null) {
			this.head = this.end = node;
		} else {
			this.head.prev(node);
			node.next(this.head);
			this.head = node;
		}
	}

	append(node) {
		if (this.head === null) {
			this.head = this.end = node;
		} else {
			node.prev(this.end);
			this.end = this.end.next(node);
		}
	}

	removeNode(index) {
		let counter = 0,
			node = this.head;
		while (counter++ < index - 1) {
			if (!node.nextNode) return null;
			node = node.nextNode;
		}

		const previousNode = node;
		const currentNode = node.nextNode;
		const nextNode = node.nextNode.nextNode;

		previousNode.nextNode = nextNode;
		nextNode.prevNode = previousNode;

		return currentNode;
	}

	get(coord) {
		let node = this.head;
		while (node) {
			if (node.coord === coord) return node;
			node = node.nextNode;
		}
		return null;
	}

	listNodes() {
		let node = this.head;
		let row = '';
		while (node) {
			row += node + ', ';
			node = node.nextNode;
		}
		return row;
	}
}

function Node(coord) {
	this.coord = coord;
	this.prevNode = null;
	this.nextNode = null;

	this.prev = function(node) {
		this.prevNode = node;
		return node;
	};
	this.next = function(node) {
		this.nextNode = node;
		return node;
	};
}

LinkedList.Node = Node;
LinkedList.Node.prototype.toString = function() {
	return `${this.coord}`;
};

module.exports = LinkedList;
