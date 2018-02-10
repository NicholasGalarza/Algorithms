function findLoop(head) {

  let tortoise = head.next,
    hare = head.next.next

  while (tortoise !== hare) {
    tortoise = tortoise.next
    hare = hare.next.next
  }

  tortoise = head

  while (tortoise !== hare) {
    tortoise = tortoise.next
    hare = hare.next
  }

  return tortoise
}