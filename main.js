var  namesarray=[];


function submit(){
var  namestodisplay=[];

for (var j=1; j<=4; j++){
    var names=document.getElementById("name_of_the_student_"+j).value;
    console.log(names);
    namesarray.push(names);

}
console.log(namesarray);

var length= namesarray.length;
console.log(length);

for ( var a=0; a<length; a++)
{
    namestodisplay.push("name - "+namesarray[a]+"<br>");
    console.log(namestodisplay);
}
console.log(namestodisplay);
document.getElementById("display_name_with_commas").innerHTML=namestodisplay;

var removecommas=namestodisplay.join("");
console.log(removecommas);
document.getElementById("display_name_without_commas").innerHTML=removecommas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}



function sorting(){
    namesarray.sort();
    console.log(namesarray)
    var  namestodisplaysorted=[];
    
    
    var length= namesarray.length;
    console.log(length);
    
    for ( var a=0; a<length; a++)
    {
        namestodisplaysorted.push("name - "+namesarray[a]+"<br>");
        console.log(namestodisplaysorted);
    }
    console.log(namestodisplaysorted);
    document.getElementById("display_name_with_commas").innerHTML=namestodisplaysorted;
    
    var removecommas=namestodisplaysorted.join("");
    console.log(removecommas);
    document.getElementById("display_name_without_commas").innerHTML=removecommas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
    
