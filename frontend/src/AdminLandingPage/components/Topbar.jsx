import { Menu, Search, Bell, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function Topbar({ setSidebarOpen }) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="sticky top-0 z-30 h-16 bg-blue-900/95 backdrop-blur-md border-b border-blue-800 px-4 flex items-center justify-between relative">
      <div className="flex items-center gap-2">
        <button onClick={() => setSidebarOpen((v) => !v)} className="lg:hidden p-2 rounded-lg hover:bg-blue-800/50 text-blue-100">
          <Menu className="w-5 h-5" />
        </button>
        <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-800/30 border border-blue-700">
          <Search className="w-4 h-4 text-blue-300" />
          <input placeholder="Search…" className="bg-transparent outline-none text-sm text-blue-100 placeholder:text-blue-300" />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="hidden sm:flex items-center gap-2 text-sm text-blue-200">
          <Clock className="w-4 h-4 text-blue-300" />
          {now.toLocaleTimeString()}
        </div>
        <button className="relative p-2 rounded-lg hover:bg-blue-800/50 text-blue-100">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-0.5 -right-0.5 bg-blue-400 text-blue-900 text-[10px] px-1 rounded">3</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-500" />
          <div className="hidden md:block">
            <div className="text-sm font-semibold text-blue-100">Admin</div>
            <div className="text-xs text-blue-300">ibrilata.dev@gmail.com</div>
          </div>
        </div>
      </div>
    </header>
  );
}