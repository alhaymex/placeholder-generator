# **placeholder-generator**

A simple REST API for generating dynamic placeholder images. Perfect for filling in missing images on websites with customizable width, height, and a \"No Image\" label at the center.

---

## **Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Example Requests](#example-requests)

---

## **Installation**

1. Clone the repository:

   ```
   git clone https://github.com/alhaymex/placeholder-generator.git
   ```

   ```
   cd placeholder-generator
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Start the server:

   ```
   npm start
   ```

   The server will run on `http://localhost:8080`.

---

## **Usage**

This API allows you to generate placeholder images on-the-fly by specifying the desired width and height through query parameters.

The default size is `1200x1200` if no width or height is specified.

---

## **API Endpoints**

### `GET /placeholder`

Generates a placeholder image in PNG format.

#### **Query Parameters:**

- `width` (optional) - Width of the image (default: `1200`)
- `height` (optional) - Height of the image (default: `1200`)
- `shape` (optional) - Shape of the image (default: `circle`)

#### **Response:**

- A dynamically generated PNG image with a circular design.

---

## **Example Requests**

1. **Default size (1200x1200):**

   ```
   https://image.alhaymex.com
   ```

2. **Custom width and height (1600x800):**

   ```
   https://image.alhaymex.com?width=1600&height=800
   ```

3. **Custom shape (circle, square, and diamond):**
   ```
   https://image.alhaymex.com?shape=diamond
   ```
