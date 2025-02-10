import React from "react";

const WhyDevOps = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Why DevOps?</h1>
      <p>
      In today's fast-paced software development world, DevOps plays a crucial role in ensuring smooth collaboration between development (Dev) and operations (Ops) teams. It bridges the gap between writing code and deploying it efficiently to production.
      </p>

      <div>
        <h1>Key Benefits of DevOps </h1>
        <p>
            <ul>1. Faster Software Delivery
                <li>Automates code integration, testing, and deployment.</li>
                <li>Reduces time-to-market for new features.</li>
            </ul>
            <ul>2. Improved Collaboration
                <li>Breaks down silos between Dev and Ops teams.</li>
                <li>Encourages shared responsibility for code quality and performance.</li>
            </ul>
            <ul>3. Continuous Integration & Continuous Deployment (CI/CD)
                <li>Ensures new code is tested and deployed frequently and reliably.</li>
                <li>Reduces the risk of deployment failures.</li>
            </ul>
            <ul>4. Higher Stability & Reliability
                <li>Real-time monitoring and automated rollback mechanisms.</li>
                <li>Fewer production failures due to frequent updates.</li>
            </ul>
            <ul>5. Better Scalability & Cloud Readiness
                <li>Supports containerization (Docker, Kubernetes).</li>
                <li>Makes applications cloud-native and scalable.</li>
            </ul>
        </p>
      </div>
    </div>
  );
};

export default WhyDevOps;
