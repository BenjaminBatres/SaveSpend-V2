type Bill = {
  id: string;
  name: string;
  amount: number;
  category: string;
  dueDate: string;
  frequency: "weekly" | "monthly" | "yearly";
  status: "upcoming" | "paid" | "overdue";
  lastPaidDate?: string;
  reminderDays?: number;
};

export default Bill