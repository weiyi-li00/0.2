<script>
        // 取得內容
        var btn1 = document.getElementById("btn1");
        btn1.addEventListener("click", function(){ // click 事件綁定
        let block = document.getElementsByClassName("block")[0];
        console.log(block.innerHTML);
    });
        // 更新內容
        var btn2 = document.getElementById("btn2");
        btn2.addEventListener("click", function(){
        let block = document.getElementsByClassName("block")[0];
        block.innerHTML = "<h1>變成新的標題。</h1>";
    });
    // 刪除元素節點
    var btn3 = document.getElementById("btn3");
        btn3.addEventListener("click", function(){ // click 事件綁定
    let h1_el = document.getElementsByTagName("h1")[0];
        if(h1_el){
            h1_el.remove();
        }
    });

    // 建立元素節點
    var btn4 = document.getElementById("btn4");
        btn4.addEventListener("click", function(){ // click 事件綁定
  
    /* 寫法一
    let p_node = document.createElement("p"); // 建立 p 元素節點
    let txt_node = document.createTextNode("新貼入的文字"); // 建立文字節點
    p_node.appendChild(txt_node); // 將文字節點放入 p_node 裡面

    // 以上產生了： <p>新貼入的文字</p>

    let block = document.getElementsByClassName("block")[0];
    block.appendChild(p_node); // 將 block 區塊，放入 p_node 裡面的最後面
    */
  
  
    // 寫法二
    let block = document.getElementsByClassName("block")[0];
    let p_str = '<p>新貼入的文字</p>';
        block.insertAdjacentHTML("beforeend", p_str);
  
    });
    </script>