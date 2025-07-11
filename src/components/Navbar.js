import React from 'react'

export default function Navbar(props) {
  return (
   <>
   <div className="progress-bar" id="progressBar"></div>
    
    <div className="floating-particles" id="particles"></div>

    {/* Navigation Bar */}
    <nav className="navbar navbar-expand-lg">
        <div className="container">
            <a className="navbar-brand" href="#home">
                <i className="fas fa-robot me-2"></i>RoboTech Labs
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="home.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#roadmaps">Roadmaps</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#team">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <section className="hero-section">
        <div className="hero-content">
            <h1 className="hero-title">ROBOTICS ROADMAP</h1>
            <p className="hero-subtitle">Your Complete Guide to Robot Development</p>
            <div className="mt-4">
                <i className="fas fa-robot" style={{fontSize: "3rem", color: "var(--primary-color)"}}></i>
            </div>
        </div>
    </section>

    <div className="container-fluid roadmap-container">
        <div className="roadmap-line"></div>
        
        {/* Step 1: Planning & Requirements */}
        <div className="roadmap-step">
            <div className="step-icon">
                <i className="fas fa-clipboard-list"></i>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="step-content">
                        <span className="skill-level beginner">Beginner</span>
                        <h2 className="step-title">Project Planning & Requirements</h2>
                        <p className="step-description">
                            Define your robot's purpose, establish project scope, and identify all necessary components. This foundational step determines the success of your entire project.
                        </p>
                        
                        <div className="tools-grid">
                            <div className="tool-card">
                                <div className="tool-name">Notion</div>
                                <div className="tool-description">Project management and documentation</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Trello</div>
                                <div className="tool-description">Task organization and workflow</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Miro</div>
                                <div className="tool-description">Mind mapping and brainstorming</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Draw.io</div>
                                <div className="tool-description">System architecture diagrams</div>
                            </div>
                        </div>

                        <h5 className="mt-4 mb-3" style={{color: "var(--primary-color)"}}>Key Resources:</h5>
                        <ul className="resources-list">
                            <li>IEEE Robotics Standards Documentation</li>
                            <li>Robot Operating System (ROS) Planning Guidelines</li>
                            <li>Robotics Project Management Templates</li>
                            <li>Component Selection Guides</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Step 2: Electronics & Components */}
        <div className="roadmap-step">
            <div className="step-icon">
                <i className="fas fa-microchip"></i>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-6">
                    <div className="step-content">
                        <span className="skill-level beginner">Beginner</span>
                        <h2 className="step-title">Electronics & Components</h2>
                        <p className="step-description">
                            Learn about microcontrollers, sensors, actuators, and power systems. Understanding electronics is crucial for building functional robots.
                        </p>
                        
                        <div className="tools-grid">
                            <div className="tool-card">
                                <div className="tool-name">Arduino IDE</div>
                                <div className="tool-description">Programming microcontrollers</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Raspberry Pi</div>
                                <div className="tool-description">Single-board computer platform</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Fritzing</div>
                                <div className="tool-description">Circuit design and prototyping</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">KiCad</div>
                                <div className="tool-description">Professional PCB design</div>
                            </div>
                        </div>

                        <h5 className="mt-4 mb-3" style={{color: "var(--primary-color)"}}>Essential Components:</h5>
                        <ul className="resources-list">
                            <li>Microcontrollers (Arduino Uno, ESP32, Raspberry Pi)</li>
                            <li>Sensors (Ultrasonic, IMU, Camera, Lidar)</li>
                            <li>Actuators (Servo motors, Stepper motors, DC motors)</li>
                            <li>Power Management (Batteries, Voltage regulators)</li>
                            <li>Communication Modules (WiFi, Bluetooth, RF)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Step 3: CAD Modeling */}
        <div className="roadmap-step">
            <div className="step-icon">
                <i className="fas fa-cube"></i>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="step-content">
                        <span className="skill-level intermediate">Intermediate</span>
                        <h2 className="step-title">CAD Modeling & Design</h2>
                        <p className="step-description">
                            Create detailed 3D models of your robot parts. CAD modeling helps visualize designs, test fit, and prepare for manufacturing.
                        </p>
                        
                        <div className="tools-grid">
                            <div className="tool-card">
                                <div className="tool-name">Fusion 360</div>
                                <div className="tool-description">Professional CAD with simulation</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">SolidWorks</div>
                                <div className="tool-description">Industry-standard CAD software</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Onshape</div>
                                <div className="tool-description">Cloud-based CAD platform</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Blender</div>
                                <div className="tool-description">Open-source 3D modeling</div>
                            </div>
                        </div>

                        <h5 className="mt-4 mb-3" style={{color: "var(--primary-color)"}}>Learning Resources:</h5>
                        <ul className="resources-list">
                            <li>Fusion 360 for Robotics Course</li>
                            <li>CAD Fundamentals Online Tutorials</li>
                            <li>3D Printing Design Guidelines</li>
                            <li>Mechanical Design Principles</li>
                            <li>Assembly and Constraint Modeling</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Step 4: Prototyping */}
        <div className="roadmap-step">
            <div className="step-icon">
                <i className="fas fa-hammer"></i>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-6">
                    <div className="step-content">
                        <span className="skill-level intermediate">Intermediate</span>
                        <h2 className="step-title">Prototyping & Manufacturing</h2>
                        <p className="step-description">
                            Transform your designs into physical parts using 3D printing, CNC machining, and other fabrication methods.
                        </p>
                        
                        <div className="tools-grid">
                            <div className="tool-card">
                                <div className="tool-name">3D Printers</div>
                                <div className="tool-description">FDM, SLA, SLS printing</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">CNC Machines</div>
                                <div className="tool-description">Precision machining</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Laser Cutters</div>
                                <div className="tool-description">Sheet material cutting</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Soldering Station</div>
                                <div className="tool-description">Electronics assembly</div>
                            </div>
                        </div>

                        <h5 className="mt-4 mb-3" style={{color: "var(--primary-color)"}}>Manufacturing Options:</h5>
                        <ul className="resources-list">
                            <li>3D Printing Services (Shapeways, Craftcloud)</li>
                            <li>PCB Manufacturing (JLCPCB, PCBWay)</li>
                            <li>CNC Machining Services (Xometry, Protolabs)</li>
                            <li>Local Maker Spaces and Fab Labs</li>
                            <li>University Machine Shops</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Step 5: Programming */}
        <div className="roadmap-step">
            <div className="step-icon">
                <i className="fas fa-code"></i>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="step-content">
                        <span className="skill-level intermediate">Intermediate</span>
                        <h2 className="step-title">Programming & Control</h2>
                        <p className="step-description">
                            Implement control algorithms, sensor integration, and robot behavior. Programming brings your robot to life.
                        </p>
                        
                        <div className="tools-grid">
                            <div className="tool-card">
                                <div className="tool-name">Python</div>
                                <div className="tool-description">High-level robotics programming</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">C++</div>
                                <div className="tool-description">Real-time control systems</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">ROS (Robot Operating System)</div>
                                <div className="tool-description">Robotics middleware framework</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">MATLAB/Simulink</div>
                                <div className="tool-description">Control system design</div>
                            </div>
                        </div>

                        <h5 className="mt-4 mb-3" style={{color: "var(--primary-color)"}}>Programming Topics:</h5>
                        <ul className="resources-list">
                            <li>Sensor Data Processing</li>
                            <li>Motor Control and PWM</li>
                            <li>PID Control Algorithms</li>
                            <li>State Machines and Behaviors</li>
                            <li>Computer Vision (OpenCV)</li>
                            <li>Machine Learning Integration</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Step 6: Debugging */}
        <div className="roadmap-step">
            <div className="step-icon">
                <i className="fas fa-bug"></i>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-6">
                    <div className="step-content">
                        <span className="skill-level advanced">Advanced</span>
                        <h2 className="step-title">Debugging & Optimization</h2>
                        <p className="step-description">
                            Identify and fix issues in both hardware and software. Effective debugging is essential for reliable robot operation.
                        </p>
                        
                        <div className="tools-grid">
                            <div className="tool-card">
                                <div className="tool-name">Oscilloscope</div>
                                <div className="tool-description">Signal analysis and debugging</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Logic Analyzer</div>
                                <div className="tool-description">Digital signal debugging</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Multimeter</div>
                                <div className="tool-description">Basic electrical measurements</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Serial Monitor</div>
                                <div className="tool-description">Software debugging output</div>
                            </div>
                        </div>

                        <h5 className="mt-4 mb-3" style={{color: "var(--primary-color)"}}>Debugging Techniques:</h5>
                        <ul className="resources-list">
                            <li>Systematic Problem Isolation</li>
                            <li>Hardware Signal Tracing</li>
                            <li>Software Print Debugging</li>
                            <li>Performance Profiling</li>
                            <li>Unit Testing Frameworks</li>
                            <li>Version Control Best Practices</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Step 7: Testing */}
        <div className="roadmap-step">
            <div className="step-icon">
                <i className="fas fa-flask"></i>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="step-content">
                        <span className="skill-level advanced">Advanced</span>
                        <h2 className="step-title">Testing & Validation</h2>
                        <p className="step-description">
                            Comprehensive testing ensures your robot performs reliably under various conditions. Validate all requirements systematically.
                        </p>
                        
                        <div className="tools-grid">
                            <div className="tool-card">
                                <div className="tool-name">Gazebo</div>
                                <div className="tool-description">Robot simulation environment</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Unity</div>
                                <div className="tool-description">3D simulation and testing</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">JUnit/pytest</div>
                                <div className="tool-description">Automated testing frameworks</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Load Testing Tools</div>
                                <div className="tool-description">Performance and stress testing</div>
                            </div>
                        </div>

                        <h5 className="mt-4 mb-3" style={{color: "var(--primary-color)"}}>Testing Approaches:</h5>
                        <ul className="resources-list">
                            <li>Unit Testing (Individual Components)</li>
                            <li>Integration Testing (System Level)</li>
                            <li>Performance Testing (Speed, Accuracy)</li>
                            <li>Environmental Testing (Temperature, Humidity)</li>
                            <li>Safety Testing (Fail-safe Mechanisms)</li>
                            <li>User Acceptance Testing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Step 8: Deployment */}
        <div className="roadmap-step">
            <div className="step-icon">
                <i className="fas fa-rocket"></i>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-6">
                    <div className="step-content">
                        <span className="skill-level advanced">Advanced</span>
                        <h2 className="step-title">Deployment & Maintenance</h2>
                        <p className="step-description">
                            Deploy your robot for real-world operation. Plan for ongoing maintenance, updates, and continuous improvement.
                        </p>
                        
                        <div className="tools-grid">
                            <div className="tool-card">
                                <div className="tool-name">Docker</div>
                                <div className="tool-description">Containerized deployment</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Git</div>
                                <div className="tool-description">Version control and updates</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Remote Monitoring</div>
                                <div className="tool-description">System health tracking</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">OTA Updates</div>
                                <div className="tool-description">Over-the-air software updates</div>
                            </div>
                        </div>

                        <h5 className="mt-4 mb-3" style={{color: "var(--primary-color)"}}>Deployment Considerations:</h5>
                        <ul className="resources-list">
                            <li>Production Environment Setup</li>
                            <li>Remote Monitoring Systems</li>
                            <li>Backup and Recovery Plans</li>
                            <li>Documentation and User Manuals</li>
                            <li>Maintenance Schedules</li>
                            <li>Performance Monitoring</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Community & Resources */}
        <div className="roadmap-step">
            <div className="step-icon">
                <i className="fas fa-users"></i>
            </div>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="step-content">
                        <h2 className="step-title">Community & Continuous Learning</h2>
                        <p className="step-description">
                            Join the robotics community, contribute to open-source projects, and keep learning. The field evolves rapidly!
                        </p>
                        
                        <div className="tools-grid">
                            <div className="tool-card">
                                <div className="tool-name">ROS Community</div>
                                <div className="tool-description">Robot Operating System forums</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Arduino Community</div>
                                <div className="tool-description">Maker and electronics forums</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">GitHub</div>
                                <div className="tool-description">Open-source robotics projects</div>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">IEEE Robotics</div>
                                <div className="tool-description">Professional robotics community</div>
                            </div>
                        </div>

                        <h5 className="mt-4 mb-3" style={{color: "var(--primary-color)"}}>Learning Resources:</h5>
                        <ul className="resources-list">
                            <li>Coursera Robotics Specialization</li>
                            <li>edX MITx Robotics Courses</li>
                            <li>YouTube Robotics Channels</li>
                            <li>Robotics Conferences (ICRA, IROS)</li>
                            <li>Local Robotics Meetups</li>
                            <li>Online Competitions (RoboCup, DARPA)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}
