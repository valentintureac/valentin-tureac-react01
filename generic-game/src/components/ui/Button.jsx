const skins = {
  primary:
    'bg-green-500 inline-block text-center py-2 px-4 text-white rounded hover:bg-green-700',
  primaryInverted:
    'border border-green-500 text-green-500 inline-block text-center py-2 px-4 rounded hover:bg-green-700 hover:text-white',
  danger:
    'bg-red-500 inline-block text-center py-2 px-4 text-white rounded hover:bg-red-700',
  dangerInverted:
    'border border-red-500 text-red-500 inline-block text-center py-2 px-4 rounded hover:bg-red-700 hover:text-white',
};

export const Button = (props) => {
  const {
    skin = Object.keys(skins)[0],
    children,
    element = 'button',
    className = '',
    ...otherProps
  } = props;

  const cssClasses = `${className} ${skins[skin]}`;
  const Element = element;

  return (
    <Element className={cssClasses} {...otherProps}>
      {children}
    </Element>
  );
};

export default Button;
