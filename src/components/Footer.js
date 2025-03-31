const Footer = function ({ tasks }) {
  const checked = tasks.filter((task) => task.check).length;
  const numTask = tasks.length;
  const productivity = +checked / +numTask;
  return (
    <div className="footer">
      <span>
        No of task: <span className="state">{numTask} </span>
      </span>
      <span>
        No of task checked: <span className="state">{checked} </span>
      </span>
      <span>
        Productivity :{" "}
        <span className="state">
          {productivity ? Math.round(productivity * 100) : 0}%
        </span>
      </span>
    </div>
  );
};

export default Footer;
