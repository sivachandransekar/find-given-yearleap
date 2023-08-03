var today=new Date();
var year=today.getFullYear(today.setFullYear("2020"));
document.write("Given year="+year+"<br><br>");
if(year%4==0){
    document.write(year+"is leap year");
}
else{
    document.write(year+" is not a leap year");
}