const ProgressBar = ({ percentage }) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;