# RMG AI Mockup Generator

## Screenshot

![image](https://github.com/rivkyschon/React-Mockup-Generator/assets/113901370/1f2b29b2-5050-497e-ba60-7e413476bd25)

## Project Summary

The RMG AI Mockup Generator is a React-based web application that utilizes a suite of custom components to create a dynamic and interactive user experience. At the heart of the application is the `AIMockupGenerator`, a component that allows users to input descriptive text and generate corresponding code snippets for their mockup components. This process is facilitated through a backend service, making HTTP requests to convert the user's descriptive text into usable code.

The application's interface is made up of several custom components, including:

- `RMGButton`: A customizable button component.
- `RMGHeader`: A component for displaying header text.
- `RMGInput`: An input component for user text entries.
- `RMGText`: A component for displaying regular text.
- `RMGImage`: A component for displaying images.
- `AIMockupGenerator`: The core component where users input text and receive generated code for their mockups.
- `TestButton`: A button component used for testing or demonstrating functionality.

The `MainPage` component serves as the entry point of the application, orchestrating the layout and integration of the individual components into a cohesive interface.

## Running the App Locally

### Prerequisites

Before you start, ensure you have the following installed:
- [Node.js and npm](https://nodejs.org/en/): Runtime environment and package manager.
- [Git](https://git-scm.com/): Version control system.

### Setup Instructions

1. **Clone the repository**

   Clone the project repository to your local machine using the following command:

   ```sh
      git clone https://github.com/rivkyschon/React-Mockup-Generator.git
   ```

2. **Navigate to the Project Directory**

   After cloning the repository, move into the project directory:

   ```sh
      cd React-Mockup-Generator
   ```
3. **Install Dependencies**

   Install the necessary node modules
   ```sh
      npm install
   ```

4. **Start the Development Server**
   Run the development server using:
   
   ```sh
      npm start
   ```
   This command will start the React application on a local development server, typically available at http://localhost:5173 in your web browser.


### API Server Configuration

   By default, this project uses a pre-deployed API server to generate the code. However, for users who prefer to run the API server locally (for instance, for development       or offline purposes), you can clone the API server repository and set it up on your local machine. Follow the instructions provided at:

   https://github.com/rivkyschon/React-Mockup-Generator-api

   This will allow you to have full control over the API server, and you can make adjustments or updates as per your requirements.

## Usage

### Generating Mockups

To generate a mockup, navigate to the `AIMockupGenerator` component in the application.

- Enter the description of the mockup you want to generate in the input field.
- Click the `Generate Code` button to submit your request.
- The generated mockup  will be displayed on the screen if the operation is successful. In case of an error, an error message will be shown.

### Exploring Components

The `TestButton` on the main page allows you to explore all the components included in the application. Clicking it will guide you through the various components and their functionalities.
