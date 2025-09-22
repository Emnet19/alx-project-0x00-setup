// alx-project-0x00/components/Button.tsx
import React from "react"
import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ title, size = "medium", shape = "rounded-md" }) => {
  // Size classes
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  }

  // Shape classes
  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  }

  return (
    <button
      className={`
        bg-blue-500 text-white font-semibold 
        hover:bg-blue-600 transition 
        ${sizeClasses[size]} ${shapeClasses[shape]}
      `}
    >
      {title}
    </button>
  )
}

export default Button
