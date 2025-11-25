import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AdminNRI = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/nri/all`);
      const data = await res.json();
      setForms(data);
    } catch {
      toast.error("Failed to load");
    }
  };

  const deleteForm = async (id) => {
    try {
      await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/nri/delete/${id}`, {
        method: "DELETE",
      });
      setForms(forms.filter((f) => f._id !== id));
      toast.success("Deleted");
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <div className="bg-white shadow-xl rounded-3xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          NRI Form Submissions
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-teal-600 text-white text-sm">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Full Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">WhatsApp</th>
                <th className="px-4 py-3">Country</th>
                <th className="px-4 py-3">Profession</th>
                <th className="px-4 py-3">NRI Communities</th>
                <th className="px-4 py-3">Promote Nizcare</th>
                <th className="px-4 py-3">Expected Reach</th>
                <th className="px-4 py-3">Delete</th>
              </tr>
            </thead>

            <tbody>
              {forms.map((entry, i) => (
                <tr
                  key={entry._id}
                  className="border-t hover:bg-gray-50 transition text-sm"
                >
                  <td className="px-4 py-3 text-center">{i + 1}</td>
                  <td className="px-4 py-3">{entry.fullName}</td>
                  <td className="px-4 py-3">{entry.email}</td>
                  <td className="px-4 py-3">{entry.whatsapp}</td>
                  <td className="px-4 py-3">{entry.currentCountry}</td>
                  <td className="px-4 py-3">{entry.profession}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-2 py-1 rounded-lg text-white text-xs ${
                        entry.workWithCommunities === "Yes"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {entry.workWithCommunities}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-2 py-1 rounded-lg text-white text-xs ${
                        entry.promoteNizcare === "Yes"
                          ? "bg-blue-500"
                          : "bg-gray-500"
                      }`}
                    >
                      {entry.promoteNizcare}
                    </span>
                  </td>
                  <td className="px-4 py-3">{entry.expectedReach}</td>

                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => deleteForm(entry._id)}
                      className="text-red-600 font-bold hover:text-red-800 transition"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}

              {forms.length === 0 && (
                <tr>
                  <td colSpan="10" className="py-6 text-center text-gray-500">
                    No NRI entries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default AdminNRI;