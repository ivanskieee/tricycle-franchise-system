import { useState } from "react";
import { Filter, Plus, Phone, MapPin, User, Mail } from "lucide-react";

export default function FranchisePage() {
  const [activeTab, setActiveTab] = useState("pending");
  const [showAddForm, setShowAddForm] = useState(false);
  const [pendingFranchises, setPendingFranchises] = useState([
    {
      refNo: "156832",
      transaction: "Franchise Renewal",
      mtop: "7498",
      lastname: "CRUT",
      firstname: "JUAN",
      mi: "DELA",
      address: "J-A (SAMBAT)",
      contactNo: "+63-63 907 654 3210"
    },
    {
      refNo: "156833",
      transaction: "New Franchise",
      mtop: "7499",
      lastname: "SANTOS",
      firstname: "MARIA",
      mi: "CRUZ",
      address: "B-12 (PEÑAFRANCIA)",
      contactNo: "+63-63 908 123 4567"
    },
    {
      refNo: "156835",
      transaction: "Franchise Renewal",
      mtop: "7501",
      lastname: "REYES",
      firstname: "ANA",
      mi: "DELA",
      address: "D-8 (LIGAO)",
      contactNo: "+63-63 910 345 6789"
    },
    {
      refNo: "156836",
      transaction: "Franchise Update",
      mtop: "7502",
      lastname: "MENDOZA",
      firstname: "CARLOS",
      mi: "RAMOS",
      address: "E-3 (TABACO)",
      contactNo: "+63-63 911 456 7890"
    },
    {
      refNo: "156837",
      transaction: "New Franchise",
      mtop: "7503",
      lastname: "TORRES",
      firstname: "JOSEFA",
      mi: "CRUZ",
      address: "F-7 (CAMALIG)",
      contactNo: "+63-63 912 567 8901"
    },
    {
      refNo: "156838",
      transaction: "Franchise Renewal",
      mtop: "7504",
      lastname: "FLORES",
      firstname: "MIGUEL",
      mi: "SANTOS",
      address: "G-4 (GUINOBATAN)",
      contactNo: "+63-63 913 678 9012"
    },
    {
      refNo: "156840",
      transaction: "New Franchise",
      mtop: "7506",
      lastname: "CRUZ",
      firstname: "ANTONIO",
      mi: "REYES",
      address: "I-6 (OAS)",
      contactNo: "+63-63 915 890 1234"
    },
    {
      refNo: "156841",
      transaction: "Franchise Update",
      mtop: "7507",
      lastname: "MORALES",
      firstname: "ELENA",
      mi: "TORRES",
      address: "J-2 (BACACAY)",
      contactNo: "+63-63 916 901 2345"
    },
    {
      refNo: "156842",
      transaction: "Franchise Renewal",
      mtop: "7508",
      lastname: "JIMENEZ",
      firstname: "RICARDO",
      mi: "FLORES",
      address: "K-11 (MALILIPOT)",
      contactNo: "+63-63 917 012 3456"
    },
    {
      refNo: "156843",
      transaction: "New Franchise",
      mtop: "7509",
      lastname: "HERRERA",
      firstname: "CARMEN",
      mi: "VALDEZ",
      address: "L-8 (TIWI)",
      contactNo: "+63-63 918 123 4567"
    },
    {
      refNo: "156845",
      transaction: "Franchise Renewal",
      mtop: "7511",
      lastname: "RIVERA",
      firstname: "LUCIA",
      mi: "MORALES",
      address: "N-3 (SANTO DOMINGO)",
      contactNo: "+63-63 920 345 6789"
    },
    {
      refNo: "156846",
      transaction: "Franchise Update",
      mtop: "7512",
      lastname: "GONZALEZ",
      firstname: "PABLO",
      mi: "JIMENEZ",
      address: "O-7 (RAPU-RAPU)",
      contactNo: "+63-63 921 456 7890"
    }
  ]);

  const [formData, setFormData] = useState({
    mtop: "",
    lastname: "",
    firstname: "",
    mi: "",
    address: "",
    contactNo: "",
    transaction: "Franchise Renewal"
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
    const newFranchise = {
      refNo: Math.floor(100000 + Math.random() * 900000).toString(),
      ...formData
    };
    setPendingFranchises(prev => [...prev, newFranchise]);
    setFormData({
      mtop: "",
      lastname: "",
      firstname: "",
      mi: "",
      address: "",
      contactNo: "",
      transaction: "Franchise Renewal"
    });
    setShowAddForm(false);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Franchise Management</h1>
          <p className="text-gray-600 mt-1">Efficiently monitor franchise status and details</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
        >
          <Plus size={20} />
          Add Franchise
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("pending")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "pending"
              ? "bg-blue-900 text-white border-b-2 border-blue-900"
              : "text-gray-600 hover:text-gray-800 hover:bg-blue-50"
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setActiveTab("paid")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "paid"
              ? "bg-blue-900 text-white border-b-2 border-blue-900"
              : "text-gray-600 hover:text-gray-800 hover:bg-blue-50"
          }`}
        >
          Paid List
        </button>
      </div>

      {/* Filter Button */}
      <div className="flex justify-end mb-4">
        <button className="flex items-center gap-2 border border-blue-900 text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-900 hover:text-white transition-colors">
          <Filter size={16} />
          FILTERS
        </button>
      </div>

      {/* Pending Franchises Table */}
      {activeTab === "pending" && (
        <div className="overflow-x-auto">
          <div className="bg-blue-900 text-white text-sm font-medium">
            <div className="grid grid-cols-8 gap-4 p-4">
              <div>Ref No.</div>
              <div>TRANSACTION</div>
              <div className="flex items-center gap-1">
                MTOP
                <span className="text-xs">▼</span>
              </div>
              <div>LASTNAME</div>
              <div>FIRSTNAME</div>
              <div>MI</div>
              <div>ADDRESS</div>
              <div>CONTACT NO.</div>
            </div>
          </div>

          <div className="bg-white border border-gray-200">
            {pendingFranchises.map((franchise, index) => (
              <div key={franchise.refNo} className="grid grid-cols-8 gap-4 p-4 border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <div className="font-medium text-gray-900">{franchise.refNo}</div>
                <div>
                  <span className="bg-blue-900 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {franchise.transaction}
                  </span>
                </div>
                <div className="text-gray-700">{franchise.mtop}</div>
                <div className="text-gray-700 font-medium">{franchise.lastname}</div>
                <div className="text-gray-700">{franchise.firstname}</div>
                <div className="text-gray-700">{franchise.mi}</div>
                <div className="text-gray-700">{franchise.address}</div>
                <div className="text-gray-700">{franchise.contactNo}</div>
              </div>
            ))}
          </div>

          {pendingFranchises.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <User size={48} className="mx-auto mb-3 text-gray-300" />
              <p className="text-lg font-medium">No pending franchises</p>
              <p className="text-sm">Add a new franchise to get started</p>
            </div>
          )}
        </div>
      )}

      {/* Paid List Placeholder */}
      {activeTab === "paid" && (
        <div className="text-center py-12 text-gray-500">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
            <span className="text-green-600 text-2xl">✓</span>
          </div>
          <p className="text-lg font-medium">No paid franchises yet</p>
          <p className="text-sm">Approved franchises will appear here</p>
        </div>
      )}

      {/* Add Franchise Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl mx-4 max-h-screen overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Add New Franchise</h2>
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
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Enter last name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User size={16} className="inline mr-2" />
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Enter first name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Middle Initial
                  </label>
                  <input
                    type="text"
                    name="mi"
                    value={formData.mi}
                    onChange={handleInputChange}
                    maxLength="10"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="M.I."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    MTOP Number
                  </label>
                  <input
                    type="text"
                    name="mtop"
                    value={formData.mtop}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Enter MTOP number"
                  />
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone size={16} className="inline mr-2" />
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="+63-XX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Transaction Type
                </label>
                <select
                  name="transaction"
                  value={formData.transaction}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                >
                  <option value="Franchise Renewal">Franchise Renewal</option>
                  <option value="New Franchise">New Franchise</option>
                  <option value="Transfer of Ownership">Transfer of Ownership</option>
                  <option value="Franchise Update">Franchise Update</option>
                </select>
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
                  Add Franchise
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}