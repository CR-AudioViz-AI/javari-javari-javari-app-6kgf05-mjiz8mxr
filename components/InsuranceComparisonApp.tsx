'use client';

import React, { useState } from 'react';

interface InsurancePlan {
  id: number;
  provider: string;
  coverage: string;
  price: number;
}

const insurancePlans: InsurancePlan[] = [
  { id: 1, provider: 'SafeGuard', coverage: 'Comprehensive', price: 250 },
  { id: 2, provider: 'SecureLife', coverage: 'Third-Party', price: 150 },
  { id: 3, provider: 'InsurePlus', coverage: 'Third-Party, Fire and Theft', price: 200 },
  { id: 4, provider: 'GlobalInsure', coverage: 'Comprehensive', price: 300 },
];

export default function InsuranceComparisonApp() {
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);

  const handleSelectPlan = (id: number) => {
    setSelectedPlanId(id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-center mb-6">Insurance Plan Comparison</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {insurancePlans.map((plan) => (
            <div key={plan.id} className={`p-4 border rounded-lg ${selectedPlanId === plan.id ? 'border-green-500' : 'border-gray-200'} hover:border-green-400 transition-colors`}>
              <h2 className="text-xl font-semibold">{plan.provider}</h2>
              <p className="text-gray-700">{plan.coverage}</p>
              <p className="text-gray-900 font-semibold">$ {plan.price}/year</p>
              <button
                className={`mt-3 w-full text-white font-bold py-2 rounded-lg ${selectedPlanId === plan.id ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-500 hover:bg-blue-600'} transition-colors`}
                onClick={() => handleSelectPlan(plan.id)}
              >
                {selectedPlanId === plan.id ? 'Selected' : 'Select'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}