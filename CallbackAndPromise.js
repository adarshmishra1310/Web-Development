// const loadscript = (src) => {
//   return new Promise((resolve, reject) => {
//     let sc=document.createElement("script");
//     sc.src=src;
//     sc.onload = () => resolve("Hello");
//     sc.onerror = () => reject("Error Occurred");
//     document.head.append(sc);
//   });
// }

// loadscript("https://example.com/script.js")
//   .then((sc) => {
//     console.log(sc);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
const loadscript = (src) => {
  return new Promise((resolve, reject) => {
    // Check if the script has already been appended to the document
    // if (document.querySelector(`script[src="${src}"]`)) {
    //   resolve("Script already loaded");
    //   return;
    // }

    let sc = document.createElement("script");
    sc.src = src;

    // Event listener to handle script loading success
    sc.onload = () => resolve("Script loaded successfully");

    // Event listener to handle script loading errors
    sc.onerror = () => reject("Error occurred while loading the script");

    // Append the script to the document head
    document.head.append(sc);
  });
};

// Example usage:
loadscript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

