import { useState } from "react";
import type { FormEvent } from "react";

const assets = "/assets";

const navItems = [
  { label: "New chat", icon: "4e771.svg" },
  { label: "Dashboard", icon: "af26a.svg" },
  { label: "Workspace", icon: "faaeb.svg", active: true },
  { label: "Prompt Templates", icon: "1b107.svg" },
  { label: "Prompt Playground", icon: "6d4c0.svg" },
  { label: "Models", icon: "b6ce7.svg" },
  { label: "Transactions", icon: "f137e.svg" },
];

const tour = [
  {
    title: "Choose a project or an organisation workspace",
    description:
      "Each project keeps its own agents, data and configurations switch anytime to view the right workspace context.",
    target: "organisation",
  },
  {
    title: "Profile & settings",
    description:
      "Access your account details, preferences and quick links here. You can also manage notifications, appearance mode and sign out.",
    target: "profile",
  },
  {
    title: "Quick Access Panel",
    description:
      "Your main hub to move between Workspace, Dashboard, Prompts and other key areas.",
    target: "panel",
  },
  {
    title: "Dashboard",
    description:
      "Get a quick, data-driven view of activity, insights and performance metrics.",
    target: "nav-1",
  },
  {
    title: "Workspace",
    description:
      "Your central hub to manage multiple projects, agents and knowledge sources.",
    target: "nav-2",
  },
  {
    title: "Prompt Templates",
    description:
      "Create and maintain reusable prompt blueprints for consistent outcomes.",
    target: "nav-3",
  },
  {
    title: "Prompt Playground",
    description:
      "Experiment, refine and test prompts in a safe, interactive sandbox.",
    target: "nav-4",
  },
  {
    title: "Models",
    description:
      "Manage, compare and monitor AI and ML models within your workspace.",
    target: "nav-5",
  },
  {
    title: "Transactions",
    description:
      "Track and review all AI interactions, executions and workflow activities.",
    target: "nav-6",
  },
  {
    title: "Start creating your first Workspace",
    description:
      "Each workspace acts as a container for your AI projects, datasets and knowledge.",
    target: "workspace-card",
  },
];

