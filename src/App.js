
import Expenses from './components/Expenses/Expenses';
import Card from './components/UI/Card';
import { NewExpense } from './components/NewExpense/NewExpense';

const expenses = [
  { id: "e1", title: "Oat Milk", amount: 2.19, date: new Date(2023, 6, 9) },
  { id: "e2", title: "Coca-cola", amount: 1.50, date: new Date(2023, 6, 8) },
  { id: "e3", title: "Iced Coffee", amount: 4, date: new Date(2023, 6, 10) },
  { id: "e4", title: "Watermelon", amount: 7, date: new Date(2023, 6, 9) },
];


function App() {
  return (
    <div>
      <h1>Let's get started!</h1>
      <Card>
      <Expenses item={expenses}/>
      <NewExpense />
      </Card>
    </div>
  );
}

export default App;
