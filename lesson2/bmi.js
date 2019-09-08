let height = Number(prompt("Nhap Chieu Cao Bang Centimeter"))
let weight = Number(prompt("Nhap Can Nang Bang Kilogram"))
let bMI = weight/(height*height)*10000;
console.log(bMI);
if (bMI <16){
    console.log("Severely Underweight");
} else if(bMI <= 18.5){
    console.log("Underweight");
} else if(bMI<=25){
    console.log("Normal");
} else if (bMI <=30){
    console.log("Overweight");
} else {
    console.log("Obese")
}