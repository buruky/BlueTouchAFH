import logo from "../assets/logo.png"

export default function Logo({ className = "h-9 w-9" }) {
  return (
    <img
      src={logo}
      alt="Blue Touch logo"
      className={`${className} object-contain`}
    />
  )
}
