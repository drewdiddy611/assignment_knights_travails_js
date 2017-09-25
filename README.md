# assignment_knights_travails_js
Do not go gentle into that good knight.

Name: Andrew Senner

#############
# QUESTIONS #
#############

1. What data structure is used to implement DFS?
	Stacks, LIFO (Last-in, First-out) style, by traversing to the end of a branch to find what it's looking for.

2. What data structure is typically used to implement BFS?
	Queues, FIFO (First-in, First-out) style, by searching all nodes at the same depth to find what it's looking for.

3. Which one can be done recursively? (the clue should be the data structure)
	DFS can utilize recursion to implement the algorithm.

4. Which one would you use to print a list of all the nodes in a tree or graph, starting with depth 1, then depth 2, then depth 3 etc.?
	BFS, you can search each node according to it's depth, only showing nodes at depth 1,2,3...etc.

5. What is the difference between a tree and a graph?
	A tree has a root node, and can contain children with a single direction of hierarchy.  Graphs can have cycles/loops, and nodes can reference,
	as well as be referenced by multiple other nodes.

Next, pseudocode the following processes with enough detail to be clear:

1. Searching a simple tree of nodes where each Node has an array of child nodes (someNode.children) using DFS.
	// Start at first node.
	// Does it have children?
		// Yes. Loop through children.
			// For each child
				// Is this child the search value?
					// Yes. Return it.
				// Recurse into search function.
		// No. Return from recursion to previous call.

2. Searching the same tree using BFS.
	// Start at first node, with empty children stack.
	// Does it have children?
		// Yes. Loop through children.
			// Concat children of each child to children stack.
	// Loop through children stack.
		// Is any child the match?
			// Yes. Return it.
			// No. Empty the stack and keep searching.


3. Searching a graph (represented however you feel most comfortable -- Edge List, Adjacency List or Adjacency Matrix) using DFS.
 // Start at any node.
 // Does it have edges?
 	// Loop through edge list.
		// Does this edge represent the value we're searching for?
			// Yes. Return it.
		// Does the endpoint of this edge have connections?
			// Yes. Recurse into the function.

4. Searching the same graph using BFS.
	// Start at any node.
	// Does it have edges?
	 // Loop through edge list.
		 // Does this edge represent the value we're searching for?
			 // Yes. Return it.
		 // Does the endpoint of this edge have connections?
			 // Yes. Recurse into the function.
