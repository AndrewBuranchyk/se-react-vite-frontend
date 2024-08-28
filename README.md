# S.E. Dashboard

## Setting up
    Node version must be 16 or higher.
```sh
cd se-react-vite-frontend
```

### Installing all the dependencies
```sh
npm install --legacy-peer-deps
```


## Running the Server
### During development
```sh
vite
```
    Or
```sh
npm run dev
```
    Runs the app in development mode.
    Open [http://127.0.0.1:5173](http://127.0.0.1:5173) to view it in the browser.



## Deployment to AWS Amplify Hosting directly from the GitHub Repository
    Could be completely free of payment
### 1. Creating Amplify new app
    - Sign in using root user email to your https://console.aws.amazon.com/console/home
    - In the search bar tap "Amplify" and go to Amplify
    - Click on the "Create new app" button, fill out the form as follows:
    1. To deploy an app from a Git provider - select "GitHub" and click "Next"
    2. Install & Authorize on your personal account -  select "All repositories" and click "Install and Authorize"
    3. Add repository and branch - select "AndrewBuranchyk/se-react-vite-frontend" and click "Next"
    4. App name - enter "se-react-vite-frontend"
    5. Frontend build command - enter "npm run build"
    6. Environment variables - 
    "Key" enter "BACKEND_BASE_URL"
    "Value" enter "https://se-laravel-backend.azurewebsites.net/api/"
    and click "Next"
    7. Click "Save and deploy"
    


## Deployment to Azure App Service directly from the Azure Repos
    Could be completely free of payment
### 1. Creating Azure App Service
    - Sign in to your https://portal.azure.com/
    - In the search bar tap "App Services" and go to App Services
    - Click on the "Create" dropdown and select "Web App", fill out the form as follows:
    1. Resource Group - select "Create new" and enter "se-react-frontend"
    2. Name - enter "se-react-frontend" and turn off the "Try a unique default hostname"
    3. Publish - select "Code"
    4. Runtime stack - select "Node 20 LTS"
    5. Operating System - select "Linux"
    6. Region - select "Germany West Central"
    7. Linux Plan ... - select "... F1"
    8. Pricing plan - should be "Free F1 (Shared infrastructure)"
    9. Click "Review + create"
    10. Click "Create"

### 2. Configuring the Startup commands and SCM Basic Auth
    - Go to App Service "se-react-frontend"
    - From the left menu, select "Configuration"
    - In the General settings tab:
    1. In the Startup Command box, enter the following command:
    /home/site/wwwroot/azure-startup.sh
    2. Turn on the "SCM Basic Auth Publishing Credentials"
    3. Click on the "Save" button

### 3. Configuring the Deployment
    - Go to App Service "se-react-frontend"
    - From the left menu, select "Deployment Center"
    - In the General settings tab fill out the form as follows:
    1. Source - select "Azure Repos"
    2. Organization - select "aburanchik"
    3. Project - select "se"
    4. Repository - select "se-react-frontend"
    5. Branch - select "master"
    6. Click on the "Save" button

### 4. Checking the service
    - Go to App Service "se-react-frontend"
    - From the left menu, select "Overview"
    - Click on the "Browse" button and then should open the page "https://se-react-frontend.azurewebsites.net/"


## Deployment to Azure App Service using Azure Pipelines
    Before you need to purchase at least one "Parallel job" service in the Project Settings of the Azure DevOps
### 1. Creating Azure App Service
    - Sign in to your https://portal.azure.com/
    - In the search bar tap "App Services" and go to App Services
    - Click on the "Create" dropdown and select "Web App", fill out the form as follows:
    1. Resource Group - select "Create new" and enter "se-react-frontend"
    2. Name - enter "se-react-frontend" and turn off the "Try a unique default hostname"
    3. Publish - select "Code"
    4. Runtime stack - select "Node 20 LTS"
    5. Operating System - select "Linux"
    6. Region - select "Germany West Central"
    7. Linux Plan ... - select "... F1"
    8. Pricing plan - should be "Free F1 (Shared infrastructure)"
    9. Click "Review + create"
    10. Click "Create"

### 2. Creating a pipeline for deploying to the created App Service
    - Sign in to your Azure DevOps https://dev.azure.com/
    - Go to Pipelines, and click on New Pipeline
    - When prompted, select "Azure Repos Git"
    - When the list of repositories appears, select "se-react-frontend"
    - If there was no YAML file in the repository then appears a list, 
    select "Node.js React Web App to Linux on Azure"
    - - Select an Azure subscription - select "Azure subscription 1"
    - - Click on Continue
    - - Sign in
    - - Web App name - select "se-react-frontend"
    - - Click on the "Validate and configure" button
    - When new pipeline appears, take a look at the YAML and 
    from azure-pipelines.yml.example copy all exept azureSubscription (it should be fresh). 
    When you're ready, click on " Save and Run".
    - When Build stage is complited you need to add permission to deploy it.
    It appears the following message: "This pipeline needs permission to access a resource before this run can continue to Deploy"
    - Click on "View" button and then the "Permit" button.

### 3. Checking the service
    - Go to App Service "se-react-frontend"
    - From the left menu, select "Overview"
    - Click on the "Browse" button and then should open the page "https://se-react-frontend.azurewebsites.net/"
