let html = document.querySelector("#html");
let style = document.querySelector("#style");
let script = document.querySelector("#script")

let string = `/* 你好，我叫小代
* 接下来是我的showtime 
*首先我要准备一个div
**/
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把div变成一个八卦图
*首先，把div变成一个圆 **/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/* 八卦是阴阳形成的
一黑一白
 */
#div1 {
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 1) 48%, hsla(0, 0%, 0%, 1) 48%, hsla(0, 0%, 0%, 1) 100%);
}
/*加两个神秘的小球*/
#div1::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, hsla(0, 0%, 100%, 1) 16%, hsla(0, 0%, 0%, 1) 16%);
}

#div1::after {
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, hsla(0, 0%, 0%, 1) 17%, hsla(0, 0%, 100%, 1) 18%);
}
 `;
let n = 0;
let string2 = "";

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 999999)
        html.scrollTo(0, 9999999)
        if (n < string.length - 1) {

            n += 1;
            step();
        }
    }
        , 30)
}

step();

