
   var jankenComp=Math.floor(Math.random()*3);
   var jankenUser=0;
if(jankenComp===jankenUser){
document.writeln('あいこ');
}else if((jankenComp+1)%3===jankenUser){
document.writeln('負け');
}else{document.writeln('勝ち');
}

//出しての確認用
document.writeln(jankenComp);
document.writeln(jankenUser);

var x=0;
var y=1;
var z=2;


num=Math.floor(Math.random()*3);

var num=x;
switch(num){
    case'num=0':
        document.writeln('あいこです');
        break;
    case'num=1':
        document.writeln('今のは偶然です');
        break;
    case'num=2':
        document.writeln('あなたはバカです');
        break;
        
}
var num=y;
switch(num){
    case'num=0':
        document.writeln('あなたはバカです');
        break;
    case'num=1':
        document.writeln('あいこです');
        break;
    case'num=2':
        document.writeln('今のは偶然です');
        break;
        }
var num=z;
switch(num){
    case'num=0':
        document.writeln('今のは偶然です');
        break;
    case'num=1':
        document.writeln('あなたはバカです');
        break;
    case'num=2':
        document.writeln('あいこです');
        break;
        }
