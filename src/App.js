import React, { useState, useEffect, useReducer } from 'react';
import {
  ChevronDown, ChevronUp, CheckCircle2, XCircle, SkipForward, ArrowLeft, ArrowRight, Flag, RefreshCw, Play, Pause, X
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// The question pool, as provided by the user, is a large object
// This is not a production-level method for handling a large number of questions,
// but it is kept in the component as requested for simplicity.
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
    difficulty: "Medium",
    hint: "Kali Linux is built with a specific purpose in mind that is not for day-to-day operations."
  },
  {
    id: 'q4-15',
    domain: '4.0 Security Operations',
    question: "What is the purpose of an `incident response plan`?",
    options: ["To prevent all security incidents.", "To provide a structured approach for handling a security breach.", "To encrypt all company data.", "To train employees on security awareness."],
    correctAnswers: ["To provide a structured approach for handling a security breach."],
    difficulty: "Easy",
    hint: "This plan is a set of instructions to help an organization respond to a security incident."
  },
  // --- Domain 5.0: Governance, Risk, and Compliance ---
  {
    id: 'q5-1',
    domain: '5.0 Governance, Risk, and Compliance',
    question: "Which of the following describes the 'confidentiality' principle of the CIA triad?",
    options: ["Ensuring data is accessible to authorized users when needed.", "Ensuring data is not altered or destroyed in an unauthorized manner.", "Ensuring data is not disclosed to unauthorized individuals.", "Ensuring the origin of data can be verified."],
    correctAnswers: ["Ensuring data is not disclosed to unauthorized individuals."],
    difficulty: "Easy",
    hint: "This principle is about keeping information secret."
  },
  {
    id: 'q5-2',
    domain: '5.0 Governance, Risk, and Compliance',
    question: "What is the purpose of a `vulnerability assessment`?",
    options: ["To actively exploit vulnerabilities to test a system's defenses.", "To identify, quantify, and prioritize the vulnerabilities in a system.", "To ensure compliance with security policies.", "To manage and store cryptographic keys."],
    correctAnswers: ["To identify, quantify, and prioritize the vulnerabilities in a system."],
    difficulty: "Medium",
    hint: "This process is about finding weaknesses, not exploiting them."
  },
  {
    id: 'q5-3',
    domain: '5.0 Governance, Risk, and Compliance',
    question: "A company's risk management framework includes identifying assets, threats, and vulnerabilities. What is the next logical step?",
    options: ["Implementing a security control to mitigate the risk.", "Performing a penetration test.", "Assessing the likelihood and impact of the risks.", "Developing a new security policy."],
    correctAnswers: ["Assessing the likelihood and impact of the risks."],
    difficulty: "Medium",
    hint: "This step is about determining the level of risk associated with each vulnerability."
  },
  {
    id: 'q5-4',
    domain: '5.0 Governance, Risk, and Compliance',
    question: "Which of the following is a common framework for information security management? (Select all that apply)",
    options: ["ISO 27001", "NIST CSF", "Sarbanes-Oxley (SOX)", "PCI DSS"],
    correctAnswers: ["ISO 27001", "NIST CSF"],
    difficulty: "Easy",
    hint: "These are widely recognized standards for managing information security."
  },
  {
    id: 'q5-5',
    domain: '5.0 Governance, Risk, and Compliance',
    question: "A company accepts a risk because the cost of mitigation is higher than the potential impact of the risk. What is this a form of?",
    options: ["Risk avoidance", "Risk transference", "Risk acceptance", "Risk mitigation"],
    correctAnswers: ["Risk acceptance"],
    difficulty: "Easy",
    hint: "This is a deliberate decision to take on a particular risk."
  },
  {
    id: 'q5-6',
    domain: '5.0 Governance, Risk, and Compliance',
    question: "What is the primary purpose of a `Business Impact Analysis (BIA)`?",
    options: ["To identify an organization's critical business functions and the impact of a disruption.", "To identify all IT assets within an organization.", "To perform a security audit of all network devices.", "To train employees on security awareness."],
    correctAnswers: ["To identify an organization's critical business functions and the impact of a disruption."],
    difficulty: "Medium",
    hint: "This analysis focuses on the business, not just the technology."
  },
  {
    id: 'q5-7',
    domain: '5.0 Governance, Risk, and Compliance',
    question: "Which of the following describes a `data retention policy`?",
    options: ["A policy for how long data should be kept and how it should be destroyed.", "A policy for who can access data.", "A policy for how data is encrypted.", "A policy for how data is backed up."],
    correctAnswers: ["A policy for how long data should be kept and how it should be destroyed."],
    difficulty: "Easy",
    hint: "This policy dictates the lifecycle of data within an organization."
  },
  {
    id: 'q5-8',
    domain: '5.0 Governance, Risk, and Compliance',
    question: "A security professional is performing an audit to ensure that a company is following its own internal security policies. What kind of audit is this?",
    options: ["Compliance audit", "Penetration test", "Vulnerability scan", "Risk assessment"],
    correctAnswers: ["Compliance audit"],
    difficulty: "Medium",
    hint: "This audit checks if the organization is in compliance with a set of rules."
  },
  {
    id: 'q5-9',
    domain: '5.0 Governance, Risk, and Compliance',
    question: "What is the purpose of a `privacy impact assessment (PIA)`?",
    options: ["To identify and mitigate the privacy risks of a new project or system.", "To perform a vulnerability scan on a system.", "To ensure that a system is available to all users.", "To enforce a security policy."],
    correctAnswers: ["To identify and mitigate the privacy risks of a new project or system."],
    difficulty: "Medium",
    hint: "This assessment focuses specifically on the privacy of personal data."
  },
  {
    id: 'q5-10',
    domain: '5.0 Governance, Risk, and Compliance',
    question: "Which of the following is a legal and regulatory framework that deals with the security of health-related information?",
    options: ["HIPAA", "GDPR", "PCI DSS", "SOX"],
    correctAnswers: ["HIPAA"],
    difficulty: "Easy",
    hint: "This acronym stands for the Health Insurance Portability and Accountability Act."
  },
  {
    id: 'q5-11',
    domain: '5.0 Governance, Risk, and Compliance',
    question: "What is the primary objective of the `principle of least privilege`?",
    options: ["To ensure that users have the fewest possible permissions necessary to perform their jobs.", "To ensure that all users have the same level of access to data.", "To grant users full administrator access to all systems.", "To ensure that data is encrypted at all times."],
    correctAnswers: ["To ensure that users have the fewest possible permissions necessary to perform their jobs."],
    difficulty: "Easy",
    hint: "This principle is a core tenet of Zero Trust architecture."
  },
  {
    id: 'q5-12',
    domain: '5.0 Governance, Risk, and Compliance',
    question: "What is the purpose of `threat modeling`?",
    options: ["To identify, classify, and prioritize potential threats to a system or application.", "To create a model of a physical threat to a data center.", "To assess the risk of a natural disaster.", "To perform a penetration test on a network."],
    correctAnswers: ["To identify, classify, and prioritize potential threats to a system or application."],
    difficulty: "Medium",
    hint: "This is a structured approach to identifying security risks in a system."
  },
  {
    id: 'q5-13',
    domain: '5.0 Governance, Risk, and Compliance',
    question: "Which of the following are elements of a good `security policy`? (Select all that apply)",
    options: ["Acceptable use policy", "Data classification policy", "Password policy", "Network configuration policy"],
    correctAnswers: ["Acceptable use policy", "Data classification policy", "Password policy"],
    difficulty: "Easy",
    hint: "These policies define the rules and guidelines for how employees should handle data and systems."
  },
  {
    id: 'q5-14',
    domain: '5.0 Governance, Risk, and Compliance',
    question: "A company decides to purchase cyber insurance to protect against financial losses from a breach. What is this an example of?",
    options: ["Risk avoidance", "Risk transference", "Risk mitigation", "Risk acceptance"],
    correctAnswers: ["Risk transference"],
    difficulty: "Easy",
    hint: "This is about moving the financial risk to a third party."
  },
  {
    id: 'q5-15',
    domain: '5.0 Governance, Risk, and Compliance',
    question: "Which of the following is a framework that helps organizations manage and improve their cybersecurity risk? (Select all that apply)",
    options: ["NIST Cybersecurity Framework", "COBIT", "ITIL", "CIS Controls"],
    correctAnswers: ["NIST Cybersecurity Framework", "COBIT", "CIS Controls"],
    difficulty: "Medium",
    hint: "These are all well-known frameworks and standards for cybersecurity governance and management."
  },
];

