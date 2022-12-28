document.addEventListener('DOMContentLoaded', () => {
    window.onload = function () {
        var box=document.getElementsByClassName('items-content__services');
        var btn=document.getElementById('button');
        for (let i=9;i<box.length;i++) {
            box[i].style.display = "none";
        }
    
        var countD = 3;
        btn.addEventListener("click", function() {
            var box=document.getElementsByClassName('items-content__services');
            countD += 3;
            if (countD <= box.length){
                for(let i=0;i<countD;i++){
                    box[i].style.display = "block";
                }
            }
    
        })
    }})