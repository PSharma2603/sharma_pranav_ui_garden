export type RadioButtonProps = {
  name: string; // ✅ Name attribute for radio group
  options: string[]; // ✅ List of radio button options
  selectedOption?: string; // ✅ Currently selected option
  onChange?: (value: string) => void; // ✅ Function to handle selection change
  disabled?: boolean; // ✅ Whether the radio buttons are disabled
};
