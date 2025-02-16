const http = require("http");
const soap = require("soap");
const fs = require("fs");

// Define the SOAP service 
const service = {
  MathService: {
    MathServiceSoapPort: {
      calculate: function (args) {
        // Extract parameters from the request
        const num1 = parseFloat(args.num1);
        const num2 = parseFloat(args.num2);
        const operation = args.operation;
        let result;

        // Perform the appropriate operation
        switch (operation) {
          case "add":
            result = num1 + num2;
            break;
          case "subtract":
            result = num1 - num2;
            break;
          case "multiply":
            result = num1 * num2;
            break;
          case "divide":
            result = num2 !== 0 ? num1 / num2 : Infinity;
            break;
          default:
            result = 0;
        }
        return { result };
      },
    },
  },
};

// Load the WSDL file
const wsdlXML = fs.readFileSync(
  "/home/lucifer/Documents/soap_and_rest/service.wsdl",
  "utf8"
);

// Create an HTTP server
const server = http.createServer(function (request, response) {
  response.end("404: Not Found: " + request.url);
});

// Listen on port 8001
server.listen(8001, function () {
  // Attach the SOAP service to the /wsdl path
  soap.listen(server, "/wsdl", service, wsdlXML);
  console.log("SOAP server listening on port 8001");
});
