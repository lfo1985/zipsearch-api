# ZipCode User API (Beta-Closed)

This document provides a brief overview of the `zipcode_user` API, which is currently in a **beta-closed** phase. The API is designed to manage user-specific ZIP code data for the ZipSearch application. It allows creating, retrieving, and deleting ZIP code records by user or by ID.

## Data Model

The `zipcode_user` object contains the following fields:

```json
{
    "user_id": {
        "type": "String",
        "required": true
    },
    "cep": {
        "type": "String",
        "required": true
    },
    "logradouro": {
        "type": "String",
        "required": true
    },
    "complemento": {
        "type": "String",
        "default": ""
    },
    "unidade": {
        "type": "String",
        "default": ""
    },
    "bairro": {
        "type": "String",
        "required": true
    },
    "localidade": {
        "type": "String",
        "required": true
    },
    "uf": {
        "type": "String",
        "required": true
    },
    "estado": {
        "type": "String",
        "required": true
    },
    "regiao": {
        "type": "String",
        "required": true
    },
    "ibge": {
        "type": "String",
        "required": true
    },
    "gia": {
        "type": "String",
        "default": ""
    },
    "ddd": {
        "type": "String",
        "required": true
    },
    "siafi": {
        "type": "String",
        "required": true
    }
}
```

## API Endpoints

### 1. Retrieve zipcode Data by User
**Endpoint:** `GET /zipcode/:userId`  
**Description:** Retrieves all ZIP code records associated with a specific user.  
**Response Codes:**  
- `200`: Success, returns the data.  
- `404`: No records found.  
- `500`: Internal server error.  

---

### 2. Create a New zipcode Record
**Endpoint:** `POST /zipcode`  
**Description:** Creates a new ZIP code record for a user.  
**Request Body:** Must include all required fields from the data model.  
**Response Codes:**  
- `201`: Success, record created.  
- `400`: Bad request, invalid data.  
- `500`: Internal server error.  

---

### 3. Delete All zipcode Records by User
**Endpoint:** `DELETE /zipcode/:userId`  
**Description:** Deletes all ZIP code records associated with a specific user.  
**Response Codes:**  
- `200`: Success, records deleted.  
- `404`: No records found to delete.  
- `500`: Internal server error.  

---

### 4. Delete a zipcode Record by ID
**Endpoint:** `DELETE /zipcode/:id`  
**Description:** Deletes a specific ZIP code record by its unique ID.  
**Response Codes:**  
- `200`: Success, record deleted.  
- `404`: No record found to delete.  
- `500`: Internal server error.  

---

## Notes
- This API is in a **beta-closed** phase and is subject to changes.  
- Ensure all required fields are provided when creating or updating records.  
- For any issues or feedback, please contact the development team.  
