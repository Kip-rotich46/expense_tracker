
# Budget Tracker Application

A simple and visually appealing budget tracker application built with React and TypeScript. This application allows users to add, view, and manage their income and expenses, with a graphical representation of their financial summary.

## Features

- Add new transactions (income or expense)
- View a list of all transactions
- Display a graphical summary of income vs. expenses
- Dynamically updates balance, income, and expense totals
- Simple, user-friendly interface
- Styled with a consistent color theme and background image

## Technologies Used

- React
- TypeScript
- Chart.js
- Context API for state management
- CSS for styling

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (>= 12.0.0)
- npm (>= 6.0.0)

### Installation

1. Clone the repository from GitHub.
2. Navigate to the project directory.
3. Install the dependencies using npm.

### Running the Application

Start the development server using the npm start command.
The application will be available at `http://localhost:3000`.

## Usage

### Adding a Transaction

- Enter the transaction details (text, amount, type) in the provided input fields.
- Click the "Add Transaction" button to add the transaction.
- The transaction will be added to the list, and the balance, income, and expense totals will be updated accordingly.

### Viewing the History

- Click the "Show History" button to view the transaction history and the income vs. expense chart.
- Click the "Hide History" button to hide the transaction history and the chart.

### Error Handling

If you attempt to add an expense that exceeds your current balance, an error message will be displayed.

## Project Structure

The project structure includes the following main directories and files:

- `public/`: Contains the HTML file.
- `src/`: Contains the source code including components, context, and styles.
- `components/`: Contains the React components such as AddTransaction, Chart, Header, Summary, and TransactionList.
- `context/`: Contains the GlobalState and AppReducer for state management.
- `types/`: Contains the TypeScript type definitions.

## Customization

### Color Theme

To change the color theme, update the CSS variables in `src/App.css`.

### Background Image

To change the background image, update the `background-image` property in `src/App.css`.

## Contributing

To contribute to this project:

1. Fork the repository.
2. Create your feature branch.
3. Commit your changes.
4. Push to the branch.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Chart.js](https://www.chartjs.org/)
- [Pexels](https://www.pexels.com/) for the background image.

---

Feel free to further customize this README to better fit your project and add any additional information you think is necessary.