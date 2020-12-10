const submit = document.querySelector("#lgn_btn");
const logOut = document.querySelector("#lg_out");

if (logOut) {
  logOut.addEventListener("click", (e) => {
    e.preventDefault();

    localStorage.removeItem("usr_lb");
  });

  window.addEventListener("load", (e) => {
    const usr = localStorage.getItem("usr_lb");
  
    if (!usr) {
      alert("Kindly login in to access library functions");
      location.assign("./login.html");
    }
  });
  
}

if (submit) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.querySelector("#exampleInputEmail1").value;
    const password = document.querySelector("#exampleInputPassword1").value;
    if (email === "" || password === "") {
      alert("Check credentials again..!!");
    } else {
      const user = {
        email,
        password,
      };

      console.log(user);

      fetch("users.json")
        .then((resp) => resp.json())
        .then((data) => {
          data.forEach((usr) => {
            console.log(usr);
            if (usr.email === user.email && usr.password === user.password) {
              alert("User logged in successfully");
              usr.looggein = true;
              localStorage.setItem("usr_lb", JSON.stringify({ usr }));
              location.assign("./library.html");
            }
          });
        })
        .catch((err) => console.log(err));
    }
  });
}

