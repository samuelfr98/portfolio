
const TitleBar = (theme) => {
  return (
    <div>
      <div className="titleBar">
        <div className="fileName">
          <h1>untitled - Sam Friedman</h1>
        </div>
        <div className="minMaxEsc">
            <button className="minimize">&#95;</button>
            <button className="maximize">&#9633;</button>
            <button className="esc">&times;</button>
        </div>
      </div>
    </div>
  );
}


export default TitleBar;
