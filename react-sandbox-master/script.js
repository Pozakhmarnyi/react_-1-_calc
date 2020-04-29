// React Template

// ================================================ JSX ==========================================================

function Displey() {
  return <div className="display">Displey !!1 </div>;
}

// function Button(props) {
//   return <button className="button ">{props.text}</button>;
// }

function Button(props) {
  let buttonClass = "button";
  if (props.big) buttonClass += " button--big";
  if (props.betterLook) buttonClass += " button--betterLook";
  if (props.color == "orange") buttonClass += " button--orange";
  if (props.color == "grey") buttonClass += " button--grey";
  return <button className={buttonClass}>{props.value}</button>;
}

// Маємо скласти все в купу і можна виводити в HTML
let page = (
  <div className="container">
    <Displey />
    <div className="conteinerForBotton">
      <Button value="AC" color="grey" betterLook="true" />
      <Button value="+/-" color="grey" betterLook="true" />
      <Button value="%" color="grey" betterLook="true" />
      <Button value="/" color="orange" betterLook="true" />
      <Button value="7" />
      <Button value="8" />
      <Button value="9" />
      <Button value="x" color="orange" betterLook="true" />
      <Button value="4" />
      <Button value="5" />
      <Button value="6" />
      <Button value="-" color="orange" betterLook="true" />
      <Button value="1" />
      <Button value="2" />
      <Button value="3" />
      <Button value="+" color="orange" betterLook="true" />
      <Button value="0" big="true" />
      <Button value="," betterLook="true" />
      <Button value="=" color="orange" betterLook="true" />
    </div>
  </div>
);

// ================================================ Render ==========================================================

ReactDOM.render(page, document.getElementById("root"));
