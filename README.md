# Travel Agency

## Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize (ORM)
- Pug (Template Engine)
- Bootstrap

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/TrujiDev/TravelAgency.git
   ```

2. Navigate to the project directory:

   ```bash
   cd TravelAgency
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   Ensure the following dependencies are installed:

   - `dotenv`: `^16.3.1`
   - `express`: `^4.18.2`
   - `mysql2`: `^3.6.5`
   - `pug`: `^3.0.2`
   - `sequelize`: `^6.35.1`

4. Install development dependencies:

   ```bash
   npm install --save-dev nodemon@^3.0.1
   ```

5. Create a `.env` file in the project root and configure necessary environment variables. Refer to `.env.example` for an example.

6. Start the application:

   ```bash
   npm run dev
   ```

7. Visit [http://localhost:5000](http://localhost:5000) in your browser.

## Features

- **Home Page**: Displays featured information about upcoming trips and testimonials.
- **About Us Page**: Provides details about the travel agency.
- **Upcoming Trips Page**: Lists all available trips.
- **Travel Details Page**: Provides detailed information about a specific trip.
- **Testimonials Page**: Displays customer testimonials.

## Contributions

Contributions are welcome! If you want to enhance or add features, follow these steps:

1. Fork the project.
2. Create a branch for your changes: `git checkout -b feature/new-feature`.
3. Make your changes and commit: `git commit -m 'Add new feature'`.
4. Push your changes to the repository: `git push origin feature/new-feature`.
5. Open a Pull Request.
