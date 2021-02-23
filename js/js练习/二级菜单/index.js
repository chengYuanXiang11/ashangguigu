var oneL=document.querySelectorAll('.oneList');
var twoL=document.querySelectorAll('.twoList');

for(var i=0;i<oneL.length;i++){
    oneL[i].index = i; //添加索引
    oneL[i].onmouseenter=function(){
        for(var j=0;j<twoL.length;j++){
         twoL[j].style.display='none';
        }
        twoL[this.index].style.display='block';

    }
}