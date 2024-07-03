import React from "react";

const EmployeeTracking: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    app: {
      fontFamily: "Arial, sans-serif",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "#ffd700",
      padding: "10px 20px",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    nav: {
      display: "flex",
      alignItems: "center",
    },
    notification: {
      marginRight: "20px",
    },
    support: {
      marginRight: "20px",
    },
    logout: {
      backgroundColor: "#ff0000",
      color: "#ffffff",
      border: "none",
      padding: "5px 10px",
      cursor: "pointer",
    },
    main: {
      display: "flex",
      padding: "20px",
    },
    employeeTracking: {
      flex: 1,
      marginRight: "20px",
    },
    search: {
      display: "flex",
      marginBottom: "20px",
    },
    searchLabel: {
      marginRight: "10px",
    },
    searchInput: {
      marginRight: "10px",
    },
    employeeInfo: {
      marginBottom: "20px",
    },
    employeeTasks: {
      marginBottom: "20px",
    },
    tasksButton: {
      backgroundColor: "#007bff",
      color: "#ffffff",
      border: "none",
      padding: "5px 10px",
      cursor: "pointer",
    },
    trackingDetails: {
      flex: 2,
      display: "flex",
      flexDirection: "column",
    },
    trackingPoints: {
      marginBottom: "20px",
    },
    pointsHeading: {
      marginBottom: "10px",
    },
    pointsList: {
      listStyleType: "none",
      padding: 0,
    },
    pointsListItem: {
      marginBottom: "5px",
    },
    lastPosition: {},
    positionHeading: {
      marginBottom: "10px",
    },
    locationMap: {
      marginBottom: "10px",
    },
    lastLocation: {
      fontWeight: "bold",
    },
  };

  return (
    
      <main style={styles.main}>
        <section style={styles.employeeTracking}>
          <div style={styles.search}>
            <label htmlFor="search" style={styles.searchLabel}>Searching Result:</label>
            <input type="text" id="search" name="search" placeholder="Emp ID / Name" style={styles.searchInput} />
            <button>Search</button>
          </div>
          <div style={styles.employeeInfo}>
            <div>Emp ID: 1412</div>
            <div>Emp Name: Raza</div>
            <div>Designation: Support</div>
            <div>Emp Tag Battery: 80%</div>
            <div>Emp Status: Not at assigned location</div>
            <div>Sensor ID: S21725</div>
            <div>Sensor Status: Active</div>
            <div>Last Update: 25 Feb 2023 10:23:06</div>
          </div>
          <div style={styles.employeeTasks}>
            <div>Employee Designated Tasks:</div>
            <button style={styles.tasksButton}>Detail</button>
          </div>
        </section>
        <section style={styles.trackingDetails}>
          <div style={styles.trackingPoints}>
            <h3 style={styles.pointsHeading}>Employee Tracking Point</h3>
            <ul style={styles.pointsList}>
              <li style={styles.pointsListItem}>Point A ROOM A - 16 Nov 2023 11:23:05</li>
              <li style={styles.pointsListItem}>Point B ROOM B - 16 Nov 2023 11:23:05</li>
              <li style={styles.pointsListItem}>Point C ROOM C - 16 Nov 2023 11:23:05</li>
              <li style={styles.pointsListItem}>Point D ROOM C - 16 Nov 2023 11:23:05</li>
              <li style={styles.pointsListItem}>Point E ROOM C - 16 Nov 2023 11:23:05</li>
              <li style={styles.pointsListItem}>Point F Main Hall - 16 Nov 2023 11:23:05</li>
              <li style={styles.pointsListItem}>Point C WAREHOUSE BGR - 16 Nov 2023 11:23:05</li>
            </ul>
          </div>
          <div style={styles.lastPosition}>
            <h3 style={styles.positionHeading}>Employee Last Position</h3>
            <div style={styles.locationMap}>
              {/* Simplified map structure */}
              <img src="map.png" alt="Employee Last Position" />
            </div>
            <div style={styles.lastLocation}>
              <strong>Last Location:</strong>
              <div>Warehouse BGR</div>
              <div>Near WorkStation 1.3m</div>
            </div>
          </div>
        </section>
      </main>
    
  );
};

export default EmployeeTracking;
