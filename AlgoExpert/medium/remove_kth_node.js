/* Problem
 * Given a singly-linked list, remove the kth node from 
 * the back of the linked-list.
 */ 

// Runtime O(n) | O(1) Space \\
/* Explanation: 
 * Use two iterators. Start by moving a second iterator 
 * k nodes ahead, and then start moving both iterators 
 * until the second iterator reaches the end of the 
 * linked list. Then perform a removal by removing the 
 * value and next iterators.
 */ 
function removeKthNodeFromEnd(head, k) {
	let first = head, second = head
	
	let initCount = 0
	
	while (initCount < k) {
		second = second.next
		initCount++
	}
	
	if (second === null) {
		head.value = head.next.value
		head.next = head.next.next
		return
	}
	
	while (second.next !== null) {
		first = first.next
		second = second.next
	}
	
	first.next = first.next.next
}