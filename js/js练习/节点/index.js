// var box = document.querySelector('#box');

// for(var i=0;i<box.childNodes.length;i++){
//     var eleNode = box.childNodes[i];
//     console.log(eleNode)
// }
var ban = document.querySelector('.banner')
var txt = document.querySelector('.txt');
var but = document.querySelector('.but');
but.onclick=function(){
    var inValue= txt.value;
    // if(ban.lastElementChild.nodeName !== 'UL'){
    //     var ulNode = document.createElement('ul');
    //     var liNode = document.createElement('li');
    //     ban.appendChild(ulNode);
    //     var ulN = ban.lastElementChild;
    //     liNode.innerText = inValue;
    //     ulN.appendChild(liNode);
    //     txt.value= '';
    //     ulN.onmouseenter=function(e){
    //         console.log(e.target)

    //         if(e.target.tagName == 'LI'){
    //             console.log('.d')
    //         }
    //     }
    // }else{
        if(inValue.trim()){

        
        var ulNode = document.createElement('ul');
        var liNode = document.createElement('li');
        var ulN = ban.lastElementChild;
        liNode.innerText = inValue;
        ulN.appendChild(liNode);
        txt.value= '';
    }else{
        alert('.....')
    }
    // }
}