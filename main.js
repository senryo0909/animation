'use strict';

document.addEventListener('DOMContentLoaded', function(){
 const ta = new TextAnimation('.animate-title');
 ta.animate();
});

class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.char = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
       }
       _splitText(){
           return this.char.reduce((acc, curr) => {
               curr = curr.replace(/\s+/,"&nbsp;");
               return `${acc}<span class="char">${curr}</span>`;
           }, "")
       }
       animate() {
           this.el.classList.toggle('inview');
       }
   }
    //  el.innerHTML = str.reduce((accu, curr) => {
    //    curr = curr.replace(/\s+/, "&nbsp;");
    //    return `${accu}<span class="char">${curr}</span>`;
    //  }, "");
    //  console.log(el.innerHTML);
    // });
    // let concatStr = '';
    
 // for(let i of str){
//      i = i.replace(/\s+/, '&nbsp;');
//      concatStr += `<span class="char">${i}</span>`;
//  }
//  el.innerHTML = concatStr;