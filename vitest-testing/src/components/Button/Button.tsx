import { ButtonHTMLAttributes } from "react"

type Props = {
  children: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...rest }: Props) => {

  return (
    <button 
      data-testid="button"
      style={{
        width: "100%",
        maxWidth: "380px",
        height: "40px",
        backgroundColor: "#B6E06B",
        color: "#222222"
      }}
      {...rest}
      >
      {children}
    </button>
  )
}

export default Button