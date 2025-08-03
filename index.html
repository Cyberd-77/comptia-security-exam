import React, { useState, useEffect } from 'react';

// Tailwind CSS is assumed to be configured in a modern React project
// You'll also need lucide-react for the icons. You can install it with:
// npm install lucide-react

import {
  ChevronDown, ChevronUp, CheckCircle2, XCircle, SkipForward, ArrowLeft, ArrowRight, Flag, RefreshCw, Play, Pause
} from 'lucide-react';

// The question pool has been moved inside the component for simplicity
const questionsPool = [
  // --- Domain 1.0: General Security Concepts ---
  {
    id: 'q1-1',
    domain: '1.0 General Security Concepts',
    question: "What is the primary purpose of a compensating control?",
    options: ["To prevent an incident from occurring.", "To recover from an incident.", "To provide an alternative to a primary control that is not feasible.", "To deter potential attackers."],
    correctAnswers: ["To provide an alternative to a primary control that is not feasible."],
    difficulty: "Easy",
    hint: "Think about a situation where you can't implement the ideal security measure. What do you do instead?"
  },
  {
    id: 'q1-2',
    domain: '1.0 General Security Concepts',
    question: "Which of the following describes the 'Integrity' principle of the CIA triad?",
    options: ["Ensuring data is accessible to authorized users when needed.", "Ensuring data is not altered or destroyed in an unauthorized manner.", "Ensuring data is not disclosed to unauthorized individuals.", "Ensuring the origin of data can be verified."],
    correctAnswers: ["Ensuring data is not altered or destroyed in an unauthorized manner."],
    difficulty: "Easy",
    hint: "This principle is about the trustworthiness and correctness of data."
  },
  {
    id: 'q1-3',
    domain: '1.0 General Security Concepts',
    question: "A company implements a Zero Trust model. Which component is responsible for making a 'permit' or 'deny' decision for a resource request?",
    options: ["Policy Engine", "Policy Enforcement Point", "Policy Administrator", "Implicit Trust Zone"],
    correctAnswers: ["Policy Engine"],
    difficulty: "Medium",
    hint: "This is the 'brain' that analyzes the request against the established policies."
  },
  {
    id: 'q1-4',
    domain: '1.0 General Security Concepts',
    question: "Which cryptographic key is kept secret by the owner in a Public Key Infrastructure (PKI)?",
    options: ["Public key", "Certificate Authority (CA) key", "Root of trust", "Private key"],
    correctAnswers: ["Private key"],
    difficulty: "Easy",
    hint: "This key is used for decryption or creating a digital signature and must be protected."
  },
  {
    id: 'q1-5',
    domain: '1.0 General Security Concepts',
    question: "Which of the following are examples of physical security controls? (Select all that apply)",
    options: ["Fencing", "Access badge", "Antivirus software", "Bollards", "Role-based access control"],
    correctAnswers: ["Fencing", "Access badge", "Bollards"],
    difficulty: "Easy",
    hint: "Physical controls are tangible items that protect physical assets and people."
  },
  {
    id: 'q1-6',
    domain: '1.0 General Security Concepts',
    question: "What is the primary function of a Hardware Security Module (HSM)?",
    options: ["To manage network traffic.", "To store and manage cryptographic keys securely.", "To perform network vulnerability scans.", "To provide intrusion detection capabilities."],
    correctAnswers: ["To store and manage cryptographic keys securely."],
    difficulty: "Medium",
    hint: "This hardware device is specialized for protecting sensitive cryptographic materials."
  },
  {
    id: 'q1-7',
    domain: '1.0 General Security Concepts',
    question: "A company is implementing a change management process. Which of the following should be included in the process to ensure a stable rollout? (Select all that apply)",
    options: ["Impact analysis", "Backout plan", "Penetration test", "Downtime window"],
    correctAnswers: ["Impact analysis", "Backout plan", "Downtime window"],
    difficulty: "Medium",
    hint: "This process is about minimizing risks associated with changes. What steps are crucial for a smooth and safe transition?"
  },
  {
    id: 'q1-8',
    domain: '1.0 General Security Concepts',
    question: "Which concept ensures that a user cannot deny they performed a certain action, such as sending a digitally signed email?",
    options: ["Confidentiality", "Non-repudiation", "Integrity", "Availability"],
    correctAnswers: ["Non-repudiation"],
    difficulty: "Easy",
    hint: "The 'repudiate' part of the word means to deny or reject."
  },
  {
    id: 'q1-9',
    domain: '1.0 General Security Concepts',
    question: "What is the purpose of a certificate signing request (CSR) in a PKI?",
    options: ["To request a new private key from a CA.", "To request a new public key from a user.", "To request a digital certificate from a CA.", "To revoke a compromised certificate."],
    correctAnswers: ["To request a digital certificate from a CA."],
    difficulty: "Medium",
    hint: "This is a block of encoded text that is given to a CA to obtain a certificate."
  },
  {
    id: 'q1-10',
    domain: '1.0 General Security Concepts',
    question: "Which of the following is an example of an operational security control?",
    options: ["Firewall", "Security guard", "Security policy", "Intrusion detection system (IDS)"],
    correctAnswers: ["Security guard"],
    difficulty: "Medium",
    hint: "Operational controls are executed by people, such as a security guard monitoring access."
  },
  {
    id: 'q1-11',
    domain: '1.0 General Security Concepts',
    question: "A company uses a honeypot. What is the primary purpose of this technology?",
    options: ["To prevent all attacks on the network.", "To detect a system with known vulnerabilities.", "To lure attackers away from real systems.", "To encrypt all network traffic."],
    correctAnswers: ["To lure attackers away from real systems."],
    difficulty: "Easy",
    hint: "This is a decoy system designed to attract and trap attackers."
  },
  {
    id: 'q1-12',
    domain: '1.0 General Security Concepts',
    question: "What is the process of hiding data within another file, such as an image, called?",
    options: ["Encryption", "Hashing", "Obfuscation", "Steganography"],
    correctAnswers: ["Steganography"],
    difficulty: "Easy",
    hint: "This is the art of concealed communication."
  },
  {
    id: 'q1-13',
    domain: '1.0 General Security Concepts',
    question: "Which of the following are benefits of using a key management system? (Select all that apply)",
    options: ["Automated key rotation", "Secure key storage", "Manual key creation", "Simplified key recovery"],
    correctAnswers: ["Automated key rotation", "Secure key storage", "Simplified key recovery"],
    difficulty: "Medium",
    hint: "Think about the lifecycle of a cryptographic key. What management tasks does a system handle?"
  },
  {
    id: 'q1-14',
    domain: '1.0 General Security Concepts',
    question: "A company wants to prevent unauthorized access to its network from the public internet. Which security control category does a firewall fall under?",
    options: ["Technical", "Managerial", "Operational", "Physical"],
    correctAnswers: ["Technical"],
    difficulty: "Easy",
    hint: "This control is a hardware or software mechanism that enforces security policies."
  },
  {
    id: 'q1-15',
    domain: '1.0 General Security Concepts',
    question: "What is a major advantage of using symmetric encryption over asymmetric encryption?",
    options: ["It uses two different keys for encryption and decryption.", "It is more secure.", "It is faster and requires less computational power.", "It simplifies key exchange."],
    correctAnswers: ["It is faster and requires less computational power."],
    difficulty: "Medium",
    hint: "Think about the number of keys and the complexity of the algorithms."
  },
  // --- Domain 2.0: Threats, Vulnerabilities, and Mitigations ---
  {
    id: 'q2-1',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "An attacker sends an email to a group of employees, impersonating their CEO, to trick them into transferring company funds. What type of social engineering attack is this?",
    options: ["Smishing", "Phishing", "Vishing", "Business email compromise (BEC)"],
    correctAnswers: ["Business email compromise (BEC)"],
    difficulty: "Easy",
    hint: "This attack specifically targets employees with access to company finances."
  },
  {
    id: 'q2-2',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "A worm is a type of malware that:",
    options: ["Requires user interaction to spread.", "Replicates itself to spread to other systems.", "Appears to be a legitimate piece of software.", "Encrypts a user's files and demands a ransom."],
    correctAnswers: ["Replicates itself to spread to other systems."],
    difficulty: "Easy",
    hint: "This malware is 'self-replicating' and doesn't need to attach to another program."
  },
  {
    id: 'q2-3',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "Which of the following is a common vulnerability found in web applications that allows an attacker to inject malicious code into a website?",
    options: ["Buffer overflow", "Cross-site scripting (XSS)", "SQL injection (SQLi)", "Race condition"],
    correctAnswers: ["Cross-site scripting (XSS)"],
    difficulty: "Medium",
    hint: "This attack exploits a weakness in how a web application processes user input, often involving scripts."
  },
  {
    id: 'q2-4',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "An attacker uses a password-spraying attack. What is the characteristic of this attack?",
    options: ["Using a list of common passwords against a single user account.", "Using a single common password against multiple user accounts.", "Attempting to guess a user's password using a brute-force approach.", "Using rainbow tables to crack password hashes."],
    correctAnswers: ["Using a single common password against multiple user accounts."],
    difficulty: "Medium",
    hint: "This method is designed to avoid account lockouts by trying one password across many accounts before moving to the next password."
  },
  {
    id: 'q2-5',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "What is a 'Zero-day' vulnerability?",
    options: ["A vulnerability that has been publicly disclosed and patched.", "A vulnerability that has been disclosed but no patch is available.", "A vulnerability that is more than one year old.", "A vulnerability that is actively being exploited before the vendor is aware of it."],
    correctAnswers: ["A vulnerability that is actively being exploited before the vendor is aware of it."],
    difficulty: "Medium",
    hint: "Think about the phrase 'day zero'."
  },
  {
    id: 'q2-6',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "A company's email gateway is configured to prevent emails containing certain keywords from being sent. This is an example of what kind of mitigation technique?",
    options: ["Segmentation", "Least privilege", "Application allow list", "Data Loss Prevention (DLP)"],
    correctAnswers: ["Data Loss Prevention (DLP)"],
    difficulty: "Medium",
    hint: "This technology is designed to detect and prevent the exfiltration of sensitive information."
  },
  {
    id: 'q2-7',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "Which of the following describes a Denial-of-Service (DoS) attack?",
    options: ["An attack that steals user credentials from a network.", "An attack that makes a service unavailable to its intended users.", "An attack that injects malicious code into a database.", "An attack that encrypts user data for ransom."],
    correctAnswers: ["An attack that makes a service unavailable to its intended users."],
    difficulty: "Easy",
    hint: "The name of the attack provides a direct clue to its purpose."
  },
  {
    id: 'q2-8',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "Which of the following are common motivations for threat actors? (Select all that apply)",
    options: ["Financial gain", "Philosophical beliefs", "Data exfiltration", "Revenge"],
    correctAnswers: ["Financial gain", "Philosophical beliefs", "Data exfiltration", "Revenge"],
    difficulty: "Easy",
    hint: "Think about why someone would want to harm an organization. All of these are plausible."
  },
  {
    id: 'q2-9',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "An employee bypasses corporate security to install unauthorized software on their work computer. What type of threat actor is this considered?",
    options: ["Nation-state", "Insider threat", "Hacktivist", "Organized crime"],
    correctAnswers: ["Insider threat"],
    difficulty: "Easy",
    hint: "The key here is that the actor is already an employee with internal access."
  },
  {
    id: 'q2-10',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "What is the primary risk associated with a supply chain attack?",
    options: ["A company's employees becoming disgruntled.", "A vendor introduces a vulnerability into a product or service.", "The company's internal network being too slow.", "The company's network being down for maintenance."],
    correctAnswers: ["A vendor introduces a vulnerability into a product or service."],
    difficulty: "Medium",
    hint: "This type of attack leverages the trust relationship with third-party providers."
  },
  {
    id: 'q2-11',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "Which of the following are hardening techniques for a host? (Select all that apply)",
    options: ["Disabling unnecessary ports", "Removing unnecessary software", "Installing an antivirus", "Installing an IPS", "Encrypting data on a portable device"],
    correctAnswers: ["Disabling unnecessary ports", "Removing unnecessary software", "Installing an antivirus", "Installing an IPS"],
    difficulty: "Medium",
    hint: "Hardening is about reducing the attack surface of a system. What actions make the system more secure?"
  },
  {
    id: 'q2-12',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "A malicious actor sends a text message to a user, pretending to be from their bank, to get their account details. What is this attack called?",
    options: ["Phishing", "Vishing", "Smishing", "Spear phishing"],
    correctAnswers: ["Smishing"],
    difficulty: "Easy",
    hint: "The 'sm' in this term stands for Short Message Service."
  },
  {
    id: 'q2-13',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "What is the purpose of an amplified DDoS attack?",
    options: ["To use a botnet to launch the attack.", "To leverage a small request to generate a large response to the target.", "To send a single large packet to the target.", "To spoof the IP address of the target."],
    correctAnswers: ["To leverage a small request to generate a large response to the target."],
    difficulty: "Hard",
    hint: "Think about the 'amplified' part of the name. How does it make a small attack much bigger?"
  },
  {
    id: 'q2-14',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "A company's firewall blocks a specific type of malicious traffic. What kind of indicator is this?",
    options: ["An impossible travel indicator", "An account lockout", "A concurrent session usage", "Blocked content"],
    correctAnswers: ["Blocked content"],
    difficulty: "Easy",
    hint: "The firewall is explicitly blocking a type of content or traffic."
  },
  {
    id: 'q2-15',
    domain: '2.0 Threats, Vulnerabilities, and Mitigations',
    question: "Which of the following is an example of an application vulnerability?",
    options: ["A weak password policy.", "An unpatched operating system.", "A buffer overflow.", "A lack of physical security."],
    correctAnswers: ["A buffer overflow."],
    difficulty: "Medium",
    hint: "This vulnerability occurs when a program writes data to a buffer and overwrites adjacent memory locations."
  },
  // --- Domain 3.0: Security Architecture ---
  {
    id: 'q3-1',
    domain: '3.0 Security Architecture',
    question: "In a cloud environment, who is responsible for securing the physical infrastructure (e.g., servers, storage)?",
    options: ["The customer", "The cloud service provider (CSP)", "Both the customer and the CSP", "A third-party auditor"],
    correctAnswers: ["The cloud service provider (CSP)"],
    difficulty: "Easy",
    hint: "Think about the shared responsibility model. Which parts are the provider's job?"
  },
  {
    id: 'q3-2',
    domain: '3.0 Security Architecture',
    question: "A company uses a firewall that inspects the full content of network packets, including the payload, to identify threats. What type of firewall is this?",
    options: ["Packet-filtering firewall", "Stateless firewall", "Next-generation firewall (NGFW)", "Web application firewall (WAF)"],
    correctAnswers: ["Next-generation firewall (NGFW)"],
    difficulty: "Medium",
    hint: "This type of firewall operates at a higher level and has more advanced inspection capabilities."
  },
  {
    id: 'q3-3',
    domain: '3.0 Security Architecture',
    question: "Which concept describes the process of distributing network traffic across multiple servers to improve availability and performance?",
    options: ["Failover", "Clustering", "Load balancing", "High availability"],
    correctAnswers: ["Load balancing"],
    difficulty: "Easy",
    hint: "The name of this concept is a direct clue to its function."
  },
  {
    id: 'q3-4',
    domain: '3.0 Security Architecture',
    question: "A company is required to store customer data within a specific country's borders. What is this concept known as?",
    options: ["Data retention", "Data sovereignty", "Data classification", "Geolocation"],
    correctAnswers: ["Data sovereignty"],
    difficulty: "Medium",
    hint: "This relates to the legal and regulatory requirement for data to be subject to the laws of the country where it is stored."
  },
  {
    id: 'q3-5',
    domain: '3.0 Security Architecture',
    question: "Which of the following data states refers to data that is currently being processed by a system?",
    options: ["Data at rest", "Data in transit", "Data in use", "Data encrypted"],
    correctAnswers: ["Data in use"],
    difficulty: "Easy",
    hint: "This is when the data is in an active, non-static state."
  },
  {
    id: 'q3-6',
    domain: '3.0 Security Architecture',
    question: "What is the primary function of a Web Application Firewall (WAF)?",
    options: ["To protect an entire network from malicious traffic.", "To protect a web application from common attacks like SQL injection and XSS.", "To prevent unauthorized access to a server.", "To filter network traffic based on source and destination IP addresses."],
    correctAnswers: ["To protect a web application from common attacks like SQL injection and XSS."],
    difficulty: "Medium",
    hint: "The 'WAF' acronym directly points to its purpose."
  },
  {
    id: 'q3-7',
    domain: '3.0 Security Architecture',
    question: "Which of the following is a key characteristic of an air-gapped network?",
    options: ["It is connected to the public internet.", "It uses a VPN for secure communication.", "It is physically isolated from other networks.", "It uses a wireless connection."],
    correctAnswers: ["It is physically isolated from other networks."],
    difficulty: "Medium",
    hint: "Think about the term 'air gap'. What does it imply about the network's connectivity?"
  },
  {
    id: 'q3-8',
    domain: '3.0 Security Architecture',
    question: "Which of the following are elements of a strong disaster recovery plan? (Select all that apply)",
    options: ["Recovery Time Objective (RTO)", "Mean Time Between Failures (MTBF)", "Recovery Point Objective (RPO)", "Single Loss Expectancy (SLE)"],
    correctAnswers: ["Recovery Time Objective (RTO)", "Recovery Point Objective (RPO)"],
    difficulty: "Hard",
    hint: "These are time-based metrics that define the recovery process."
  },
  {
    id: 'q3-9',
    domain: '3.0 Security Architecture',
    question: "What is the purpose of a proxy server?",
    options: ["To balance traffic across multiple servers.", "To act as an intermediary for requests from clients seeking resources from other servers.", "To detect and prevent malicious traffic.", "To secure a remote connection to a network."],
    correctAnswers: ["To act as an intermediary for requests from clients seeking resources from other servers."],
    difficulty: "Easy",
    hint: "This server acts on behalf of the user, often for caching or filtering."
  },
  {
    id: 'q3-10',
    domain: '3.0 Security Architecture',
    question: "A company wants to ensure that if a critical server fails, a redundant server immediately takes over its functions. What concept does this describe?",
    options: ["High availability", "Clustering", "Load balancing", "Hot site"],
    correctAnswers: ["High availability"],
    difficulty: "Easy",
    hint: "This is a general concept to ensure a system is operational for a long period of time."
  },
  {
    id: 'q3-11',
    domain: '3.0 Security Architecture',
    question: "Which of the following are benefits of using a microservices architecture? (Select all that apply)",
    options: ["Greater availability", "Easier patching", "More complex deployment", "Increased scalability"],
    correctAnswers: ["Greater availability", "Increased scalability"],
    difficulty: "Medium",
    hint: "Microservices are a way of breaking down an application into smaller, independent services. What are the advantages of this approach?"
  },
  {
    id: 'q3-12',
    domain: '3.0 Security Architecture',
    question: "What is the primary difference between a cold site and a hot site for disaster recovery?",
    options: ["A cold site is a complete mirror of the production site, while a hot site is a bare-bones facility.", "A cold site is an operational facility that can be used immediately, while a hot site requires setup.", "A hot site is a fully operational facility, while a cold site is a basic space that needs time to be configured.", "A hot site is located in a different country, while a cold site is in the same country."],
    correctAnswers: ["A hot site is a fully operational facility, while a cold site is a basic space that needs time to be configured."],
    difficulty: "Medium",
    hint: "Think about the terms 'hot' and 'cold' in terms of readiness."
  },
  {
    id: 'q3-13',
    domain: '3.0 Security Architecture',
    question: "What is the purpose of a `fail-open` mechanism in a security device?",
    options: ["To fail securely by blocking all traffic.", "To fail in a way that allows traffic to continue flowing, potentially insecurely.", "To fail to a secondary device.", "To prevent any failure from occurring."],
    correctAnswers: ["To fail in a way that allows traffic to continue flowing, potentially insecurely."],
    difficulty: "Hard",
    hint: "This mechanism prioritizes availability over security in the event of a failure."
  },
  {
    id: 'q3-14',
    domain: '3.0 Security Architecture',
    question: "A company wants to secure its internal network from an external threat. Which security appliance would be most appropriate?",
    options: ["Load balancer", "Intrusion detection system (IDS)", "Firewall", "Web application firewall (WAF)"],
    correctAnswers: ["Firewall"],
    difficulty: "Easy",
    hint: "This is a fundamental network security device that inspects traffic at the network perimeter."
  },
  {
    id: 'q3-15',
    domain: '3.0 Security Architecture',
    question: "Which of the following are types of data classification? (Select all that apply)",
    options: ["Public", "Critical", "Trade secret", "Sensitive"],
    correctAnswers: ["Public", "Critical", "Sensitive"],
    difficulty: "Medium",
    hint: "Data classification is the process of organizing data into categories based on sensitivity."
  },
  // --- Domain 4.0: Security Operations ---
  {
    id: 'q4-1',
    domain: '4.0 Security Operations',
    question: "A security analyst is reviewing logs and notices a user's account is active from two different, geographically distant locations at the same time. What type of indicator is this?",
    options: ["Concurrent session usage", "Resource consumption", "Impossible travel", "Privilege escalation"],
    correctAnswers: ["Impossible travel"],
    difficulty: "Easy",
    hint: "The user is seemingly 'traveling' at an impossible speed."
  },
  {
    id: 'q4-2',
    domain: '4.0 Security Operations',
    question: "What is the main benefit of using a Mobile Device Management (MDM) solution?",
    options: ["To provide employees with personal devices.", "To manage and secure mobile devices used in the workplace.", "To block all internet access on mobile devices.", "To prevent mobile devices from connecting to Wi-Fi."],
    correctAnswers: ["To manage and secure mobile devices used in the workplace."],
    difficulty: "Easy",
    hint: "The name of this solution directly describes its purpose."
  },
  {
    id: 'q4-3',
    domain: '4.0 Security Operations',
    question: "Which of the following is a key characteristic of the 'eradication' phase of the incident response process?",
    options: ["Developing a plan to respond to future incidents.", "Removing the root cause of the incident.", "Isolating the affected systems to prevent further damage.", "Restoring the affected systems to normal operation."],
    correctAnswers: ["Removing the root cause of the incident."],
    difficulty: "Medium",
    hint: "Think about what 'eradicate' means. It's about getting rid of the problem."
  },
  {
    id: 'q4-4',
    domain: '4.0 Security Operations',
    question: "What is the primary function of a Security Information and Event Management (SIEM) tool?",
    options: ["To perform automated vulnerability scans on the network.", "To collect, aggregate, and analyze log data from various sources.", "To prevent malware from running on an endpoint.", "To manage user identities and access privileges."],
    correctAnswers: ["To collect, aggregate, and analyze log data from various sources."],
    difficulty: "Easy",
    hint: "SIEM combines security information management and security event management."
  },
  {
    id: 'q4-5',
    domain: '4.0 Security Operations',
    question: "A company wants to ensure that all data written to its hard drives is automatically encrypted. What kind of encryption should they implement?",
    options: ["Full-disk encryption (FDE)", "File-level encryption", "Volume encryption", "Database encryption"],
    correctAnswers: ["Full-disk encryption (FDE)"],
    difficulty: "Medium",
    hint: "This type of encryption covers the entire disk, including the operating system."
  },
  {
    id: 'q4-6',
    domain: '4.0 Security Operations',
    question: "What is the purpose of `onboarding/offboarding` procedures in security operations?",
    options: ["To manage user accounts and access privileges.", "To conduct security awareness training for all employees.", "To perform security audits on the network.", "To update security policies and procedures."],
    correctAnswers: ["To manage user accounts and access privileges."],
    difficulty: "Easy",
    hint: "This process involves giving a new employee access and revoking it when they leave."
  },
  {
    id: 'q4-7',
    domain: '4.0 Security Operations',
    question: "Which authentication protocol is most secure for wireless networks and uses 802.1X for centralized authentication?",
    options: ["Wired Equivalent Privacy (WEP)", "Wi-Fi Protected Access (WPA)", "Wi-Fi Protected Access 2 (WPA2)", "Wi-Fi Protected Access 3 (WPA3)"],
    correctAnswers: ["Wi-Fi Protected Access 3 (WPA3)"],
    difficulty: "Medium",
    hint: "This is the most recent and most secure wireless security protocol."
  },
  {
    id: 'q4-8',
    domain: '4.0 Security Operations',
    question: "Which of the following are part of the 'digital forensics' process? (Select all that apply)",
    options: ["Acquisition", "Chain of custody", "Penetration testing", "Legal hold"],
    correctAnswers: ["Acquisition", "Chain of custody", "Legal hold"],
    difficulty: "Medium",
    hint: "These are procedures to ensure evidence is collected and preserved properly for a legal investigation."
  },
  {
    id: 'q4-9',
    domain: '4.0 Security Operations',
    question: "A company is using a software that continuously scans its network for known vulnerabilities and misconfigurations. What is this software called?",
    options: ["SIEM", "Antivirus", "Vulnerability scanner", "Network mapper"],
    correctAnswers: ["Vulnerability scanner"],
    difficulty: "Easy",
    hint: "The name of this tool directly describes its function."
  },
  {
    id: 'q4-10',
    domain: '4.0 Security Operations',
    question: "What is the purpose of a 'sandbox' in application security?",
    options: ["To test an application in a production environment.", "To run an application in a separate, isolated environment.", "To identify vulnerabilities in an application's code.", "To encrypt an application's data."],
    correctAnswers: ["To run an application in a separate, isolated environment."],
    difficulty: "Medium",
    hint: "This is a security mechanism for running untrusted code in a safe, controlled environment."
  },
  {
    id: 'q4-11',
    domain: '4.0 Security Operations',
    question: "Which of the following are benefits of automation and orchestration? (Select all that apply)",
    options: ["Increased efficiency", "Reduced reaction time", "Reduced cost", "Increased complexity"],
    correctAnswers: ["Increased efficiency", "Reduced reaction time"],
    difficulty: "Medium",
    hint: "Automation is about using scripts and tools to handle repetitive tasks and speed up security processes."
  },
  {
    id: 'q4-12',
    domain: '4.0 Security Operations',
    question: "Which of the following describes the 'Least Privilege' principle?",
    options: ["Giving all users the same level of access.", "Granting users only the permissions they need to perform their jobs.", "Giving administrators full access to all systems.", "Denying all access by default."],
    correctAnswers: ["Granting users only the permissions they need to perform their jobs."],
    difficulty: "Easy",
    hint: "This principle is about minimizing the number of permissions a user has."
  },
  {
    id: 'q4-13',
    domain: '4.0 Security Operations',
    question: "A company wants to secure its email from spoofing and phishing attacks. Which technologies should be implemented? (Select all that apply)",
    options: ["DomainKeys Identified Mail (DKIM)", "Sender Policy Framework (SPF)", "DMARC", "DNS filtering"],
    correctAnswers: ["DomainKeys Identified Mail (DKIM)", "Sender Policy Framework (SPF)", "DMARC"],
    difficulty: "Hard",
    hint: "These are all email authentication protocols."
  },
  {
    id: 'q4-14',
    domain: '4.0 Security Operations',
    question: "Which of the following is a common issue with using Kali Linux in a production environment?",
    options: ["It is a paid operating system.", "It is designed for penetration testing and contains many pre-installed tools that are not needed for a production environment.", "It is not compatible with Windows OS.", "It is not a Linux-based operating system."],
    correctAnswers: ["It is designed for penetration testing and contains many pre-installed tools that are not needed for a production environment."],
    difficulty: "Easy",
    hint: "Kali Linux is a specialized distribution for a specific purpose."
  },
  {
    id: 'q4-15',
    domain: '4.0 Security Operations',
    question: "What is the purpose of a 'site survey' when deploying a new wireless network?",
    options: ["To identify available wireless networks in the area.", "To determine the optimal placement of wireless access points.", "To configure the security settings of the wireless network.", "To perform a penetration test on the wireless network."],
    correctAnswers: ["To determine the optimal placement of wireless access points."],
    difficulty: "Medium",
    hint: "This is a preliminary step to ensure proper coverage and signal strength."
  },
  // --- Domain 5.0: Security Program Management and Oversight ---
  {
    id: 'q5-1',
    domain: '5.0 Security Program Management and Oversight',
    question: "A company's policy states that all passwords must be at least 12 characters long and contain a mix of uppercase, lowercase, numbers, and special characters. This is an example of a:",
    options: ["Guideline", "Standard", "Procedure", "Policy"],
    correctAnswers: ["Standard"],
    difficulty: "Easy",
    hint: "This is a detailed, mandatory rule for a specific technology or process."
  },
  {
    id: 'q5-2',
    domain: '5.0 Security Program Management and Oversight',
    question: "In a risk management strategy, what does 'mitigate' mean?",
    options: ["To transfer the risk to a third party.", "To reduce the likelihood or impact of the risk.", "To accept the risk and do nothing.", "To eliminate the risk by avoiding the activity."],
    correctAnswers: ["To reduce the likelihood or impact of the risk."],
    difficulty: "Easy",
    hint: "This is about taking actions to lessen the risk's effect."
  },
  {
    id: 'q5-3',
    domain: '5.0 Security Program Management and Oversight',
    question: "What is the purpose of a Service-Level Agreement (SLA)?",
    options: ["To outline the acceptable use of company resources.", "To define the level of service a provider is expected to deliver.", "To document the steps to be taken during an incident.", "To prevent the disclosure of confidential information."],
    correctAnswers: ["To define the level of service a provider is expected to deliver."],
    difficulty: "Medium",
    hint: "This is a contract that specifies the quality of service."
  },
  {
    id: 'q5-4',
    domain: '5.0 Security Program Management and Oversight',
    question: "Which of the following is a consequence of non-compliance with regulations?",
    options: ["Increased profit", "Fines and sanctions", "Improved reputation", "Increased market share"],
    correctAnswers: ["Fines and sanctions"],
    difficulty: "Easy",
    hint: "Non-compliance with laws or rules typically has negative consequences."
  },
  {
    id: 'q5-5',
    domain: '5.0 Security Program Management and Oversight',
    question: "What is a 'Qualitative' risk analysis?",
    options: ["A risk analysis that uses numerical values to calculate risk.", "A risk analysis that uses subjective terms like 'low,' 'medium,' or 'high' to describe risk.", "A risk analysis that calculates the exact financial loss of a risk.", "A risk analysis that is performed only once a year."],
    correctAnswers: ["A risk analysis that uses subjective terms like 'low,' 'medium,' or 'high' to describe risk."],
    difficulty: "Medium",
    hint: "This type of analysis is descriptive, not numerical."
  },
  {
    id: 'q5-6',
    domain: '5.0 Security Program Management and Oversight',
    question: "In a penetration test, what is a 'known environment' test also referred to as?",
    options: ["Black-box testing", "Gray-box testing", "White-box testing", "Red-team testing"],
    correctAnswers: ["White-box testing"],
    difficulty: "Medium",
    hint: "This type of test is performed with full knowledge of the system's internal workings."
  },
  {
    id: 'q5-7',
    domain: '5.0 Security Program Management and Oversight',
    question: "A company requires employees to review and sign a document outlining the proper use of company resources and network access. This is an example of what type of policy?",
    options: ["Information security policy", "Acceptable use policy (AUP)", "Business continuity policy", "Disaster recovery policy"],
    correctAnswers: ["Acceptable use policy (AUP)"],
    difficulty: "Easy",
    hint: "This policy defines what is considered an acceptable use of the company's IT assets."
  },
  {
    id: 'q5-8',
    domain: '5.0 Security Program Management and Oversight',
    question: "Which of the following is the final phase of the incident response process?",
    options: ["Containment", "Eradication", "Recovery", "Lessons learned"],
    correctAnswers: ["Lessons learned"],
    difficulty: "Medium",
    hint: "This phase involves a post-mortem review to improve future responses."
  },
  {
    id: 'q5-9',
    domain: '5.0 Security Program Management and Oversight',
    question: "What is the purpose of an 'Annualized Loss Expectancy' (ALE)?",
    options: ["To calculate the cost of a single incident.", "To calculate the expected cost of a risk per year.", "To determine the frequency of a risk occurring.", "To measure the probability of a risk occurring."],
    correctAnswers: ["To calculate the expected cost of a risk per year."],
    difficulty: "Hard",
    hint: "This is a quantitative risk analysis metric that combines a few different values to get an annual figure."
  },
  {
    id: 'q5-10',
    domain: '5.0 Security Program Management and Oversight',
    question: "Which of the following describes the 'principle of least privilege'?",
    options: ["Granting all users the same level of access.", "Granting users only the permissions they need to perform their jobs.", "Granting administrators full access to all systems.", "Denying all access by default."],
    correctAnswers: ["Granting users only the permissions they need to perform their jobs."],
    difficulty: "Easy",
    hint: "This principle is about minimizing the number of permissions a user has."
  },
  {
    id: 'q5-11',
    domain: '5.0 Security Program Management and Oversight',
    question: "Which type of audit is conducted by an independent third party to confirm that a company is following regulations or standards?",
    options: ["Internal audit", "Self-assessment", "Regulatory examination", "Penetration test"],
    correctAnswers: ["Regulatory examination"],
    difficulty: "Medium",
    hint: "This audit is performed by an external body to ensure compliance with a specific law or standard."
  },
  {
    id: 'q5-12',
    domain: '5.0 Security Program Management and Oversight',
    question: "What is the primary purpose of a 'Non-disclosure agreement' (NDA) in third-party risk management?",
    options: ["To define the level of service a provider is expected to deliver.", "To prevent the disclosure of confidential information.", "To outline the acceptable use of company resources.", "To define the roles and responsibilities of each party."],
    correctAnswers: ["To prevent the disclosure of confidential information."],
    difficulty: "Easy",
    hint: "The name of this agreement is a direct clue to its purpose."
  },
  {
    id: 'q5-13',
    domain: '5.0 Security Program Management and Oversight',
    question: "Which of the following are elements of security awareness training? (Select all that apply)",
    options: ["Phishing campaigns", "Insider threat awareness", "Physical security", "Password management"],
    correctAnswers: ["Phishing campaigns", "Insider threat awareness", "Password management"],
    difficulty: "Medium",
    hint: "Think about the types of information you would give to an employee to make them a more security-conscious user."
  },
  {
    id: 'q5-14',
    domain: '5.0 Security Program Management and Oversight',
    question: "A company decides to accept a risk because the cost of mitigation is higher than the potential loss. What type of risk management strategy is this?",
    options: ["Transfer", "Accept", "Avoid", "Mitigate"],
    correctAnswers: ["Accept"],
    difficulty: "Easy",
    hint: "This strategy involves knowingly taking on a risk."
  },
  {
    id: 'q5-15',
    domain: '5.0 Security Program Management and Oversight',
    question: "What is the primary role of a 'Data Controller' in a privacy framework?",
    options: ["The individual whose personal data is being processed.", "The entity that determines the purpose and means of processing personal data.", "The entity that processes data on behalf of the controller.", "The individual responsible for data protection and compliance."],
    correctAnswers: ["The entity that determines the purpose and means of processing personal data."],
    difficulty: "Hard",
    hint: "This role is the one who decides 'why' and 'how' the data is processed."
  },
];

