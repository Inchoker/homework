//Nested If means  an if statement inside an if statement.
let a = Number(prompt("Nhap so can tinh chia het cho 30"))
let kq1 = "a chia het cho 30";
let kq2 = "a khong chia het cho 30"
if (a %5 == 0){
    if(a %6==0){
        console.log(kq1);
    }else{
        console.log(kq2);
    }
}else{
    console.log(kq2);
}