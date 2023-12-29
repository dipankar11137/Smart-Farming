import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SolveDisease from './SolveDisease';

const SolveDiseases = () => {
  const [treatments, setTreatments] = useState([]);
  const [treatmentOne, setTreatmentOne] = useState([]);
  const [solveId, setSolveId] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/treatments`)
      .then(res => res.json())
      .then(data => setTreatments(data));
  }, [treatments]);
  const handleClick = id => {
    fetch(`http://localhost:5000/treatmentId/${id}`)
      .then(res => res.json())
      .then(data => setTreatmentOne(data));
  };
  const handleSolveId = id => {
    setSolveId(id);
  };
  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/dTreatment/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = treatments.filter(product => product._id !== id);
          setTreatments(remaining);
          toast.success('Successfully Remove');
        });
    }
  };
  return (
    <div className="pb-[700px] text-white ">
      <h1 className="text-5xl text-center font-bold mb-3 bg-gradient-to-r from-blue-500 to-transparent">
        Solve Diseases
      </h1>
      <div className="mx-20">
        <table className="table w-full text-white text-center">
          {/* head */}
          <thead>
            <tr>
              <th className="bg-green-900">Picture Of Disease</th>
              <th className="bg-green-900">Description</th>
              <th className="bg-green-900">Payment</th>
              <th className="bg-green-900"> Solve Disease</th>
              <th className="bg-green-900"> Remove</th>
            </tr>
          </thead>
          <tbody>
            {treatments.map(treatment => (
              <SolveDisease
                key={treatment._id}
                treatment={treatment}
                handleClick={handleClick}
                treatmentOne={treatmentOne}
                handleSolveId={handleSolveId}
                solveId={solveId}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SolveDiseases;
