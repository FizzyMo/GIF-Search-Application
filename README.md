# GIF Search Application

## Description
GIFs Master is a simple web application that allows users to search for and view GIFs. The application is designed with a focus on enhancing the user experience on mobile devices by optimizing touch interactions, responsiveness, performance, and accessibility.

## Table of Contents
- [Introduction](#introduction)
  - [Focus Areas](#focus-areas)
  - [Responsive Design](#responsive-design)
- [Responsive Design](#responsive-design)
  - [Viewport Meta Tag](#viewport-meta-tag)
  - [Flexible Grid Layout](#flexible-grid-layout)
  - [Media Queries](#media-queries)
  - [Mobile-First Approach](#mobile-first-approach)
- [Touch Interaction Optimization](#touch-interaction-optimization)
  - [Larger Touch Targets](#larger-touch-targets)
  - [Touch Feedback](#touch-feedback)
- [Performance Optimization](#performance-optimization)
  - [Optimized Images](#optimized-images)
  - [Minification](#minification)
- [Accessibility Considerations](#accessibility-considerations)
  - [High Contrast Mode](#high-contrast-mode)
  - [Text Scaling](#text-scaling)
  - [ARIA Attributes](#aria-attributes)
- [Features](#features)
- [Technology Stack Breakdown](#technology-stack-breakdown)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Details](#api-details)
- [Author](#author)
- [Contact](#contact)

## Introduction
**Objective:** Enhance the design and layout of the GIF search application for mobile devices.  
### Focus Areas
- Touch interactions
- Responsiveness
- Performance
- Accessibility

## Responsive Design
### Viewport Meta Tag
To ensure that the application is responsive on all devices, the viewport meta tag is included in the HTML head. This ensures that the application scales properly on different screen sizes.
``
<meta name="viewport" content="width=device-width, initial-scale=1"> 
``

### Flexible Grid Layout
For layout flexibility, Bootstrap's grid system is used. Elements are arranged in rows and columns that adjust based on screen size.

### Media Queries
Media queries are implemented to adjust font sizes, image sizes, and margins based on screen width. This ensures that the application remains usable on various devices.
```
@media (max-width: 768px) {
    h1 {
        font-size: 36px;
    }
    .btn-primary, .btn-success {
        font-size: 16px;
    }
}

@media (max-width: 576px) {
    h1 {
        font-size: 28px;
    }
    .btn-primary, .btn-success {
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 24px;
    }
    .btn-primary, .btn-success {
        font-size: 12px;
    }
}
```

### Mobile-First Approach
The design begins with small screens and progressively enhances for larger screens, ensuring that the core functionality is optimized for mobile devices first.

## Touch Interaction Optimization

### Larger Touch Targets
Buttons and interactive elements are styled to ensure they are easily tappable on mobile devices. Here is how the buttons are styled to meet the recommended touch target size:

```
:root {
    --bg-color: #f0f8ff;
}

body {
    background-color: var(--bg-color);
    margin: 0;
    padding: 20px; 
    font-family: 'Lora', serif;
}

h1 {
    font-family: 'Lobster', cursive;
    color: #ff69b4;
    font-size: 48px;
    text-shadow: 2px 2px #ff4500;
    margin-bottom: 30px;
}

.btn-primary {
    display: inline-block;
    padding: 12px 24px;
    margin-left: 10px;
    background: #ff69b4;
    color: #fff;
    font-size: 18px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
}

.btn-success {
    background-color: #32cd32;
    border-radius: 20px !important;
    color: white;
    border: none;
    margin-left: 10px !important;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

input.form-control {
    border-radius: 15px !important;
    border: 2px solid #ff69b4;
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.container {
    margin-bottom: 30px;
}

#random img {
    width: 100%;
    height: auto;
    display: block;
    margin: 10px auto;
    border-radius: 15px;
    transition: transform 0.2s; 
}

#random img:hover {
    transform: scale(1.05);
}

.center-input {
    width: 100%;
    margin: 0 auto;
}

#add {
    font-size: 22px;
    color: #ff4500;
    margin-bottom: 10px;
    display: block;
}

.form-control {
    width: 100%;
}

.input-group {
    width: 100%;
}

@media (max-width: 768px) {
    h1 {
        font-size: 36px;
    }
    .btn-primary, .btn-success {
        font-size: 16px;
    }
}

@media (max-width: 576px) {
    h1 {
        font-size: 28px;
    }
    .btn-primary, .btn-success {
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 24px;
    }
    .btn-primary, .btn-success {
        font-size: 12px;
    }
}
```
### Touch Feedback
CSS transitions provide visual feedback for touch interactions:
```
#random img {
    width: 100%;
    height: auto;
    display: block;
    margin: 10px auto;
    border-radius: 15px;
    transition: transform 0.2s;
}

#random img:hover {
    transform: scale(1.05);
}
```

## Performance Optimization
### Optimized Images
GIFs are served in WebP format to reduce load times on mobile devices.
```
for (var i = 0; i < gifs.length; i++) {
        // Get URLs for WebP and GIF formats
        const gifUrl = gifs[i].images.fixed_height.url;
        const webpUrl = gifs[i].images.fixed_height_webp ? gifs[i].images.fixed_height_webp.url : gifUrl;
        const stillUrl = gifs[i].images.fixed_height_still.url;
        const webpStillUrl = gifs[i].images.fixed_height_still_webp ? gifs[i].images.fixed_height_still_webp.url : stillUrl;

        // Create image element with descriptive alt text
        var image = '<img src="' + webpStillUrl +
            '" alt="' + gifs[i].title + '" ' +
            'data-still="' + webpStillUrl +
            '" data-animate="' + webpUrl +
            '" data-state="still" class="movImage" style="width: 200px; height: 200px;"';
```

### Minification
Minification is handled using Webpack to optimize the performance of your application. Webpack is configured to minimize CSS, JavaScript, and HTML files. Here’s how it’s set up:

#### Webpack Configuration for Minification
1. **Install Required Packages**
Make sure you have the necessary [Webpack plugins](https://webpack.js.org/) installed:
```
npm install --save-dev webpack webpack-cli css-minimizer-webpack-plugin terser-webpack-plugin
```
2. **Update Webpack Configuration**
Modify your `webpack.config.js` to include the `css-minimizer-webpack-plugin` for CSS minification and `terser-webpack-plugin` for JavaScript minification. Below is an example configuration:
```
const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production', // Enables minification and other optimizations
  entry: './public/javascript/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(), // Minifies JavaScript
      new CssMinimizerPlugin(), // Minifies CSS
    ],
  },
};
```
This configuration ensures that:
- **JavaScript** files are minified using `TerserPlugin`.
- **CSS** files are minified using `CssMinimizerPlugin`. 
- The `**mode**`: `production` setting in Webpack automatically enables various optimizations, including minification.
3. **Build the Project**
To apply minification and generate the optimized files, run:
``npx webpack --config webpack.config.js``
This command will produce minified versions of your CSS and JavaScript files in the `dist` directory.

## Accessibility Considerations

Demo of Narrator Accessibility Reading the Site. Click video to hear video
![](/public/assets/video/accessiblity_demo.gif)

### High Contrast Mode
High contrast mode ensures that text and interactive elements are easily distinguishable for users with visual impairments. This is accomplished through careful selection of colors and using sufficient contrast ratios.

Here are some examples from the CSS:
 * **Background and Text Colors:** The background and text colors are chosen to provide high contrast. For instance:

```:root {
    --bg-color: #f0f8ff; /* Light background color */
}

body {
    background-color: var(--bg-color);
    color: #353535; /* Dark text color for high contrast with the background */
}
```
* **Button Styles:** Buttons are styled with clear contrast to ensure they are prominent and easily identifiable:
```.btn-primary {
    background: #ff69b4; /* Pink background color */
    color: #fff; /* White text color */
}

.btn-success {
    background-color: #32cd32; /* Green background color */
    color: white; /* White text color */
}
```
* **Error Messages:** Error messages use a distinct color to stand out:
```.text-danger {
    color: #dc3545; /* Red color for error messages */
}
```
### Text Scaling
Text scaling ensures that text remains readable and usable across different devices and screen sizes. This is achieved through responsive font sizes using media queries in the CSS:
```
h1 {
    font-size: 48px;
    /* Default font size for large screens */
}

@media (max-width: 768px) {
    h1 {
        font-size: 36px;
        /* Reduced font size for tablets */
    }
}

@media (max-width: 576px) {
    h1 {
        font-size: 28px;
        /* Further reduced font size for small screens */
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 24px;
        /* Minimum font size for very small screens */
    }
}

.btn-primary, .btn-success {
    font-size: 18px;
    /* Default font size for buttons */
}

@media (max-width: 768px) {
    .btn-primary, .btn-success {
        font-size: 16px;
        /* Reduced font size for buttons on tablets */
    }
}

@media (max-width: 576px) {
    .btn-primary, .btn-success {
        font-size: 14px;
        /* Further reduced font size for buttons on small screens */
    }
}

@media (max-width: 480px) {
    .btn-primary, .btn-success {
        font-size: 12px;
        /* Minimum font size for buttons on very small screens */
    }
}
```

### ARIA Attributes
ARIA attributes are used to enhance screen reader accessibility:

```
<h1 aria-label="Hall of Memes, GIF search application">Hall of Memes</h1>
```

```
<button aria-label="Submit keyword to display related GIFs">Submit</button>
```
## Features
* Predefined buttons for popular search queries.
* Search functionality via text input.
* Display of GIFs with a toggle feature between still and animated states.
* Optimized for mobile devices.

## Technology Stack Breakdown
### **Front-End:**
  * **HTML**
    * **Purpose:** Structures the content of the webpage.
    * **Usage:** Defines elements such as headings, paragraphs, buttons, and forms.
  * **CSS**
    * **Purpose:** Styles the visual presentation of the HTML content.
    * **Usage:** Custom styles for text, buttons, images, layout, and responsiveness (e.g., media queries for text scaling and high contrast mode).
  * JavaScript
    * **Purpose:** Adds interactivity and dynamic behavior to the webpage.
    * **Usage:** Handles user interactions (e.g., button clicks, form submissions), performs AJAX requests, manipulates the DOM, and manages state changes.
  * Bootstrap
    * **Purpose:** Provides a framework for responsive design and pre-styled components.
    * **Usage:** Includes ready-to-use components like buttons and forms that are styled for different screen sizes.
  * jQuery
    * **Purpose:** Simplifies DOM manipulation and AJAX requests.
    * **Usage:** Facilitates adding and removing elements, handling events, and making AJAX calls to the server.
  * Webpack
    * **Purpose:** Bundles and minifies CSS and JavaScript files.
    * **Usage:** Combines multiple files into a single bundle, optimizes performance by reducing file sizes.
### Development Tools
  * **Visual Studio Code (VSC)**
    * **Purpose:** Integrated development environment (IDE) for coding.
    * **Usage:** Writing, editing, and debugging code. Supports extensions for various languages and tools, including C++ and JavaScript.
  * **Git**
    * **Purpose:** Version control system to manage code changes.
    * **Usage:** Tracks changes in the codebase, allows for collaboration, and manages versions of the project.
  * **Github**
    * **Purpose:** Platform for hosting Git repositories.
    * **Usage:** Stores and manages code repositories, facilitates collaboration through pull requests, issues, and code reviews.
### Back End
  * **Node.js**
    * **Purpose:** JavaScript runtime for building server-side applications.
    * **Usage:** Executes JavaScript code on the server, handles server-side logic, and manages API requests.
  * **Express**
    * **Purpose:** Web application framework for Node.js.
    * **Usage:** Simplifies the creation of server-side routes, handles HTTP requests, and manages middleware.

* **API**
  * **Giphy API**
### **Deployment**
  * **Vercel**
    * **Purpose:** Hosting and deployment platform for server-side applications and static sites.
    * **Usage:** Deploys the application to a live environment, handles automatic builds and deployments from the Git repository.

## Installation

1. **Clone the Repository**
   ``git clone https://github.com/your-username/GIF-Search-Application.git ``
2. **Navigate into the project directory:**
   ``cd gif_search_application`` 
3. **Install Dependencies**
    - Make sure you have [Node.js](https://nodejs.org/) installed.
    - Install the required dependencies:
      ``npm install``
4. **Setup Environment Variables:**
   * Option 1: Manually create `.env` file:
     * Create a `.env` file in the root directory.
   * Option 2:
     * Use a script to create the .env file
     * `npm install dotenv --save`
5. **Obtain a Giphy API Key:**
   * Go to [Giphy Developers](https://developers.giphy.com/)
   * Create an account if you don't have one.
   * Create a new app to get your API key.
   * Add your API key to the `.env` file
   * `GIPHY_API_KEY=your_giphy_api_key`

## Project Structure
```
gifs
├── api/
│   ├── index.js                
│   └── search.js               
├── public/
│   ├── assets/
│   │   └── javascript/
│   │       └── main.js         
│   ├── video/
│   │   └── accessibility_demo.gif 
│   ├── index.html              
├── dist/
│   ├── bundle.js               
│   └── style.css               
├── .env                        
├── .gitignore                  
├── package.json                
├── package-lock.json           
└── webpack.config.js           
```
* `api/` Contains server-side code for handling API requests.
  * `index.js` Defines the main API routes and request handlers.
  * `search.js` Contains logic for searching and processing GIF requests.
* `public/` Stores static files and assets.
  * `assets/`
    * `javascript/` Contains JavaScript files, including main.js.
  * `video/` Stores video-related assets like GIFs, e.g., accessibility_demo.gif.
  * `index.html` The entry point HTML file for the web application.
* `dist/` Contains bundled and minified assets generated by Webpack.
  * `bundle.js` The main JavaScript file with all bundled and minified code.
  * `style.css` The main CSS file with all bundled and minified styles.
* `.env` Stores environment variables, such as API keys.
* `.gitignore` Specifies files and directories that should be ignored by Git.
* `package.json` Lists project dependencies, scripts, and metadata.
* `package-lock.json` Ensures consistent dependency versions.
* `webpack.config.js` Configuration file for Webpack, detailing how to bundle and minify assets.

## Usage
1. **Start the server:**
   `npm start`
2. **Open your browser and navigate to** `http://localhost:3000`
3. **Use the predefined buttons or type a search query into the input box and click "Submit" to fetch and display GIFs.**
4. **Click on the GIFs to toggle between still and animated states.**

## API Details
* **Base URL:** `https://api.giphy.com/v1/gifs`
  * GIPHY Search gives you instant access to our library of millions of GIFs by entering a word or phrase. See [GIPHY Docs](https://developers.giphy.com/docs/api/endpoint#trending) for more information
* **Endpoints:**
  * **Search GIFs:** `/search`
    * **Description:** Search for GIFs by a query term.
    * **Query Parameters:**
      * `q` **(required)**: The search query term.
      * `api_key` **(required)**: Your Giphy API key.
      * `limit` **(optional)**: The number of GIFs to return. Default is 25, maximum is 50.
* **Example Request:**
  * `GET https://api.giphy.com/v1/gifs/search?q=dogs&api_key=your_giphy_api_key&limit=20`
  * **Example Response:**
 ```
 {
  "data": [
    {
      "type": "gif",
      "id": "xT9IgDEI1iZyb2wqo8",
      "images": {
        "fixed_height_still": {
          "url": "https://media.giphy.com/media/xT9IgDEI1iZyb2wqo8/200_s.gif"
        },
        "fixed_height": {
          "url": "https://media.giphy.com/media/xT9IgDEI1iZyb2wqo8/200.gif"
        }
      }
    }
    // Additional GIF objects
  ]
}
```
* **Refer to the [Giphy Developer Portal](https://developers.giphy.com/docs/api/) for more options to customize your search and retrieve different types of GIFs**

## Author
**Carisa Saenz-Videtto**

## Contact
carisasaenz@gmail.com

