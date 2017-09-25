const LinkedList = require('./LinkedList');
const Node = LinkedList.Node;

const BUCKET_COUNT = 64;
class KnightsGraph {
	static create(data) {
		const table = new KnightsGraph();
		table.bulkInsert(data);
		return table;
	}

	constructor() {
		this.buckets = {};
	}

	put(from, to) {
		if (!this.buckets[from] || !to) return false;
		this.buckets[bucketIndex].append(new Node(to));
	}

	get(from, to) {
		if (!this.buckets[from]) return null;
		if (!to) return this.buckets[from];
		return this.buckets[from].get(to);
	}

	insert(node) {
		this.buckets[node.coord].append(node);
	}

	bulkInsert(nodeListsObj) {
		for (let key in nodeListsObj) {
			this.buckets[key] = nodeListsObj[key];
		}
	}
}

// Generate our graph.
let a = 0,
	nodes = {};
for (let b = 0; b < BUCKET_COUNT; b++) {
	const row = a % 8;
	const col = b % 8;
	const nodeCoord = `${a + 1},${b % 8 + 1}`;
	nodes[nodeCoord] = new LinkedList(getAvailablePositions(nodeCoord));

	if (b % 8 === 7) {
		a++;
	}
}

// console.log(nodes);
const KG = KnightsGraph.create(nodes);
console.log(KG);

function getAvailablePositions(current) {
	let positions = [];
	const [row, col] = current.split(',').map(Number);
	const coords = [
		[row - 2, col - 1],
		[row - 2, col + 1],
		[row - 1, col + 2],
		[row + 1, col + 2],
		[row + 2, col + 1],
		[row + 2, col - 1],
		[row - 1, col - 2],
		[row + 1, col - 2]
	];

	return coords.filter(isValidFor(current)).map(normalize);

	function isValidFor(current) {
		return coords =>
			current !== normalize(coords) ||
			(coords[0] >= 0 && coords[0] <= 8 && coords[1] >= 0 && coords[1] <= 8);
	}

	function normalize(coordArr) {
		return `${coordArr[0]},${coordArr[1]}`;
	}
}
