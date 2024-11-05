import React, { useState, useEffect } from 'react';
import MaintenanceRequestForm from './components/MaintenanceRequestForm';
import ServiceScheduler from './components/ServiceScheduler';
import CostTracker from './components/CostTracker';
import VehiclePerformanceReport from './components/VehiclePerformanceReport';

const App = () => {
  const [requests, setRequests] = useState([]);
  const [scheduledServices, setScheduledServices] = useState([]);
  const [costs, setCosts] = useState([]);

  const addRequest = (request) => setRequests([...requests, request]);
  const scheduleService = (service) => setScheduledServices([...scheduledServices, service]);
  const trackCost = (cost) => setCosts([...costs, cost]);

  return (
    <div>
      <h1>Fleet Maintenance System</h1>
      <MaintenanceRequestForm onAddRequest={addRequest} />
      <ServiceScheduler onScheduleService={scheduleService} />
      <CostTracker costs={costs} onAddCost={trackCost} />
      <VehiclePerformanceReport requests={requests} costs={costs} scheduledServices={scheduledServices} />
    </div>
  );
};

export default App;
