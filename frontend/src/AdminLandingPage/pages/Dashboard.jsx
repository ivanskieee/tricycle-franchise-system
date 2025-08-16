import { useEffect, useState } from "react";
import axios from "axios";
import StatCard from "../components/StatCard";
import {
  Users,
  CheckCircle,
  AlertCircle,
  FileWarning,
  Filter,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const fallback = {
  franchiseOverview: [
    { day: "Mon", added: 6, renewed: 2, revoked: 1 },
    { day: "Tue", added: 25, renewed: 8, revoked: 0 },
    { day: "Wed", added: 12, renewed: 10, revoked: 4 },
    { day: "Thu", added: 5, renewed: 1, revoked: 0 },
    { day: "Fri", added: 9, renewed: 4, revoked: 2 },
    { day: "Sat", added: 7, renewed: 2, revoked: 1 },
    { day: "Today", added: 11, renewed: 6, revoked: 1 },
  ],
  registeredClients: 7499,
  availableFranchises: 1,
  recentlyAdded: 0,
  recentlyRevoked: 0,
  violatorsPie: [
    { name: "Registered", value: 56 },
    { name: "Unregistered", value: 44 },
  ],
  officers: [
    { callsign: "001", fullname: "PNP SPC", apprehended: 261 },
    { callsign: "302", fullname: "JOEL ZABALA", apprehended: 247 },
    { callsign: "317", fullname: "FERNANDO CANON", apprehended: 229 },
    { callsign: "636", fullname: "EMERSON ARROGANIA", apprehended: 203 },
    { callsign: "411", fullname: "JAY AR AREVALO", apprehended: 140 },
    { callsign: "304", fullname: "ABNER MANALO", apprehended: 98 },
  ],
  totals: { totalViolators: 1524, recentlyPaid: 0 },
};

export default function Dashboard() {
  const [data, setData] = useState(fallback);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/stats");
        if (alive && res?.data) setData(res.data);
      } catch {
        // fallback until backend is ready
      }
    })();
    return () => (alive = false);
  }, []);

  const COLORS = ["#4f46e5", "#94a3b8"]; // indigo + slate

  return (
    <div className="space-y-6">
      {/* Top stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Registered Clients"
          value={data.registeredClients}
          subtitle="San Pablo City"
          icon={<Users />}
          tone="indigo"
        />
        <StatCard
          title="Available Franchises"
          value={data.availableFranchises}
          subtitle="ready to assign"
          icon={<CheckCircle />}
          tone="emerald"
        />
        <StatCard
          title="Recently Added"
          value={data.recentlyAdded}
          subtitle="this week"
          icon={<Users />}
          tone="sky"
        />
        <StatCard
          title="Recently Revoked"
          value={data.recentlyRevoked}
          subtitle="this week"
          icon={<AlertCircle />}
          tone="violet"
        />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Franchise Overview */}
        <div className="lg:col-span-2 bg-white/95 border rounded-2xl shadow p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Franchise Overview</h2>
            <div className="flex gap-1 text-xs text-gray-500">
              <span className="px-2 py-1 rounded-md bg-gray-100">DAY</span>
              <span className="px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer">WEEK</span>
              <span className="px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer">MONTH</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.franchiseOverview}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="added" stackId="a" fill="#4f46e5" />
                <Bar dataKey="renewed" stackId="a" fill="#10b981" />
                <Bar dataKey="revoked" stackId="a" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Violators Overview */}
        <div className="bg-white/95 border rounded-2xl shadow p-5">
          <h2 className="font-semibold text-gray-800 mb-4">Violators Overview</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.violatorsPie}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  label
                >
                  {data.violatorsPie.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Total Violators:{" "}
            <span className="font-semibold text-gray-700">
              {data.totals.totalViolators}
            </span>{" "}
            • Recently Paid: {data.totals.recentlyPaid}
          </div>
        </div>
      </div>

      {/* Officers table */}
      <div className="bg-white/95 border rounded-2xl shadow p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">Apprehending Officers</h2>
          <button className="flex items-center gap-2 text-sm px-3 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>
        <div className="overflow-auto rounded-xl border">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left p-3">CALL SIGN</th>
                <th className="text-left p-3">FULLNAME</th>
                <th className="text-left p-3">APPREHENDED</th>
              </tr>
            </thead>
            <tbody>
              {data.officers.map((o, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  <td className="p-3 font-mono">{o.callsign}</td>
                  <td className="p-3">{o.fullname}</td>
                  <td className="p-3">{o.apprehended} violators</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 text-xs text-gray-500 flex items-center gap-2">
          <FileWarning className="w-4 h-4 text-amber-500" />
          Data shown is sample; connected API will replace this.
        </div>
      </div>
    </div>
  );
}
