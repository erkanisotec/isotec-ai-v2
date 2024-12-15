export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-medium mb-2">Total Users</h3>
          <p className="text-2xl font-bold">1,234</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-medium mb-2">Active Projects</h3>
          <p className="text-2xl font-bold">56</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-medium mb-2">Tasks Completed</h3>
          <p className="text-2xl font-bold">892</p>
        </div>
      </div>
    </div>
  );
}