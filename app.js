function calculateOrder() {
            // Pull values directly from the form elements
            let drink = document.getElementById("drink-select").value;
            let size = document.getElementById("size-select").value;
            let isMember = document.getElementById("member-check").checked;
            let price = 0;
            document.getElementById("out-bonus").innerHTML = "";

          
            switch (drink) {
                case "latte":
                    price = 6;
                    if (size == "S") {
                        price += 0;
                    } else if (size == "M") {
                        price += 1;
                    } else if (size == "L") {
                        price += 2;
                    }
                   
                    break;
                case "americano":
                    price = 5;
                    if (size == "S") {
                        price += 0;
                    } else if (size == "M") {
                        price += 1;
                    } else if (size == "L") {
                        price += 2;
                    }
                   
                    break;
                case "mocha":
                    price = 7;
                    if (size == "S") {
                        price += 0;
                    } else if (size == "M") {
                        price += 1;
                    } else if (size == "L") {
                        price += 2;
                    }
                    
                    break;
                default:
                    alert("Sorry, we don't have that drink.");
            }
            if (isMember === true) {
                price -= 1;
            }
            console.log("Total: " + price + " baht");
            if (price > 8) {
                console.log("Free cookie!");
            }
            document.getElementById("out-drink").innerText = drink;
            document.getElementById("out-size").innerText = size;
            document.getElementById("out-member").innerText = isMember ? "-1 baht" : "None";
            document.getElementById("out-total").innerText = "Total: " + price + " baht";
            
            if (price > 8) {
                document.getElementById("out-bonus").innerHTML = "<div class='bonus-alert'>🎉 Free cookie! 🍪</div>";
            }
        }