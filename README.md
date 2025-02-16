```markdown
# Calculator API Service (SOAP & REST)
This is a dual-implementation calculator service providing both **SOAP** and **REST** endpoints. The service performs basic arithmetic operations (addition, subtraction, multiplication, and division) and can be tested using **Postman** or any API testing tool.

## 🚀 Getting Started

### Prerequisites
- **Node.js**
- **npm (Node Package Manager)**
- **Postman (for testing)**

### Installation & Running the Project
1. **Clone the Repository**
   ```sh
   git clone https://github.com/Lucifer203/soap_and_rest.git
   cd soap_and_rest
   ```

2. **Install Dependencies**
   ```sh
   npm install express soap
   ```

3. **Start the Services**
   ```sh
   # Start REST API
   node rest_api.js
   
   # Start SOAP API
   node soap_server.js
   ```

4. **Access the Services**
   ```
   REST API: http://localhost:8002
   SOAP API: http://localhost:8001/wsdl
   ```

---

## 🛠️ Testing the APIs

### **📌 REST API Testing**
Send a **GET** request to:
```
http://localhost:8002/calculate?num1=8&num2=9&operation=multiply
```

Expected Response:
```json
{
    "result": 72
}
```

### **📌 SOAP API Testing**
Send a **POST** request to:
```
http://localhost:8001/wsdl
```

Use **Headers**:
```
Content-Type: text/xml
```

Paste this XML request in **Body (raw)**:
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                  xmlns:math="math.service.soap">
   <soapenv:Header/>
   <soapenv:Body>
      <math:calculate>
         <math:num1>8</math:num1>
         <math:num2>9</math:num2>
         <math:operation>multiply</math:operation>
      </math:calculate>
   </soapenv:Body>
</soapenv:Envelope>
```

---

## 🔧 Supported Operations
- **add**: Addition
- **subtract**: Subtraction
- **multiply**: Multiplication
- **divide**: Division

---

## 📂 Project Structure
```
calculator-api/
├── rest-server.js
├── soap-server.js
├── service.wsdl
└── README.md
```

---

## 💡 Features
- Dual API implementation (SOAP & REST)
- Simple and intuitive endpoints
- Basic arithmetic operations
- Error handling
- Easy to test and implement

---

## 👨‍💻 Author
- GitHub: [Adarsh Ghimire](https://github.com/Lucifer203)

---
```
