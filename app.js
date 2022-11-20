const date = new Date();
const night = 18;
let time = date.getHours();
if (time>=6 && time<12){
  document.body.style.background='white';
}
else if(time>=12 && time<=18)
{document.body.style.background='orange'}
else if(time<6 || time>18)
{document.body.style.background='black'}
else {document.body.style.background='white';}


var radius = 5;
console.log(Math.PI * radius);