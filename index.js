//CallBack HELL Task
let id = document.createElement("div")
id.classList.add("id")
let span=document.getElementById("span")
span.innerHTML=10
document.body.append(id)
let count=10;
setTimeout(()=>{
    count=count-1
    span.innerHTML=count
    setTimeout(()=>{
        count=count-1
        span.innerHTML=count
        setTimeout(()=>{
            count=count-1
            span.innerHTML=count
            setTimeout(()=>{
                count=count-1
                span.innerHTML=count
                setTimeout(()=>{
                    count=count-1
                    span.innerHTML=count
                    setTimeout(()=>{
                        count=count-1
                        span.innerHTML=count
                        setTimeout(()=>{
                            count=count-1
                            span.innerHTML=count
                            setTimeout(()=>{
                                count=count-1
                                span.innerHTML=count
                                setTimeout(()=>{
                                    count=count-1
                                    span.innerHTML=count
                                    setTimeout(()=>{
                                        count=count-1
                                        span.innerHTML= "!!!HAPPY MOTHERS DAY!!!"

                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
            