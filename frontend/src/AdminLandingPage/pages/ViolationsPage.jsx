import { useState } from "react";
import { Filter, Plus, Phone, MapPin, User, AlertTriangle, Calendar } from "lucide-react";

export default function ViolatorsPage() {
  const [activeTab, setActiveTab] = useState("violators");
  const [showAddForm, setShowAddForm] = useState(false);
  const [violators, setViolators] = useState([
    {
      ticketNo: "123456",
      violatorName: "Juan Dela Cruz",
      apprehendingOfficer: "SWAT SPC",
      dateOfApprehension: "Wed, Nov 6 2024",
      confiscatedDl: "Pro",
      address: "JRC",
      typeOfVehicle: "Tricycle (MTC)",
      tricycleFranchiseNo: "7498",
      plateNo: "0000"
    },
    {
      ticketNo: "123457",
      violatorName: "Maria Santos Cruz",
      apprehendingOfficer: "PNP OFFICER",
      dateOfApprehension: "Thu, Nov 7 2024",
      confiscatedDl: "Non-Pro",
      address: "B-12 (PEÑAFRANCIA)",
      typeOfVehicle: "Motorcycle",
      tricycleFranchiseNo: "N/A",
      plateNo: "ABC-1234"
    },
    {
      ticketNo: "123458",
      violatorName: "Carlos Reyes",
      apprehendingOfficer: "MMDA OFFICER",
      dateOfApprehension: "Fri, Nov 8 2024",
      confiscatedDl: "Pro",
      address: "D-8 (LIGAO)",
      typeOfVehicle: "Tricycle (MTC)",
      tricycleFranchiseNo: "7501",
      plateNo: "0001"
    },
    {
      ticketNo: "123459",
      violatorName: "Ana Mendoza Ramos",
      apprehendingOfficer: "TRAFFIC ENFORCER",
      dateOfApprehension: "Sat, Nov 9 2024",
      confiscatedDl: "Student",
      address: "E-3 (TABACO)",
      typeOfVehicle: "Motorcycle",
      tricycleFranchiseNo: "N/A",
      plateNo: "DEF-5678"
    },
    {
      ticketNo: "123460",
      violatorName: "Miguel Torres",
      apprehendingOfficer: "LTO OFFICER",
      dateOfApprehension: "Sun, Nov 10 2024",
      confiscatedDl: "Pro",
      address: "F-7 (CAMALIG)",
      typeOfVehicle: "Tricycle (MTC)",
      tricycleFranchiseNo: "7503",
      plateNo: "0002"
    }
  ]);

  const [formData, setFormData] = useState({
    violatorName: "",
    apprehendingOfficer: "",
    dateOfApprehension: "",
    confiscatedDl: "Pro",
    address: "",
    typeOfVehicle: "Tricycle (MTC)",
    tricycleFranchiseNo: "",
    plateNo: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newViolator = {
      ticketNo: Math.floor(100000 + Math.random() * 900000).toString(),
      ...formData
    };
    setViolators(prev => [...prev, newViolator]);
    setFormData({
      violatorName: "",
      apprehendingOfficer: "",
      dateOfApprehension: "",
      confiscatedDl: "Pro",
      address: "",
      typeOfVehicle: "Tricycle (MTC)",
      tricycleFranchiseNo: "",
      plateNo: ""
    });
    setShowAddForm(false);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Violators Management</h1>
          <p className="text-gray-600 mt-1">Monitor and track traffic violations efficiently</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
        >
          <Plus size={20} />
          Add Violator
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("violators")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "violators"
              ? "bg-blue-900 text-white border-b-2 border-blue-900"
              : "text-gray-600 hover:text-gray-800 hover:bg-blue-50"
          }`}
        >
          Violators
        </button>
        <button
          onClick={() => setActiveTab("resolved")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "resolved"
              ? "bg-blue-900 text-white border-b-2 border-blue-900"
              : "text-gray-600 hover:text-gray-800 hover:bg-blue-50"
          }`}
        >
          Resolved Cases
        </button>
      </div>

      {/* Filter Button */}
      <div className="flex justify-end mb-4">
        <button className="flex items-center gap-2 border border-blue-900 text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-900 hover:text-white transition-colors">
          <Filter size={16} />
          FILTERS
        </button>
      </div>

      {/* Violators Table */}
      {activeTab === "violators" && (
        <div className="overflow-x-auto">
          <div className="bg-blue-900 text-white text-sm font-medium">
            <div className="grid grid-cols-9 gap-4 p-4">
              <div>TICKET NO.</div>
              <div>VIOLATOR'S NAME</div>
              <div>APPREHENDING OFFICER</div>
              <div>DATE OF APPREHENSION</div>
              <div>CONFISCATED D.L</div>
              <div>ADDRESS</div>
              <div>TYPE OF VEHICLE</div>
              <div className="flex items-center gap-1">
                TRICYCLE FRANCHISE NO.
                <span className="text-xs">▼</span>
              </div>
              <div>PLATE NO.</div>
            </div>
          </div>

          <div className="bg-white border border-gray-200">
            {violators.map((violator, index) => (
              <div key={violator.ticketNo} className="grid grid-cols-9 gap-4 p-4 border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <div className="font-medium text-gray-900">{violator.ticketNo}</div>
                <div className="text-gray-700 font-medium">{violator.violatorName}</div>
                <div className="text-gray-700">{violator.apprehendingOfficer}</div>
                <div className="text-gray-700">{violator.dateOfApprehension}</div>
                <div>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                    {violator.confiscatedDl}
                  </span>
                </div>
                <div className="text-gray-700">{violator.address}</div>
                <div className="text-gray-700">{violator.typeOfVehicle}</div>
                <div className="text-gray-700 font-medium">{violator.tricycleFranchiseNo}</div>
                <div className="text-gray-700 font-medium">{violator.plateNo}</div>
              </div>
            ))}
          </div>

          {violators.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <AlertTriangle size={48} className="mx-auto mb-3 text-gray-300" />
              <p className="text-lg font-medium">No violators found</p>
              <p className="text-sm">Add a new violator to get started</p>
            </div>
          )}
        </div>
      )}

      {/* Resolved Cases Placeholder */}
      {activeTab === "resolved" && (
        <div className="text-center py-12 text-gray-500">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
            <span className="text-green-600 text-2xl">✓</span>
          </div>
          <p className="text-lg font-medium">No resolved cases yet</p>
          <p className="text-sm">Resolved violation cases will appear here</p>
        </div>
      )}

      {/* Add Violator Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-3xl mx-4 max-h-screen overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Add New Violator</h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User size={16} className="inline mr-2" />
                    Violator's Name
                  </label>
                  <input
                    type="text"
                    name="violatorName"
                    value={formData.violatorName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Enter violator's full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User size={16} className="inline mr-2" />
                    Apprehending Officer
                  </label>
                  <input
                    type="text"
                    name="apprehendingOfficer"
                    value={formData.apprehendingOfficer}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Enter officer name/unit"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar size={16} className="inline mr-2" />
                    Date of Apprehension
                  </label>
                  <input
                    type="text"
                    name="dateOfApprehension"
                    value={formData.dateOfApprehension}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="e.g., Wed, Nov 6 2024"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confiscated D.L
                  </label>
                  <select
                    name="confiscatedDl"
                    value={formData.confiscatedDl}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  >
                    <option value="Pro">Pro</option>
                    <option value="Non-Pro">Non-Pro</option>
                    <option value="Student">Student</option>
                    <option value="None">None</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin size={16} className="inline mr-2" />
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="Enter complete address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Vehicle
                  </label>
                  <select
                    name="typeOfVehicle"
                    value={formData.typeOfVehicle}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  >
                    <option value="Tricycle (MTC)">Tricycle (MTC)</option>
                    <option value="Motorcycle">Motorcycle</option>
                    <option value="Jeepney">Jeepney</option>
                    <option value="Car">Car</option>
                    <option value="Truck">Truck</option>
                    <option value="Bus">Bus</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tricycle Franchise No.
                  </label>
                  <input
                    type="text"
                    name="tricycleFranchiseNo"
                    value={formData.tricycleFranchiseNo}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Enter franchise number or N/A"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Plate No.
                  </label>
                  <input
                    type="text"
                    name="plateNo"
                    value={formData.plateNo}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Enter plate number"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Add Violator
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}