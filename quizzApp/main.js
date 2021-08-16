const correctAns=["A","A","B","C"];
const form=document.querySelector(".quiz-form");
const res=document.querySelector(".result");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let score=0;
    const  answers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    answers.forEach((ans,index)=>{
        if(ans===correctAns[index])
           score+=25;   
        scrollTo(0,0);
        //scrol fun takes the position of screen to diffrent parts of screen
        // parameters of scroll in pixels along x and y axis
        let output=0;
        const timer=setInterval(()=>{
            res.querySelector("span").textContent=`${output}%`;
            if(output===score)
              clearInterval(timer)
            else
              output++;
        },30);
        
        res.classList.remove("d-none");
        
    })
})

