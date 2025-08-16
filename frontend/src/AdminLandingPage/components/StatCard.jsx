export default function StatCard({ title, value, subtitle, icon, tone = "indigo" }) {
  const toneMap = {
    sky: "from-sky-500 to-indigo-600",
    indigo: "from-indigo-600 to-sky-500",
    emerald: "from-emerald-500 to-teal-500",
    violet: "from-violet-600 to-indigo-600",
  };

  return (
    <div className="bg-white/95 border border-white/20 rounded-2xl shadow-lg p-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm text-gray-500">{title}</h3>
          <div className="text-3xl font-bold text-gray-900 mt-1">{value}</div>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className={`p-3 rounded-xl text-white bg-gradient-to-br ${toneMap[tone]}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}