function Login({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(event: FormEvent) {
    event.preventDefault();
    onLogin();
  }

  return (
    <main className="login-screen">
      <section className="login-panel">
        <img className="login-zensar" src={`${assets}/11813.svg`} alt="Zensar" />
        <div className="login-content">
          <div className="zense-lockup">
            <span className="zense-logo" style={{ width: "61px", height: "61px" }}>
              <img
                src={`${assets}/zenseai-login-logo.png`}
                alt=""
                style={{
                  position: "relative",
                  width: "61px",
                  height: "61px",
                  overflow: "hidden",
                  borderRadius: "19px",
                  zIndex: 10,
                  top: "0px",
                  right: "8px",
                  bottom: "0px",
                  left: "0px",
                }}
              />
            </span>
            <img className="zense-wordmark" src={`${assets}/2d05a.svg`} alt="ZenseAI" />
          </div>
          <form className="login-form" onSubmit={submit}>
            <div>
              <h1>Log in</h1>
              <p className="login-lede">Please enter your ZenseAI log in detail</p>
            </div>
            <label>
              Email address or username
              <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email, username"
                autoComplete="username"
              />
            </label>
            <label>
              <span className="password-label">
                Password
                <button type="button">Forgot password?</button>
              </span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                autoComplete="current-password"
              />
            </label>
            <button className="primary login-button" type="submit">
              Log in
            </button>
            <p className="join-copy">
              <span>New to ZenseAI?</span> <button type="button">Join now</button>
            </p>
          </form>
        </div>
      </section>
      <div className="login-art">
        <img src={`${assets}/46267.png`} alt="" />
      </div>
    </main>
  );
}

function TourCard({
  step,
  onNext,
  onBack,
  onSkip,
}: {
  step: number;
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}) {
  const item = tour[step];

  return (
    <aside
      className={`tour-card tour-${item.target}`}
      aria-live="polite"
    >
      <span
        className="tour-arrow"
        style={step === 0 ? { top: "1px", bottom: "201px" } : undefined}
      />

      <div className="tour-body">
        <h2>{item.title}</h2>
        <p>{item.description}</p>

        <div className={`tour-actions ${step > 0 ? "end" : ""}`}>
          {step === 0 ? (
            <>
              <button className="tour-link" onClick={onSkip}>
                Skip the tour <span>»</span>
              </button>

              <span className="tour-right">
                <button className="secondary" onClick={onBack}>
                  ‹&nbsp; Back
                </button>
                <button className="primary" onClick={onNext}>
                  Next&nbsp; ›
                </button>
              </span>
            </>
          ) : (
            <>
              <button className="secondary" onClick={onSkip}>
                Skip&nbsp; »
              </button>
              <button className="primary" onClick={onNext}>
                Next&nbsp; ›
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}

const workspaceMenuItems = [
  ["Update Workspace", "a52ef.svg"],
  ["Workspace Configuration", "4d8f2.svg"],
  ["View Cockpit", "1a1dc.svg"],
  ["Job Scheduler", "3d246.svg"],
  ["Agent History", "ff1c8.svg"],
  ["Knowledge Base", "4150b.svg"],
  ["Tickets", "853ca.svg"],
];

const agents = [
  {
    title: "Impact Analysis",
    description:
      "Assesses the impact of code changes across the project by identifying affected components.",
    users: "Engineers, Project Managers, QA Teams",
    icon: "8fb89.svg",
  },
  {
    title: "Code Error Inspector",
    description: "Scans code for errors, bugs, and performance bottlenecks.",
    users: "Developers, QA Engineers",
    icon: "8e640.svg",
  },
  {
    title: "Unit Test Generator",
    description: "Automatically generates unit tests for your code.",
    users: "Developers, Test Engineers",
    icon: "23c48.svg",
  },
];

const projectTour = [
  {
    title: "This is your workspace control menu",
    description:
      "Click here to update settings, configure workspace options, view the cockpit, tickets or knowledge base.",
    target: "project-control",
  },
  {
    title: "This is your workspace control menu",
    description:
      "Use the Manage Workspace menu to access key workspace controls update settings, configure integrations, view cockpit analytics, schedule jobs, review agent history, manage knowledge and track tickets, all from one place.",
    target: "project-menu",
  },
  {
    title: "Start working on new project by creating a brand new code space",
    description: "",
    target: "project-code",
  },
  {
    title: "Explore our most used AI Agents",
    description:
      "Agents help accelerate your tasks you can use them when ready.",
    target: "project-agents",
  },
];

function ProjectTourCard({
  step,
  onNext,
  onSkip,
}: {
  step: number;
  onNext: () => void;
  onSkip: () => void;
}) {
  const item = projectTour[step];
  return (
    <aside className={`tour-card ${item.target}`}>
      <span className="tour-arrow" />
      <div className="tour-body">
        <h2>{item.title}</h2>
        {item.description && <p>{item.description}</p>}
        <div className="tour-actions end">
          <button className="secondary" onClick={onSkip}>
            Skip&nbsp; »
          </button>
          <button className="primary" onClick={onNext}>
            Next&nbsp; ›
          </button>
        </div>
      </div>
    </aside>
  );
}

function ProjectContent({
  intro,
  step,
  menuOpen,
  onMenuToggle,
  onIntroDone,
  onNext,
  onSkip,
}: {
  intro: boolean;
  step: number | null;
  menuOpen: boolean;
  onMenuToggle: () => void;
  onIntroDone: () => void;
  onNext: () => void;
  onSkip: () => void;
}) {
  return (
    <>
      <div className="project-subheader">
        <button className="workspace-pill" type="button">
          <img src={`${assets}/33049.svg`} alt="" />
          My Workspace
        </button>
        <div className="manage-wrap">
          <button
            className={`manage-workspace ${step === 0 ? "focused" : ""}`}
            type="button"
            onClick={onMenuToggle}
          >
            Manage {step === 0 ? "this " : ""}Workspace
            <img
              className={menuOpen ? "chevron-open" : ""}
              src={`${assets}/47416.svg`}
              alt=""
            />
          </button>
          {menuOpen && (
            <div className={`workspace-menu ${step === 1 ? "menu-focused" : ""}`}>
              {workspaceMenuItems.map(([label, icon]) => (
                <button type="button" key={label}>
                  <img src={`${assets}/${icon}`} alt="" />
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <section className="project-content">
        <div className="project-intro">
          <h1>Data Pipeline Development</h1>
          <p>
            A workspace for designing, testing, and deploying data pipelines that handle
            <br />
            ETL (Extract, Transform, Load) processes for large datasets.
          </p>
        </div>
        <div className="project-prompt">
          <img src={`${assets}/259ae.svg`} alt="" />
          <span>Search content or ask a question</span>
          <small>Model 5.5</small>
          <img src={`${assets}/32424.svg`} alt="" />
          <img src={`${assets}/54cde.svg`} alt="" />
          <button type="button">
            <img src={`${assets}/de9de.svg`} alt="Send" />
          </button>
        </div>

        <section className="project-section">
          <h2>Code Space</h2>
          <button
            className={`code-card ${step === 2 ? "project-card-focus" : ""}`}
            type="button"
          >
            <img src={`${assets}/52e62.svg`} alt="" />
            <span>Create New Code</span>
          </button>
        </section>

        <section className="project-section agent-section">
          <div className="agent-heading">
            <h2>Popular Agent Libary</h2>
            <button
              className={`agent-library-button ${
                step === 3 ? "agent-button-focus" : ""
              }`}
              type="button"
            >
              Explore the Agent Library
            </button>
          </div>
          <div className="agent-grid">
            {agents.map((agent) => (
              <article className="agent-card" key={agent.title}>
                <div className="agent-title">
                  <img src={`${assets}/${agent.icon}`} alt="" />
                  <h3>{agent.title}</h3>
                </div>
                <p>{agent.description}</p>
                <p className="agent-users">
                  <strong>Target Users</strong>: {agent.users}
                </p>
                <div className="agent-bottom">
                  <span className="agent-owner">
                    <span className="avatar">
                      <img
                        src={`${assets}/morgan-freeman-avatar.png`}
                        alt=""
                        style={{
                          top: "50%",
                          left: "50%",
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    </span>
                    Morgan Freeman
                  </span>
                  <button className="primary" type="button">
                    Start
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      {step !== null && !intro && (
        <ProjectTourCard step={step} onNext={onNext} onSkip={onSkip} />
      )}

      {intro && (
        <div className="intro-scrim">
          <section className="playground-intro">
            <div className="playground-image">
              <img src={`${assets}/68e9a.svg`} alt="" />
              <h2>New Workspace Playground</h2>
              <p>
                This is where you can create, manage and explore code spaces and ready
                made templates for your AI Agent projects.
              </p>
            </div>
            <div className="playground-actions">
              <button className="secondary" onClick={onIntroDone}>
                Skip&nbsp; »
              </button>
              <button className="primary" onClick={onIntroDone}>
                Next&nbsp; ›
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

function Workspace({ onBack }: { onBack: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const [tourStep, setTourStep] = useState<number | null>(0);
  const [profileOpen, setProfileOpen] = useState(false);
  const [created, setCreated] = useState(false);
  const [phase, setPhase] = useState<"workspace" | "intro" | "project">(
    "workspace",
  );
  const [projectStep, setProjectStep] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  function nextTour() {
    setTourStep((current) => {
      if (current === null) return null;
      if (current >= tour.length - 1) {
        setPhase("intro");
        return null;
      }
      return current + 1;
    });
  }

  function finishIntro() {
    setPhase("project");
    setProjectStep(0);
  }

  function nextProjectTour() {
    setProjectStep((current) => {
      if (current === null) return null;
      if (current === 0) setMenuOpen(true);
      if (current === 1) setMenuOpen(false);
      return current >= projectTour.length - 1 ? null : current + 1;
    });
  }

  return (
    <main className={`workspace ${expanded ? "sidebar-expanded" : ""}`}>
      <header className="app-header" style={{ zIndex: 10 }}>
        <img
          src={`${assets}/ca8af.svg`}
          className="header-logo"
          alt="Zensar"
          style={{ width: "95px" }}
        />
        <div className="header-controls">
          <button
            className={`organisation ${tourStep === 0 ? "focused" : ""}`}
            type="button"
          >
            Zensar <span>⌄</span>
          </button>
          <img className="notification" src={`${assets}/d3e65.svg`} alt="Notifications" />
          <button
            className={`profile ${tourStep === 1 ? "focused" : ""}`}
            onClick={() => setProfileOpen((open) => !open)}
            type="button"
          >
            <span>Morgan Freeman</span>
            <span className="avatar">
              <img
                src={`${assets}/morgan-freeman-avatar.png`}
                alt=""
                style={{
                  position: "absolute",
                  width: "fit-content",
                  height: "fit-content",
                  top: "0px",
                  right: "19px",
                  bottom: "-2px",
                  left: "0px",
                  margin: "auto",
                }}
              />
            </span>
          </button>
          {profileOpen && (
            <div className="profile-menu">
              <strong>Morgan Freeman</strong>
              <button type="button">Profile &amp; settings</button>
              <button type="button" onClick={onBack}>
                Sign out
              </button>
            </div>
          )}
        </div>
      </header>

      <aside className="sidebar">
        <button
          className="sidebar-toggle"
          onClick={() => setExpanded((value) => !value)}
          aria-label={expanded ? "Collapse sidebar" : "Open sidebar"}
          type="button"
        >
          <img src={`${assets}/zenseai-logo.png`} alt="ZenseAI" />
          {expanded && (
            <img
              className="collapse-icon"
              src={`${assets}/${phase === "workspace" ? "58afd.svg" : "2f886.svg"}`}
              alt=""
            />
          )}
        </button>
        <nav className={tourStep === 2 ? "panel-focus" : ""}>
          {navItems.map((item, index) => (
            <button
              className={`${item.active ? "active" : ""} ${
                tourStep === index + 3 ? "focused-round" : ""
              }`}
              key={item.label}
              type="button"
              title={!expanded ? item.label : undefined}
            >
              <img src={`${assets}/${item.icon}`} alt="" />
              {expanded && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {phase === "workspace" ? (
        <section className="workspace-content">
          <h1>My Workspace</h1>
          <div className="summary-header">
            <h2>Details</h2>
            <span className="summary-actions">
              <button className="outline" type="button">
                Refresh&nbsp; ↻
              </button>
              <button className="primary add-knowledge" type="button">
                Add knowledge&nbsp; ⊕
              </button>
            </span>
          </div>
          <button
            className={`create-card ${tourStep === 9 ? "card-focus" : ""}`}
            type="button"
            onClick={() => {
              setCreated(true);
              setTourStep(null);
              setPhase("intro");
            }}
          >
            <img src={`${assets}/52e62.svg`} alt="" />
            <span>{created ? "New Workspace" : "Create New Workspace"}</span>
            {created && <small>Workspace created locally</small>}
          </button>
        </section>
      ) : (
        <ProjectContent
          intro={phase === "intro"}
          step={projectStep}
          menuOpen={menuOpen}
          onMenuToggle={() => setMenuOpen((open) => !open)}
          onIntroDone={finishIntro}
          onNext={nextProjectTour}
          onSkip={() => {
            setMenuOpen(false);
            setProjectStep(null);
          }}
        />
      )}

      {phase === "workspace" && tourStep !== null && (
        <TourCard
          step={tourStep}
          onNext={nextTour}
          onBack={onBack}
          onSkip={() => setTourStep(null)}
        />
      )}
    </main>
  );
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return loggedIn ? (
    <Workspace onBack={() => setLoggedIn(false)} />
  ) : (
    <Login onLogin={() => setLoggedIn(true)} />
  );
}
