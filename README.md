# Website Analyzer Backend

Welcome to the backend repository of the Website Analyzer project. This project was developed in early 2022 and is now archived. While no longer maintained, it demonstrates the integration of modern tools and technologies to analyze and serve website performance data. It is being shared here as an example of my past work.

---

## Overview

The backend of this project serves as the engine for analyzing websites, leveraging Google Lighthouse's API. It processes the analysis data and delivers it to a frontend application, optimizing performance with caching and data transformation capabilities. Additionally, this project served as a lead magnet designed to collect leads and integrate with Zoho Flow and Zoho CRM.

### Features
- **Website Performance Analysis**: Uses Google Lighthouse API for comprehensive website audits.
- **Lead Collection**: Designed to capture and manage leads through Zoho Flow and Zoho CRM.
- **Data Transformation**: Processes Lighthouse data into a frontend-friendly format.
- **Dynamic Metrics Control**: Uses Storyblok CMS to select relevant metrics and control how they are presented.
- **Caching**: Implements `memory-cache` to avoid redundant processing and save resources.
- **Containerized Deployment**: Fully Dockerized for consistent and portable deployment.
- **CI/CD Pipeline**: Basic integration with Azure DevOps for automated builds and deployments.

---

## Architecture

The project is built on the following technologies:

### Core Technologies
- **Node.js** with **Express**: Serves the API endpoints for website analysis results and lead management.
- **Puppeteer**: Interfaces with Google Lighthouse for running audits programmatically.
- **memory-cache**: Reduces redundant API calls by caching results of previously analyzed websites.
- **Storyblok CMS**: Manages relevant metrics and presentation logic for Lighthouse audit data.

### Deployment
- **Docker**: Ensures consistent deployment and environment configuration.
- **Azure App Services**: Deployed on Azure App Services for Containers, which was preferred at the time due to limitations in Azure Container Instances.

### CI/CD
- **Azure DevOps**: Utilized for building and deploying Docker images to Azure App Services automatically upon new commits.

---

## Workflow

### Lead Collection
1. **Initiate Analysis**:
   - User submits a website URL to the `/analyze` endpoint.
   - Backend sends temporary data (including the website URL) to Zoho Flow, which contains business logic to:
     - Notify me via email.
     - Save user data to Zoho CRM.

2. **Request Email Address**:
   - Once the analysis is complete, the frontend prompts the user for their email address.
   - The email address is submitted to the `/lead` endpoint, which forwards it to Zoho Flow to update Zoho CRM.

3. **Show Results**:
   - After the email is processed, the user is redirected to the frontend to view the analysis results.

### Metric Management
- The audit data from Google Lighthouse is substantial and complex. To simplify this, relevant metrics and their presentation are dynamically managed through **Storyblok CMS**, allowing for easy adjustments and customization.

---

## Prerequisites

To run this project locally:

1. Install [Node.js](https://nodejs.org/) (v14+ recommended).
2. Install [Docker](https://www.docker.com/).
3. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
4. Set up environment variables:
   - `FLOW_COLLECT_LEAD_ENDPOINT`: Zoho Flow endpoint for collecting leads.
   - `FLOW_COLLECT_WEBSITE_ENDPOINT`: Zoho Flow endpoint for collecting website data.
   - `STORYBLOK_TOKEN`: API Key for accessing Storyblok CMS.
   - Other configuration details as required (see `.env.example` file).

> **Note**: Due to the business-specific dependencies (Zoho Flow and Storyblok CMS), running this project as-is might not be feasible. However, for a challenge, you can mock the Zoho Flow endpoints and Storyblok category data to simulate the behavior of the system.

---

## Setup and Run

### Running Locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Access the API at `http://localhost:3000`.

### Running with Docker
1. Build the Docker image:
   ```bash
   docker build -t website-analyzer-backend .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 website-analyzer-backend
   ```
3. Access the API at `http://localhost:3000`.

---

## API Endpoints

### `/analyze`
- **Method**: POST
- **Description**: Accepts a URL and sends it to Zoho Flow for processing and saving to Zoho CRM.
- **Request Body**:
  ```json
  {
    "Website": "https://example.com"
  }
  ```
- **Response**: Redirects the user to the frontend with the query parameter `q` for the analyzed website.

### `/lead`
- **Method**: POST
- **Description**: Accepts the user's email address and sends it to Zoho Flow to update Zoho CRM.
- **Request Body**:
  ```json
  {
    "email": "user@example.com"
  }
  ```

---

## Legacy Notes

- **Development Status**: Archived as of February 2022. The project is no longer maintained.
- **Azure Container Instances**: At the time, Azure App Services for Containers was chosen over Azure Container Instances due to incomplete support for production workloads in the latter.
- **Known Issues**: Potential updates to dependencies might be required for compatibility with modern environments.

---

## Acknowledgments

This project was an opportunity to explore web performance optimization and modern deployment practices. While it remains in its original form, I hope it provides insights into my skills and approach to backend development.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
