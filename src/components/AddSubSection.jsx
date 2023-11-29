/* eslint-disable react/prop-types */
export default function AddButton({onClick }) {
  return (
    <button type="button" className="create-subSection" onClick={onClick}>
      <span>+</span>
    </button>
  );
}
