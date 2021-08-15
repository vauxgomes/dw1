document.addEventListener("DOMContentLoaded", loadTable, false);

function loadTable() {
    var data = [
        {
            ticket: "548-32-4988",
            date: "9/1/2020",
            name: "Alma W Stewart",
            address: "1943 Friendship Lane",
            price: 16.95,
            payment: "Card",
            status: 0,
            items: [
                { name: "item 1", price: 1 },
                { name: "item 2", price: 2 },
                { name: "item 3", price: 3 },
            ],
        },
        {
            ticket: "272-16-5918",
            date: "11/28/2020",
            name: "Bessie J Leach",
            address: "4689 Rocket Drive",
            price: 34.95,
            payment: "Card",
            status: 0,
            items: [
                { name: "item 1", price: 1 },
                { name: "item 2", price: 2 },
                { name: "item 3", price: 3 },
            ],
        },
        {
            ticket: "217-62-5220",
            date: "12/4/2020",
            name: "Ernest A Ross",
            address: "407 Flanigan Oaks Drive",
            price: 34.95,
            payment: "Cash",
            status: 1,
            items: [
                { name: "item 1", price: 1 },
                { name: "item 2", price: 2 },
                { name: "item 3", price: 3 },
            ],
        },
        {
            ticket: "543-09-6464",
            date: "11/28/2020",
            name: "Roger M Flores",
            address: "4735 Hope Street",
            price: 8.95,
            payment: "Card",
            status: 1,
            items: [
                { name: "item 1", price: 1 },
                { name: "item 2", price: 2 },
                { name: "item 3", price: 3 },
            ],
        },
        {
            ticket: "550-83-6995",
            date: "2/4/2020",
            name: "James T Halsey",
            address: "4735 Hope Street",
            price: 54.95,
            payment: "Card",
            status: 2,
            items: [
                { name: "item 1", price: 1 },
                { name: "item 2", price: 2 },
                { name: "item 3", price: 3 },
            ],
        },
        {
            ticket: "563-70-4100",
            date: "2/5/2020",
            name: "Maira R Howard",
            address: "4735 Hope Street",
            price: 22.95,
            payment: "Cash",
            status: 2,
            items: [
                { name: "item 1", price: 1 },
                { name: "item 2", price: 2 },
                { name: "item 3", price: 3 },
            ],
        },
    ];

    var tbody = document.querySelector("#orders");
    var keys = Object.keys(data[0]).slice(0, 7);
    var orderCounter = 0;

    data.forEach((element) => {
        var tr = document.createElement("tr");
        tr.setAttribute("data", JSON.stringify(element));
        tr.addEventListener("click", () => {
            showOrder(element);
        });

        keys.forEach((k) => {
            var td = document.createElement("td");
            var value = element[k];

            if (k === "status") {
                switch (element[k]) {
                    case 0:
                        value = "Aberto";
                        orderCounter++;
                        break;
                    case 1:
                        value = "Enviado";
                        break;
                    case 2:
                        value = "Finalizado";
                        break;
                }
            }

            td.textContent = value;
            tr.append(td);
        });

        tbody.append(tr);
    });

    document.querySelector("#order-counter").textContent = orderCounter;
}

function showOrder(order) {
    alert("showing " + order.ticket);
}
