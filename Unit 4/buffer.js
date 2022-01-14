var buf=Buffer.alloc(15);
console.log(buf);
var buf_1=Buffer.allocUnsafe(15);
console.log(buf_1);
var buf_2=Buffer.allocUnsafeSlow(15);
console.log(buf_2);
//reading a buffer
//ArrayBuffer.toString([encoding->UTF-8],[start][end])

buf=new Buffer.alloc(26);
for(var i=0;i<26;i++)
{
        buf[i]=i+97;
}
console.log(buf.toString("ascii"));//returns letters of the alphabet
console.log(buf.toString("ascii",0,5));//returns first 5 letters


const buf1=Buffer.allocUnsafe(100);
const len=buf1.write("Welcome elcome lcome come ome me e","utf8");//returns length of string
console.log(len);


const buf2=Buffer.from("Welcome to NodeJS class");
var len2=buf2.length;
console.log(len2);//returns length of string


const msg='{"Name":"John","Age":"23"}';
var jsonObj=JSON.parse(msg);
var jsonStr=JSON.stringify(jsonObj);
const buf3=Buffer.from(jsonStr);
console.log(buf3.length);//returns length of JSON string

//Buffer comparision

var buf4=Buffer.alloc(10,"H");
var buf5=Buffer.alloc(10,"Hi Welcome");
var res=buf4.compare(buf5);
if(res<0)
{
        console.log(buf4 + "comes before" + buf5 );

}
else if(res==0)
{
        console.log(buf4 + "Equals" + buf5 );
}
else
{
    console.log(buf5 + "comes before" + buf4 );

}


var buf6=Buffer.alloc(10,"Hi");
var buf7=Buffer.alloc(10);
buf6.copy(buf7);
console.log(buf7);


var buf8=Buffer.alloc(10,"hi");
var buf9=Buffer.alloc(10,"hello");
var tot_len=buf8.length+buf9.length;
var concat_buf=Buffer.concat([buf8,buf9],tot_len);
console.log(concat_buf);

