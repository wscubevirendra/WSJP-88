var inp = document.querySelector("#inp");
var tudoInputBox = document.querySelector("#tudo-input-box");

inp.addEventListener(
    "keyup",
    function (e) {
        if (e.key == "Enter") {
            if (this.value == "") return

            var listItem = document.createElement("li");
            listItem.innerHTML = `${this.value} <span>Delete</span>`
            this.value = ""
            tudoInputBox.appendChild(listItem)

            listItem.addEventListener(
                "click",
                function(){
                    listItem.classList.toggle("done")
                }
            )

            listItem.querySelector("span").addEventListener(
                "click",
                function () {
                    listItem.remove()
                }
            )



        }

    }
)