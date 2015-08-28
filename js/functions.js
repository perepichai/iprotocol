/**
 * Created by o.perepichay on 03.08.2015.
 */
window.addEventListener('load', function () {

    // в storage все имена массивов. Именна массивов равны классам полей протокола. Если приходит класс поля - проверить в data, если
    // есть такой массив, дать в довідник обработанные данные.
    var storage = [];
    var x = 0;
    var y;
    for (var mass in data) {
        storage[x] = mass;
        x += 1;
    }

    for (y = 0; y < storage.length; y++) {
        document.querySelector('#' + storage[y]).addEventListener('click', function () {
            var node = document.querySelector(".dovidnyk");
            node.innerHTML = '';
            for (var i = 0; i < data[this.id].length; i++) {
                //console.log(data[this.id]);
                var div = document.createElement("div");
                var p = document.createElement("button");
                p.classList.add("btn", "btn-warning", "btn-xs");
                p.innerHTML = data[this.id][i];
                p.addEventListener('dblclick', function() {
                    //var sk = document.querySelector('#skargy');
                    var sk = document.querySelector('#skargy');

                    if(sk) {
                        sk.value += this.innerHTML;
                    } else {
                        alert ('что то не так!')
                    }
                });

                div.appendChild(p);
                node.appendChild(div);
            }
        });
    }

    //for (var i = 0; i < data[storage[0]].length; i++) {
    //    var div = document.createElement("div");
    //    div.innerHTML = data[storage[0]][i];
    //    div.addEventListener('dblclick', function() {
    //        document.querySelector('#skargy').innerHTML += this.innerHTML;
    //    });
    //    var node = document.querySelector(".Dovidnyk");
    //    node.appendChild(div);
    //}
});