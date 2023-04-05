
                /*change color*/
                document.getElementById("color").addEventListener("click", change_color);
                document.getElementById("color").addEventListener("click1", change_color);
                document.getElementById("color").addEventListener("click2", change_color);
                document.getElementById("color").addEventListener("click3", change_color);
                /*Notifications and Conditional*/
                document.getElementById("submit").addEventListener("click", submitMessage);
                function submitMessage() {
                    let FirstName = document.getElementById("FirstName").value;
                    let LastName = document.getElementById("LastName").value;
                    let age = document.getElementById("age").value;

                    if(age < 19){
                        alert("Your are not old enough to register for submitting the message");
                    } else {
                        alert("Thank you for registering" + FirstName +" " +LastName + "for the course");
                    }
                }
                /*change color*/
                function change_color() {
                    document.body.style.backgroundColor = "red";
                }
                function change_color() {
                    document.body.style.backgroundColor = "blue";
                }
                function change_color() {
                    document.body.style.backgroundColor = "pink";
                }
                function change_color() {
                    document.body.style.backgroundColor = "lightgray";
                }
            