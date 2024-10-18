let array=["34","45","56"]
// 
// let date=new Date()
// let hourse=date.getHours()
// let minuts=date.getMinutes()
// let second=date.getSeconds()

// console.log(hourse,"hourse",minuts,"mm",second,"ss"),;
const now = new Date();

// Extract hours, minutes, and seconds
// const hours = String(now.getHours()).padStart(2, '0');   // Pad single digits with leading zero
// const minutes = String(now.getMinutes()).padStart(2, '0');
// const seconds = String(now.getSeconds()).padStart(2, '0');

// // Format the time as HH:MM:SS
// const formattedTime = `${hours}:${minutes}:${seconds}`;

// console.log(formattedTime);

console.log(now);
let minutes=now.getMinutes();
let hours=now.getHours();
let seconds=now.getSeconds();
console.log(hours+":"+minutes+":"+seconds+":");
