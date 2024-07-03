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
      alignItems: "center",
      marginBottom: "20px",
    },
    searchLabel: {
      marginRight: "10px",
      fontWeight: "bold",
    },
    searchInput: {
      flex: 1,
      marginRight: "10px",
      padding: "5px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    searchButton: {
      padding: "5px 10px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    employeeInfo: {
      marginBottom: "20px",
    },
    employeeDetail: {
      marginBottom: "5px",
      paddingBottom: "5px",
      borderBottom: "1px solid #eee",
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
      fontWeight: "bold",
    },
    pointsList: {
      listStyleType: "none",
      padding: 0,
    },
    pointsListItem: {
      marginBottom: "5px",
      padding: "5px",
      borderBottom: "1px solid #eee",
    },
    lastPosition: {},
    positionHeading: {
      marginBottom: "10px",
      fontWeight: "bold",
    },
    locationMap: {
      marginBottom: "10px",
    },
    lastLocation: {
      display: "flex",
      alignItems: "center",
    },
    lastLocationText: {
      marginLeft: "10px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div style={styles.logo}>alphatic</div>
        <div style={styles.nav}>
          <div style={styles.notification}>Notification</div>
          <div style={styles.support}>support@alphatic.net</div>
          <button style={styles.logout}>LOGOUT</button>
        </div>
      </header>
      <main style={styles.main}>
        <section style={styles.employeeTracking}>
          <div style={styles.search}>
            <label htmlFor="search" style={styles.searchLabel}>Searching Result:</label>
            <input type="text" id="search" name="search" placeholder="Emp ID / Name" style={styles.searchInput} />
            <button style={styles.searchButton}>Search</button>
          </div>
          <div style={styles.employeeInfo}>
            <div style={styles.employeeDetail}>Emp ID: 1412</div>
            <div style={styles.employeeDetail}>Emp Name: Raza</div>
            <div style={styles.employeeDetail}>Designation: Support</div>
            <div style={styles.employeeDetail}>Emp Tag Battery: 80%</div>
            <div style={styles.employeeDetail}>Emp Status: Not at assigned location</div>
            <div style={styles.employeeDetail}>Sensor ID: S21725</div>
            <div style={styles.employeeDetail}>Sensor Status: Active</div>
            <div style={styles.employeeDetail}>Last Update: 25 Feb 2023 10:23:06</div>
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
              <img src="/src/assets/images/IndustryMap.jpg" alt="Employee Last Position" style={{ width: "100%" }} />
            </div>
            <div style={styles.lastLocation}>
              <img src="warehouse.png" alt="Warehouse" style={{ width: "50px", height: "50px" }} />
              <div style={styles.lastLocationText}>
                <div>Last Location: Warehouse BGR</div>
                <div>Near WorkStation 1.3m</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default  EmployeeTracking ;
