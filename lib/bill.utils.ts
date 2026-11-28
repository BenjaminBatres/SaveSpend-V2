
import type Bill from "@/app/types/bill.types";

// Add days to today's date
export function addDays(days: number) {
  const date = new Date();

  date.setDate(date.getDate() + days);

  return date.toISOString().split("T")[0];
}

// Get a date in the current month
export function getDateInCurrentMonth(day: number) {
  const today = new Date();

  const lastDay = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();

  const date = new Date(
    today.getFullYear(),
    today.getMonth(),
    Math.min(day, lastDay)
  );

  return date.toLocaleDateString("en-CA");
}


export function getBillStatus(bill: Bill) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dueDate = new Date(`${bill.dueDate}T00:00:00`);

  if (bill.status === "paid") {
    return "paid";
  }

  if (dueDate < today) {
    return "overdue";
  }

  return "upcoming";
}
