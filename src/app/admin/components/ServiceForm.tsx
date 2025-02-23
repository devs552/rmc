'use client';
import { useState } from "react";

const ServiceForm: React.FC = () => {
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [serviceType, setServiceType] = useState("Residential");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Service Added: ${serviceName}, Type: ${serviceType}`);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Service Name"
          className="w-full p-3 border rounded"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full p-3 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="file"
          className="w-full p-3 border rounded"
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
          required
        />
        <select
          className="w-full p-3 border rounded"
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
        >
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
        </select>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;
