interface GradientTransitionProps {
  from: "lime" | "white";
  to: "lime" | "white";
}

export default function GradientTransition({ from, to }: GradientTransitionProps) {
  const getGradientClasses = () => {
    if (from === "lime" && to === "white") {
      return "bg-gradient-to-b from-[#C4FF00] to-white dark:to-slate-900"
    }
    if (from === "white" && to === "lime") {
      return "bg-gradient-to-b from-white dark:from-slate-900 to-[#C4FF00] dark:to-slate-800"
    }
    return ""
  }

  return <div className={`h-32 ${getGradientClasses()}`}></div>
}
