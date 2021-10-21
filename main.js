var listwork = document.getElementById("listwork");

function callApi(){
    $.get("https://immense-plateau-68535.herokuapp.com/list",function(data){
        console.log(data);
        for (let i = 0; i < data.data.length; i++){
            var work = document.createElement("div");
            work.classList.add("work")
            work.innerHTML=data.data[i];
            console.log(data.data[i])
            listwork.appendChild(work)
            
        }
    });
}

function addTask(){
    
    let work=document.getElementById("inputwork").value;
    $.post("https://immense-plateau-68535.herokuapp.com/add",
    {
        todoitem: work + " -  Carlos V"
    },
    function(data){
        console.log(data)
    });

    callApi();
    
}