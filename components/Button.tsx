import clsx from 'clsx';
import { IconType } from 'react-icons';
import Link from "next/link";

type ButtonProps = {
  text?: string;
  onClick?: (_e?: any) => void;

  type?: 'button' | 'submit' | 'reset'; // default button
  theme?: 'primary' | 'secondary' | 'neutral'; // default primary
  size?: 'small' | 'medium' | 'large'; // default medium
  disabled?: boolean; // default false
  loading?: boolean; // default false
  outline?: boolean; // default false
  onlyText?: boolean; // default false
  Icon?: IconType;
  iconPosition?: 'left' | 'right'; // default left
  className?: string;
  iconClassName?: string;
  link?: string;
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
    outline,
    onlyText,
    iconPosition,
    className,
    iconClassName,
  } = props;

  const btnClass = clsx(
    'max-w-[18rem] rounded font-medium transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:opacity-80 active:opacity-100',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50 disabled:active:opacity-50 flex items-center justify-center gap-x-2',
    {
      'bg-primary-600 text-white': !onlyText && !outline && theme === 'primary',
    },
    {
      'bg-white text-neutral-600':
        !onlyText && !outline && theme === 'secondary',
    },
    {
      'bg-neutral-200 text-dark': !onlyText && !outline && theme === 'neutral',
    },
    { 'text-base px-2 py-2': size === 'small' },
    { 'text-xl px-6 py-4': size === 'medium' },
    { 'text-2xl  px-8 py-4': size === 'large' },
    { 'opacity-50 cursor-not-allowed': disabled },
    { 'opacity-50 cursor-wait': loading },
    { 'border border-primary-600': outline && theme === 'primary' },
    { 'border border-secondary': outline && theme === 'secondary' },
    { 'border border-neutral-200': outline && theme === 'neutral' },
    {
      'bg-transparent text-primary-600 hover:shadow-lg':
        onlyText && theme === 'primary',
    },
    { 'bg-transparent text-secondary': onlyText && theme === 'secondary' },
    { 'bg-transparent text-neutral-200': onlyText && theme === 'neutral' },
    { 'gap-x-4': !!Icon },

    className
  );

  if (props.link) {
    return (
      <Link
        href={props.link}
        className={btnClass + ' group'}
      >
        {Icon && iconPosition === 'left' && (
            <Icon className={iconClassName ? ' ' + iconClassName : 'h-6 w-8'} />
        )}

        {text && <span>{text}</span>}
        {Icon && iconPosition === 'right' && (
            <Icon className={iconClassName ? ' ' + iconClassName : 'h-6 w-8'} />
        )}
      </Link>
    );
  }

  return (
    <>
      <button
        className={btnClass}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {Icon && iconPosition === 'left' && (
          <Icon className={iconClassName ? ' ' + iconClassName : 'h-6 w-8'} />
        )}

        {text && <span>{text}</span>}
        {Icon && iconPosition === 'right' && (
          <Icon className={iconClassName ? ' ' + iconClassName : 'h-6 w-8'} />
        )}
      </button>
    </>
  );
};

export default Button;