const EXAM_TIME_MINUTES = 75;
const NUMBER_OF_QUESTIONS = 100;

const getRandomQuestions = (pool, count) => {
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Reducer for managing the exam state
const examReducer = (state, action) => {
  switch (action.type) {
    case 'START_EXAM':
      const newQuestions = getRandomQuestions(questionsPool, NUMBER_OF_QUESTIONS);
      return {
        ...state,
        examStarted: true,
        examFinished: false,
        questions: newQuestions,
        answers: {},
        flaggedQuestions: new Set(),
        currentQuestionIndex: 0,
        score: 0,
      };
    case 'UPDATE_ANSWER':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.questionId]: action.selectedAnswers,
        },
      };
    case 'TOGGLE_FLAG':
      const newFlagged = new Set(state.flaggedQuestions);
      if (newFlagged.has(action.questionId)) {
        newFlagged.delete(action.questionId);
      } else {
        newFlagged.add(action.questionId);
      }
      return {
        ...state,
        flaggedQuestions: newFlagged,
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: Math.min(state.currentQuestionIndex + 1, state.questions.length - 1),
      };
    case 'PREVIOUS_QUESTION':
      return {
        ...state,
        currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),
      };
    case 'JUMP_TO_QUESTION':
      return {
        ...state,
        currentQuestionIndex: action.index,
      };
    case 'SUBMIT_EXAM':
      return {
        ...state,
        examFinished: true,
        score: calculateScore(state.questions, state.answers),
      };
    case 'RESET_EXAM':
      return {
        ...state,
        examStarted: false,
        examFinished: false,
        questions: [],
        answers: {},
        flaggedQuestions: new Set(),
        currentQuestionIndex: 0,
        score: 0,
      };
    case 'SET_TIME_LEFT':
        return {
          ...state,
          timeLeft: action.timeLeft
        }
    default:
      return state;
  }
};

