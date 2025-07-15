export default function CheckBox() {
  const [checked, setChecked] = useState(false);

  const handleCheck = ({ target }) => {
    setChecked(!checked);
    handleCheckItem(target.id, target.checked);
  };

  return (
    <label>
      <input
        type='checkbox'
        id={id}
        checked={checked}
        onChange={(e) => handleCheck(e)}
      />
      <span>{text}</span>
    </label>
  );
}
