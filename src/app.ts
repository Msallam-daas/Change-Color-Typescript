let buttonEl=document.querySelector(".btn") as HTMLButtonElement;
let divEl=document.querySelector(".mydiv") as HTMLDivElement;
let colors:string[]=["red","blue","green","black"];
let i:number=0;

const changeColor = (): void =>{
    divEl.style.backgroundColor=colors[i];
    i++;
    if (i==4){
        i=0;
    }
}
buttonEl.addEventListener("click",changeColor);