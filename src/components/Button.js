const Button = ({ text, Icon, isActive, disabled }) => {
  const color = disabled ? "gray" : "purple";
  //   bg-purple-600 border-purple-600 text-purple-600
  //   bg-grey-600 border-grey-600 text-grey-600
  return (
    <button
      className={`whitespace-nowrap px-4 py-2 border border-${color}-600 rounded-lg flex items-center space-x-2 ${
        isActive ? "bg-" + color + "-600 text-white" : "text-" + color + "-600"
      }`}
    >
      {Icon && <Icon className={"h-6 w-6"} />}
      {text && <p>{text}</p>}
    </button>
  );
};

export default Button;
