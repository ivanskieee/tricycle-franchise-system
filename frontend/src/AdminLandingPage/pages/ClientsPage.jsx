import { useState } from "react";
import { Plus, User, Phone, MapPin, Car, Calendar } from "lucide-react";

export default function ClientsPage() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    // MTOP Information
    mtop: "",
    dateRenewal: "",

    // Owner's Information
    ownerFirstname: "",
    ownerMiddlename: "",
    ownerLastname: "",
    ownerSex: "Male",
    ownerContact: "",
    ownerAddress: "",

    // Driver's Information
    driverFullname: "",
    driverSex: "Male",
    driverContact: "",
    driverAddress: "",
    driverLicenseNo: "",

    // Vehicle's Information
    make: "",
    model: "",
    plateNo: "",
    bodyType: "",
    engineNo: "",
    chassisNo: "",
    stroke: "4-STROKE",
  });

  // Your actual clientsData (trimmed for demo)
  const clientsData = [
    {
      assisNo: "ASSIS-001",
      plateNo: "ABC-1234",
      stroke: "4-STROKE",
      dateRenewal: "2024-12-15",
      remarks: "",
      dateReleaseOfStTp: "2024-01-15",
      compliant: "YES",
    },
    {
      assisNo: "ASSIS-002",
      plateNo: "DEF-5678",
      stroke: "2-STROKE",
      dateRenewal: "2024-11-30",
      remarks: "",
      dateReleaseOfStTp: "2024-02-01",
      compliant: "YES",
    },
    {
      assisNo: "ASSIS-003",
      plateNo: "GHI-9012",
      stroke: "4-STROKE",
      dateRenewal: "2024-10-20",
      remarks: "",
      dateReleaseOfStTp: "2024-03-10",
      compliant: "YES",
    },
    {
      assisNo: "ASSIS-004",
      plateNo: "JKL-3456",
      stroke: "2-STROKE",
      dateRenewal: "2024-12-05",
      remarks: "",
      dateReleaseOfStTp: "2024-04-05",
      compliant: "YES",
    },
    {
      assisNo: "ASSIS-005",
      plateNo: "MNO-7890",
      stroke: "4-STROKE",
      dateRenewal: "2024-09-15",
      remarks: "UNREGISTERED VEHICLE",
      dateReleaseOfStTp: "2024-05-15",
      compliant: "NO",
    },
    {
      assisNo: "ASSIS-006",
      plateNo: "PQR-2468",
      stroke: "2-STROKE",
      dateRenewal: "2024-11-10",
      remarks: "",
      dateReleaseOfStTp: "2024-06-10",
      compliant: "YES",
    },
    {
      assisNo: "ASSIS-007",
      plateNo: "STU-1357",
      stroke: "4-STROKE",
      dateRenewal: "2024-08-25",
      remarks: "",
      dateReleaseOfStTp: "2024-07-25",
      compliant: "YES",
    },
    {
      assisNo: "ASSIS-008",
      plateNo: "VWX-9753",
      stroke: "2-STROKE",
      dateRenewal: "2024-12-01",
      remarks: "",
      dateReleaseOfStTp: "2024-08-01",
      compliant: "YES",
    },
    {
      assisNo: "ASSIS-009",
      plateNo: "YZA-8642",
      stroke: "4-STROKE",
      dateRenewal: "2024-10-30",
      remarks: "",
      dateReleaseOfStTp: "2024-09-30",
      compliant: "YES",
    },
    {
      assisNo: "ASSIS-010",
      plateNo: "BCD-5319",
      stroke: "2-STROKE",
      dateRenewal: "2024-11-20",
      remarks: "",
      dateReleaseOfStTp: "2024-10-20",
      compliant: "YES",
    },
     {
      assisNo: "ASSIS-004",
      plateNo: "JKL-3456",
      stroke: "2-STROKE",
      dateRenewal: "2024-12-05",
      remarks: "",
      dateReleaseOfStTp: "2024-04-05",
      compliant: "YES",
    },
    {
      assisNo: "ASSIS-005",
      plateNo: "MNO-7890",
      stroke: "4-STROKE",
      dateRenewal: "2024-09-15",
      remarks: "UNREGISTERED VEHICLE",
      dateReleaseOfStTp: "2024-05-15",
      compliant: "NO",
    },
    {
      assisNo: "ASSIS-006",
      plateNo: "PQR-2468",
      stroke: "2-STROKE",
      dateRenewal: "2024-11-10",
      remarks: "",
      dateReleaseOfStTp: "2024-06-10",
      compliant: "YES",
    },
    {
      assisNo: "ASSIS-007",
      plateNo: "STU-1357",
      stroke: "4-STROKE",
      dateRenewal: "2024-08-25",
      remarks: "",
      dateReleaseOfStTp: "2024-07-25",
      compliant: "YES",
    },
    {
      assisNo: "ASSIS-008",
      plateNo: "VWX-9753",
      stroke: "2-STROKE",
      dateRenewal: "2024-12-01",
      remarks: "",
      dateReleaseOfStTp: "2024-08-01",
      compliant: "YES",
    },
    {
      assisNo: "ASSIS-009",
      plateNo: "YZA-8642",
      stroke: "4-STROKE",
      dateRenewal: "2024-10-30",
      remarks: "",
      dateReleaseOfStTp: "2024-09-30",
      compliant: "YES",
    },
    {
      assisNo: "ASSIS-010",
      plateNo: "BCD-5319",
      stroke: "2-STROKE",
      dateRenewal: "2024-11-20",
      remarks: "",
      dateReleaseOfStTp: "2024-10-20",
      compliant: "YES",
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setShowModal(false);
    // Reset form
    setFormData({
      mtop: "",
      dateRenewal: "",
      ownerFirstname: "",
      ownerMiddlename: "",
      ownerLastname: "",
      ownerSex: "Male",
      ownerContact: "",
      ownerAddress: "",
      driverFullname: "",
      driverSex: "Male",
      driverContact: "",
      driverAddress: "",
      driverLicenseNo: "",
      make: "",
      model: "",
      plateNo: "",
      bodyType: "",
      engineNo: "",
      chassisNo: "",
      stroke: "4-STROKE",
    });
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Clients Management
          </h1>
          <p className="text-gray-600 mt-1">
            Manage client records and their status
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
        >
          <Plus size={20} />
          Add Client
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Assistance No.
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Plate No.
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Stroke
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Date Renewal
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Remarks
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Compliance
              </th>
            </tr>
          </thead>
          <tbody>
            {clientsData.map((client) => (
              <tr key={client.assisNo} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 text-sm">{client.assisNo}</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-800">
                  {client.plateNo}
                </td>
                <td className="px-4 py-3 text-sm">{client.stroke}</td>
                <td className="px-4 py-3 text-sm">{client.dateRenewal}</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {client.remarks || "—"}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      client.compliant === "YES"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {client.compliant}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-600">
          Showing {rowsPerPage} of {clientsData.length} entries
        </p>
        <select
          value={rowsPerPage}
          onChange={(e) => setRowsPerPage(Number(e.target.value))}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value={10}>10 rows</option>
          <option value={20}>20 rows</option>
          <option value={30}>30 rows</option>
        </select>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-4xl mx-4 max-h-screen overflow-y-auto shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">Add New Client</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* MTOP Information */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <Calendar size={20} className="mr-2" />
                  MTOP Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      MTOP Number *
                    </label>
                    <select
                      value={formData.mtop}
                      onChange={(e) => handleInputChange("mtop", e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    >
                      <option value="">Select MTOP</option>
                      <option value="0493">0493</option>
                      <option value="0494">0494</option>
                      <option value="0495">0495</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date Renewal *
                    </label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleInputChange("dateRenewal", getTodayDate())
                        }
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded hover:bg-blue-200 transition-colors"
                      >
                        TODAY
                      </button>
                      <input
                        type="date"
                        value={formData.dateRenewal}
                        onChange={(e) =>
                          handleInputChange("dateRenewal", e.target.value)
                        }
                        required
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Owner's Information */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <User size={20} className="mr-2" />
                  Owner's Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.ownerFirstname}
                      onChange={(e) =>
                        handleInputChange("ownerFirstname", e.target.value)
                      }
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="JUAN"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      value={formData.ownerMiddlename}
                      onChange={(e) =>
                        handleInputChange("ownerMiddlename", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="DELA"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.ownerLastname}
                      onChange={(e) =>
                        handleInputChange("ownerLastname", e.target.value)
                      }
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="CRUZ"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sex
                    </label>
                    <select
                      value={formData.ownerSex}
                      onChange={(e) =>
                        handleInputChange("ownerSex", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone size={16} className="inline mr-1" />
                      Contact No. *
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        +63
                      </span>
                      <input
                        type="tel"
                        value={formData.ownerContact}
                        onChange={(e) =>
                          handleInputChange("ownerContact", e.target.value)
                        }
                        required
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        placeholder="987 654 3210"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin size={16} className="inline mr-1" />
                      Address *
                    </label>
                    <input
                      type="text"
                      value={formData.ownerAddress}
                      onChange={(e) =>
                        handleInputChange("ownerAddress", e.target.value)
                      }
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="VI-D (PARKERS)"
                    />
                  </div>
                </div>
              </div>

              {/* Driver's Information */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <User size={20} className="mr-2" />
                  Driver's Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.driverFullname}
                      onChange={(e) =>
                        handleInputChange("driverFullname", e.target.value)
                      }
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="JUAN DELA CRUZ"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sex
                    </label>
                    <select
                      value={formData.driverSex}
                      onChange={(e) =>
                        handleInputChange("driverSex", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone size={16} className="inline mr-1" />
                      Contact No. *
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        +63
                      </span>
                      <input
                        type="tel"
                        value={formData.driverContact}
                        onChange={(e) =>
                          handleInputChange("driverContact", e.target.value)
                        }
                        required
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        placeholder="987 654 3210"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin size={16} className="inline mr-1" />
                      Address *
                    </label>
                    <input
                      type="text"
                      value={formData.driverAddress}
                      onChange={(e) =>
                        handleInputChange("driverAddress", e.target.value)
                      }
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="I-A (SAMBAT)"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Driver's License No.
                  </label>
                  <input
                    type="text"
                    value={formData.driverLicenseNo}
                    onChange={(e) =>
                      handleInputChange("driverLicenseNo", e.target.value)
                    }
                    className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
              </div>

              {/* Vehicle's Information */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <Car size={20} className="mr-2" />
                  Vehicle's Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Make *
                    </label>
                    <input
                      type="text"
                      value={formData.make}
                      onChange={(e) =>
                        handleInputChange("make", e.target.value)
                      }
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="ARISTOTLE"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Model *
                    </label>
                    <input
                      type="text"
                      value={formData.model}
                      onChange={(e) =>
                        handleInputChange("model", e.target.value)
                      }
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="2010"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Plate No. *
                    </label>
                    <input
                      type="text"
                      value={formData.plateNo}
                      onChange={(e) =>
                        handleInputChange("plateNo", e.target.value)
                      }
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="12309"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Body Type *
                    </label>
                    <input
                      type="text"
                      value={formData.bodyType}
                      onChange={(e) =>
                        handleInputChange("bodyType", e.target.value)
                      }
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="TRICYCLE"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Engine No. *
                    </label>
                    <input
                      type="text"
                      value={formData.engineNo}
                      onChange={(e) =>
                        handleInputChange("engineNo", e.target.value)
                      }
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="123H123456"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Chassis No. *
                    </label>
                    <input
                      type="text"
                      value={formData.chassisNo}
                      onChange={(e) =>
                        handleInputChange("chassisNo", e.target.value)
                      }
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="123H123456"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stroke *
                  </label>
                  <select
                    value={formData.stroke}
                    onChange={(e) =>
                      handleInputChange("stroke", e.target.value)
                    }
                    required
                    className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  >
                    <option value="4-STROKE">4-STROKE</option>
                    <option value="2-STROKE">2-STROKE</option>
                  </select>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Add Client
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}