import clsx from 'clsx';
import { IconType } from 'react-icons';

type ButtonProps = {
  text: string;
  onClick: () => void;

  type?: 'button' | 'submit' | 'reset'; // default button
  theme?: 'primary' | 'secondary' | 'neutral'; // default primary
  size?: 'small' | 'medium' | 'large'; // default medium
  disabled?: boolean; // default false
  loading?: boolean; // default false
  Icon?: IconType;
  iconPosition?: 'left' | 'right'; // default left
  className?: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  const {
    text,
    onClick,
    type = 'button',
    theme = 'primary',
    size = 'medium',
    disabled = false,
    loading = false,
    Icon,
    iconPosition,
    className,
  } = props;

  const btnClass = clsx(
    'max-w-[13rem] rounded font-medium transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:opacity-80 active:opacity-100',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50 disabled:active:opacity-50 flex items-center justify-center gap-x-2',
    { 'bg-primary-600 text-white': theme === 'primary' },
    { 'bg-secondary text-white': theme === 'secondary' },
    { 'bg-neutral-200 text-dark': theme === 'neutral' },
    { 'text-sm px-2 py-2': size === 'small' },
    { 'text-base px-6 py-4': size === 'medium' },
    { 'text-lg  px-8 py-4': size === 'large' },
    { 'opacity-50 cursor-not-allowed': disabled },
    { 'opacity-50 cursor-wait': loading },
    className
  );

  return (
    <>
      <button
        className={btnClass}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {Icon && iconPosition === 'left' && <Icon className="h-4" />}

        <span>{text}</span>
        {Icon && iconPosition === 'right' && <Icon className="h-4" />}
      </button>
    </>
  );
};

export default Button;
