import React from "react";
import {
  ShieldCheck,
  Users,
  Mail,
  Activity,
  LogOut,
  Bell,
  Search,
  Settings,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  UserPlus,
} from "lucide-react";

const StatCard = ({ icon: Icon, label, value, sub }) => (
  <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div className="p-3 rounded-xl bg-indigo-50">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <span className="text-xs font-semibold text-gray-500">{sub}</span>
    </div>
    <div className="mt-4">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
    </div>
  </div>
);

const QuickAction = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-between w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
  >
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-indigo-50">
        <Icon className="h-5 w-5 text-indigo-600" />
      </div>
      {label}
    </div>
    <ArrowRight className="h-4 w-4 text-gray-400" />
  </button>
);

const ActivityItem = ({ icon: Icon, title, time, tone = "ok" }) => {
  const toneMap = {
    ok: "text-green-600 bg-green-50",
    warn: "text-amber-600 bg-amber-50",
    info: "text-indigo-600 bg-indigo-50",
  };
  return (
    <div className="flex items-start gap-3">
      <div className={`p-2 rounded-lg ${toneMap[tone]}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-800">{title}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  // Dummy data (replace with real API data)
  const stats = [
    { icon: Users, label: "Total Donors", value: "1,248", sub: "+4.3% this week" },
    { icon: Mail, label: "New Messages", value: "32", sub: "5 unread" },
    { icon: ShieldCheck, label: "Pending Approvals", value: "7", sub: "2 high-priority" },
    { icon: Activity, label: "System Health", value: "99.9%", sub: "All services" },
  ];

  const recent = [
    { name: "Ayesha Khan", email: "ayesha@example.com", status: "Approved", date: "Aug 27" },
    { name: "Bilal Ahmed", email: "bilal@example.com", status: "Pending", date: "Aug 27" },
    { name: "Sara Malik", email: "sara@example.com", status: "Rejected", date: "Aug 26" },
    { name: "Hassan Raza", email: "hassan@example.com", status: "Approved", date: "Aug 26" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Top Bar */}
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-indigo-600">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Admin Panel</p>
                <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-2 rounded-xl border bg-white px-3 py-2">
                <Search className="h-4 w-4 text-gray-400" />
                <input
                  className="outline-none text-sm bg-transparent placeholder:text-gray-400"
                  placeholder="Search…"
                />
              </div>
              <button className="p-2 rounded-xl border bg-white hover:bg-gray-50">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-xl border bg-white hover:bg-gray-50">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-xl border bg-white hover:bg-gray-50">
                <LogOut className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <StatCard key={i} icon={s.icon} label={s.label} value={s.value} sub={s.sub} />
          ))}
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Recent table */}
          <div className="lg:col-span-2 rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-base font-semibold text-gray-900">Recent Registrations</h2>
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                View all
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="px-5 py-3">Name</th>
                    <th className="px-5 py-3">Email</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recent.map((r, i) => (
                    <tr key={i} className="border-b last:border-0 hover:bg-gray-50">
                      <td className="px-5 py-3 font-medium text-gray-800">{r.name}</td>
                      <td className="px-5 py-3 text-gray-600">{r.email}</td>
                      <td className="px-5 py-3">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold
                          ${
                            r.status === "Approved"
                              ? "bg-green-100 text-green-700"
                              : r.status === "Pending"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-rose-100 text-rose-700"
                          }`}
                        >
                          {r.status === "Approved" && <CheckCircle2 className="h-3.5 w-3.5" />}
                          {r.status === "Pending" && <AlertTriangle className="h-3.5 w-3.5" />}
                          {r.status === "Rejected" && <AlertTriangle className="h-3.5 w-3.5" />}
                          {r.status}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-gray-600">{r.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Quick actions + activity */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <QuickAction icon={UserPlus} label="Create New Admin" onClick={() => {}} />
                <QuickAction icon={Users} label="View Donor List" onClick={() => {}} />
                <QuickAction icon={Mail} label="Open Messages" onClick={() => {}} />
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <ActivityItem icon={UserPlus} title="New donor registered" time="2 hours ago" tone="info" />
                <ActivityItem icon={CheckCircle2} title="Admin approved 3 requests" time="Yesterday" tone="ok" />
                <ActivityItem icon={AlertTriangle} title="2 pending verifications" time="2 days ago" tone="warn" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Admin Panel — All activities are monitored for security.
        </p>
      </main>
    </div>
  );
};

export default AdminDashboard;
