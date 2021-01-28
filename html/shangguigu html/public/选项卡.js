function tabs(name,content){
    //添加数据
    var tabs = document.createElement('li')
    tabs.innerHTML=name

    var asideli = document.createElement('li')
    asideli.innerHTML=content
    

    var navtabs = document.getElementsByClassName('nav')[0]
    var navtabsli = navtabs.getElementsByTagName('li')

    if(navtabsli[0] === undefined){
        tabs.style.background ='red'
        navtabs.appendChild(tabs)
    }else{
        navtabs.appendChild(tabs)

    }
    var navaside = document.getElementsByClassName('aside')[0]
    var asidelid = navaside.getElementsByTagName('li')
    if(asidelid[0] === undefined){
        asideli.style.display ='block'
        navaside.appendChild(asideli)
    }else{
        navaside.appendChild(asideli)

    }
}
function tabsdisplay(event){
    //卡片切换
    var navli =  document.getElementsByClassName('aside')[0]
    var nav = navli.getElementsByTagName('li')
    var navtabs = document.getElementsByClassName('nav')[0]
    var navt = navtabs.getElementsByTagName('li')
    for(let i =0;i<navt.length;i++){

        if(navt[i]===event.target){
           nav[i]?nav[i].style.display='block':''
           navt[i]?navt[i].style.background='red':''

        }else{
            nav[i]?nav[i].style.display='none':''
           navt[i]?navt[i].style.background='':''
        }
    }
}
window.onload= function(){
//     var navtabs = document.getElementsByClassName('nav')[0]
//     var navt = navtabs.getElementsByTagName('li')[0]
//     // tabsdisplay(navt)
//    navt.onclick=function(event){
//        console.log(event)
//    }
}
