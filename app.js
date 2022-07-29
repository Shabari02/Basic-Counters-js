let count = 0;
const value = document.getElementById("value");
const btn = document.querySelectorAll(".btn");

btn.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        if(count>0){
            value.style.backgroundColor = "green";
        }
        if(count<0){
            value.style.backgroundColor = "red";
        }
        if(count === 0){
            value.style.backgroundColor = "#7A86B6";
            value.style.color = "#222";
        }
        value.textContent = count;
    })
})
