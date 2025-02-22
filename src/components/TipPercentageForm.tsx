import type { Dispatch, SetStateAction } from "react";
const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

export default function TipPercentageForm({
  setTip,
  tip,
}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-back text-2xl">Propina:</h3>

      {tipOptions.map((tipOptions) => (
        <div key={tipOptions.id} className="flex gap-2">
          <label htmlFor={tipOptions.id}>{tipOptions.label}</label>

          <input
            id={tipOptions.id}
            type="radio"
            name="tip"
            value={tipOptions.value}
            checked={tipOptions.value === tip}
            onChange={(e) => setTip(+e.target.value)}
          />
        </div>
      ))}

      <form></form>
    </div>
  );
}
