// Runtime O(n*m) | O(1) space
// Description: The n represents each character in the string 
// and the m represents the the number of wrap arounds to do
// until the cipher code is within the range of 97 and 122.
function caesarCipherEncryptor(string, key) {
	let encryption = []
  for (let i=0; i < string.length; i++) {
    let cipher = string.charCodeAt(i) + key 
    // wrap around until correct
		while (cipher > 122) {	
			cipher = (cipher % 122) + 96
		}
		encryption.push(String.fromCharCode(cipher))
	}
	return encryption.join("")
}