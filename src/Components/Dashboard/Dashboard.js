import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Card, Button, Dropdown, Modal } from "react-bootstrap";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js"; 
import "./Dashboard.css";

// Register the components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const Dashboard = () => {
  const [selectedMetric, setSelectedMetric] = useState("gamePopularity");
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  // Sample data for different KPIs
  const gamePopularityData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Game Popularity",
        data: [50, 70, 90, 80, 100],
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };

  const userEngagementData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "User Engagement",
        data: [30, 40, 50, 60, 70],
        borderColor: "rgba(153, 102, 255, 1)",
        fill: false,
      },
    ],
  };

  const sharingStatisticsData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Sharing Statistics",
        data: [20, 35, 45, 60, 80],
        borderColor: "rgba(255, 159, 64, 1)",
        fill: false,
      },
    ],
  };

  const retentionRateData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "User Retention Rate",
        data: [50, 55, 60, 65, 75],
        borderColor: "rgba(255,99,132,1)",
        fill: false,
      },
    ],
  };

  // Data selection logic based on the selected metric
  const getChartData = () => {
    switch (selectedMetric) {
      case "gamePopularity":
        return gamePopularityData;
      case "userEngagement":
        return userEngagementData;
      case "sharingStatistics":
        return sharingStatisticsData;
      case "retentionRate":
        return retentionRateData;
      default:
        return gamePopularityData;
    }
  };

  // Handle custom modal display
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Analytics Dashboard</h2>
      <div className="dashboard-filters">
        <Dropdown onSelect={(e) => setSelectedMetric(e)}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedMetric.replace(/([A-Z])/g, " $1")}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="gamePopularity">Game Popularity</Dropdown.Item>
            <Dropdown.Item eventKey="userEngagement">User Engagement</Dropdown.Item>
            <Dropdown.Item eventKey="sharingStatistics">Sharing Statistics</Dropdown.Item>
            <Dropdown.Item eventKey="retentionRate">User Retention Rate</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="dashboard-cards">
        {/* Selected Metric Chart */}
        <Card className="dashboard-card">
          <Card.Body>
            <Card.Title>{selectedMetric.replace(/([A-Z])/g, " $1")}</Card.Title>
            <Line data={getChartData()} options={{ responsive: true }} />
          </Card.Body>
        </Card>

        {/* Customize View Button */}
        <div className="customization-buttons">
          <Button variant="primary" onClick={handleModalShow} className="customize-btn">
            Customize Dashboard
          </Button>
        </div>
      </div>

      {/* Modal for customizing view */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Customize Dashboard</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Here you can adjust the settings for your dashboard (e.g., change chart types, data metrics).</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;