// Function to calculate the final score
const calculateScore = (questions, answers) => {
  let correctCount = 0;
  questions.forEach((q) => {
    const userAnswer = answers[q.id] || [];
    const isCorrect = userAnswer.length === q.correctAnswers.length &&
      userAnswer.every((ans) => q.correctAnswers.includes(ans));
    if (isCorrect) {
      correctCount++;
    }
  });
  return correctCount;
};


// Main Exam Component
const App = () => {
  const [examState, dispatch] = useReducer(examReducer, {
    examStarted: false,
    examFinished: false,
    questions: [],
    answers: {},
    flaggedQuestions: new Set(),
    currentQuestionIndex: 0,
    score: 0,
    timeLeft: EXAM_TIME_MINUTES * 60,
  });

  const [isPaused, setIsPaused] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showHint, setShowHint] = useState({});
  const [showExplanation, setShowExplanation] = useState({});
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [messageBoxContent, setMessageBoxContent] = useState({ title: '', message: '' });

  const { examStarted, examFinished, questions, answers, flaggedQuestions, currentQuestionIndex, score, timeLeft } = examState;

  const showCustomMessageBox = (title, message) => {
    setMessageBoxContent({ title, message });
    setShowMessageBox(true);
  };

  const closeCustomMessageBox = () => {
    setShowMessageBox(false);
  };

  useEffect(() => {
    let timer;
    if (examStarted && !isPaused && !examFinished) {
      timer = setInterval(() => {
        dispatch({ type: 'SET_TIME_LEFT', timeLeft: examState.timeLeft - 1 });
        if (examState.timeLeft <= 1) {
          dispatch({ type: 'SUBMIT_EXAM' });
          showCustomMessageBox('Time\'s Up!', 'The exam has been automatically submitted because the time has run out.');
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [examStarted, isPaused, examFinished, examState.timeLeft]);

  const startNewExam = () => {
    dispatch({ type: 'START_EXAM' });
    dispatch({ type: 'SET_TIME_LEFT', timeLeft: EXAM_TIME_MINUTES * 60 });
    setShowResults(false);
    setShowHint({});
    setShowExplanation({});
  };

  const handleOptionChange = (questionId, option) => {
    const currentQuestion = questions.find(q => q.id === questionId);
    const isMultipleChoice = currentQuestion && currentQuestion.correctAnswers.length > 1;

    let updatedAnswers = answers[questionId] || [];

    if (isMultipleChoice) {
      // Toggle selection for multiple-choice questions
      if (updatedAnswers.includes(option)) {
        updatedAnswers = updatedAnswers.filter((ans) => ans !== option);
      } else {
        updatedAnswers = [...updatedAnswers, option];
      }
    } else {
      // Single-choice: replace the current selection
      updatedAnswers = [option];
    }

    dispatch({ type: 'UPDATE_ANSWER', questionId, selectedAnswers: updatedAnswers });
  };

  const toggleFlag = (questionId) => {
    dispatch({ type: 'TOGGLE_FLAG', questionId });
  };

  const toggleHint = (questionId) => {
    setShowHint(prevState => ({
      ...prevState,
      [questionId]: !prevState[questionId]
    }));
  };

  const toggleExplanation = (questionId) => {
    setShowExplanation(prevState => ({
      ...prevState,
      [questionId]: !prevState[questionId]
    }));
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const pad = (num) => num.toString().padStart(2, '0');
    return `${pad(minutes)}:${pad(remainingSeconds)}`;
  };

  const getButtonClass = (option, questionId) => {
    const isSelected = (answers[questionId] || []).includes(option);
    if (!examFinished) {
      return `p-3 rounded-lg text-left w-full transition-colors duration-200 border border-gray-700 hover:bg-gray-700 ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-200'}`;
    }

    const isCorrect = questions.find(q => q.id === questionId).correctAnswers.includes(option);
    const isUserAnswer = isSelected;

    if (isCorrect && isUserAnswer) {
      return 'p-3 rounded-lg text-left w-full bg-green-600 text-white'; // Correct and selected
    } else if (isCorrect && !isUserAnswer) {
      return 'p-3 rounded-lg text-left w-full bg-green-600 text-white border-2 border-dashed border-green-300'; // Correct but not selected
    } else if (!isCorrect && isUserAnswer) {
      return 'p-3 rounded-lg text-left w-full bg-red-600 text-white'; // Incorrect and selected
    } else {
      return 'p-3 rounded-lg text-left w-full bg-gray-800 text-gray-200'; // Incorrect and not selected
    }
  };

  const getQuestionStatus = (questionId) => {
    const userAnswer = answers[questionId] || [];
    const correctAnswers = questions.find(q => q.id === questionId).correctAnswers;

    if (userAnswer.length === 0) {
      return 'unanswered';
    }

    if (userAnswer.length === correctAnswers.length && userAnswer.every(ans => correctAnswers.includes(ans))) {
      return 'correct';
    }

    return 'incorrect';
  };


  const ConfirmationModal = () => (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-sm w-full text-center"
      >
        <h3 className="text-xl font-bold text-red-400 mb-4">Warning</h3>
        <p className="text-gray-300 mb-6">
          Are you sure you want to submit the exam? You will not be able to change your answers afterward.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => {
              dispatch({ type: 'SUBMIT_EXAM' });
              closeCustomMessageBox();
              setShowResults(true);
            }}
            className="p-3 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 transition-colors duration-200"
          >
            Yes, Submit
          </button>
          <button
            onClick={closeCustomMessageBox}
            className="p-3 rounded-lg bg-gray-700 text-white font-bold hover:bg-gray-600 transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );

  const QuizResults = () => (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-900 text-gray-200 p-8 rounded-lg shadow-xl w-full max-w-4xl mx-auto">
      <h2 className="text-4xl font-extrabold text-blue-400 mb-4">Exam Results</h2>
      <p className="text-lg text-center mb-6">
        You scored {score} out of {questions.length} questions.
      </p>
      <div className="grid grid-cols-5 md:grid-cols-10 gap-2 mb-8">
        {questions.map((q, index) => {
          const status = getQuestionStatus(q.id);
          let bgColor = '';
          if (status === 'correct') {
            bgColor = 'bg-green-600';
          } else if (status === 'incorrect') {
            bgColor = 'bg-red-600';
          } else {
            bgColor = 'bg-gray-600';
          }
          return (
            <button
              key={q.id}
              onClick={() => {
                dispatch({ type: 'JUMP_TO_QUESTION', index });
                setShowResults(false);
              }}
              className={`w-10 h-10 rounded-full text-white font-bold flex items-center justify-center ${bgColor} hover:scale-110 transition-transform duration-200`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        onClick={startNewExam}
        className="p-4 rounded-lg bg-blue-600 text-white text-xl font-bold hover:bg-blue-700 transition-colors duration-200"
      >
        Start New Exam
      </button>
    </div>
  );

  const QuizPausedOverlay = () => (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex flex-col items-center justify-center p-4 z-50">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Exam Paused</h2>
        <p className="text-lg text-gray-200 mb-6">
          Your exam is paused. The timer is stopped.
        </p>
        <button
          onClick={() => setIsPaused(false)}
          className="p-4 rounded-lg bg-green-600 text-white text-xl font-bold hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
        >
          <Play size={24} />
          <span>Resume Exam</span>
        </button>
      </div>
    </div>
  );

  const StartScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-900 text-gray-200 p-8 rounded-lg shadow-xl w-full max-w-4xl mx-auto">
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

  const renderQuestion = () => {
    const question = questions[currentQuestionIndex];
    if (!question) return null;

    const isFlagged = flaggedQuestions.has(question.id);
    const userSelectedOptions = answers[question.id] || [];

    return (
      <motion.div
        key={currentQuestionIndex}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="p-6 bg-gray-900 rounded-lg shadow-lg"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-blue-400">
            Question {currentQuestionIndex + 1} of {questions.length}
          </h2>
          <span className="text-gray-400 text-sm">{question.domain}</span>
        </div>
        <p className="text-lg text-gray-200 mb-4">{question.question}</p>

        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionChange(question.id, option)}
              disabled={examFinished}
              className={getButtonClass(option, question.id)}
            >
              <div className="flex items-start">
                <span className="mr-3 font-bold text-blue-300">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span className="text-left flex-1">{option}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <button
            onClick={() => toggleFlag(question.id)}
            className={`p-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 ${
              isFlagged ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-gray-200 hover:bg-yellow-400 hover:text-black'
            }`}
            disabled={examFinished}
          >
            <Flag size={18} />
            <span>{isFlagged ? 'Unflag' : 'Flag for Review'}</span>
          </button>
          {examFinished && (
            <>
              <button
                onClick={() => toggleExplanation(question.id)}
                className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <CheckCircle2 size={18} />
                <span>{showExplanation[question.id] ? 'Hide Explanation' : 'Show Explanation'}</span>
              </button>
              {getQuestionStatus(question.id) === 'incorrect' && (
                <div className="text-sm font-bold text-red-400">
                  Incorrect
                </div>
              )}
              {getQuestionStatus(question.id) === 'correct' && (
                <div className="text-sm font-bold text-green-400">
                  Correct
                </div>
              )}
            </>
          )}
          {!examFinished && question.hint && (
            <button
              onClick={() => toggleHint(question.id)}
              className="p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <ChevronDown size={18} />
              <span>{showHint[question.id] ? 'Hide Hint' : 'Show Hint'}</span>
            </button>
          )}
        </div>

        {showHint[question.id] && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-4 p-4 bg-purple-900 rounded-lg text-purple-200 overflow-hidden"
          >
            <p>{question.hint}</p>
          </motion.div>
        )}

        {examFinished && showExplanation[question.id] && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-4 p-4 bg-gray-800 rounded-lg overflow-hidden"
          >
            <h4 className="font-bold text-green-400 mb-2">Correct Answer(s):</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              {question.correctAnswers.map((ans, idx) => (
                <li key={idx}>{ans}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    );
  };

  const MemoizedQuestionRender = React.memo(renderQuestion);

  if (!examStarted) {
    return <StartScreen />;
  }

  if (examFinished && showResults) {
    return <QuizResults />;
  }

  if (examFinished && !showResults) {
    return (
      <div className="container mx-auto p-4 flex flex-col min-h-screen bg-gray-950 text-gray-200">
        <header className="flex justify-between items-center p-4 bg-gray-900 rounded-lg shadow-lg mb-4">
          <h1 className="text-xl font-bold text-blue-400">Exam Review</h1>
          <button
            onClick={() => setShowResults(true)}
            className="p-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors duration-200"
          >
            Back to Results
          </button>
        </header>

        <main className="flex-1 overflow-auto">
          <AnimatePresence mode="wait">
            <MemoizedQuestionRender />
          </AnimatePresence>
        </main>

        <footer className="mt-4 p-4 bg-gray-900 rounded-lg shadow-lg flex justify-between items-center">
          <div className="flex space-x-2">
            <button
              onClick={() => dispatch({ type: 'PREVIOUS_QUESTION' })}
              disabled={currentQuestionIndex === 0}
              className="p-3 rounded-lg bg-gray-700 text-white font-bold hover:bg-gray-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
              disabled={currentQuestionIndex === questions.length - 1}
              className="p-3 rounded-lg bg-gray-700 text-white font-bold hover:bg-gray-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowRight size={24} />
            </button>
          </div>
          <p className="text-sm">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
        </footer>
      </div>
    );
  }

  return (
    <div className="font-sans antialiased text-gray-200 bg-gray-950 min-h-screen">
      <div className="container mx-auto p-4 flex flex-col h-full">
        {isPaused && <QuizPausedOverlay />}

        <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-900 rounded-lg shadow-lg mb-4 sticky top-4 z-40 space-y-4 md:space-y-0">
          <h1 className="text-2xl font-bold text-blue-400">Security+ Practice Exam</h1>
          <div className="flex items-center space-x-4">
            <div className={`p-2 rounded-lg font-bold ${timeLeft < 60 ? 'bg-red-700' : 'bg-gray-700'} text-white`}>
              Time Left: {formatTime(timeLeft)}
            </div>
            <button
              onClick={() => setIsPaused(true)}
              className="p-2 rounded-lg bg-yellow-600 text-white hover:bg-yellow-700 transition-colors duration-200"
            >
              <Pause size={24} />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-1 p-4 bg-gray-900 rounded-lg shadow-lg h-full max-h-[80vh] overflow-y-auto hidden md:block">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Questions</h3>
              <div className="grid grid-cols-5 gap-2">
                {questions.map((q, index) => {
                  const isCurrent = index === currentQuestionIndex;
                  const isAnswered = answers[q.id] && answers[q.id].length > 0;
                  const isFlagged = flaggedQuestions.has(q.id);
                  let bgColor = 'bg-gray-700';

                  if (isAnswered) {
                    bgColor = 'bg-green-600';
                  }
                  if (isFlagged) {
                    bgColor = 'bg-yellow-500';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => dispatch({ type: 'JUMP_TO_QUESTION', index })}
                      className={`w-10 h-10 rounded-full text-white font-bold flex items-center justify-center ${bgColor} ${isCurrent ? 'ring-2 ring-blue-400' : ''} hover:scale-110 transition-transform duration-200`}
                      title={isFlagged ? 'Flagged for Review' : ''}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
              <div className="mt-6 flex flex-col space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-green-600"></div>
                  <span>Answered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-gray-700"></div>
                  <span>Unanswered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                  <span>Flagged</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <AnimatePresence mode="wait">
                <MemoizedQuestionRender />
              </AnimatePresence>
            </div>
          </div>
        </main>

        <footer className="mt-4 p-4 bg-gray-900 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center sticky bottom-4 z-40 space-y-4 md:space-y-0">
          <div className="flex space-x-2">
            <button
              onClick={() => dispatch({ type: 'PREVIOUS_QUESTION' })}
              disabled={currentQuestionIndex === 0}
              className="p-3 rounded-lg bg-gray-700 text-white font-bold hover:bg-gray-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              <ArrowLeft size={24} />
              <span className="ml-2 hidden md:inline">Previous</span>
            </button>
            <button
              onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
              disabled={currentQuestionIndex === questions.length - 1}
              className="p-3 rounded-lg bg-gray-700 text-white font-bold hover:bg-gray-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              <span className="mr-2 hidden md:inline">Next</span>
              <ArrowRight size={24} />
            </button>
          </div>

          <button
            onClick={() => showCustomMessageBox('Submit Exam', 'Are you sure you want to submit the exam? You will not be able to change your answers afterward.')}
            className="p-3 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 transition-colors duration-200 flex items-center"
          >
            <CheckCircle2 size={24} className="mr-2" />
            Submit Exam
          </button>
        </footer>

        {showMessageBox && messageBoxContent.title === 'Submit Exam' && (
          <ConfirmationModal />
        )}
        {showMessageBox && messageBoxContent.title !== 'Submit Exam' && (
           <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-sm w-full text-center"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-red-400">{messageBoxContent.title}</h3>
                <button onClick={closeCustomMessageBox} className="text-gray-400 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>
              <p className="text-gray-300 mb-6">{messageBoxContent.message}</p>
              <button
                onClick={closeCustomMessageBox}
                className="p-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors duration-200"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
