const byteSize = (str) => {
  // write your code here
	function byteSize(str) {
  return new Blob([str]).size;
}
 function showByteSize() {
      const str = document.getElementById("inputStr").value;
      const size = byteSize(str);
      document.getElementById("output").textContent = `Byte size: ${size}`;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
