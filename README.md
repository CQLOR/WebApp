# WebVia

WebVia is a dynamic web application designed for digital marketing services. It serves as both a public-facing brochure site for services like website development, logo design, and SEO, and an internal tool for tracking sales performance.

The project consists of a static frontend built with HTML, CSS, and vanilla JavaScript, interacting with a serverless backend powered by Google Apps Script (GAS) and Google Sheets.

## Features

### Public Interface
- **Responsive Design:** Optimized for desktop and mobile devices.
- **Service Showcase:** Display of digital marketing services.
- **Contact Form:** Integrated form for potential clients to reach out.

### Admin Dashboard (Internal)
- **Sales Form:** Secure form to input monthly sales data directly into Google Sheets.
- **YTD Sales List:** Real-time view of year-to-date sales data fetched from the backend.
- **Automated Calculations:** Automatic calculation of total sales with formatted currency display.

## Project Structure

- `Index.html`: The main entry point containing the website structure and client-side logic.
- `styles.css`: Custom styling for the application.
- `Code.gs`: Server-side logic for Google Apps Script to handle GET and POST requests.
- `package.json`: Configuration for the local development server (`lite-server`).

## Setup & Run

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- A Google Account for setting up the backend.

### Installation

1.  **Clone or Download** the repository.
2.  **Install Dependencies**:
    Open your terminal in the project directory and run:
    ```bash
    npm install
    ```

### Backend Setup (Google Apps Script)

Since this app relies on a cloud backend, you need to set up your own Google Script if you want to capture real data:

1.  Create a new **Google Sheet**.
2.  Open **Extensions > Apps Script**.
3.  Copy the content of `Code.gs` into the script editor.
4.  **Deploy** the script as a Web App:
    -   Select **Deploy > New deployment**.
    -   Select type **Web app**.
    -   Set **Who has access** to **Anyone**.
    -   Copy the generated **Web App URL**.
5.  **Update Frontend**:
    -   Open `Index.html`.
    -   Replace the existing Google Script URL in the `fetch` call (approx. line 194) and the `DataTable` ajax source (approx. line 242) with your new Web App URL.

### Running Locally

To start the local development server:

```bash
npm start
```

This will launch `lite-server`, which watches for file changes and automatically refreshes the browser. The app will open at `http://localhost:3000`.
