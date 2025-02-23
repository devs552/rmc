'use client';
import { useState } from "react";

type Service = {
  id: number;
  name: string;
  description: string;
  type: string;
  image: string;
};

const dummyServices: Service[] = [
  { id: 1, name: "Driveway Lifting", description: "Fix uneven driveways.", type: "Residential", image: "/placeholder.jpg" },
  { id: 2, name: "Sidewalk Leveling", description: "Level sunken sidewalks.", type: "Commercial", image: "/placeholder.jpg" }
];

const ServiceTable: React.FC = () => {
  const [services, setServices] = useState<Service[]>(dummyServices);

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">All Services</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Image</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id} className="text-center">
              <td className="border p-2">{service.name}</td>
              <td className="border p-2">{service.description}</td>
              <td className="border p-2">{service.type}</td>
              <td className="border p-2">
                <img src={service.image} alt={service.name} className="w-16 h-16 object-cover rounded" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceTable;
