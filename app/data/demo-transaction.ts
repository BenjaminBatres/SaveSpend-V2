
export type Transaction = {
  id: string;
  description: string;
  category:
    | "Food"
    | "Income"
    | "Entertainment"
    | "Transportation"
    | "Shopping"
    | "Utilities"
    | "Housing"
    | "Health"
    | "Education";
  type: "income" | "expense";
  amount: number;
  date: string;
};

export const demoTransactions: Transaction[] = [
  {
    id: "1",
    description: "Grocery Store",
    category: "Food",
    type: "expense",
    amount: 85.40,
    date: "2026-11-18",
  },
  {
    id: "2",
    description: "Monthly Paycheck",
    category: "Income",
    type: "income",
    amount: 2500,
    date: "2026-11-17",
  },
  {
    id: "3",
    description: "Netflix",
    category: "Entertainment",
    type: "expense",
    amount: 15.99,
    date: "2026-11-16",
  },
  {
    id: "4",
    description: "Shell Gas Station",
    category: "Transportation",
    type: "expense",
    amount: 48.25,
    date: "2026-11-15",
  },
  {
    id: "5",
    description: "Amazon Purchase",
    category: "Shopping",
    type: "expense",
    amount: 62.80,
    date: "2026-11-14",
  },
  {
    id: "6",
    description: "Electric Bill",
    category: "Utilities",
    type: "expense",
    amount: 95,
    date: "2026-11-13",
  },
  {
    id: "7",
    description: "Starbucks",
    category: "Food",
    type: "expense",
    amount: 8.75,
    date: "2026-11-12",
  },
  {
    id: "8",
    description: "Freelance Project",
    category: "Income",
    type: "income",
    amount: 450,
    date: "2026-11-11",
  },
  {
    id: "9",
    description: "Spotify",
    category: "Entertainment",
    type: "expense",
    amount: 11.99,
    date: "2026-11-10",
  },
  {
    id: "10",
    description: "Rent Payment",
    category: "Housing",
    type: "expense",
    amount: 1200,
    date: "2026-11-09",
  },
  {
    id: "11",
    description: "Target",
    category: "Shopping",
    type: "expense",
    amount: 74.32,
    date: "2026-11-08",
  },
  {
    id: "12",
    description: "Internet Bill",
    category: "Utilities",
    type: "expense",
    amount: 65,
    date: "2026-11-07",
  },
  {
    id: "13",
    description: "Restaurant",
    category: "Food",
    type: "expense",
    amount: 42.50,
    date: "2026-11-06",
  },
  {
    id: "14",
    description: "Car Insurance",
    category: "Transportation",
    type: "expense",
    amount: 135,
    date: "2026-11-05",
  },
  {
    id: "15",
    description: "Gym Membership",
    category: "Health",
    type: "expense",
    amount: 35,
    date: "2026-11-04",
  },
  {
    id: "16",
    description: "Monthly Paycheck",
    category: "Income",
    type: "income",
    amount: 2500,
    date: "2026-11-03",
  },
  {
    id: "17",
    description: "Gas Station",
    category: "Transportation",
    type: "expense",
    amount: 52.10,
    date: "2026-11-02",
  },
  {
    id: "18",
    description: "Grocery Store",
    category: "Food",
    type: "expense",
    amount: 112.65,
    date: "2026-11-01",
  },
  {
    id: "19",
    description: "Movie Theater",
    category: "Entertainment",
    type: "expense",
    amount: 32,
    date: "2026-10-29",
  },
  {
    id: "20",
    description: "Online Course",
    category: "Education",
    type: "expense",
    amount: 49.99,
    date: "2026-10-27",
  },
];
