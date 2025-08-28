// Only export data, not components
export const items6 = [
  { label: "UseState1", program: "UseState1" },
  { label: "UseState2", program: "UseState2" },
  { label: "UseState33", program: "UseState33" },
  { label: "UseState44", program: "UseState44" },
  { label: "UseState5", program: "UseState5" },
  { label: "UseEffect1", program: "UseEffect1" },
  { label: "UseEffect2", program: "UseEffect2" },
  { label: "UseRef_Hook", program: "UseRefHook" },
  { label: "Usememo_Usecallback", program: "UsememoUsecallback" },
];

// Map program names to file names (JSX + CSS)
export const programFiles = {
  UseState1: { jsx: "UseState1.jsx", css: "UseState1.css" },
  UseState2: { jsx: "UseState2.jsx", css: "UseState2.css" },
  UseState33: { jsx: "UseState33.jsx", css: "UseState33.css" },
  UseState44: { jsx: "UseState44.jsx", css: "UseState44.css" },
  UseState5: { jsx: "UseState5.jsx" },
  UseEffect1: { jsx: "UseEffect1.jsx" },
  UseEffect2: { jsx: "UseEffect2.jsx" },
  UseRefHook: { jsx: "UseRefHook.jsx" },              // ✅ fixed
  UsememoUsecallback: { jsx: "UsememoUsecallback.jsx" }, // ✅ fixed
};
