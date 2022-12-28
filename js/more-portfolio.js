document.addEventListener('DOMContentLoaded', () => {
    window.onload = function () {
        var box=document.getElementsByClassName('items__portfolio');
        var btn=document.getElementById('button');
        for (let i=6;i<box.length;i++) {
            box[i].style.display = "none";
        }
    
        var countD = 2;
        btn.addEventListener("click", function() {
            var box=document.getElementsByClassName('items__portfolio');
            countD += 2;
            if (countD <= box.length){
                for(let i=0;i<countD;i++){
                    box[i].style.display = "block";
                }
            }
    
        })
    }})