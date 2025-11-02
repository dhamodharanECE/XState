📍 Location Selector – React Application
🧭 Overview

Location Selector is an interactive React-based web application that allows users to dynamically select a Country, State, and City using data fetched from APIs.
Each dropdown menu updates automatically based on the user’s previous selection, providing a smooth and responsive experience for selecting geographical locations.

The application ensures data dependency, dynamic rendering, and good accessibility practices by handling API responses effectively and displaying user-friendly messages.

🌍 Features

✅ Fetch dynamic data for countries, states, and cities using REST APIs

✅ Cascading dropdowns — each dependent on the previous selection

✅ Displays final selection as:

“You selected <City>, <State>, <Country>”

✅ Proper error handling and console logging for failed API requests

✅ Uses both key and value attributes for <option> tags (Cypress-friendly)

✅ Responsive and user-friendly UI

🔗 API Endpoints

Data Type	Endpoint
Get All Countries	https://crio-location-selector.onrender.com/countries

Get States of a Country	https://crio-location-selector.onrender.com/country={countryName}/states

Get Cities of a State	https://crio-location-selector.onrender.com/country={countryName}/state={stateName}/cities

⚙️ Functional Flow

Initial Render:

Three dropdowns appear:

Select Country:

Select State (disabled initially)

Select City (disabled initially)

Select Country:

Fetch and populate the list of countries.

Once a country is selected, the State dropdown becomes active.

Select State:

Fetch the states belonging to the selected country.

Once a state is selected, the City dropdown becomes active.

Select City:

Fetch and display cities under the chosen state.

Once a city is selected, display the text:

“You selected <City>, <State>, <Country>”

🧱 Tech Stack

⚛️ React.js

🧩 JavaScript (ES6+)

🎨 CSS3 (for styling)

🌐 Fetch API (for API calls)

💡 Good Practices Followed

✔️ alt attributes for accessibility (if images used)

✔️ Proper error handling with console.error("Error fetching data:", error)

✔️ Specified both key and value attributes in <option> elements

✔️ Controlled React form elements

✔️ Clean and modular component structure

📂 Project Structure

Project Structure:
    => src
    => App.jsx
    => App.css
    => main.js
    =>main.css

⚡ Installation and Setup

Follow these steps to run the project locally 👇

1️⃣ Clone the Repository
git clone https://github.com/dhamodharanECE/XState.git

2️⃣ Navigate into the Project Folder
cd location-selector

3️⃣ Install Dependencies
npm install

4️⃣ Start the Application
npm start


Your app will run at 👉 http://localhost:3000

🧠 Error Handling

All API fetch operations are wrapped in try...catch blocks for safe error handling.
Example:

try {
  const response = await fetch(apiUrl);
  const data = await response.json();
} catch (error) {
  console.error("Error fetching data:", error);
}

🧾 Sample Output Format

After selecting:

Country: India

State: Tamil Nadu

City: Chennai

You’ll see:

“You selected Chennai, Tamil Nadu, India”

📸 Example UI Flow
 
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/d7f9ccd4-f1cb-4659-bf9c-030a3b77d846" />

“You selected City, State, Country”

1. Deployment Link:
   ```base
   https://x-state-chi.vercel.app/
🧑‍💻 Developer

Dhamodharan S
Frontend Developer
