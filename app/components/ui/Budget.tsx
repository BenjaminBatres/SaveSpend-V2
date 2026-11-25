import React from "react";
import { categoryColors } from "@/app/data/category-colors";

interface IBudget {
  icon: React.ReactNode;
  name: string;
  spent: number;
  amount: number;
}
export default function Budget({ icon, spent, amount, name }: IBudget) {
  const colors = categoryColors[name];
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex gap-4 w-full xl:w-1/2 2xl:w-full">
        <div className="flex justify-center items-center size-10 bg-Purple-Theme rounded-full">
          <span className="text-2xl" style={{ color: colors.text }}>
            {icon}
          </span>
        </div>
        <div className="w-full space-y-1">
          <h3 className="font-semibold">{name}</h3>
          <div className="w-full bg-Purple-Theme rounded-full">
            <div
              className="h-3 bg-Purple rounded-full"
              style={{
                width: `${Math.floor((spent / amount) * 100)}%`,
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end gap-5 2xl:gap-10 sm:w-[45%] xl:w-auto 2xl:w-[45%]">
        <div className="font-semibold">
          ${spent} / ${amount}
        </div>

        <div className="text-Green font-semibold">
          {Math.floor((spent / amount) * 100)}%
        </div>
      </div>
    </div>
  );
}
