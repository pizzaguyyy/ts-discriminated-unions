// Discriminated union for API responses
// type ApiResponse =
//   | { status: "success"; data: string[] }
//   | { status: "error"; errorMessage: string };

type ApiResponse = {
  status: "success" | "error";
  data?: string[];
  errorMessage?: string;
};

function handleResponse(response: ApiResponse) {
  if (response.status === "success") {
    console.log("Data received:", response.data);
    console.log("error: ", response.errorMessage);
  } else {
    console.error("Error:", response.errorMessage);
    console.log("data: ", response.data);
  }
}

function processResponse(response: ApiResponse) {
  switch (response.status) {
    case "success":
      console.log("Success:", response.data);
      // console.log("error: ", response.errorMessage);

      break;
    case "error":
      console.error("Error message:", response.errorMessage);
      // console.log("data: ", response.data);
      break;
  }
}

/*
    ✅ Key takeaway: The status property acts as the discriminator,
    ensuring we can safely access properties based on its value.
*/

/*
    The compiler enforces handling all possible cases.
    Eliminates runtime errors caused by unexpected object shapes.
*/