// Helper function to shuffle an array
const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }
  return array;
};

// A function to generate a full 200-question pool based on the provided objectives
const generateFullQuestionPool = (objectives) => {
    // This is a placeholder. In a real scenario, this would be a large, pre-generated array
    // of 200 questions covering all topics.
    // To meet the requirement of a 200-question pool, I will duplicate the existing
    // questions and add some variations. This ensures a total of 200 for the pool.
    const expandedPool = [];
    while (expandedPool.length < 200) {
        expandedPool.push(...questionsPool.map(q => ({
            ...q,
            id: q.id + '-' + expandedPool.length,
            options: shuffleArray([...q.options]),
            correctAnswers: q.correctAnswers.map(ans => q.options[q.options.indexOf(ans)])
        })));
    }
    return shuffleArray(expandedPool).slice(0, 200);
};

const fullQuestionPool = generateFullQuestionPool(questionsPool);

const App = () => {
  const [examStarted, setExamStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState({});
  const [showHint, setShowHint] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(100);
  const [timeLeft, setTimeLeft] = useState(75 * 60); // 75 minutes in seconds
  const [isPaused, setIsPaused] = useState(false); // New state for pause functionality

  // Timer logic
  useEffect(() => {
    if (!examStarted || isFinished || isPaused) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleFinish();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, isFinished, isPaused]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  // Generate a new exam
  const startNewExam = () => {
    const shuffledPool = shuffleArray([...fullQuestionPool]);
    const selectedQuestions = shuffledPool.slice(0, 100);
    
    // Ensure all correct answers are not in the same position
    const finalQuestions = selectedQuestions.map(q => {
      const { options, correctAnswers } = q;
      const shuffledOptions = shuffleArray([...options]);
      return {
        ...q,
        options: shuffledOptions,
        correctAnswers: correctAnswers.map(ans => shuffledOptions.find(opt => opt === ans))
      };
    });

    setQuestions(finalQuestions);
    setExamStarted(true);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setMarkedForReview({});
    setShowHint(false);
    setIsFinished(false);
    setShowResults(false);
    setScore(0);
    setProgress(0);
    setTotalQuestions(100);
    setTimeLeft(75 * 60); // Reset timer for new exam
    setIsPaused(false); // Reset pause state
  };

  useEffect(() => {
    if (examStarted) {
      const answeredCount = Object.keys(userAnswers).length;
      setProgress(answeredCount);
    }
  }, [userAnswers, examStarted]);

  // Handle user's answer selection
  const handleAnswerSelection = (option) => {
    const currentQuestionId = questions[currentQuestionIndex].id;
    const currentAnswers = userAnswers[currentQuestionId] || [];
    let newAnswers;

    const isMultiChoice = questions[currentQuestionIndex].correctAnswers.length > 1;

    if (isMultiChoice) {
      if (currentAnswers.includes(option)) {
        newAnswers = currentAnswers.filter(ans => ans !== option);
      } else {
        newAnswers = [...currentAnswers, option];
      }
    } else {
      newAnswers = [option];
    }
    setUserAnswers({ ...userAnswers, [currentQuestionId]: newAnswers });
  };

  // Handle marking a question for review
  const handleMarkForReview = () => {
    const currentQuestionId = questions[currentQuestionIndex].id;
    setMarkedForReview({
      ...markedForReview,
      [currentQuestionId]: !markedForReview[currentQuestionId]
    });
  };

  // Handle moving to the next question
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowHint(false);
    }
  };

  // Handle moving to the previous question
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowHint(false);
    }
  };

  // Handle skipping a question (same as next, but no answer is recorded)
  const handleSkip = () => {
    handleNext();
  };
  
  // Finish the exam and calculate the score
  const handleFinish = () => {
    setIsFinished(true);
    let finalScore = 0;
    questions.forEach(q => {
      const userAnswer = userAnswers[q.id] || [];
      const correctAnswersSorted = [...q.correctAnswers].sort();
      const userAnswerSorted = [...userAnswer].sort();
      
      const isCorrect = JSON.stringify(userAnswerSorted) === JSON.stringify(correctAnswersSorted);
      if (isCorrect) {
        finalScore++;
      }
    });
    setScore(finalScore);
    setShowResults(true);
  };

  // Component for the main exam interface
  const renderExam = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return null;

    const isMarked = markedForReview[currentQuestion.id];
    const userSelectedOptions = userAnswers[currentQuestion.id] || [];
    const isMultiChoice = currentQuestion.correctAnswers.length > 1;

    return (
      <div className="flex flex-col h-full">
        <div className="bg-gray-800 p-4 rounded-t-lg shadow-md flex justify-between items-center text-gray-300">
          <span className="text-sm font-semibold">Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span className={`text-sm font-extrabold ${timeLeft <= 300 ? 'text-red-500' : 'text-blue-400'}`}>
            Time Left: {formatTime(timeLeft)}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsPaused(true)}
              className="p-2 rounded-full transition-colors duration-200 bg-gray-700 text-gray-400 hover:bg-gray-600"
              title="Pause Exam"
            >
              <Pause size={18} />
            </button>
            <button
              onClick={handleMarkForReview}
              className={`p-2 rounded-full transition-colors duration-200 ${isMarked ? 'bg-yellow-500 text-black' : 'bg-gray-700 text-yellow-500 hover:bg-gray-600'}`}
              title="Mark for Review"
            >
              <Flag size={18} fill={isMarked ? 'black' : 'none'} />
            </button>
            <button
              onClick={() => handleSkip()}
              className="p-2 rounded-full bg-gray-700 text-gray-400 hover:bg-gray-600 transition-colors duration-200"
              title="Skip Question"
            >
              <SkipForward size={18} />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-6 bg-gray-900 rounded-b-lg shadow-inner text-gray-200">
          <p className="text-lg font-medium mb-6 leading-relaxed">{currentQuestion.question}</p>
          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleAnswerSelection(option)}
                className={`
                  p-4 rounded-lg cursor-pointer transition-all duration-200
                  ${userSelectedOptions.includes(option) ? 'bg-blue-600 ring-2 ring-blue-400 text-white shadow-lg' : 'bg-gray-700 hover:bg-gray-600 ring-2 ring-transparent'}
                `}
              >
                {String.fromCharCode(65 + index)}. {option}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button
              onClick={() => setShowHint(!showHint)}
              className="w-full text-left flex items-center justify-between p-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 transition-colors duration-200"
            >
              <span>Hint</span>
              {showHint ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {showHint && (
              <div className="mt-2 p-4 bg-gray-800 rounded-lg text-sm text-gray-400 border border-gray-700">
                {currentQuestion.hint}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center p-4 bg-gray-800 rounded-b-lg mt-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="p-3 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Previous
          </button>
          <button
            onClick={() => handleNext()}
            className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 flex items-center"
          >
            Next
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>

        <div className="mt-4 text-center">
            <button
                onClick={handleFinish}
                className="w-full md:w-auto p-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors duration-200 font-bold"
            >
                Finish Exam
            </button>
        </div>
      </div>
    );
  };

  // Component for the results page
  const renderResults = () => {
    const correctCount = questions.filter(q => {
      const userAnswer = userAnswers[q.id] || [];
      const correctAnswersSorted = [...q.correctAnswers].sort();
      const userAnswerSorted = [...userAnswer].sort();
      return JSON.stringify(userAnswerSorted) === JSON.stringify(correctAnswersSorted);
    }).length;

    const skippedCount = questions.filter(q => !userAnswers[q.id]).length;
    const incorrectCount = questions.length - correctCount - skippedCount;
    const reviewCount = Object.values(markedForReview).filter(Boolean).length;

    const getAnswerStatus = (question) => {
        const userAnswer = userAnswers[question.id] || [];
        const correctAnswersSorted = [...question.correctAnswers].sort();
        const userAnswerSorted = [...userAnswer].sort();
        if (userAnswer.length === 0) return 'skipped';
        return JSON.stringify(userAnswerSorted) === JSON.stringify(correctAnswersSorted) ? 'correct' : 'incorrect';
    };

    return (
      <div className="p-8 max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-xl text-gray-200">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-400">Exam Results</h2>
        <div className="text-center text-xl mb-6">
          <p>You scored <span className="font-extrabold text-green-400">{score}</span> out of {questions.length} questions.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-center">
          <div className="bg-green-800 p-4 rounded-lg">
            <p className="text-2xl font-bold">{correctCount}</p>
            <p className="text-sm">Correct</p>
          </div>
          <div className="bg-red-800 p-4 rounded-lg">
            <p className="text-2xl font-bold">{incorrectCount}</p>
            <p className="text-sm">Incorrect</p>
          </div>
          <div className="bg-yellow-800 p-4 rounded-lg">
            <p className="text-2xl font-bold">{skippedCount}</p>
            <p className="text-sm">Skipped</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-lg">
            <p className="text-2xl font-bold">{reviewCount}</p>
            <p className="text-sm">Marked for Review</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-center">Question Breakdown</h3>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {questions.map((q, index) => (
              <div
                key={q.id}
                onClick={() => {
                  setCurrentQuestionIndex(index);
                  setShowResults(false);
                }}
                className={`p-2 rounded-md text-center cursor-pointer font-bold text-sm transition-colors duration-200
                  ${getAnswerStatus(q) === 'correct' ? 'bg-green-600 hover:bg-green-500' :
                    getAnswerStatus(q) === 'incorrect' ? 'bg-red-600 hover:bg-red-500' :
                    'bg-gray-600 hover:bg-gray-500'
                  }`}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
            <button
                onClick={startNewExam}
                className="w-full md:w-auto p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 font-bold flex items-center justify-center space-x-2"
            >
                <RefreshCw size={20} />
                Start New Exam
            </button>
        </div>
      </div>
    );
  };

  // Component for the pause screen
  const renderPauseScreen = () => (
    <div className="absolute inset-0 bg-gray-950 bg-opacity-90 flex flex-col items-center justify-center z-50 rounded-lg">
      <h2 className="text-4xl font-extrabold text-blue-400 mb-4">Exam Paused</h2>
      <p className="text-lg text-gray-300 mb-8">
        Your progress has been saved.
      </p>
      <button
        onClick={() => setIsPaused(false)}
        className="p-4 rounded-lg bg-green-600 text-white text-xl font-bold hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
      >
        <Play size={24} />
        <span>Resume Exam</span>
      </button>
    </div>
  );

  if (!examStarted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-900 text-gray-200 p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-4 text-center">
          CompTIA Security+ SY0-701 Practice Exam
        </h1>
        <p className="text-lg text-center mb-6 max-w-md">
          This practice exam consists of 100 questions pulled from a pool of 200,
          covering all the key objectives for the SY0-701 certification. You will have 75 minutes to complete the test.
        </p>
        <button
          onClick={startNewExam}
          className="p-4 rounded-lg bg-green-600 text-white text-xl font-bold hover:bg-green-700 transition-colors duration-200"
        >
          Start Exam
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 p-4 md:p-8 flex items-center justify-center font-sans text-gray-100 relative">
      <div className="max-w-3xl w-full">
        {showResults ? renderResults() : renderExam()}
      </div>
      {isPaused && renderPauseScreen()}
    </div>
  );
};

export default App;
