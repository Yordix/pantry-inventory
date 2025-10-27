import { useScan } from "../services/ScannerContext/ScanContext";

const Dashboard = () => {

    const { lastScan } = useScan();

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">
                Dashboard
            </h2>
            <p>Welcome to your Dashboard</p>
            {lastScan && (
                <div className="mt-4 border rounded p-3 bg-white">
                    <div className="text-sm text-gray-600">Last scanned code:</div>
                    <div className="font-mono text-lg">{lastScan}</div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;