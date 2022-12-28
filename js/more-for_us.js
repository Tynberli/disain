document.addEventListener('DOMContentLoaded', () => {
    window.onload = function () {
        var box=document.getElementsByClassName('item__awards');
        var btn=document.getElementById('button');
        for (let i=4;i<box.length;i++) {
            box[i].style.display = "none";
        }
    
        var countD = 4;
        btn.addEventListener("click", function() {
            var box=document.getElementsByClassName('item__awards');
            countD += 4;
            if (countD <= box.length){
                for(let i=0;i<countD;i++){
                    box[i].style.display = "block";
                }
            }
    
        })
    }})