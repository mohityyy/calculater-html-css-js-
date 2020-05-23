function opr(){
    var i1 = Number(document.getElementById('i1').value)
    var i2 = Number(document.getElementById('i2').value);
    var o1 = document.getElementById('o1').value;
    var o2 = document.getElementById('o2').value;
    var o3 = document.getElementById('o3').value;
    var o4 = document.getElementById('o4').value;
    var s = document.getElementById('s').value;
    var show=document.getElementById('p').innerHTML

    if(s==o1){
        document.getElementById('p').innerHTML=(i1+i2);
        return;
    }
    else if(s==o2){
        document.getElementById('p').innerHTML=(i1-i2);
    }
    else if(s==o3){
        document.getElementById('p').innerHTML=(i1*i2);
    }
    else if(s==o4){
        document.getElementById('p').innerHTML=(i1/i2);
    }
}
function res(){
    window.location.href= 'cal.html'
}

