//Signup for the Buyer
export const loginbuyerapi = async (credientials) => {
  console.log("the data from signupbuyerapi is ", credientials.name);
  try {
    let response = await fetch("http://localhost:8000/login-buyer", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credientials.name,
        email: credientials.email,
        password: credientials.password,
      }),
    });
    let data = await response.json();
    console.log(data, "from response");
    alert(data.msg);
    return data;
  } catch (error) {
    alert("The Error in Login is", error);
    console.log("the error is ", error);
  }
};

//Signup for the seller
export const loginsellerapi = async (credientials) => {
  console.log("the data from signupsellerapi is ", credientials.name);
  try {
    let response = await fetch("http://localhost:8000/login-seller", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credientials.name,
        email: credientials.email,
        password: credientials.password,
      }),
    });
    let data = await response.json();
    console.log(data, "from response");
    alert(data.msg);
    return data;
  } catch (error) {
    alert("The Error in Login is", error);
    console.log("the error is ", error);
  }
};
