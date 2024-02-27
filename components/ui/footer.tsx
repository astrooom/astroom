export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="p-4">
      <p className="text-xs text-neutral-200">
        &copy; {currentYear} AB Buddleja. All rights reserved.
      </p>
    </div>
  )
}
